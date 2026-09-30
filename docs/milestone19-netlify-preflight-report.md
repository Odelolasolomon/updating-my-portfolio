# Milestone 19 Netlify Preflight Report

## Executive Summary

Milestone 19 is complete. The portfolio is a hybrid Next.js App Router application and should be deployed on Netlify using Netlify's current Next.js runtime/OpenNext adapter, not as a static export. No deployment, Netlify authentication, site creation, Git push, DNS change, or live-site modification was performed.

Safe repository changes were made for production readiness: minimal Netlify config, Node version pinning, environment-driven production URL support, robots, sitemap, explicit TypeScript casing checks, and deployment documentation.

Official Netlify references used:

- Netlify Next.js overview: https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/
- Netlify framework build settings overview: https://docs.netlify.com/frameworks/
- Netlify dependency / Node version docs: https://docs.netlify.com/build/configure-builds/manage-dependencies/
- Netlify available build software: https://docs.netlify.com/build/configure-builds/available-software-at-build-time/

## Netlify Compatibility

The project is Netlify-compatible as a modern Next.js site. Netlify documentation says current Next.js support covers App Router, SSG, SSR, ISR, React Server Components, route handlers, image optimization and Turbopack through its current adapter.

This project uses those supported features:

- App Router under `src/app`.
- Static routes for the main portfolio pages.
- Dynamic SSG routes for `/projects/[slug]`.
- Sanity-backed blog routes with revalidation for `/blog` and `/blog/[slug]`.
- A route handler for `/api/newsletter`.
- `next/image` for local public assets.
- Sanity Studio at `/studio`.

No legacy Netlify Next.js plugin was installed or pinned.

## Rendering Architecture

- Static generation: homepage, About, Experience, Projects, Research, Skills, Leadership, Achievements, Contact, 404, robots and sitemap.
- Dynamic SSG: `/projects/[slug]` uses local data and `generateStaticParams`.
- CMS-backed SSG/ISR: `/blog` and `/blog/[slug]` fetch Sanity published content and revalidate.
- Server components: page-level App Router routes by default.
- Client components: filters, forms, mobile navigation, video controls, evidence modal and other interactive UI.
- Route handlers: `/api/newsletter` calls MailerLite server-side.
- Next Image: local images under `public/assets`.

The project requires Netlify's Next.js runtime. It should not be deployed as a simple `out` static export because it uses route handlers, Sanity-backed revalidation and Studio/runtime behavior.

## Build Configuration

Created `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"
```

This follows Netlify's hybrid Next.js guidance: build with `next build` through the existing npm script and publish `.next`. Do not use `out`.

## Node Version

Local versions:

- Node: `v24.11.1`
- npm: `11.6.2`

Configured:

- `.nvmrc`: `24`
- `package.json` engines: Node `24.x`, npm `>=11`
- `netlify.toml` build environment: `NODE_VERSION = "24"`

Netlify currently documents Node 24 as the default available build version and supports `.nvmrc`/`NODE_VERSION` for selecting build Node versions.

## Environment Variable Inventory

See `docs/netlify-environment-variables.md` for the deployment checklist.

Variables referenced by source:

- `NEXT_PUBLIC_SITE_URL`: public non-secret, recommended production URL for metadata, robots and sitemap.
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: public non-secret, required for CMS/blog/Studio configuration.
- `NEXT_PUBLIC_SANITY_DATASET`: public non-secret, required.
- `NEXT_PUBLIC_SANITY_API_VERSION`: public non-secret, required.
- `SANITY_API_READ_TOKEN`: server-side secret, optional unless published reads require authentication.
- `SANITY_STUDIO_PROJECT_ID`: optional Studio override.
- `SANITY_STUDIO_DATASET`: optional Studio override.
- `MAILERLITE_API_KEY`: server-side secret, required for newsletter subscriptions.
- `MAILERLITE_GROUP_ID`: server-side config, required for newsletter subscriptions.
- `BLOG_ENABLE_TEST_ARTICLES`: local/test-only flag; do not enable in production.
- `URL` / `DEPLOY_PRIME_URL`: Netlify-provided fallback URLs used by `src/lib/site.ts`.

## Secret Safety

- `.gitignore` includes `.env*.local`.
- `.env.local` exists locally and was not printed.
- No secret values were hardcoded in source.
- Output scan checked `.next/static` and `.next/server` without printing secret values.
- Secret variable names appear only in server output where server route/config code lives.
- No secret values and no server-secret names were found in client static bundles.

## Sanity Production Readiness

Sanity configuration:

- Public project/dataset/api version read from `NEXT_PUBLIC_SANITY_*` variables.
- Optional `SANITY_API_READ_TOKEN` is server-side only.
- `sanityClient` uses `perspective: "published"`.
- Blog queries exclude `drafts.**` IDs.
- Public fallback remains safe if Sanity is unavailable.
- Studio uses `SANITY_STUDIO_*` overrides if provided, otherwise public Sanity config.

Manual production action required: add the Netlify production origin/custom domain to Sanity CORS after the production URL is known.

## Sanity TLS Warning Investigation

The build still reports:

`UNABLE_TO_VERIFY_LEAF_SIGNATURE`

This originates from Sanity fetches during blog/sitemap static generation. Safe diagnostics used direct public Sanity reads without tokens and without certificate bypasses. Local Node/PowerShell network tests timed out or closed unexpectedly, while the Next build catches the fetch failure and still succeeds.

Conclusion: this appears local machine/network certificate-chain related rather than an application security flaw. Do not use `NODE_TLS_REJECT_UNAUTHORIZED=0`, `strict-ssl=false`, custom insecure agents or disabled certificate verification. If it appears in Netlify logs, resolve via normal CA trust or Netlify support. Locally, Node's `--use-system-ca` may be used as a safe diagnostic/runtime option if needed.

## MailerLite Production Readiness

- `/api/newsletter` reads `MAILERLITE_API_KEY` and `MAILERLITE_GROUP_ID` only server-side.
- Client components never receive the API key.
- Invalid email, malformed request and missing consent are handled.
- Missing configuration returns a safe unavailable message.
- Inactive subscriber statuses are not silently reactivated.
- Netlify's Next.js route handler support should run this endpoint as part of the Next runtime.

No live MailerLite subscriber test was performed.

## Contact Production Readiness

The Contact page uses client-side validation and a `mailto:` draft fallback. It requires no provider credentials and is compatible with Netlify static/runtime deployment.

## Resume Production Readiness

The resume exists at:

`public/assets/documents/Odelola_Solomon_Resume.pdf`

The path is public, production-safe, and independent of local Windows paths.

## Public Asset / Linux Case-Sensitivity Audit

A case-sensitive audit of imports and `/assets/...` references found:

- Import casing issues: 0
- Public asset path casing issues: 0

`tsconfig.json` now explicitly enables `forceConsistentCasingInFileNames`.

No runtime source reference to `C:\Users\HomePC\Documents\new_web` is required.

## Git Repository State

This folder is not currently a Git repository:

- `git status`: failed with `fatal: not a git repository`
- `git branch`: unavailable
- `git remote -v`: unavailable

Deployment via Netlify's Git workflow will require initializing or using the intended repository before Milestone 20.

## Parent Lockfile Warning

Build warning:

`Next.js ignored package-lock.json in C:\Users\HomePC because it would include your home directory.`

The project has its own lockfile at:

`C:\Users\HomePC\Documents\new_web\package-lock.json`

The parent lockfile is a local root-detection warning and should not affect Netlify when this project directory is used as the repository root/base directory. I did not delete or modify `C:\Users\HomePC\package-lock.json`.

## Dependency Audit

- Uses npm with `package-lock.json`; no yarn/pnpm/bun switch.
- No deprecated Netlify Next.js adapter package is installed.
- No local-file dependencies detected in `package.json`.
- No broad dependency updates were performed.
- A lockfile-only npm update timed out due local npm cache access; root lock metadata was updated directly for `engines` without changing dependency versions.

## Dynamic Routes

- `/projects/[slug]`: statically generated from local project data through `generateStaticParams`.
- `/blog/[slug]`: generated from published Sanity records/fallback public articles; drafts remain excluded.
- Build output confirms generated project and blog routes.

## Route Handlers

Route handlers found:

- `src/app/api/newsletter/route.ts`

Runtime assumptions:

- Network call to MailerLite.
- Server-side env vars required.
- No filesystem writes.
- No Windows paths.
- No persistent local storage.
- Safe for Netlify's Next.js route-handler runtime.

## Security Review

Added conservative Netlify headers:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()`
- `X-Frame-Options: SAMEORIGIN`

No strict Content-Security-Policy was added because Sanity Studio, image optimization and future video/content integrations require careful origin mapping after deployment.

## SEO / robots / sitemap

Added:

- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/lib/site.ts`

Behavior:

- `NEXT_PUBLIC_SITE_URL` is used when configured.
- Netlify `URL` or `DEPLOY_PRIME_URL` are fallbacks.
- Local fallback is `http://localhost:3000`.
- `/studio` is disallowed in robots.
- Sitemap includes genuine public static routes, project routes and published blog routes.
- Metadata has `metadataBase` without hardcoding a fake domain.

No Open Graph image was fabricated.

## Production Build Results

- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm run build`: passed.

Build generated 24 static pages/routes and confirmed:

- `/robots.txt`
- `/sitemap.xml`
- `/api/newsletter`
- `/studio/[[...index]]`
- dynamic project routes
- dynamic blog route `/blog/building-reliable-ai-agents`

Known build warnings remain:

- Parent `C:\Users\HomePC\package-lock.json` warning.
- Local Sanity TLS certificate-chain warning.

## Secret Leakage Results

Generated-output scan:

- Files checked: 1171.
- Client bundle secret leakage: none found.
- Secret values checked without printing them.
- Server output contains server-side variable names, which is expected for server-only route/config code.
- No `.env.local` contents were emitted into client bundles.

## Remaining Deployment Blockers

Required before production deployment:

1. Put the project in the intended Git repository or connect the correct existing repository.
2. Configure required Netlify environment variables.
3. Add production Netlify/custom-domain origin to Sanity CORS.
4. Set `NEXT_PUBLIC_SITE_URL` once the final production URL is known.
5. Review Netlify build logs for whether the Sanity TLS warning reproduces in Netlify.

No source-code blocker remains from this preflight.

## Exact Netlify Configuration Required

Build command:

`npm run build`

Publish directory:

`.next`

Node:

`24`

Framework:

Next.js, allow Netlify automatic detection/current adapter.

Do not add legacy `@netlify/plugin-nextjs` unless Netlify support specifically directs it.

Required environment variable names are documented in `docs/netlify-environment-variables.md`.

## Recommendation for Milestone 20

Proceed to Milestone 20 only after the Git repository and Netlify environment variables are ready. Start with a Netlify Deploy Preview, run the production smoke tests from `docs/netlify-deployment-checklist.md`, then promote to production only after preview QA passes.

No deployment was performed in Milestone 19.
