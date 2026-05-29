import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageWrapper, G as GlitchText, N as NeonButton } from "./NeonButton-CfP08izI.mjs";
import { a as Route$1 } from "./router-B6xdZ1p-.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/zod.mjs";
function Decoy() {
  const {
    id
  } = Route$1.useParams();
  const [shake, setShake] = reactExports.useState(true);
  const [foundEgg, setFoundEgg] = reactExports.useState(false);
  setTimeout(() => setShake(false), 400);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-1 flex-col ${shake ? "shake" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[var(--danger)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-2 w-2 rounded-full bg-[var(--danger)]", style: {
        boxShadow: "0 0 10px var(--danger)",
        animation: "blink 0.6s infinite"
      } }),
      "signal compromised · node ",
      id
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-1 flex-col justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlitchText, { text: "CORRUPTED", intensity: "high", className: "text-5xl text-[var(--danger)] sm:text-6xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "terminal danger mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "> ERROR_404: signal corrupted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "> this qr has been compromised." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "> you are being",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFoundEgg(true), className: "cursor-pointer text-[var(--accent)] underline decoration-dotted underline-offset-2", children: "watched" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "> turn back. or don't." })
      ] }),
      foundEgg && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fade-in mt-6 border border-[var(--accent)] bg-[var(--surface)] p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]", children: "// fragment unlocked" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-mono text-sm italic text-[var(--text)]", children: '"omega remembers what you forgot. /secret/omega"' })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NeonButton, { onClick: () => window.location.href = "/", variant: "ghost", children: "return to surface" })
  ] }) });
}
export {
  Decoy as component
};
