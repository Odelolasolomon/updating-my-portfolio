# Netlify Environment Variables

Configure these in Netlify Site configuration > Environment variables before the first production deployment. Do not commit secret values to the repository.

| Name | Category | Required | Purpose | Used by |
| --- | --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public non-secret configuration | Recommended for production | Canonical metadata, Open Graph base URL, robots sitemap URL and sitemap route URLs. Use the final Netlify or custom domain, including `https://`. | `src/lib/site.ts`, metadata, `robots.ts`, `sitemap.ts` |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Public non-secret configuration | Required for CMS-backed blog and Studio | Identifies the Sanity project used by public blog reads and Studio. | `src/sanity/env.ts`, `sanity.config.ts`, `/studio` |
| `NEXT_PUBLIC_SANITY_DATASET` | Public non-secret configuration | Required | Selects the Sanity dataset, normally `production`. | `src/sanity/env.ts`, `sanity.config.ts`, `/studio` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Public non-secret configuration | Required | Pins the Sanity API version used by CMS reads. | `src/sanity/env.ts` |
| `SANITY_API_READ_TOKEN` | Server-side secret | Optional | Only needed if published Sanity reads require an authenticated token. Leave unset for public published dataset reads. | `src/sanity/client.ts` |
| `SANITY_STUDIO_PROJECT_ID` | Server-side/non-public Studio override | Optional | Overrides the Studio project id if it should differ from the public Sanity project id. | `sanity.config.ts` |
| `SANITY_STUDIO_DATASET` | Server-side/non-public Studio override | Optional | Overrides the Studio dataset if it should differ from the public Sanity dataset. | `sanity.config.ts` |
| `MAILERLITE_API_KEY` | Server-side secret | Required for newsletter subscriptions | Authenticates `/api/newsletter` with MailerLite. Never expose to the browser. | `src/lib/newsletter.ts`, `src/app/api/newsletter/route.ts` |
| `MAILERLITE_GROUP_ID` | Server-side configuration | Required for newsletter subscriptions | Identifies the MailerLite group that receives new subscribers. | `src/lib/newsletter.ts`, `src/app/api/newsletter/route.ts` |
| `BLOG_ENABLE_TEST_ARTICLES` | Local-development/test flag | Do not enable in production | Enables local fixture articles only when explicitly set to `true`. Production should omit this or set `false`. | `src/lib/blog.ts` |
| `NETLIFY_NEXT_SKEW_PROTECTION` | Netlify runtime setting | Already set in `netlify.toml` | Enables Netlify skew protection for Next.js deployments. | Netlify build/runtime |
| `NODE_VERSION` | Build/runtime setting | Already set in `netlify.toml` and `.nvmrc` | Pins Node 24 for reproducible builds. | Netlify build environment |

## Sanity Dashboard Setup

- Add the eventual production origin to Sanity CORS once the Netlify URL/custom domain is known.
- Keep local development origin `http://localhost:3000` for local Studio use.
- Do not add write tokens to public/browser variables.

## MailerLite Setup

- Store `MAILERLITE_API_KEY` as a secret environment variable.
- Store `MAILERLITE_GROUP_ID` as an environment variable.
- Do not run real subscription tests without an approved test email.
