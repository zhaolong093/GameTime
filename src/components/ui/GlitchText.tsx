import { cn } from "../../lib/utils";

interface GlitchTextProps {
  text: string;
  intensity?: "low" | "medium" | "high";
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "div";
}

export function GlitchText({ text, intensity = "medium", className, as: Tag = "h1" }: GlitchTextProps) {
  return (
    <Tag
      className={cn(
        "glitch font-display font-extrabold uppercase tracking-tight",
        intensity === "high" && "intense",
        className,
      )}
      data-text={text}
    >
      {text}
    </Tag>
  );
}
