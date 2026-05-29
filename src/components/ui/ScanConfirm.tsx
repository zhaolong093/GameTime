import { useEffect, useState } from "react";
import { vibrate } from "../../lib/utils";

interface ScanConfirmProps {
  onDone: () => void;
}

export function ScanConfirm({ onDone }: ScanConfirmProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    vibrate([100, 60, 100]);
    const t = setTimeout(() => {
      setShow(false);
      onDone();
    }, 1500);
    return () => clearTimeout(t);
  }, [onDone]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--bg)]/85 backdrop-blur-sm">
      <div className="ripple" aria-hidden />
      <div className="relative z-10 text-center">
        <p className="font-accent text-xs uppercase tracking-[0.4em] text-[var(--accent)]">
          // qr signal received
        </p>
        <p className="mt-2 font-display text-2xl font-bold uppercase text-[var(--text)]">
          Decrypting…
        </p>
      </div>
    </div>
  );
}
