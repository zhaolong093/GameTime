import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageWrapper, G as GlitchText, N as NeonButton } from "./NeonButton-CfP08izI.mjs";
import { M as MOCK_CLUES, e as getSecret, a as TypewriterText } from "./api-ClMF9MBt.mjs";
import { R as Route$2 } from "./router-XX7qS63R.mjs";
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
function Secret() {
  const {
    code
  } = Route$2.useParams();
  const [data, setData] = reactExports.useState(null);
  const scannedCode = code.trim().toUpperCase();
  const decoyMatch = /^DECOY[-_]?(.+)?$/.exec(scannedCode);
  const decoyId = decoyMatch?.[1]?.replace(/^0+/, "") || "unknown";
  const isDecoySignal = Boolean(decoyMatch);
  const scannedClue = Object.values(MOCK_CLUES).find((clue) => clue.passcode?.trim().toUpperCase() === scannedCode);
  reactExports.useEffect(() => {
    getSecret(code).then(setData);
  }, [code]);
  if (!data) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]", children: "// accessing hidden file…" }) });
  }
  if (!data.valid) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 terminal danger", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "> access denied. this file does not exist." }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageWrapper, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-xs uppercase tracking-[0.5em] text-[var(--accent-warm)]", children: isDecoySignal ? `// compromised signal · node ${decoyId}` : `// field signal · clue ${scannedClue ? String(scannedClue.id).padStart(2, "0") : "??"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlitchText, { text: isDecoySignal ? "SIGNAL CORRUPTED" : "SIGNAL CONFIRMED", intensity: "medium", className: `mt-3 text-2xl leading-tight sm:text-3xl ${isDecoySignal ? "text-[var(--danger)]" : ""}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: ["mt-8 border-2 bg-[var(--surface)] p-5", isDecoySignal ? "border-[var(--danger)] shadow-[0_0_30px_rgba(239,68,68,0.25)]" : "border-[var(--accent)] shadow-[0_0_30px_rgba(232,255,71,0.25)]"].join(" "), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]", children: isDecoySignal ? "// false password" : "// password found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 break-all font-display text-3xl font-bold uppercase tracking-[0.14em] text-[var(--text)] sm:text-4xl", children: isDecoySignal ? "CORRUPTED" : scannedCode }),
        !isDecoySignal && scannedClue && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 font-mono text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]", children: [
          "use this code on clue ",
          String(scannedClue.id).padStart(2, "0")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-l-2 border-[var(--accent-warm)] bg-[var(--surface-2)] px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent-warm)]", children: "// terminal message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-mono text-sm italic leading-7 text-[var(--text)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypewriterText, { text: isDecoySignal ? "This QR is not part of the unlock chain. Mark it as noise and keep hunting." : scannedClue ? `Location verified. Enter this password to unlock the next signal.` : data.secret_fragment ?? "Unknown signal accepted. Record the code exactly as shown.", speed: 28 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NeonButton, { onClick: () => window.location.href = isDecoySignal ? `/decoy/${decoyId}` : scannedClue ? `/clue/${scannedClue.id}` : "/", variant: "ghost", className: "mt-8", children: isDecoySignal ? "inspect corrupted node" : scannedClue ? `return to clue ${String(scannedClue.id).padStart(2, "0")}` : "return to start" })
  ] });
}
export {
  Secret as component
};
