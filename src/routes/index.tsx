import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageWrapper } from "../components/layout/PageWrapper";
import { GlitchText } from "../components/ui/GlitchText";
import { NeonButton } from "../components/ui/NeonButton";
import { TypewriterText } from "../components/ui/TypewriterText";
import { getGameStatus, resetSession, startSessionIfNeeded } from "../lib/api";
import type { GameStatus } from "../lib/clue-types";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<GameStatus | null>(null);
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    getGameStatus().then(setStatus);
  }, []);

  async function begin() {
    setConnecting(true);
    resetSession();                  // wipe old session
    await new Promise(r => setTimeout(r, 50));  // let localStorage writes settle
    await startSessionIfNeeded();   // grant start token
    await new Promise(r => setTimeout(r, 1500)); // animation delay
    navigate({ to: "/clue/$id", params: { id: "1" } });
  }

  return (
    <PageWrapper>
      <div className="flex flex-1 flex-col">
        {/* Top status line */}
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
          <span className="blink-dot" />
          <span>
            {status?.active ? "signal detected" : "scanning…"}
          </span>
        </div>

        {/* Hero */}
        <div className="mt-16 flex flex-1 flex-col justify-center">
          <p className="font-accent text-xs uppercase tracking-[0.5em] text-[var(--accent)]">
            // hunting_time.exe
          </p>
          <GlitchText
            text="HUNTING TIME"
            intensity="high"
            className="mt-3 text-5xl leading-none sm:text-6xl"
          />
          <div className="mt-6 min-h-[3em] text-base text-[var(--text)]">
            <TypewriterText
              text="Something has been left behind. Can you find it?"
              delay={400}
              speed={30}
            />
          </div>

          {/* Terminal warning */}
          <div className="terminal danger mt-8">
            <div>&gt; WARNING: this experience uses real campus locations.</div>
            <div>&gt; You will be observed.</div>
            <div>&gt; Proceed only if you are ready.</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 space-y-4">
          <NeonButton onClick={begin} loading={connecting} pulse>
            {connecting ? "connecting" : "BEGIN HUNT"}
          </NeonButton>
        </div>
      </div>
    </PageWrapper>
  );
}
