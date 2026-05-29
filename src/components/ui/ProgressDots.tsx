import { cn } from "../../lib/utils";

interface ProgressDotsProps {
  total: number;
  current: number;
}

export function ProgressDots({ total, current }: ProgressDotsProps) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`Clue ${current} of ${total}`}>
      {Array.from({ length: total }).map((_, i) => {
        const idx = i + 1;
        const state = idx < current ? "done" : idx === current ? "current" : "future";
        return (
          <span
            key={i}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              state === "done" && "w-4 bg-[var(--accent)]",
              state === "current" && "w-6 bg-[var(--accent)] animate-pulse",
              state === "future" && "w-1.5 bg-[var(--border)]",
            )}
          />
        );
      })}
    </div>
  );
}
