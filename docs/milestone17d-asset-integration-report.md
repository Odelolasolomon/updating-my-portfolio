# Milestone 17D - Verified Asset Integration Report

Status: Complete. No deployment was performed.

## Files Added

- `src/data/assets.ts`
- `src/data/testimonials.ts`
- `src/components/data-display/TestimonialCard.tsx`
- `src/components/data-display/EvidenceShowcase.tsx`
- `docs/milestone17d-asset-integration-report.md`

## Files Modified

- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/research/page.tsx`
- `src/app/leadership/page.tsx`
- `src/app/achievements/page.tsx`
- `src/components/data-display/AchievementCard.tsx`
- `src/data/achievements.ts`

## Public Assets Added

Profile:
- `public/assets/images/profile/solomon-portrait.jpg`
- `public/assets/images/profile/solomon-about-journey.jpg`

Research:
- `public/assets/images/research/sharpxr-pediatric-xray-poster.jpg`
- `public/assets/images/research/alzheimers-poster-01.jpg`
- `public/assets/images/research/conference-04.jpg`
- `public/assets/images/research/vamae-poster-certificate.pdf`

Leadership:
- `public/assets/images/leadership/fundamentals-of-sql-teaching.jpg`
- `public/assets/images/leadership/bit-panel-march-2024.jpg`
- `public/assets/images/leadership/dsn-data-ai-summit.jpg`

Achievements:
- `public/assets/images/achievements/alx-data-science.jpg`
- `public/assets/images/achievements/educative-ml-engineer.jpg`
- `public/assets/images/achievements/side-hustle-data-analytics.jpg`
- `public/assets/images/achievements/utiva-data-analytics.pdf`
- `public/assets/images/achievements/zindi-participant.jpg`

## Assets Integrated

- About portrait: approved `1684348730491.jpg` derivative.
- About journey image: approved `1692047100194.jpg` derivative.
- Research evidence: SharpXR poster, VAMAE ICPR poster-presentation PDF, Alzheimer's poster evidence, and `conference-04` only.
- Leadership evidence: Fundamentals of SQL, BIT 1.0 panel, and DSN UNN Data & AI Summit only.
- Achievements evidence: ALX, Educative ML Engineer, Side Hustle Data Analytics, Utiva, and Zindi participation.
- Homepage testimonials: Kenechukwu Agbo, Chidubem Anyali, and Oluwafunto Salvador.

## Assets Intentionally Left Unused

- All `verification_required` assets.
- All archival assets.
- `conference-05.jpg`, retained for possible later use but not displayed initially.
- Nithub AI Literacy Workshop flyer, retained but not displayed initially.
- Raw testimonial screenshots and crops.
- Raw volunteering screenshot.
- Extra certificates and weaker/duplicative speaking flyers that would make the site feel cluttered.
- Conference duplicates and low-value audience photos.

## Optimization Performed

- Created resized public JPEG derivatives for display assets.
- Created cropped 4:5 portrait derivative for About.
- Created cropped preview derivatives for leadership flyers.
- Preserved original verified evidence files unchanged in `portfolio_assets_verified/`.
- WebP conversion was not performed because no WebP/ImageMagick encoder is available in the local environment. Next/Image remains in use for runtime optimization.

## Privacy / Redaction Performed

- Leadership flyer public derivatives are cropped previews rather than full original flyers, reducing exposure of unnecessary third-party contact details.
- Original evidence remains unchanged in the verified asset library.
- No raw testimonial screenshots are displayed.
- No verification-required or archival photos are published.

## Testimonial Implementation

- Added structured testimonial data in `src/data/testimonials.ts`.
- Preserved full approved recommendation text exactly.
- Added exact approved excerpts to homepage cards.
- Used a three-card desktop grid and stacked mobile layout.
- Used the general LinkedIn recommendations URL as a single section-level source link.
- No recommender photographs were added.
- No dedicated Testimonials page was created.

## About Changes

- Replaced initials placeholder with approved portrait derivative.
- Added secondary About/journey image.
- Corrected academic wording to final approved wording: B.Sc. Statistics, University of Nigeria, Nsukka; Final CGPA: 4.71/5.00; Top 5 in the Department of Statistics.
- Added a concise Early Foundations subsection as formative background.
- Present-day AI/ML work remains more prominent than early STEM history.

## Research Changes

- Added professional research evidence cards and accessible evidence modal.
- Added SharpXR poster evidence.
- Added VAMAE ICPR evidence as poster-presentation evidence, not an award.
- Added Alzheimer's poster evidence using only supported title/authorship/status.
- Added `conference-04` as a context-limited research participation visual.
- Did not display `conference-05` initially.
- Did not invent event names, publication venues, acceptance status, or other people identities.

## Leadership Changes

- Preserved the existing technical leadership sections as the primary story.
- Added Teaching, Mentorship & Community section.
- Added Ingressive for Good wording as Data Team Lead - 2023 only.
- Displayed only the three approved speaking/teaching evidence assets.
- Added only a light link to About for Early Foundations.

## Achievements Changes

- Updated achievement data hierarchy and wording.
- Corrected academic distinction to final approved academic wording.
- Added credential/participation evidence previews without making a certificate wall.
- Represented Zindi only as Data Science Challenges - Participant.
- Removed reliance on unsupported old 4.03 academic wording.

## Accessibility Implementation

- Asset images include meaningful alt text.
- Testimonial text is rendered as DOM text.
- Evidence modal supports keyboard focus, Escape-to-close, close button, accessible dialog role, and labelled title.
- Focus returns to the triggering control after closing.
- Cards remain text-first so certificate/poster content is not solely embedded in images.
- Existing focus-ring styling is preserved.

## Responsive QA

Screenshot directory:
- `screenshots/milestone17d_asset_integration/`

Captured required screenshots:
- Homepage desktop/mobile
- About desktop/mobile
- Research desktop/mobile
- Leadership desktop/mobile
- Achievements desktop/mobile
- Research evidence modal desktop/mobile

Additional responsive checks captured for 320, 375, 390, 768, 1024, and 1440 widths.

Results:
- No horizontal overflow detected in automated checks.
- Integrated images load after scrolling.
- Evidence modal renders on desktop and mobile.

## Regression Checks

Route checks returned HTTP 200:
- `/`
- `/about`
- `/experience`
- `/projects`
- `/projects/unified-ai-agent`
- `/research`
- `/skills`
- `/leadership`
- `/achievements`
- `/blog`
- `/blog/building-reliable-ai-agents`
- `/contact`
- `/assets/documents/Odelola_Solomon_Resume.pdf`

Browser checks:
- No broken integrated images after scrolling changed pages.
- Evidence modal opens with focus on the close control.
- Escape closes the modal.
- No horizontal overflow on changed pages.

## Quality Checks

- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm run build`: passed.

Build note:
- Build succeeded, but Next emitted a non-fatal warning about ignored parent `package-lock.json` and a fetch certificate warning: `UNABLE_TO_VERIFY_LEAF_SIGNATURE`. This did not fail the build. No SSL verification was disabled.

## Remaining Issues / Caveats

- WebP derivatives were not created because no local WebP encoder was available. JPEG/PDF derivatives were used instead.
- The About portrait source is landscape, so the implemented 4:5 crop should be visually reviewed by the user. If it weakens the page, the plan already allows reporting/reverting rather than forcing the crop.
- Leadership flyer previews are cropped for privacy; a future design pass may create more precise redacted crops if needed.
- No live MailerLite subscriber test was performed, per instruction.
