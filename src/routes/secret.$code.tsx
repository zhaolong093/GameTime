import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageWrapper } from "../components/layout/PageWrapper";
import { GlitchText } from "../components/ui/GlitchText";
import { NeonButton } from "../components/ui/NeonButton";
import { TypewriterText } from "../components/ui/TypewriterText";
import { getSecret } from "../lib/api";
import type { SecretPage } from "../lib/clue-types";
import { MOCK_CLUES } from "../lib/mock-clues";

export const Route = createFileRoute("/secret/$code")({
  component: Secret,
});

function Secret() {
  const { code } = Route.useParams();
  const [data, setData] = useState<SecretPage | null>(null);
  const scannedCode = code.trim().toUpperCase();
  const decoyMatch = /^DECOY[-_]?(.+)?$/.exec(scannedCode);
  const decoyId = decoyMatch?.[1]?.replace(/^0+/, "") || "unknown";
  const isDecoySignal = Boolean(decoyMatch);
  const scannedClue = Object.values(MOCK_CLUES).find(
    (clue) => clue.passcode?.trim().toUpperCase() === scannedCode,
  );

  useEffect(() => {
    getSecret(code).then(setData);
  }, [code]);

  if (!data) {
    return (
      <PageWrapper>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
          // accessing hidden file…
        </p>
      </PageWrapper>
    );
  }

  if (!data.valid) {
    return (
      <PageWrapper>
        <div className="mt-10 terminal danger">
          <div>&gt; access denied. this file does not exist.</div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="flex flex-1 flex-col justify-center">
        <p className="font-accent text-xs uppercase tracking-[0.5em] text-[var(--accent-warm)]">
          {isDecoySignal
            ? `// compromised signal · node ${decoyId}`
            : `// field signal · clue ${scannedClue ? String(scannedClue.id).padStart(2, "0") : "??"}`}
        </p>
        <GlitchText
          text={isDecoySignal ? "SIGNAL CORRUPTED" : "SIGNAL CONFIRMED"}
          intensity="medium"
          className={`mt-3 text-2xl leading-tight sm:text-3xl ${isDecoySignal ? "text-[var(--danger)]" : ""}`}
        />

        <div
          className={[
            "mt-8 border-2 bg-[var(--surface)] p-5",
            isDecoySignal
              ? "border-[var(--danger)] shadow-[0_0_30px_rgba(239,68,68,0.25)]"
              : "border-[var(--accent)] shadow-[0_0_30px_rgba(232,255,71,0.25)]",
          ].join(" ")}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">
            {isDecoySignal ? "// false password" : "// password found"}
          </p>
          <p className="mt-3 break-all font-display text-3xl font-bold uppercase tracking-[0.14em] text-[var(--text)] sm:text-4xl">
            {isDecoySignal ? "CORRUPTED" : scannedCode}
          </p>
          {!isDecoySignal && scannedClue && (
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
              use this code on clue {String(scannedClue.id).padStart(2, "0")}
            </p>
          )}
        </div>

        <div className="mt-6 border-l-2 border-[var(--accent-warm)] bg-[var(--surface-2)] px-4 py-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent-warm)]">
            // terminal message
          </p>
          <div className="mt-2 font-mono text-sm italic leading-7 text-[var(--text)]">
            <TypewriterText
              text={
                isDecoySignal
                  ? "This QR is not part of the unlock chain. Mark it as noise and keep hunting."
                  : scannedClue
                  ? `Location verified. Enter this password to unlock the next signal.`
                  : data.secret_fragment ?? "Unknown signal accepted. Record the code exactly as shown."
              }
              speed={28}
            />
          </div>
        </div>
      </div>

      <NeonButton
        onClick={() =>
          (window.location.href = isDecoySignal
            ? `/decoy/${decoyId}`
            : scannedClue
              ? `/clue/${scannedClue.id}`
              : "/")
        }
        variant="ghost"
        className="mt-8"
      >
        {isDecoySignal
          ? "inspect corrupted node"
          : scannedClue
            ? `return to clue ${String(scannedClue.id).padStart(2, "0")}`
            : "return to start"}
      </NeonButton>
    </PageWrapper>
  );
}
