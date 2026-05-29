import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "danger" | "ghost";
  loading?: boolean;
  pulse?: boolean;
}

export function NeonButton({
  children,
  variant = "primary",
  loading = false,
  pulse = false,
  className,
  disabled,
  ...rest
}: NeonButtonProps) {
  const base =
    "relative inline-flex min-h-[52px] w-full items-center justify-center gap-2 px-6 py-3 font-display text-base font-bold uppercase tracking-[0.15em] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none";

  const styles = {
    primary:
      "bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent)] hover:shadow-[0_0_30px_var(--accent)] active:translate-y-[1px]",
    danger:
      "bg-transparent text-[var(--danger)] border border-[var(--danger)] hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]",
    ghost:
      "bg-transparent text-[var(--text)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
  } as const;

  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={cn(base, styles[variant], pulse && variant === "primary" && "neon-pulse", className)}
    >
      {loading ? (
        <span className="flex items-center gap-1">
          <Dot delay="0s" />
          <Dot delay="0.15s" />
          <Dot delay="0.3s" />
        </span>
      ) : (
        children
      )}
    </button>
  );
}

function Dot({ delay }: { delay: string }) {
  return (
    <span
      className="inline-block h-2 w-2 rounded-full bg-current"
      style={{ animation: `blink 1s ease-in-out ${delay} infinite` }}
    />
  );
}
