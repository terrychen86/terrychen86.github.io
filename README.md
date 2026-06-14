# Terry Chen Portfolio

[![CI and Deploy](https://github.com/terrychen86/terrychen86.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/terrychen86/terrychen86.github.io/actions/workflows/ci.yml)

Personal portfolio site for `terrychen86.github.io`.

## Stack

- Next.js App Router
- React
- TypeScript
- SCSS modules
- Static export for GitHub Pages
- npm

## Local Development

Use the Node version pinned in `.nvmrc`.

```bash
npm install
npm run dev
```

The local site runs at:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev           # Start local dev server
npm run build         # Build static export into dist/
npm run lint          # Run ESLint
npm run format:check  # Check formatting
npm run format        # Format files
```

## Project Structure

```text
src/app/                  App Router entry points
src/components/sections/  Homepage sections
src/data/                 Typed homepage content/data
src/sass/                 Shared Sass tokens and mixins
public/                   Static files served directly
public/snake/             Standalone Snake game artifact
```

## Static Export

This site is configured for static hosting:

- `output: "export"`
- `distDir: "dist"`
- `images.unoptimized: true`

Avoid adding features that require a Next server runtime.

## Deployment

Branch model:

- `main` is the source branch.
- `master` is the GitHub Pages production branch.

GitHub Actions runs checks for pull requests. When `main` is updated, CI builds the static site and publishes `dist/` to `master`.
