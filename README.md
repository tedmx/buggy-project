# User Directory

A small **React + TypeScript + Vite** app. It loads a list of users and lets you
search, favorite, select/edit, and delete them. The data comes from a fake
in-memory API (`src/api/users.ts`) with an ~800 ms delay.

## Run it

If you're working in **StackBlitz**, the dev server starts on its own — just wait
for the preview to appear.

Otherwise, locally:

```bash
npm install
npm run dev
```

Open the URL it prints (default http://localhost:5173).

Other scripts:

```bash
npm run typecheck   # tsc --noEmit
npm run build       # typecheck + production build
```

## Your task

This code was written in a hurry and it is **not** in good shape. It contains
bugs of very different kinds:

- some are plain mistakes you will spot within seconds,
- some are subtle and only show up in the running app or in the browser console,
- some are React-specific (state, effects, keys, rendering),
- and TypeScript is unhappy about a few things as well.

Find what is wrong and fix it.

For each thing you change, be ready to explain:

1. **what** is wrong,
2. **why** it happens (the underlying mechanism), and
3. **what could go wrong in production** if it were left as is.

### Ground rules

- Work with the existing code — don't rewrite the app from scratch.
- Prefer a correct, idiomatic fix over a superficial one that just hides the
  symptom.
- You may add types where they help. Don't silence problems with `any`,
  `@ts-ignore`, or by deleting code that looks inconvenient.
- The app is expected to build and run even while broken — open it and use it.
- If you find something that is technically fine, it's fine to leave it.

Take your time and think out loud as you go.
