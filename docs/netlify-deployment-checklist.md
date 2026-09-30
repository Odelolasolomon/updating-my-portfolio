# Netlify Deployment Checklist

This checklist is for the future deployment milestone. Do not execute it during Milestone 19.

## 1. Git Repository Readiness

- Initialize or use the intended Git repository for `C:\Users\HomePC\Documents\new_web`.
- Confirm `.env.local` and other local secrets are ignored.
- Commit only source, public assets, docs and required configuration.
- Exclude generated local QA artifacts unless intentionally archived.

## 2. Netlify Site Creation / Linking

- Create or select the Netlify site from the Netlify dashboard.
- Connect the repository through the dashboard.
- Do not connect this project to an unrelated existing live portfolio site.

## 3. Repository Selection

- Select the repository containing this project root.
- If the repository is a monorepo, set the Netlify base directory to this portfolio project folder.

## 4. Production Branch

- Select the intended production branch.
- Use deploy previews for feature branches before production promotion.

## 5. Build Command

- Build command: `npm run build`.
- The underlying Next command is `next build`.

## 6. Next.js Framework Detection

- Let Netlify detect Next.js automatically.
- Do not install or pin legacy Netlify Next.js plugins unless Netlify support specifically requires it.

## 7. Publish / Output Handling

- Publish directory: `.next`.
- Do not use `out`; this is not a static-export site.

## 8. Environment Variables

- Add the variables listed in `docs/netlify-environment-variables.md`.
- Keep `MAILERLITE_API_KEY` and any Sanity token secret.
- Set `NEXT_PUBLIC_SITE_URL` once the production URL is known.

## 9. Production Site URL

- Use the final Netlify URL or custom domain with `https://`.
- Update `NEXT_PUBLIC_SITE_URL` after custom-domain changes.

## 10. Sanity Configuration

- Confirm the Sanity dataset contains only approved published blog entries.
- Add the Netlify production origin to Sanity CORS.
- Confirm `/studio` works after authentication.

## 11. MailerLite Configuration

- Confirm the API key and group id are configured in Netlify.
- Run only an approved test subscription after deployment.
- Do not create or send campaigns during deployment smoke testing.

## 12. Build

- Trigger a Netlify deploy preview first.
- Review build logs for TLS, dependency or Next runtime warnings.

## 13. Deploy Preview QA

- Run the production smoke-test plan below against the preview URL.
- Check desktop and mobile layouts.
- Verify no secrets appear in the browser.

## 14. Production Deployment

- Promote only after preview QA passes.
- Do not switch DNS until production deployment is stable.

## 15. Production Smoke Tests

Homepage:
- Loads successfully.
- Video area is visible and controls behave correctly.
- Navigation works.

About:
- Portrait loads.
- Journey image loads.

Projects:
- `/projects` loads.
- A dynamic case study such as `/projects/unified-ai-agent` loads.

Research:
- Evidence images load.
- Evidence modal opens, closes, and remains keyboard accessible.

Leadership:
- Flyer previews load.

Achievements:
- Credential evidence loads.
- Zindi remains participation-only.

Blog:
- Sanity published content loads.
- Article detail route loads.
- Drafts remain inaccessible.

Newsletter:
- Invalid email validation works.
- Do not create an unwanted subscriber.

Contact:
- Mailto fallback works as designed.

Resume:
- PDF downloads from `/assets/documents/Odelola_Solomon_Resume.pdf`.

Mobile:
- Navigation opens and closes.
- No horizontal overflow.

404:
- Branded not-found page appears.

Metadata:
- Title and description are present.
- Open Graph tags use the production base URL.
- `/robots.txt` and `/sitemap.xml` load.

Security:
- HTTPS is active.
- No secrets are visible in browser source or network responses.

## 16. Domain Setup

- Add a custom domain only after the Netlify production deploy is healthy.
- Configure DNS according to Netlify's instructions.
- Update `NEXT_PUBLIC_SITE_URL` to the custom domain.
- Redeploy after the URL update.

## 17. HTTPS Verification

- Confirm Netlify-managed TLS certificate is active.
- Verify all public URLs redirect or resolve to HTTPS.

## 18. SEO / Indexing Verification

- Confirm `robots.txt` allows public routes and disallows `/studio`.
- Submit the sitemap after the final production URL is stable.
- Confirm no staging/preview URL is submitted as canonical.

## 19. Rollback Procedure

- Keep the previous known-good Netlify deploy available in deploy history.
- If production fails, roll back from Netlify Deploys to the previous successful deploy.
- If the failure is source-related, revert the problematic repository commit and redeploy.
- If the failure is environment-related, restore the previous environment variable values and redeploy.
- Re-run smoke tests after rollback.
