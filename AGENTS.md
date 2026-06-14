# AGENTS.md

Technical guidance for agents working in this repository.

## Stack

- Next.js App Router.
- Static export for GitHub Pages.
- TypeScript.
- SCSS modules.
- npm only.
- Node version is pinned in `.nvmrc`.

## Package Management

- Use npm.
- Keep `package-lock.json`.
- Do not add `yarn.lock`, `pnpm-lock.yaml`, or another package-manager lockfile.
- Use `npm ci` in CI.
- Use `npm install` only when intentionally changing dependencies.

## App Structure

- App entry points live under `src/app/`.
- Reusable page sections live under `src/components/sections/`.
- Static assets live under `public/`.
- Imported SVG/image assets live under `src/data/svg/` or the owning component folder.
- Homepage content should stay centralized in typed data modules, currently `src/data/index.ts`.
- Avoid hard-coding display copy inside components when it belongs to page content.

## Styling

- Use SCSS modules for component styles.
- Shared Sass tokens/mixins live under `src/sass/`.
- Use modern Sass `@use` / `@forward`; do not reintroduce deprecated `@import`.
- Prefer local/system fonts or checked-in font assets. Do not make builds depend on network-fetched fonts.
- Keep responsive layout constraints explicit with grid/flex/min/max sizing.

## Static Export

- `next.config.mjs` uses `output: "export"` and `distDir: "dist"`.
- GitHub Pages serves static files only, so avoid features that require a Next server.
- Do not add API routes, server actions, dynamic runtime behavior, or image optimization that conflicts with static export.
- `images.unoptimized` should remain enabled unless the deployment model changes.

## Deployment

Branch model:

- `main` is the source branch.
- `master` is the production branch served by GitHub Pages.

Workflow behavior:

- Pull requests run checks only.
- Pushes to `main` run checks, build the static site, and publish `dist` to `master`.
- Do not switch to GitHub Pages Actions publishing unless explicitly requested.

## Snake Game

- The Snake game is a standalone static artifact under `public/snake/`.
- Keep it as plain HTML/CSS/JS unless the user explicitly asks to rewrite it.
- Embed it with an iframe from the React page.
- Exclude standalone static game files from app linting if needed.

## Verification

Before committing meaningful changes, run:

- `npm run format:check`
- `npm run lint`
- `npm run build`

For local preview:

- `npm run dev`

Important local caveat:

- This repo uses `distDir: "dist"`.
- Avoid running `npm run build` while a dev server is active.
- If local preview returns 500 after a build, stop the dev server and restart it.
