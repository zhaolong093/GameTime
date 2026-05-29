import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { P as PageWrapper, N as NeonButton, c as cn, G as GlitchText } from "./NeonButton-CfP08izI.mjs";
import { c as canAccessClue, T as TOTAL_CLUES, a as TypewriterText, r as recordClueCompleted, u as unlockClue, f as recordHintUsed, g as getClue } from "./api-BSKyTLK_.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { b as Route } from "./router-B6xdZ1p-.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/zod.mjs";
function ClueCard({ clue }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fade-in space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GlitchText, { text: clue.title, intensity: "medium", className: "text-3xl sm:text-4xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]", children: "// transmission" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 whitespace-pre-line text-base leading-8 tracking-normal text-[var(--text)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypewriterText, { text: clue.riddle, speed: 22, delay: 300 }) })
    ] }),
    clue.media_type === "image" && clue.media_url && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: clue.media_url,
        alt: "",
        className: "w-full border border-[var(--border)]",
        loading: "lazy"
      }
    ),
    clue.media_type === "audio" && clue.media_url && /* @__PURE__ */ jsxRuntimeExports.jsx("audio", { controls: true, src: clue.media_url, className: "w-full" }),
    clue.flavor_text && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs italic text-[var(--text-muted)]", children: clue.flavor_text })
  ] });
}
function HintReveal({ hint, label = "REVEAL HINT" }) {
  const [open, setOpen] = reactExports.useState(false);
  function handleClick() {
    if (!open) recordHintUsed();
    setOpen((v) => !v);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: handleClick,
        className: "flex w-full items-center justify-between border border-[var(--border)] bg-[var(--surface)] px-4 py-3 font-mono text-sm uppercase tracking-wider text-[var(--text-muted)] transition-colors hover:border-[var(--accent-warm)] hover:text-[var(--accent-warm)]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: open ? "// hide hint" : `> ${label}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: open ? "−" : "+" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "slide-down mt-2 border-l-2 border-[var(--accent-warm)] bg-[var(--surface-2)] px-4 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-wider text-[var(--accent-warm)]", children: "// hints are for the brave. and the lost." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-mono text-sm italic text-[var(--text)]", children: hint })
    ] })
  ] });
}
function ProgressDots({ total, current }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", "aria-label": `Clue ${current} of ${total}`, children: Array.from({ length: total }).map((_, i) => {
    const idx = i + 1;
    const state = idx < current ? "done" : idx === current ? "current" : "future";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: cn(
          "h-1.5 rounded-full transition-all duration-300",
          state === "done" && "w-4 bg-[var(--accent)]",
          state === "current" && "w-6 bg-[var(--accent)] animate-pulse",
          state === "future" && "w-1.5 bg-[var(--border)]"
        )
      },
      i
    );
  }) });
}
function useClue(id) {
  return useQuery({
    queryKey: ["clue", id],
    queryFn: () => getClue(id),
    staleTime: 6e4
  });
}
function CluePage() {
  const {
    id
  } = Route.useParams();
  Route.useSearch();
  const navigate = useNavigate();
  const clueId = reactExports.useMemo(() => Number(id), [id]);
  const {
    data: clue,
    isLoading
  } = useClue(clueId);
  const [access, setAccess] = reactExports.useState("checking");
  const [unlocking, setUnlocking] = reactExports.useState(false);
  const [shake, setShake] = reactExports.useState(false);
  const [passcode, setPasscode] = reactExports.useState("");
  const [passcodeError, setPasscodeError] = reactExports.useState(false);
  const [passcodeSubmitting, setPasscodeSubmitting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setPasscode("");
    setPasscodeError(false);
    setPasscodeSubmitting(false);
  }, [clueId]);
  reactExports.useEffect(() => {
    if (Number.isNaN(clueId) || clueId < 1) {
      setAccess("denied");
      return;
    }
    canAccessClue(clueId).then((allowed) => {
      setAccess(allowed ? "allowed" : "denied");
    });
  }, [clueId]);
  if (access === "checking") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-muted)] animate-pulse", children: "// verifying signal…" }) }) });
  }
  if (access === "denied") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PageWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LockedSignal, { clueId }) });
  }
  async function handlePasscode() {
    if (!clue || !clue.passcode || passcodeSubmitting) return;
    setPasscodeSubmitting(true);
    const {
      submitPasscode
    } = await import("./api-BSKyTLK_.mjs").then((n) => n.p);
    const ok = await submitPasscode(clue.id, passcode, clue.passcode);
    if (!ok) {
      setPasscodeError(true);
      setPasscodeSubmitting(false);
      if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
      return;
    }
    recordClueCompleted(clue.id);
    const res = await unlockClue(clue.id);
    setTimeout(() => {
      if (res.next_clue_id === "final") {
        navigate({
          to: "/final"
        });
      } else {
        navigate({
          to: "/clue/$id",
          params: {
            id: String(res.next_clue_id)
          }
        });
      }
    }, 600);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageWrapper, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--text-muted)]", children: [
        "◈ clue ",
        String(clueId).padStart(2, "0"),
        " / ",
        String(TOTAL_CLUES).padStart(2, "0")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressDots, { total: TOTAL_CLUES, current: clueId })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 h-px w-full bg-[var(--border)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-1 ${shake ? "shake" : ""}`, children: isLoading || !clue ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingState, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClueCard, { clue }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HintReveal, { hint: clue.location_hint })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-dashed border-[var(--border)] pt-4 text-center font-mono text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]", children: "enter the code found at the location" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: passcode, onChange: (e) => {
          setPasscode(e.target.value);
          setPasscodeError(false);
        }, onKeyDown: (e) => {
          if (e.key === "Enter") handlePasscode();
        }, placeholder: "_ _ _ _ _", maxLength: 20, className: ["flex-1 bg-[var(--surface)] border px-4 py-3", "font-mono text-sm uppercase tracking-[0.3em] text-[var(--text)]", "placeholder:text-[var(--text-muted)] outline-none", "transition-colors duration-200", passcodeError ? "border-[var(--danger)] text-[var(--danger)]" : "border-[var(--border)] focus:border-[var(--accent)]"].join(" "), autoComplete: "off", autoCorrect: "off", spellCheck: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NeonButton, { onClick: handlePasscode, loading: passcodeSubmitting, children: "↵" })
      ] }),
      passcodeError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.25em] text-[var(--danger)] animate-pulse", children: "> signal rejected. try again." })
    ] })
  ] });
}
function LoadingState() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-2/3 animate-pulse bg-[var(--surface-2)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 w-full animate-pulse bg-[var(--surface)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]", children: "// decrypting transmission…" })
  ] });
}
function LockedSignal({
  clueId
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "terminal danger", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "> ACCESS_DENIED: signal not yet earned" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "> clue_",
        String(clueId).padStart(2, "0"),
        " is locked."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "> you must solve the previous clue first." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[var(--text-muted)]", children: "> follow the hunt in order. no shortcuts." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NeonButton, { variant: "ghost", onClick: () => window.location.href = "/", children: "← return to start" }) })
  ] });
}
export {
  CluePage as component
};
