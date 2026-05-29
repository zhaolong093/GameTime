import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { PageWrapper } from "../components/layout/PageWrapper";
import { ClueCard } from "../components/ui/ClueCard";
import { HintReveal } from "../components/ui/HintReveal";
import { NeonButton } from "../components/ui/NeonButton";
import { ProgressDots } from "../components/ui/ProgressDots";
import { useClue } from "../hooks/useClue";
import { recordClueCompleted, unlockClue } from "../lib/api";
import { TOTAL_CLUES } from "../lib/mock-clues";
import { canAccessClue } from "../lib/progress";

const searchSchema = z.object({});

export const Route = createFileRoute("/clue/$id")({
  component: CluePage,
  validateSearch: searchSchema,
});

type AccessState = "checking" | "allowed" | "denied";

function CluePage() {
  const { id } = Route.useParams();
  const search = Route.useSearch();
  const navigate = useNavigate();
  const clueId = useMemo(() => Number(id), [id]);

  const { data: clue, isLoading } = useClue(clueId);

  const [access, setAccess] = useState<AccessState>("checking");
  const [unlocking, setUnlocking] = useState(false);
  const [shake, setShake] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [passcodeError, setPasscodeError] = useState(false);
  const [passcodeSubmitting, setPasscodeSubmitting] = useState(false);

  useEffect(() => {
    setPasscode("");
    setPasscodeError(false);
    setPasscodeSubmitting(false);
  }, [clueId]);
  // ── Access gate ──────────────────────────────────────────────────────
  useEffect(() => {
    if (Number.isNaN(clueId) || clueId < 1) {
      setAccess("denied");
      return;
    }
    canAccessClue(clueId).then((allowed) => {
      setAccess(allowed ? "allowed" : "denied");
    });
  }, [clueId]);

  // ── Render: still checking ───────────────────────────────────────────
  if (access === "checking") {
    return (
      <PageWrapper>
        <div className="flex flex-1 items-center justify-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-muted)] animate-pulse">
            // verifying signal…
          </p>
        </div>
      </PageWrapper>
    );
  }

  // ── Render: blocked ──────────────────────────────────────────────────
  if (access === "denied") {
    return (
      <PageWrapper>
        <LockedSignal clueId={clueId} />
      </PageWrapper>
    );
  }

  // ── Render: allowed ──────────────────────────────────────────────────

  async function handlePasscode() {
    if (!clue || !clue.passcode || passcodeSubmitting) return;
    setPasscodeSubmitting(true);
    const { submitPasscode } = await import("../lib/progress");
    const ok = await submitPasscode(clue.id, passcode, clue.passcode);
    if (!ok) {
      setPasscodeError(true);
      setPasscodeSubmitting(false);
      if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
      return;
    }
    recordClueCompleted(clue.id);
    const res = await unlockClue(clue.id);
    setTimeout(() => {
      if (res.next_clue_id === "final") {
        navigate({ to: "/final" });
      } else {
        navigate({ to: "/clue/$id", params: { id: String(res.next_clue_id) } });
      }
    }, 600);
  }

  return (
    <PageWrapper>
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
          ◈ clue {String(clueId).padStart(2, "0")} / {String(TOTAL_CLUES).padStart(2, "0")}
        </div>
        <ProgressDots total={TOTAL_CLUES} current={clueId} />
      </div>

      <div className="my-6 h-px w-full bg-[var(--border)]" />

      {/* Body */}
      <div className={`flex-1 ${shake ? "shake" : ""}`}>
        {isLoading || !clue ? (
          <LoadingState />
        ) : (
          <div className="space-y-6">
            <ClueCard clue={clue} />
            <HintReveal hint={clue.location_hint} />
          </div>
        )}
      </div>

      {/* Footer instruction + CTA */}
<div className="mt-8 space-y-3">
        <div className="border-t border-dashed border-[var(--border)] pt-4 text-center font-mono text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
          enter the code found at the location
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={passcode}
            onChange={(e) => { setPasscode(e.target.value); setPasscodeError(false); }}
            onKeyDown={(e) => { if (e.key === "Enter") handlePasscode(); }}
            placeholder="_ _ _ _ _"
            maxLength={20}
            className={[
              "flex-1 bg-[var(--surface)] border px-4 py-3",
              "font-mono text-sm uppercase tracking-[0.3em] text-[var(--text)]",
              "placeholder:text-[var(--text-muted)] outline-none",
              "transition-colors duration-200",
              passcodeError
                ? "border-[var(--danger)] text-[var(--danger)]"
                : "border-[var(--border)] focus:border-[var(--accent)]",
            ].join(" ")}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />
          <NeonButton onClick={handlePasscode} loading={passcodeSubmitting}>
            ↵
          </NeonButton>
        </div>
        {passcodeError && (
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--danger)] animate-pulse">
            &gt; signal rejected. try again.
          </p>
        )}
      </div>
    </PageWrapper>
  );
}

// ── Sub-components ────────────────────────────────────────────────────

function LoadingState() {
  return (
    <div className="space-y-4">
      <div className="h-10 w-2/3 animate-pulse bg-[var(--surface-2)]" />
      <div className="h-28 w-full animate-pulse bg-[var(--surface)]" />
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
        // decrypting transmission…
      </p>
    </div>
  );
}

function LockedSignal({ clueId }: { clueId: number }) {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div className="terminal danger">
        <div>&gt; ACCESS_DENIED: signal not yet earned</div>
        <div>&gt; clue_{String(clueId).padStart(2, "0")} is locked.</div>
        <div>&gt; you must solve the previous clue first.</div>
        <div className="mt-2 text-[var(--text-muted)]">
          &gt; follow the hunt in order. no shortcuts.
        </div>
      </div>
      <div className="mt-8">
        <NeonButton
          variant="ghost"
          onClick={() => (window.location.href = "/")}
        >
          ← return to start
        </NeonButton>
      </div>
    </div>
  );
}
