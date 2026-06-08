# Deck Project

This is a presentation deck built with `@deckio/deck-engine`.

## Purpose

Create and maintain slide-based presentations. Each project is a self-contained deck with its own theme, data, and slides.

## What to do

- Create, edit, and delete slides in `src/slides/`
- Manage project data in `src/data/`
- Register and reorder slides in `deck.config.js`

## What NOT to do

- Do not modify `App.jsx`, `main.jsx`, `vite.config.js`, `package.json`, or `index.html` — these are scaffolding files driven by the engine
- Do not modify anything in `node_modules/` or the engine itself
- Do not add dependencies without being asked

## Stack

- React 19, Vite, CSS Modules
- `@deckio/deck-engine` provides: `Slide`, `BottomBar`, `Navigation`, `SlideProvider`, `useSlides`, `Editable`, `GenericThankYouSlide`
- See `.github/instructions/` for detailed conventions on slide JSX, CSS modules, inline editing, and deck.config.js
- See `.github/skills/` for step-by-step workflows (e.g., adding a slide)

## Space hygiene

When asked to optimize, slim down, clean up, free space, prune, or shrink this deck, follow `.github/skills/deck-optimize-space/SKILL.md`. The skill is **dry-run / report first** and must **never silently delete** user-authored files. Candidates are classified as safe (regenerable: `dist/`, `.vite/`, caches, capture screenshots), review-required (unreferenced media, orphan slides/CSS, large videos — needs explicit approval), or never-delete (`deck.config.js`, `package.json`, `vite.config.js`, `index.html`, `App.jsx`, `main.jsx`, `.git/`, `.github/`, `src/data/`, custom themes). References are detected conservatively from `deck.config.js`, JSX/JS imports and strings, CSS `url(...)`, `src/data`, and `public/` basenames. On approval, files are moved to `.deckio-trash/<ISO-timestamp>/` with a `manifest.json` — never `unlink`ed directly.
