
## Hunting Time — Frontend Build Plan

The uploaded spec targets Next.js, but Lovable's web_app artifact uses React + Vite + TanStack Router. I'll faithfully port the spec to that stack — same routes, components, visuals, copy, and API contract. Backend is out of scope (per spec); the frontend will call `VITE_API_BASE_URL` and gracefully fall back to mock data so the experience is playable immediately.

### 1. Scaffold
- Create the project via `add_artifact` → `web_app:hunting-time`.

### 2. Design system (global)
- Install fonts: Syne (display), IBM Plex Mono (body), Orbitron (accent).
- `index.css` + Tailwind tokens with the exact palette from the spec (bg `#0a0a0f`, accent `#e8ff47`, warm `#ff6b35`, etc.).
- Global effects: scanline overlay, animated noise grain, glitch keyframes, neon-pulse, screen-shake, typewriter caret.

### 3. Routes
| Route | Purpose |
|---|---|
| `/` | Landing — SIGNAL DETECTED, glitched title, terminal warning, BEGIN HUNT |
| `/clue/:id` | Core clue page with `?scan=true` ripple, hint reveal, "I FOUND IT" |
| `/final` | Cinematic ending, lore, stats, confetti |
| `/decoy/:id` | Corrupted red-glitch fake clue with hidden easter egg |
| `/secret/:code` | Hidden achievement page |

### 4. Components
`GlitchText`, `TypewriterText`, `NeonButton`, `ClueCard`, `HintReveal`, `ScanConfirm`, `ProgressDots`, `AmbientBackground`, `ScanlineOverlay`, `PageWrapper`, `BottomNav`.

### 5. Data layer
- `lib/clue-types.ts` — exact interfaces from spec (`Clue`, `GameStatus`, `UnlockResponse`, `FinaleData`, `SecretPage`).
- `lib/api.ts` — fetch wrappers against `VITE_API_BASE_URL`; on failure return mock clues (10-clue sample hunt) so the game is fully playable without backend.
- `hooks/useClue.ts`, `hooks/useHint.ts`.

### 6. Mobile UX
- 48px tap targets, 16px+ body, safe-area padding, `navigator.vibrate` on scan confirm, no horizontal scroll.

### 7. Copy
- All UI copy in the mysterious/warm/ominous voice from the spec's examples.

### Technical notes
- Stack swap: Next.js App Router → TanStack Start file routes; `next/link` → `<Link>`; `NEXT_PUBLIC_*` → `VITE_*` env vars. All routes, props, and API shapes preserved.
- No backend work — API contract documented in `lib/api.ts` for the backend dev.
- Confetti via `canvas-confetti`.

```text
src/
├── routes/
│   ├── index.tsx           (landing)
│   ├── clue.$id.tsx
│   ├── final.tsx
│   ├── decoy.$id.tsx
│   └── secret.$code.tsx
├── components/ui/...
├── components/effects/...
├── lib/{api,clue-types,utils,mock-clues}.ts
└── hooks/{useClue,useHint}.ts
```
