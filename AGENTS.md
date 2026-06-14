# AGENTS.md

Guidance for agents working in this repository.

## Project Direction

This is Terry Chen's personal portfolio site.

- Keep the site simple, static, and portfolio-focused.
- Keep using Next.js with App Router.
- Build for GitHub Pages using Next static export.
- Use npm as the only package manager.
- Preserve the playful illustrated style from the existing site, but modernize the implementation and polish.
- Do not turn the site into a resume clone. LinkedIn can carry detailed work history.

## Current Product Framing

The site should quickly communicate:

- Terry is a Senior Software Engineer at Flexport in the Bay Area.
- He is currently building AI agents and harnesses for billing and finance workflows.
- He previously worked as a full-stack product engineer on client-facing products, owning work end to end.
- He is a product-minded engineer with strong UX sense and full-stack execution.
- He has personality outside work: Bay Area, food, travel, coffee, and gaming.

Detailed content can evolve later. Prefer a flexible typed content model over hard-coded copy in components.

## Design Direction

Keep the first refresh close to the current playful illustrated identity.

Preserve:

- Bright accent colors.
- Friendly illustrated/product-engineer feel.
- Icon/card motifs where they serve content.
- A playful Snake game section.

Improve:

- Typography and long-form readability.
- Responsive layout stability.
- Color balance and contrast.
- Section spacing without fragile negative-margin hacks.
- Accessibility, semantic HTML, and image alt text.

Avoid:

- A generic SaaS landing page feel.
- A formal work-history timeline for V1.
- Stale project links or project pages that are no longer maintained.
- Unnecessary framework migration.

## Snake Game

There is an existing Snake game on the old deployed `origin/master` branch:

- `snake/snake.html`
- `snake/css/styles.css`
- `snake/js/game.js`
- `snake/js/snake.js`

Preserve this as an artifact Terry built in school more than 10 years ago, before AI coding agents were part of his workflow.

Preferred implementation:

- Copy the standalone game into `public/snake/`.
- Embed it in the portfolio with an iframe.
- Keep the game logic mostly intact.
- Lightly adjust wrapper styling only as needed for responsiveness and visual fit.

Suggested section framing:

> Before Agents, There Was Snake
>
> I built this little Snake game in school more than 10 years ago, long before AI coding agents were part of my workflow. It still works, so I am keeping it here for anyone who wants a quick break.

## Deployment

The old site deployed generated output to `master`, likely via Travis. Do not continue that pattern for the refresh.

Preferred deployment:

- Keep `main` as the source branch.
- Use GitHub Actions for GitHub Pages.
- Configure GitHub Pages source to GitHub Actions.
- Build static output with Next.
- Deploy the generated `dist` directory using the official Pages artifact/deploy actions.

## Package Management

Use npm only.

- Remove `yarn.lock` during foundation cleanup.
- Keep and regenerate `package-lock.json`.
- Use `npm ci` in CI.
- Fix the current dependency mismatch before relying on lint/build checks.

Current known issue:

- `npm install` fails because `package.json` and `package-lock.json` are out of sync, and TypeScript ESLint versions conflict with the current Next ESLint config.

## Refactor Priorities

Foundation first:

- Upgrade to the latest practical Next.js version.
- Pin a modern Node version compatible with that Next version.
- Restore working install, lint, format, and build.
- Add GitHub Actions Pages deployment.

Then structure:

- Move display content into typed data/config.
- Remove unused assets/routes/types.
- Replace hard-coded intro cards with data-driven cards.
- Normalize image handling.
- Keep components scoped and simple.

Then design/content:

- Refresh hero, current focus, about/personality, Snake, and footer/contact sections.
- Defer deep content polish until Terry provides updated copy, links, resume, and photos.
