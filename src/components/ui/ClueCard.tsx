import type { Clue } from "../../lib/clue-types";
import { GlitchText } from "./GlitchText";
import { TypewriterText } from "./TypewriterText";

interface ClueCardProps {
  clue: Clue;
}

export function ClueCard({ clue }: ClueCardProps) {
  return (
    <div className="fade-in space-y-5">
      <GlitchText text={clue.title} intensity="medium" className="text-3xl sm:text-4xl" />

      <div className="border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">
          // transmission
        </p>
          <div className="mt-3 whitespace-pre-line text-base leading-8 tracking-normal text-[var(--text)]">
            <TypewriterText text={clue.riddle} speed={22} delay={300} />
          </div>
      </div>

      {clue.media_type === "image" && clue.media_url && (
        <img
          src={clue.media_url}
          alt=""
          className="w-full border border-[var(--border)]"
          loading="lazy"
        />
      )}
      {clue.media_type === "audio" && clue.media_url && (
        <audio controls src={clue.media_url} className="w-full" />
      )}

      {clue.flavor_text && (
        <p className="font-mono text-xs italic text-[var(--text-muted)]">{clue.flavor_text}</p>
      )}
    </div>
  );
}
