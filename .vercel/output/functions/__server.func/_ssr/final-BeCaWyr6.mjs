import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as confetti } from "../_libs/canvas-confetti.mjs";
import { P as PageWrapper, G as GlitchText, N as NeonButton } from "./NeonButton-CfP08izI.mjs";
import { b as getFinale, a as TypewriterText, h as resetSession } from "./api-ClMF9MBt.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function FinalPage() {
  const [data, setData] = reactExports.useState(null);
  const [phase, setPhase] = reactExports.useState(0);
  reactExports.useEffect(() => {
    getFinale().then(setData);
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 2400);
    const t3 = setTimeout(() => {
      setPhase(3);
      const fire = (particleRatio, opts) => confetti({
        origin: {
          y: 0.6
        },
        particleCount: Math.floor(200 * particleRatio),
        colors: ["#e8ff47", "#ff6b35", "#f0f0f0"],
        ...opts
      });
      fire(0.25, {
        spread: 26,
        startVelocity: 55
      });
      fire(0.2, {
        spread: 60
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.9
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45
      });
    }, 3600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);
  function playAgain() {
    resetSession();
    window.location.href = "/";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageWrapper, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col justify-center py-8", children: [
      phase >= 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(GlitchText, { text: data?.ending_title ?? "YOU FOUND IT.", intensity: "high", className: "text-4xl sm:text-5xl" }),
      phase >= 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fade-in mt-6 text-lg leading-relaxed text-[var(--text)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypewriterText, { text: data?.ending_message ?? "", speed: 28 }) }),
      phase >= 3 && data && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fade-in mt-8 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[var(--border)] bg-[var(--surface)] p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]", children: "// secret lore" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-mono text-sm italic leading-relaxed text-[var(--text)]", children: data.secret_lore })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "clues", value: data.stats.clues_completed }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "hints", value: data.stats.hints_used }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "minutes", value: data.stats.duration_minutes })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NeonButton, { onClick: playAgain, variant: "ghost", children: "start a new signal" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--text-muted)]", children: [
      "thank you for playing hunting time —",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-[var(--accent)] hover:underline", children: "loveable ai" })
    ] })
  ] });
}
function Stat({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[var(--border)] bg-[var(--surface)] p-3 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-[var(--accent)]", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]", children: label })
  ] });
}
export {
  FinalPage as component
};
