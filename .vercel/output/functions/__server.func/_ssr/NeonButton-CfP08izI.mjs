import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
function AmbientBackground() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb orb-1", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "orb orb-2", "aria-hidden": true })
  ] });
}
function ScanlineOverlay() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scanlines", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "noise", "aria-hidden": true })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function PageWrapper({ children, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative min-h-[100dvh] w-full overflow-hidden", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AmbientBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScanlineOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-lg flex-col px-5 py-8", children })
  ] });
}
function GlitchText({ text, intensity = "medium", className, as: Tag = "h1" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      className: cn(
        "glitch font-display font-extrabold uppercase tracking-tight",
        intensity === "high" && "intense",
        className
      ),
      "data-text": text,
      children: text
    }
  );
}
function NeonButton({
  children,
  variant = "primary",
  loading = false,
  pulse = false,
  className,
  disabled,
  ...rest
}) {
  const base = "relative inline-flex min-h-[52px] w-full items-center justify-center gap-2 px-6 py-3 font-display text-base font-bold uppercase tracking-[0.15em] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none";
  const styles = {
    primary: "bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent)] hover:shadow-[0_0_30px_var(--accent)] active:translate-y-[1px]",
    danger: "bg-transparent text-[var(--danger)] border border-[var(--danger)] hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]",
    ghost: "bg-transparent text-[var(--text)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      ...rest,
      disabled: disabled || loading,
      className: cn(base, styles[variant], pulse && variant === "primary" && "neon-pulse", className),
      children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, { delay: "0s" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, { delay: "0.15s" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dot, { delay: "0.3s" })
      ] }) : children
    }
  );
}
function Dot({ delay }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "inline-block h-2 w-2 rounded-full bg-current",
      style: { animation: `blink 1s ease-in-out ${delay} infinite` }
    }
  );
}
export {
  GlitchText as G,
  NeonButton as N,
  PageWrapper as P,
  cn as c
};
