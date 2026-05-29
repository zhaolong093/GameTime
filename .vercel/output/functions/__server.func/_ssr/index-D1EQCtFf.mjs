import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { P as PageWrapper, G as GlitchText, N as NeonButton } from "./NeonButton-CfP08izI.mjs";
import { d as getGameStatus, a as TypewriterText, h as resetSession, s as startSessionIfNeeded } from "./api-BSKyTLK_.mjs";
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
function Landing() {
  const navigate = useNavigate();
  const [status, setStatus] = reactExports.useState(null);
  const [connecting, setConnecting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    getGameStatus().then(setStatus);
  }, []);
  async function begin() {
    setConnecting(true);
    resetSession();
    await new Promise((r) => setTimeout(r, 50));
    await startSessionIfNeeded();
    await new Promise((r) => setTimeout(r, 1500));
    navigate({
      to: "/clue/$id",
      params: {
        id: "1"
      }
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink-dot" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: status?.active ? "signal detected" : "scanning…" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-1 flex-col justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-xs uppercase tracking-[0.5em] text-[var(--accent)]", children: "// hunting_time.exe" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlitchText, { text: "HUNTING TIME", intensity: "high", className: "mt-3 text-5xl leading-none sm:text-6xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 min-h-[3em] text-base text-[var(--text)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypewriterText, { text: "Something has been left behind. Can you find it?", delay: 400, speed: 30 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "terminal danger mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "> WARNING: this experience uses real campus locations." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "> You will be observed." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "> Proceed only if you are ready." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NeonButton, { onClick: begin, loading: connecting, pulse: true, children: connecting ? "connecting" : "BEGIN HUNT" }) })
  ] }) });
}
export {
  Landing as component
};
