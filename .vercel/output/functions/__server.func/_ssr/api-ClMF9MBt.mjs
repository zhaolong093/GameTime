import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./NeonButton-CfP08izI.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function TypewriterText({
  text,
  delay = 0,
  speed = 24,
  className,
  caret = true,
  onDone
}) {
  const [shown, setShown] = reactExports.useState("");
  const [done, setDone] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setShown("");
    setDone(false);
    let i = 0;
    let interval = null;
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("font-mono leading-relaxed", caret && !done && "caret", className), children: shown });
}
const TOTAL_CLUES = 10;
const MOCK_STATUS = {
  active: true,
  totalClues: TOTAL_CLUES,
  message: "The hunt is live."
};
const MOCK_CLUES = {
  1: {
    id: 1,
    title: "GO TOUCH GRASS",
    riddle: `The path is drawn by three symbols:
        One grows.
        One shelters.
        One ascends.

        Together they point the way,
        yet none hold the answer.

        When root, shade, and stone align,
        seek not what rises above you,
        but what remains below those who stop to rest.
      `,
    location_hint: "It's so easy, u guys dun need a hint for this one :P",
    flavor_text: "// dun give a fk about this clue, GOOONNN LUCK!! ",
    media_type: "image",
    media_url: "/images/clue-1-grass-layout.svg",
    passcode: "COFFEExCROISSANT"
  },
  2: {
    id: 2,
    title: "THE FORGOTTEN VALLEY",
    riddle: `Between two giants sleeps a wound unseen,
      where light falls thin and echoes intervene.
      One tower teaches numbers to rise,
      the other bends truth through mirrored skies.

      Yet neither guards what you now seek.
      Descend where forgotten pathways breathe,
      where footsteps vanish underneath.

      The valley was never built to be found —
      only crossed by those who look down.

      Search where the city hides its pause,
      between concrete veins and silent walls.

      There, beneath the space both towers ignore,
      the next truth waits beneath the floor.`,
    location_hint: `Not every path belongs to a building.
                    Some places exist only between them..`,
    flavor_text: "// observed: yes — flagged: no",
    media_type: "text",
    passcode: "SILENCETIME"
  },
  3: {
    id: 3,
    title: "yrerbiL",
    riddle: `The tower curves yet never breaks,
              guarding thoughts no silence shakes.
              Among the shelves where systems sleep,
              two fractured marks are hidden deep.

              One rests beside forgotten magic,
              where ancient knowledge turns cryptic.
              The other waits where coded minds
              stack their worlds in ordered lines.

              Alone, they mean almost nothing.
              Together, they reveal the path upward.`,
    location_hint: `DB-L6-6.3-P-CB21. The name is a clue, but not the only one.
                   VAV-CB02-06-14`,
    flavor_text: "// 404 — the library breathes",
    media_type: "text",
    passcode: "4682"
  },
  4: {
    id: 4,
    title: "THE FALSE FRONT",
    riddle: `The walls scream louder than the people here,
              layered with promises, events, and forgotten names. 

              Signals hide beside other signals,
              drowning safely inside the noise.
 
              Many will search what stands alone.
              Few will question what hides among copies.`,
    location_hint: `Blame this on DUY, He's know what he's doing. B1`,
    flavor_text: "// Macdonald's, but not really",
    media_type: "text",
    passcode: "+8P"
  },
  5: {
    id: 5,
    title: "THE GRAVEYARD OF JOURNEYS",
    riddle: `
    Some arrive with footsteps alone,
    others leave their journeys chained.

    Two circles carry silent stories,
    waiting patiently between departures.
    They do not run, yet they travel far.

    They do not rest, yet they stand still.
    Seek the place where motion is stored,
    and where forgotten journeys wait for their riders.`,
    location_hint: "COUNT TO 10??",
    flavor_text: "// timetable corrupted",
    media_type: "text",
    passcode: "UBERTIME"
  },
  6: {
    id: 6,
    title: "THE MAZE RUNNER",
    riddle: `
    The maze rewards those who climb,
    and punishes those who descend too soon.

    Many will seek the middle of the tower,
    believing truth prefers the light.

    Four walls above, the path appears clear.`,
    location_hint: "USE STAIRS OR ELEVATOR ONLY!! NO LIFT!! NO HIGHER THAN 5TH FLOOR!!",
    flavor_text: "// 500 — signal lost in transmission",
    media_type: "text",
    passcode: "CHIPPENDALE"
  },
  7: {
    id: 7,
    title: "COMEBACK WAS REAL!!!!",
    riddle: `
    The game draws every eye forward.
    To the court.
    To the hoop.
    To the place where victories are won.

    But not every prize waits at the destination.
    Some truths reveal themselves only to those
    who turn back.

    When the final whistle fades,
    leave the arena behind.
    Between each rise and fall,
    a narrow space watches silently.

    The next signal waits
    where the court can still be seen,
    but the game has already ended.
    `,
    location_hint: "Ask who watch last Wednesday match? They know where to go.",
    flavor_text: "// I was a good game tho, ngl",
    media_type: "text",
    passcode: "22-20"
  },
  8: {
    id: 8,
    title: "1000 YEARS LATER~~",
    riddle: `
    Seven worlds stand before you.
    Four remember the truth.
    Three remember nothing.
    `,
    location_hint: "Revel later :)) But it's contain the passcode to unlock this clue!!",
    flavor_text: "// In the Wellbeing Brainrot Zone",
    media_type: "text",
    passcode: "1360"
  },
  9: {
    id: 9,
    title: "THERE'S AN IMPOSTER AMONG U!",
    riddle: `Every 10 mintues, one of U will die and cannot use their ghost vote,
        Pick the right one to get to the final clues
        Information already provided at the beginning and during the HUNT!!`,
    location_hint: "1 IMP, 1 Scarlet Women, If you solve it, I will give u the QRCODE to unlock the hidden clue!!",
    flavor_text: "// COME BACK TO THE SPACE!! I told u this game is about memory. Not just finding clues, but remembering them.",
    media_type: "text",
    passcode: "WHOWASTHEIMP?"
  },
  10: {
    id: 10,
    title: "ONE PIECE",
    riddle: `10 clues, only 4 clues are real that unlock this clue,

            Two numbers dividied, yet never apart,
            One watches. One Follows`,
    location_hint: "I told u this game is about memory. Not just finding clues, but remembering them.",
    flavor_text: "// Earlier clues were never fully solved. It's a plus code ",
    media_type: "text",
    passcode: "3469"
  }
};
const MOCK_FINALE = {
  ending_title: "YOU CRACKED IT!!",
  ending_message: "You were never lost. You were always being guided here. The signal was you all along.",
  secret_lore: "Now let's go to broadway bar and have a drink together!! IT'S FRIDAY NIGHT BABY!!",
  stats: {
    clues_completed: 10,
    hints_used: 0,
    duration_minutes: 0
  }
};
const MOCK_UNLOCK = (id) => ({
  success: true,
  next_clue_id: id >= TOTAL_CLUES ? "final" : id + 1
});
const MOCK_SECRET = (code) => ({
  valid: true,
  achievement_name: `OBSERVER · ${code.toUpperCase()}`,
  secret_fragment: "The third letter of the last word leads home."
});
const __vite_import_meta_env__$1 = {};
const SECRET = __vite_import_meta_env__$1?.VITE_GAME_SECRET ?? "hunting-time-default-secret-2026";
async function hmac(data) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function verifyHmac(data, expected) {
  try {
    const actual = await hmac(data);
    if (actual.length !== expected.length) return false;
    let diff = 0;
    for (let i = 0; i < actual.length; i++) {
      diff |= actual.charCodeAt(i) ^ expected.charCodeAt(i);
    }
    return diff === 0;
  } catch {
    return false;
  }
}
function tokenPayload(clueId) {
  return `hunting-time:clue:${clueId}:unlocked`;
}
const STORAGE_KEY = "hunting-time:tokens";
function readTokenMap() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function writeTokenMap(map) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
  }
}
async function grantToken(id) {
  const token = await hmac(tokenPayload(id));
  const map = readTokenMap();
  map[id] = token;
  writeTokenMap(map);
  return token;
}
function getStoredToken(id) {
  return readTokenMap()[id];
}
async function canAccessClue(id) {
  const requiredId = id - 1;
  if (requiredId <= 0) {
    const stored2 = getStoredToken(0);
    if (!stored2) return false;
    return verifyHmac(tokenPayload(0), stored2);
  }
  const stored = getStoredToken(requiredId);
  if (!stored) return false;
  return verifyHmac(tokenPayload(requiredId), stored);
}
async function grantStartToken() {
  await grantToken(0);
}
async function submitPasscode(clueId, typed, correctPasscode) {
  const normalise = (s) => s.trim().toUpperCase();
  if (normalise(typed) !== normalise(correctPasscode)) return false;
  await grantToken(clueId);
  return true;
}
const progress = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  canAccessClue,
  getStoredToken,
  grantStartToken,
  grantToken,
  submitPasscode
}, Symbol.toStringTag, { value: "Module" }));
const __vite_import_meta_env__ = {};
const BASE = __vite_import_meta_env__?.VITE_API_BASE_URL;
async function tryFetch(path, init) {
  if (!BASE) return null;
  try {
    const res = await fetch(`${BASE}${path}`, {
      ...init,
      headers: { "Content-Type": "application/json", ...init?.headers || {} }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
async function getGameStatus() {
  return await tryFetch("/api/game/status") ?? MOCK_STATUS;
}
async function getClue(id) {
  const remote = await tryFetch(`/api/clue/${id}`);
  if (remote) return remote;
  return MOCK_CLUES[id] ?? null;
}
async function unlockClue(id) {
  return await tryFetch(`/api/clue/${id}/unlock`, { method: "POST", body: "{}" }) ?? MOCK_UNLOCK(id);
}
async function getFinale() {
  const remote = await tryFetch("/api/game/finale");
  if (remote) return remote;
  const stats = readLocalStats();
  return { ...MOCK_FINALE, stats: { ...MOCK_FINALE.stats, ...stats } };
}
async function getSecret(code) {
  return await tryFetch(`/api/secret/${code}`) ?? MOCK_SECRET(code);
}
const SESSION_KEY = "hunting-time:session";
function readSession() {
  if (typeof window === "undefined") {
    return { startedAt: Date.now(), cluesCompleted: 0, hintsUsed: 0 };
  }
  try {
    const raw = window.localStorage.getItem(SESSION_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
  }
  const fresh = { startedAt: Date.now(), cluesCompleted: 0, hintsUsed: 0 };
  try {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(fresh));
  } catch {
  }
  return fresh;
}
function writeSession(s) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(s));
  } catch {
  }
}
async function startSessionIfNeeded() {
  readSession();
  await grantStartToken();
}
function recordClueCompleted(id) {
  const s = readSession();
  if (id > s.cluesCompleted) s.cluesCompleted = id;
  writeSession(s);
}
function recordHintUsed() {
  const s = readSession();
  s.hintsUsed += 1;
  writeSession(s);
}
function resetSession() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(SESSION_KEY);
  } catch {
  }
}
function readLocalStats() {
  const s = readSession();
  return {
    clues_completed: s.cluesCompleted,
    hints_used: s.hintsUsed,
    duration_minutes: Math.max(1, Math.round((Date.now() - s.startedAt) / 6e4))
  };
}
export {
  MOCK_CLUES as M,
  TOTAL_CLUES as T,
  TypewriterText as a,
  getFinale as b,
  canAccessClue as c,
  getGameStatus as d,
  getSecret as e,
  recordHintUsed as f,
  getClue as g,
  resetSession as h,
  progress as p,
  recordClueCompleted as r,
  startSessionIfNeeded as s,
  unlockClue as u
};
