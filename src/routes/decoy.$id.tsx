import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageWrapper } from "../components/layout/PageWrapper";
import { GlitchText } from "../components/ui/GlitchText";
import { NeonButton } from "../components/ui/NeonButton";

export const Route = createFileRoute("/decoy/$id")({
  component: Decoy,
});

function Decoy() {
  const { id } = Route.useParams();
  const [shake, setShake] = useState(true);
  const [foundEgg, setFoundEgg] = useState(false);

  setTimeout(() => setShake(false), 400);

  return (
    <PageWrapper>
      <div className={`flex flex-1 flex-col ${shake ? "shake" : ""}`}>
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[var(--danger)]">
          <span
            className="inline-block h-2 w-2 rounded-full bg-[var(--danger)]"
            style={{ boxShadow: "0 0 10px var(--danger)", animation: "blink 0.6s infinite" }}
          />
          signal compromised · node {id}
        </div>

        <div className="mt-16 flex flex-1 flex-col justify-center">
          <GlitchText
            text="CORRUPTED"
            intensity="high"
            className="text-5xl text-[var(--danger)] sm:text-6xl"
          />

          <div className="terminal danger mt-8">
            <div>&gt; ERROR_404: signal corrupted</div>
            <div>&gt; this qr has been compromised.</div>
            <div>
              &gt; you are being{" "}
              <button
                onClick={() => setFoundEgg(true)}
                className="cursor-pointer text-[var(--accent)] underline decoration-dotted underline-offset-2"
              >
                watched
              </button>
              .
            </div>
            <div>&gt; turn back. or don&apos;t.</div>
          </div>

          {foundEgg && (
            <div className="fade-in mt-6 border border-[var(--accent)] bg-[var(--surface)] p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">
                // fragment unlocked
              </p>
              <p className="mt-2 font-mono text-sm italic text-[var(--text)]">
                &quot;omega remembers what you forgot. /secret/omega&quot;
              </p>
            </div>
          )}
        </div>

        <NeonButton onClick={() => (window.location.href = "/")} variant="ghost">
          return to surface
        </NeonButton>
      </div>
    </PageWrapper>
  );
}
