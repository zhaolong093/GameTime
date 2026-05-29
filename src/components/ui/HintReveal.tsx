import { useState } from "react";
import { recordHintUsed } from "../../lib/api";

interface HintRevealProps {
  hint: string;
  label?: string;
}

export function HintReveal({ hint, label = "REVEAL HINT" }: HintRevealProps) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    if (!open) recordHintUsed();
    setOpen((v) => !v);
  }

  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        className="flex w-full items-center justify-between border border-[var(--border)] bg-[var(--surface)] px-4 py-3 font-mono text-sm uppercase tracking-wider text-[var(--text-muted)] transition-colors hover:border-[var(--accent-warm)] hover:text-[var(--accent-warm)]"
      >
        <span>{open ? "// hide hint" : `> ${label}`}</span>
        <span className="text-xs">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="slide-down mt-2 border-l-2 border-[var(--accent-warm)] bg-[var(--surface-2)] px-4 py-3">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent-warm)]">
            // hints are for the brave. and the lost.
          </p>
          <p className="mt-2 font-mono text-sm italic text-[var(--text)]">{hint}</p>
        </div>
      )}
    </div>
  );
}
