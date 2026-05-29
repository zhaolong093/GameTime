import { createFileRoute, Link } from "@tanstack/react-router";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { PageWrapper } from "../components/layout/PageWrapper";
import { GlitchText } from "../components/ui/GlitchText";
import { NeonButton } from "../components/ui/NeonButton";
import { TypewriterText } from "../components/ui/TypewriterText";
import { getFinale, resetSession } from "../lib/api";
import type { FinaleData } from "../lib/clue-types";

export const Route = createFileRoute("/final")({
  component: FinalPage,
});

function FinalPage() {
  const [data, setData] = useState<FinaleData | null>(null);
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    getFinale().then(setData);
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 2400);
    const t3 = setTimeout(() => {
      setPhase(3);
      // Confetti burst — accent + warm colors
      const fire = (particleRatio: number, opts: confetti.Options) =>
        confetti({
          origin: { y: 0.6 },
          particleCount: Math.floor(200 * particleRatio),
          colors: ["#e8ff47", "#ff6b35", "#f0f0f0"],
          ...opts,
        });
      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.9 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    }, 3600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  function playAgain() {
    resetSession();
    window.location.href = "/";
  }

  return (
    <PageWrapper>
      <div className="flex flex-1 flex-col justify-center py-8">
        {phase >= 1 && (
          <GlitchText
            text={data?.ending_title ?? "YOU FOUND IT."}
            intensity="high"
            className="text-4xl sm:text-5xl"
          />
        )}

        {phase >= 2 && (
          <div className="fade-in mt-6 text-lg leading-relaxed text-[var(--text)]">
            <TypewriterText text={data?.ending_message ?? ""} speed={28} />
          </div>
        )}

        {phase >= 3 && data && (
          <div className="fade-in mt-8 space-y-6">
            <div className="border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">
                // secret lore
              </p>
              <p className="mt-3 font-mono text-sm italic leading-relaxed text-[var(--text)]">
                {data.secret_lore}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <Stat label="clues" value={data.stats.clues_completed} />
              <Stat label="hints" value={data.stats.hints_used} />
              <Stat label="minutes" value={data.stats.duration_minutes} />
            </div>

            <NeonButton onClick={playAgain} variant="ghost">
              start a new signal
            </NeonButton>
          </div>
        )}
      </div>

      <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--text-muted)]">
        thank you for playing hunting time —{" "}
        <Link to="/" className="text-[var(--accent)] hover:underline">
          loveable ai
        </Link>
      </p>
    </PageWrapper>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="border border-[var(--border)] bg-[var(--surface)] p-3 text-center">
      <div className="font-display text-2xl font-bold text-[var(--accent)]">{value}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
        {label}
      </div>
    </div>
  );
}
