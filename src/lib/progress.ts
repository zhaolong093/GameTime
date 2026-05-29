// src/lib/progress.ts  ← CREATE THIS FILE (it doesn't exist yet)

const SECRET =
  ((import.meta as any).env?.VITE_GAME_SECRET as string | undefined) ??
  "hunting-time-default-secret-2026";

async function hmac(data: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return btoa(String.fromCharCode(...new Uint8Array(sig)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function verifyHmac(data: string, expected: string): Promise<boolean> {
  try {
    const actual = await hmac(data);
    if (actual.length !== expected.length) return false;
    let diff = 0;
    for (let i = 0; i < actual.length; i++) {
      diff |= actual.charCodeAt(i) ^ expected.charCodeAt(i);
    }
    return diff === 0;
  } catch {
    return false;
  }
}

function tokenPayload(clueId: number): string {
  return `hunting-time:clue:${clueId}:unlocked`;
}

const STORAGE_KEY = "hunting-time:tokens";

function readTokenMap(): Record<number, string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<number, string>) : {};
  } catch {
    return {};
  }
}

function writeTokenMap(map: Record<number, string>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch { /* ignore */ }
}

export async function grantToken(id: number): Promise<string> {
  const token = await hmac(tokenPayload(id));
  const map = readTokenMap();
  map[id] = token;
  writeTokenMap(map);
  return token;
}

export function getStoredToken(id: number): string | undefined {
  return readTokenMap()[id];
}

export async function canAccessClue(id: number): Promise<boolean> {
  const requiredId = id - 1;
  if (requiredId <= 0) {
    const stored = getStoredToken(0);
    if (!stored) return false;
    return verifyHmac(tokenPayload(0), stored);
  }
  const stored = getStoredToken(requiredId);
  if (!stored) return false;
  return verifyHmac(tokenPayload(requiredId), stored);
}

export async function grantStartToken(): Promise<void> {
  await grantToken(0);
}

export async function submitPasscode(
  clueId: number,
  typed: string,
  correctPasscode: string,
): Promise<boolean> {
  const normalise = (s: string) => s.trim().toUpperCase();
  if (normalise(typed) !== normalise(correctPasscode)) return false;
  await grantToken(clueId);
  return true;
}

export function clearAllTokens() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch { /* ignore */ }
}

export async function canAccessFinal(totalClues: number): Promise<boolean> {
  const stored = getStoredToken(totalClues);
  if (stored) return verifyHmac(tokenPayload(totalClues), stored);
  return false;
}