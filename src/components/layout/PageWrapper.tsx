import type { ReactNode } from "react";
import { AmbientBackground } from "../ui/AmbientBackground";
import { ScanlineOverlay } from "../effects/ScanlineOverlay";
import { cn } from "../../lib/utils";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div className={cn("relative min-h-[100dvh] w-full overflow-hidden", className)}>
      <AmbientBackground />
      <ScanlineOverlay />
      <main className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-lg flex-col px-5 py-8">
        {children}
      </main>
    </div>
  );
}
