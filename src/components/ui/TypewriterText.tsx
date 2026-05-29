import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  caret?: boolean;
  onDone?: () => void;
}

export function TypewriterText({
  text,
  delay = 0,
  speed = 24,
  className,
  caret = true,
  onDone,
}: TypewriterTextProps) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setShown("");
    setDone(false);
    let i = 0;
    let interval: ReturnType<typeof setInterval> | null = null;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          if (interval) clearInterval(interval);
          setDone(true);
          onDone?.();
        }
      }, speed);
    }, delay);
    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [text, delay, speed, onDone]);

  return (
    <span className={cn("font-mono leading-relaxed", caret && !done && "caret", className)}>
      {shown}
    </span>
  );
}
