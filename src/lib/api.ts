// =====================================================================
// Hunting Time — Frontend API client
// =====================================================================
// Backend is provisioned separately. The frontend calls these endpoints
// against VITE_API_BASE_URL. If unreachable (or unset), we fall back to
// the mock hunt so the experience is always playable.
//
// Contract (backend dev — implement these):
//   GET  /api/game/status          -> GameStatus
//   GET  /api/clue/:id             -> Clue
//   POST /api/clue/:id/unlock      -> UnlockResponse
//   GET  /api/game/finale          -> FinaleData
//   GET  /api/secret/:code         -> SecretPage
// =====================================================================

import type { Clue, FinaleData, GameStatus, SecretPage, UnlockResponse } from "./clue-types";
import {
  MOCK_CLUES,
  MOCK_FINALE,
  MOCK_SECRET,
  MOCK_STATUS,
  MOCK_UNLOCK,
} from "./mock-clues";
import { grantStartToken } from "./progress";

const BASE = (import.meta as any).env?.VITE_API_BASE_URL as string | undefined;

async function tryFetch<T>(path: string, init?: RequestInit): Promise<T | null> {
  if (!BASE) return null;
  try {
    const res = await fetch(`${BASE}${path}`, {
      ...init,
      headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getGameStatus(): Promise<GameStatus> {
  return (await tryFetch<GameStatus>("/api/game/status")) ?? MOCK_STATUS;
}

export async function getClue(id: number): Promise<Clue | null> {
  const remote = await tryFetch<Clue>(`/api/clue/${id}`);
  if (remote) return remote;
  return MOCK_CLUES[id] ?? null;
}

export async function unlockClue(id: number): Promise<UnlockResponse> {
  return (
    (await tryFetch<UnlockResponse>(`/api/clue/${id}/unlock`, { method: "POST", body: "{}" })) ??
    MOCK_UNLOCK(id)
  );
}

export async function getFinale(): Promise<FinaleData> {
  const remote = await tryFetch<FinaleData>("/api/game/finale");
  if (remote) return remote;
  // Pull live stats from local session
  const stats = readLocalStats();
  return { ...MOCK_FINALE, stats: { ...MOCK_FINALE.stats, ...stats } };
}

export async function getSecret(code: string): Promise<SecretPage> {
  return (await tryFetch<SecretPage>(`/api/secret/${code}`)) ?? MOCK_SECRET(code);
}

// ---------------- Local session helpers (mock-mode only) ----------------

const SESSION_KEY = "hunting-time:session";

interface LocalSession {
  startedAt: number;
  cluesCompleted: number;
  hintsUsed: number;
}

function readSession(): LocalSession {
  if (typeof window === "undefined") {
    return { startedAt: Date.now(), cluesCompleted: 0, hintsUsed: 0 };
  }
  try {
    const raw = window.localStorage.getItem(SESSION_KEY);
    if (raw) return JSON.parse(raw) as LocalSession;
  } catch {
    /* ignore */
  }
  const fresh: LocalSession = { startedAt: Date.now(), cluesCompleted: 0, hintsUsed: 0 };
  try {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(fresh));
  } catch {
    /* ignore */
  }
  return fresh;
}

function writeSession(s: LocalSession) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}

export async function startSessionIfNeeded() {
  readSession();
  await grantStartToken();
}

export function recordClueCompleted(id: number) {
  const s = readSession();
  if (id > s.cluesCompleted) s.cluesCompleted = id;
  writeSession(s);
}

export function recordHintUsed() {
  const s = readSession();
  s.hintsUsed += 1;
  writeSession(s);
}

export function resetSession() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(SESSION_KEY);
  } catch {
    /* ignore */
  }
}

function readLocalStats() {
  const s = readSession();
  return {
    clues_completed: s.cluesCompleted,
    hints_used: s.hintsUsed,
    duration_minutes: Math.max(1, Math.round((Date.now() - s.startedAt) / 60000)),
  };
}
