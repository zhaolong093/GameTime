import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageWrapper, G as GlitchText, N as NeonButton } from "./NeonButton-CfP08izI.mjs";
import { e as getSecret, a as TypewriterText } from "./api-BSKyTLK_.mjs";
import { R as Route$2 } from "./router-B6xdZ1p-.mjs";
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-accent text-xs uppercase tracking-[0.5em] text-[var(--accent-warm)]", children: [
        "// classified · ",
        code
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlitchText, { text: "YOU WEREN'T SUPPOSED TO FIND THIS.", intensity: "medium", className: "mt-3 text-2xl leading-tight sm:text-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 border-2 border-[var(--accent)] bg-[var(--surface)] p-5 shadow-[0_0_30px_rgba(232,255,71,0.25)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]", children: "// achievement" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-xl font-bold uppercase text-[var(--text)]", children: data.achievement_name })
      ] }),
      data.secret_fragment && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-l-2 border-[var(--accent-warm)] bg-[var(--surface-2)] px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent-warm)]", children: "// fragment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-mono text-sm italic text-[var(--text)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypewriterText, { text: data.secret_fragment, speed: 28 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NeonButton, { onClick: () => window.location.href = "/", variant: "ghost", className: "mt-8", children: "keep moving" })
  ] });
}
export {
  Secret as component
};
