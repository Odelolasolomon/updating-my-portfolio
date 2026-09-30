# Milestone 17C - Website Asset Integration Planning & UX Mapping

Status: Planning only. No website files, `public/`, components, styles, Sanity, MailerLite, or deployment were modified.

## 1. Executive Summary

The verified asset library should strengthen the existing portfolio through selected proof points, not by turning the site into an image gallery or certificate archive. The current website already has a coherent white, charcoal, electric-blue and orange design system, with reusable cards, tags, section headers, project previews, data files, and page-specific layouts. The asset integration should therefore be additive and evidence-led.

Recommended display/use count: 22 of the 41 public candidates should be actively used or represented in structured content during website integration. The remaining public candidates should stay available as evidence but not be displayed by default.

Highest-value changes:

- Replace the About-page initials placeholder with approved portrait/journey photography.
- Add a compact testimonial preview to the homepage using the three verified/prepared recommendations.
- Strengthen Research with poster thumbnails and a small evidence section, especially SharpXR, VAMAE, and Alzheimer's poster work.
- Strengthen Leadership with teaching/community/speaking evidence without displaying every flyer.
- Refine Achievements into a hierarchy of major recognition, credentials, research/conference evidence, and challenge participation.

Do not use the three remaining `verification_required` photos. Do not use archival assets publicly unless explicitly approved later.

## 2. Existing Website Assessment

### Architecture

The site uses Next.js App Router with TypeScript under `src/app`, reusable components under `src/components`, and static portfolio data under `src/data`. Blog content uses Sanity through `src/lib/blog.ts` and `src/sanity`, but the rest of the portfolio is static structured TypeScript data. Asset integration should follow that existing static-data pattern, not move portfolio evidence into Sanity.

Relevant existing data files:

- `src/data/profile.ts`
- `src/data/experience.ts`
- `src/data/projects.ts`
- `src/data/publications.ts`
- `src/data/leadership.ts`
- `src/data/achievements.ts`
- `src/data/skills.ts`

Recommended future data additions:

- `src/data/assets.ts` for typed asset metadata after copying optimized files into `public/`.
- `src/data/testimonials.ts` for full recommendation text, exact excerpts, attribution, and source URL.
- Optional extension fields in `achievements.ts`, `leadership.ts`, and `publications.ts` for evidence assets.

### Visual System

The site uses:

- White and soft-grey page bands.
- Charcoal contrast sections.
- Electric blue for primary actions and active states.
- Orange for secondary emphasis.
- 8px cards via `rounded-portfolio`.
- `portfolio-container` with mobile width constraints.
- Reusable `Card`, `Button`, `Tag`, and `SectionHeader` components.

Asset presentation should match this system: restrained evidence cards, compact thumbnails, clean captions, no oversized certificate walls, no logo wall, and no full-page image backgrounds.

### Existing Page State

- Homepage: video-first hero, strengths, featured projects, research preview, experience preview, skills/recognition. Strong structure; should not be redesigned.
- About: includes an initials placeholder portrait card and education currently showing older GPA wording. Strong candidate for portrait and corrected academic wording.
- Experience: timeline is detailed and text-focused. Logos could help scanning, but only where relationship is verified.
- Projects: already has conceptual architecture previews. No verified project screenshots were supplied, so project visuals should mostly remain unchanged.
- Research: strongest natural home for poster/certificate/research-conference visuals.
- Leadership: natural home for teaching, mentorship, community, and selected speaking assets.
- Achievements: good card structure; needs hierarchy and evidence previews rather than full certificate display.
- Blog: should remain CMS/article-focused. No asset integration needed beyond optional author portrait later.
- Contact: no asset integration needed.
- Header/Footer: no major asset changes recommended. Footer socials should eventually use verified profile URLs, not asset evidence.

## 3. Page-by-Page Recommendations

### Homepage

Recommendation: keep the video-first hero unchanged in structure. Do not replace the video-first concept with a portrait hero.

Use `1684348730491.jpg` cautiously. It should not replace the hero video placeholder unless the visual comparison proves it strengthens the premium feel. The stronger use is either:

- a small author/portrait treatment near the video only if it does not crowd the hero; or
- reserve it for About and keep the homepage hero video-first.

Recommended homepage changes:

- Add a compact testimonial preview after the Research or Selected AI systems section.
- Use three short testimonial cards, not a carousel. Three cards work well with the existing grid/card system and avoid mobile interaction complexity.
- Use exact contiguous excerpts only, with a link to the LinkedIn recommendations page.
- Do not add credential thumbnails to the homepage.
- Optionally add one research visual preview only if Research preview feels text-heavy after implementation.

Homepage portrait recommendation: do not change the homepage hero to a portrait-led hero. Preserve video-first and use the portrait elsewhere first.

### About

Recommended changes:

- Replace the initials placeholder with `public_candidates/portraits/leading-general-portrait-candidate-1684348730491.jpg` only after final visual QA.
- Use `public_candidates/photography/about-journey-photo-candidate-1692047100194.jpg` in a secondary About/journey section, not in the hero portrait slot.
- Correct academic wording to: B.Sc. Statistics - University of Nigeria, Nsukka; Final CGPA: 4.71/5.00; Top 5 in the Department of Statistics.
- Add a concise “Early Foundations” subsection using `public_candidates/content_notes/early-leadership-stem-and-community-history.md`.
- Present early STEM/debate/JETS material as formative background, not equivalent to current AI/ML achievements.
- Avoid using the Gbagada logo unless a small visual anchor is genuinely needed. If used, place it in Early Foundations as a small contextual mark, not a logo card.

### Experience

Recommended changes:

- Add organization logos only where a verified relationship exists and where the logo improves scannability.
- The currently verified logos map best to community/education/recognition, not core employment. Do not force them into the professional timeline.
- Do not modify employment history based on screenshots.
- Do not use I4G screenshot to imply a current role; use only “Data Team Lead - Ingressive for Good Community, 2023” in Leadership.

Experience page conclusion: minimal asset integration. The current timeline is already strong. Use no new images unless verified employer logos are supplied later.

### Projects

Recommendation: leave current project visuals mostly unchanged.

No verified assets appear to be genuine product screenshots, architecture diagrams, UI captures, or project-specific visuals for professional projects. Do not use conference photos, certificates, or speaking flyers as project images.

Project-specific possible exception:

- `public_candidates/research/sharpxr-pediatric-xray-poster.jpg` may support the Pediatric X-Ray research case-study page as an evidence thumbnail, not as a system screenshot.
- Alzheimer's poster images may support a future research/project entry if that work becomes part of the project data.

### Research

Recommended changes:

- Add a research evidence section using compact evidence cards and optional lightbox/modal previews.
- Use `sharpxr-pediatric-xray-poster.jpg` for SharpXR / pediatric chest X-ray work.
- Use `icpr-2026-vamae-poster-presentation-certificate.pdf` as VAMAE evidence, shown as a credential/evidence card rather than inline PDF.
- Use `conference-04` and `conference-05` sparingly as research/conference participation visuals. Do not invent event name/date or identify other people.
- Use Alzheimer's poster photos as a separate research/project/poster work entry with title and authors only.

Alzheimer's wording:

- Title: Comparative Analysis of Tabular and Image Data for Alzheimer's Disease Prediction Using Machine Learning
- Authors shown: Odelola Solomon O. and Chisom Chibuike R.
- Status: research/project/poster work
- Do not claim: publication, conference acceptance, venue, event date, or award.

Recommended UI pattern:

- Evidence cards in a two-column desktop grid.
- Each card has a thumbnail, type label, source/status, concise caption, and optional “View evidence” action.
- Use modal/lightbox only for certificate/poster preview if implemented accessibly.

### Leadership

Recommended changes:

- Add a “Teaching & Community Evidence” section with selected cards.
- Prioritize technical leadership first, then teaching/community proof.
- Include Fundamentals of SQL as confirmed teaching evidence.
- Include Ingressive for Good Data Team Lead - 2023 as community leadership evidence.
- Include DSN/community involvement as structured content, supported by DSN logo or selected flyer only where relevant.
- Use 3-4 selected speaking cards, not all flyers.

Recommended speaking approach:

- Featured speaking/teaching cards with small cropped flyer thumbnails and text metadata.
- Avoid embedding every flyer at full size.
- Crop/blur third-party contact details before any public integration.

Early leadership should primarily live on About, with Leadership linking to it lightly if needed. Avoid duplicating the full early-STEM story across both pages.

### Achievements

Recommended changes:

- Use a hierarchical model:
  - Major recognition.
  - Academic distinction.
  - Fellowships/programmes.
  - Professional credentials.
  - Research/conference evidence.
  - Challenge participation.
- Add credential evidence previews, but not full-size certificates.
- Use card-based entries with optional “View evidence” or modal preview.
- Do not present Zindi as an award, win, rank, leaderboard result, or specific challenge.

Good credential candidates for Achievements:

- ALX Data Science 13-month program.
- Educative Become a Machine Learning Engineer.
- Side Hustle Data Analytics.
- Utiva Data Analytics Program.
- Jobberman Soft-Skills Training.
- KaggleX BIPOC Mentorship Program using exact wording only.
- IndabaX participation/appreciation as participation, not award.
- Zindi Data Science Challenges - Participant.

### Blog

No asset integration recommended for Milestone 17D except perhaps using the final portrait as an author image later. Blog should remain CMS-driven and article-first.

### Contact

No asset integration recommended. Keep the page focused on contact channels, enquiry form, collaboration areas, and resume download.

## 4. Exact Proposed Asset Mapping

| Asset | Proposed Use | Page | Priority | Notes |
|---|---|---|---|---|
| `public_candidates/portraits/leading-general-portrait-candidate-1684348730491.jpg` | Primary portrait candidate | About, maybe Homepage secondary | Strong improvement | Do not replace video-first homepage by default. |
| `public_candidates/photography/about-journey-photo-candidate-1692047100194.jpg` | Journey/lifestyle visual | About | Strong improvement | Secondary About section only. |
| `public_candidates/content_notes/early-leadership-stem-and-community-history.md` | Structured biography content | About, Leadership | Strong improvement | Use selectively; do not create oversized list. |
| `public_candidates/research/sharpxr-pediatric-xray-poster.jpg` | Poster/evidence thumbnail | Research, Pediatric X-Ray project | Essential | Strong research proof. |
| `public_candidates/credentials/icpr-2026-vamae-poster-presentation-certificate.pdf` | Evidence card | Research, Achievements | Strong improvement | Poster presentation, not award. |
| `public_candidates/research/alzheimers-disease-prediction-poster-photo-01.jpg` | Poster evidence thumbnail | Research | Strong improvement | Use one Alzheimer image, not both, unless gallery opens. |
| `public_candidates/research/alzheimers-disease-prediction-poster-photo-02.jpg` | Secondary evidence/gallery | Research | Optional | Keep available for lightbox/gallery. |
| `public_candidates/research/conference-04-preferred-research-conference-candidate.jpg` | Research participation photo | Research | Strong improvement | No invented event metadata. |
| `public_candidates/research/conference-05-preferred-research-conference-candidate.jpg` | Research participation photo | Research | Optional | Use only if gallery needs a second photo. |
| `public_candidates/speaking_flyers/fundamentals-of-sql-teaching-september-2022.jpg` | Teaching evidence | Leadership | Essential | Confirmed personally taught. |
| `public_candidates/leadership_evidence/ingressive-for-good-data-team-lead-2023.png` | Community leadership evidence | Leadership | Strong improvement | Use 2023 only, never Present. |
| `public_candidates/leadership_evidence/volunteering-and-community-profile.png` | Supporting evidence | Leadership | Optional | Prefer structured content over raw screenshot. |
| `public_candidates/speaking_flyers/bit-1-0-breaking-into-tech-panel-march-2024.jpg` | Speaking/panel evidence | Leadership | Strong improvement | Review third-party contact details before display. |
| `public_candidates/speaking_flyers/speaking-flyer-02-dsn-unn-data-and-ai-summit-march-2024.jpg` | DSN/event speaking evidence | Leadership | Strong improvement | Crop/blur contact details. |
| `public_candidates/speaking_flyers/speaking-flyer-07-nithub-ai-literacy-workshop.jpeg` | AI literacy evidence | Leadership | Optional | Good thematic fit if role/date are acceptable. |
| `public_candidates/community_photos/community-event-candidate-1666438678950.jpg` | Community/event atmosphere | Leadership | Optional | Use only with generic caption, no invented event name. |
| `public_candidates/community_photos/community-event-candidate-1666438880129.jpg` | Community/event atmosphere | Leadership | Optional | Use if it is visually stronger than the first. |
| `public_candidates/credentials/alx-data-science-13-month-program.jpg` | Credential preview | Achievements | Strong improvement | No unsupported issue date. |
| `public_candidates/credentials/educative-become-a-machine-learning-engineer-2024.jpg` | Credential preview | Achievements | Strong improvement | Exact date supported. |
| `public_candidates/credentials/side-hustle-internship-cohort-5-data-analytics-certificate-2022.jpg` | Credential preview | Achievements | Strong improvement | Date May 30 2022. |
| `public_candidates/credentials/utiva-data-analytics-program-incubator-2021.pdf` | Credential entry/evidence | Achievements | Optional | Use if page needs foundation context. |
| `public_candidates/credentials/zindi-data-science-challenges-participant.png` | Challenge participation | Achievements | Optional | Participant only. |
| `testimonials/source/recommendation-screenshots.png` | Supporting source only | Internal evidence | Do not display directly | Use structured testimonial data instead. |

## 5. Testimonials Plan

Recommended: add testimonials, but not a dedicated testimonials page.

A dedicated page is not justified yet because there are only three verified/prepared recommendations. A compact homepage section plus optional About/Leadership reuse is enough.

Homepage presentation:

- Three-card grid on desktop, stacked cards on mobile.
- Use exact excerpts only.
- Each card includes name, professional description, source label “LinkedIn recommendation”, and optional link to `https://www.linkedin.com/in/odelolasolomon/details/recommendations/`.
- No profile photos unless supplied and verified.
- No carousel.

Suggested exact excerpts:

- Kenechukwu: “Odelola Solomon is an exceptional data scientist and machine learning engineer.”
- Chidubem: “Solomon is great with data analytics tools - Excel, Power BI, SQL, and Python.”
- Oluwafunto: “He is quite efficient and focused and great at managing people.”

Full recommendation text must remain preserved in structured data.

## 6. Research Evidence Plan

Research should receive the richest asset integration, but still as evidence, not decoration.

Recommended sections:

- Featured research evidence: SharpXR poster, VAMAE certificate, Alzheimer's poster work.
- Research participation visuals: 1-2 conference images.
- Evidence guardrails: show status, source, and what the asset proves.

Recommended pattern:

```ts
export type ResearchEvidence = {
  id: string;
  title: string;
  asset: string;
  type: "poster" | "certificate" | "photo";
  status: string;
  proves: string;
  caveat?: string;
  relatedProjectSlug?: string;
};
```

## 7. Leadership / Speaking Plan

Recommended sections:

- Keep existing technical leadership cards as the lead section.
- Add a compact “Teaching, Mentorship & Community” section.
- Add a selected “Speaking & Community Evidence” grid with 3-4 assets maximum.

Recommended selected assets:

- Fundamentals of SQL teaching flyer.
- BIT 1.0 panel flyer.
- DSN UNN Data and AI Summit flyer.
- Optional Nithub AI Literacy Workshop flyer.

Do not publish all speaking flyers at once. Some have unclear dates, contact details, or weaker relevance.

## 8. Achievements / Credentials Plan

Recommended credential UX:

- Categorized grid, not a gallery.
- Credential cards with small preview thumbnails, not full-size certificate images.
- Optional modal/lightbox for evidence preview.
- Display only high-signal credential details.

Suggested hierarchy:

1. Research recognition.
2. Academic distinction.
3. Fellowships/programmes.
4. Professional credentials.
5. Participation and challenge activity.

Achievement data should be updated carefully because current `src/data/achievements.ts` still contains older wording for academic GPA and some unsupported summaries. That should be corrected during implementation, but not in this planning milestone.

## 9. Logo-Use Matrix

| Asset | Organization | Existing relationship | Proposed page | Usage | Use / Don't Use |
|---|---|---|---|---|---|
| `data-scientists-network.png` | Data Scientists Network | Community/teaching/event involvement | Leadership | Small logo beside DSN evidence card | Use selectively |
| `gbagada-senior-grammar-school.jpg` | Gbagada Senior Grammar School | Early STEM/debate/JETS story | About | Small contextual mark only | Optional |
| `hamoye.jpg` | Hamoye | Fellowship recognition | Achievements | Small logo/icon in fellowship card | Use selectively |
| `ingressive-for-good.jpg` | Ingressive for Good | Data Team Lead, 2023 | Leadership | Small logo in community leadership card | Use |
| `kaggle-bipc.jpg` | KaggleX/BIPOC | Credential/program wording | Achievements | Small logo in credential card | Use carefully |
| `unn.png` | University of Nigeria, Nsukka | B.Sc. Statistics | About/Achievements | Small education logo, not logo wall | Use selectively |

No generic logo wall is recommended.

## 10. Photography-Use Matrix

| Asset | Intended Page | Section | Purpose | Crop / Aspect | Third-party visibility | Use? |
|---|---|---|---|---|---|---|
| `1684348730491.jpg` | About | Portrait card | Humanize profile | 4:5 portrait, face-centered | Likely no issue after crop | Yes, after visual QA |
| `1692047100194.jpg` | About | Journey section | Storytelling/context | 4:3 or 3:2 | Check visible people/background | Yes, secondary |
| `1666438678950.jpg` | Leadership | Community evidence | Event atmosphere | 16:10 thumbnail | Check background/logos | Optional |
| `1666438880129.jpg` | Leadership | Community evidence | Event atmosphere | 16:10 thumbnail | Check background/faces | Optional |
| `conference-04.jpg` | Research | Research participation | Professional research presence | 4:3 or 16:10 | Do not identify others | Yes |
| `conference-05.jpg` | Research | Research participation | Secondary visual | 4:3 or 16:10 | Do not identify others | Optional |
| Alzheimer poster photo 01 | Research | Poster evidence | Research/project proof | 4:3 thumbnail | Likely poster-focused | Yes |
| Alzheimer poster photo 02 | Research | Gallery/evidence | Backup poster proof | 4:3 thumbnail | Likely poster-focused | Optional |

Do not use:

- `verification_required/photography_and_portrait_candidates/1737802385814.jpg`
- `verification_required/photography_and_portrait_candidates/1738405707203.jpg`
- `verification_required/photography_and_portrait_candidates/workplace-photo.jpeg`
- archived `172959...` audience photographs

## 11. Public Candidates Recommended NOT to Display

These are public candidates but should not be displayed by default:

- `educative-python-for-programmers.jpg`: lower priority than ML Engineer credential; keep as evidence.
- `jobberman-soft-skills-training.jpg`: useful but lower visual/professional signal; include as text if needed.
- `indabax-2024-participation.jpg`: likely duplicate/less specific than the corrected IndabaX 2024 PDF.
- `indabax-nigeria-2026-certificate-of-appreciation.pdf`: future-dated relative to many portfolio contexts; use only if timeline is intentionally current and verified.
- `icstma-2024-ensemble-learning-stock-price-prediction.jpg`: may be used later if that research is represented; not essential now.
- `speaking-flyer-01-power-of-data.jpg`: role/date unclear and contains phone contact; do not prioritize.
- `speaking-flyer-03-i4g-power-of-tech-skills-jan-2024.jpg`: possible use, but exact role/capacity still noted as needing care.
- `speaking-flyer-04-artificial-intelligence-bootcamp.jpg`: date/role unclear; lower priority.
- `speaking-flyer-05-impact-of-statisticians-august-2026.jpeg`: date/year and exact capacity require caution; avoid for now.
- `speaking-flyer-06-house-of-tech-breaking-into-data-world.jpeg`: very large file and crowded flyer; use only if selected after crop/redaction.
- `volunteering-and-community-profile.png`: prefer structured content rather than raw screenshot.
- `community-event-candidate-1666438678950.jpg` and `1666438880129.jpg`: optional; use only if visual quality is strong after review.
- `gbagada-senior-grammar-school.jpg`: only if Early Foundations needs a small anchor; otherwise structured text is enough.

## 12. Accessibility Strategy

Alt text principles:

- Portrait: describe the person and purpose, e.g. “Portrait of Odelola Solomon.”
- Journey photo: describe meaningful context, not every background detail.
- Research poster: alt text should name the poster title and explain it is evidence; do not encode the entire poster text in alt.
- Certificates: alt text should identify certificate title and organization; key credential details must also appear as visible text.
- Speaking flyers: alt text should identify event/topic and role; visible card text should include important metadata.
- Logos: use meaningful alt only when the logo communicates organization identity. Mark decorative duplicates as empty alt.
- Testimonials: quote text must be real text in the DOM, not embedded in images.

Any lightbox/modal must support keyboard close, focus trap, labelled title, and escape key.

## 13. Optimization Strategy

Do not process files in this milestone. Future optimization recommendations:

- Convert photography, posters, and flyers to WebP for display.
- Keep original JPEG/PNG/PDF files archived as evidence.
- Generate responsive sizes: 320, 640, 960, 1200 for photos/posters where needed.
- Generate small thumbnails for credentials and flyers, around 480-720px wide.
- Keep PDFs accessible only through controlled “View evidence” links or converted preview thumbnails.
- Do not expose full-resolution originals by default if they contain contact details or unnecessary metadata.
- Crop/blur third-party contact details before public use.
- Prefer `next/image` for raster assets once copied into `public/`.

## 14. Proposed Future Public Directory

Do not create this yet.

```text
public/
  assets/
    documents/
      Odelola_Solomon_Resume.pdf
    images/
      profile/
        solomon-portrait.webp
        solomon-about-journey.webp
      research/
        sharpxr-pediatric-xray-poster.webp
        vamae-poster-certificate-preview.webp
        alzheimers-poster-01.webp
        conference-04.webp
        conference-05.webp
      leadership/
        fundamentals-of-sql-teaching.webp
        bit-panel-march-2024.webp
        dsn-data-ai-summit.webp
        nithub-ai-literacy-workshop.webp
      achievements/
        alx-data-science.webp
        educative-ml-engineer.webp
        side-hustle-data-analytics.webp
        utiva-data-analytics.webp
        zindi-participant.webp
      organizations/
        dsn.webp
        hamoye.webp
        ingressive-for-good.webp
        kagglex-bipoc.webp
        unn.webp
        gbagada-senior-grammar-school.webp
      testimonials/
        recommendation-source-thumb.webp
```

## 15. Component / Data Architecture

Reuse existing components where possible:

- `Card` for evidence cards.
- `Tag` for type/status labels.
- `SectionHeader` for new sections.
- `Button` for source/evidence actions.

Recommended new components only if implementation reaches that scope:

| Component | Why Needed | Reuse Pages | Data Consumed | Responsive / A11y |
|---|---|---|---|---|
| `TestimonialCard` | Clean social proof without images | Homepage, About optional | testimonial data | Text-first, no carousel required |
| `EvidenceCard` | Shared proof card for research/achievements/leadership | Research, Achievements, Leadership | asset metadata | Thumbnail + visible proof text + accessible link |
| `CredentialCard` | Credential hierarchy with preview | Achievements | credential records | Small preview, no full certificate dump |
| `SpeakingCard` | Compact selected speaking evidence | Leadership | speaking records | Cropped thumbnail, redaction notes |
| `OrganizationLogo` | Consistent small logo treatment | About, Leadership, Achievements | logo metadata | Decorative or meaningful alt depending context |
| `ImageLightbox` | Optional evidence preview | Research/Achievements | image/pdf preview data | Must include focus management and keyboard close |

Avoid component proliferation. If `EvidenceCard` can cover credentials and speaking cards with variants, prefer one component.

## 16. Content / Data Architecture

Recommended future data files:

```text
src/data/assets.ts
src/data/testimonials.ts
```

Possible types:

```ts
export type PortfolioAsset = {
  id: string;
  src: string;
  originalVerifiedPath: string;
  title: string;
  category: "portrait" | "research" | "credential" | "speaking" | "logo" | "testimonial";
  alt: string;
  caption?: string;
  caveat?: string;
};
```

Do not move static portfolio evidence into Sanity. Sanity should remain for Blog articles unless there is a future explicit content-management requirement for portfolio evidence.

## 17. Page-by-Page Change Matrix

| Page | Existing State | Proposed Change | Assets | Priority | Risk | Recommendation |
|---|---|---|---|---|---|---|
| Homepage | Video-first, text/cards | Add compact testimonial preview; keep hero video-first | 3 testimonials | Strong improvement | Overcrowding | Implement after testimonial data exists |
| About | Initials placeholder, older academic wording | Add portrait, journey photo, corrected academic wording, short Early Foundations | portrait, journey photo, content note | Essential | Story bloat | Implement carefully |
| Experience | Strong timeline | No asset change unless verified employer logos arrive | none | Do not implement | Logo misuse | Leave unchanged |
| Projects | Conceptual previews | Do not force assets into projects | none, except research poster in research case | Do not implement | Misleading screenshots | Leave professional project cards unchanged |
| Project Detail | Reusable case study | Add research evidence only for research projects | SharpXR poster, VAMAE evidence | Optional | Overclaiming | Implement only for research projects |
| Research | Text and conceptual previews | Add research evidence cards/gallery | posters, certificates, conference photos | Essential | Photo album effect | Use 3-5 assets max |
| Skills | Skill/category cards | No asset integration | none | Do not implement | Clutter | Leave unchanged |
| Leadership | Cards and evidence links | Add teaching/community/speaking evidence | SQL flyer, I4G, selected flyers | Essential | Flyer clutter/privacy | Use selected cropped thumbnails |
| Achievements | Cards by category | Add credential hierarchy and selected previews | credentials, logos | Strong improvement | Certificate dump | Use cards/modal previews |
| Blog | CMS listing + newsletter | No asset changes | none | Do not implement | Scope creep | Leave unchanged |
| Blog Detail | CMS article template | No asset changes | none | Do not implement | CMS coupling | Leave unchanged |
| Contact | Form/contact cards | No asset changes | none | Do not implement | Distraction | Leave unchanged |
| Header/Footer | Nav/footer | No asset changes except verified social URLs later | none | Optional | Broken links | Leave for final audit |

## 18. Implementation Sequence

Recommended future Milestone 17D order:

1. Create typed asset/testimonial data and decide optimized public paths.
2. Copy only selected optimized assets into `public/assets/images/...`.
3. Update About first: portrait, journey photo, academic wording, concise Early Foundations.
4. Update Research: evidence cards and selected research visuals.
5. Update Leadership: teaching/community/speaking evidence.
6. Update Achievements: credential hierarchy and selected evidence previews.
7. Add homepage testimonial preview.
8. Optional research-project evidence on project detail pages.
9. Final privacy/redaction pass for flyers and certificates.
10. Responsive, accessibility, and visual QA across 320, 375, 390, 768, 1024, and 1440px.

## 19. Risks and Safeguards

Risks:

- Homepage becomes cluttered if testimonials, credentials, leadership, and research visuals all compete.
- Certificates can make the site feel like an archive rather than a senior portfolio.
- Flyers may expose third-party contact details.
- Research photos can accidentally imply event/venue/people relationships that are not verified.
- Old academic screenshot could conflict with final CGPA unless kept archival.
- Public candidates can be overused simply because they are approved.

Safeguards:

- Use fewer assets with clearer captions.
- Always include visible text explaining what an asset proves.
- Do not display verification-required photos.
- Do not display archival assets unless explicitly approved later.
- Crop/blur third-party contact details.
- Keep full testimonial text in data, but use short exact excerpts in cards.
- Avoid using certificates as hero imagery.

## 20. Questions Requiring Approval

1. Should the About page replace the initials placeholder with `1684348730491.jpg`, or should the image first be reviewed in-browser beside the current design?
2. Which 3-4 speaking/teaching assets should be selected for the Leadership page from the recommended shortlist?
3. Should credential evidence open in a lightbox/modal, or should cards remain text-first with no preview enlargement?
4. Should the homepage testimonial section use all three testimonials or only the two strongest excerpts?
5. Should `conference-05.jpg` be used publicly, or should Research use only `conference-04.jpg` plus poster evidence?
6. Are you comfortable with the Early Foundations subsection appearing on About, with only a light reference from Leadership?
---

## 21. Final Approval Decisions - Milestone 17C Closed

Status: Approved and closed for planning. These decisions supersede any earlier open questions in this document. Do not begin Milestone 17D until explicitly instructed.

### About Portrait and Journey Photography

Approved:

- `public_candidates/portraits/leading-general-portrait-candidate-1684348730491.jpg` is approved to replace the existing initials placeholder on the About page.
- Use an approximately 4:5 portrait crop with the face naturally centered.
- Preserve the original source image separately.
- During implementation, visually compare the result against the existing About design. If image quality or cropping materially weakens the page, report that rather than forcing the image.
- `public_candidates/photography/about-journey-photo-candidate-1692047100194.jpg` remains approved as the secondary About/journey photograph.

### Leadership Speaking / Teaching Selection

Approved initial display set:

1. `public_candidates/speaking_flyers/fundamentals-of-sql-teaching-september-2022.jpg`
2. `public_candidates/speaking_flyers/bit-1-0-breaking-into-tech-panel-march-2024.jpg`
3. `public_candidates/speaking_flyers/speaking-flyer-02-dsn-unn-data-and-ai-summit-march-2024.jpg`

Keep available but do not display initially:

- `public_candidates/speaking_flyers/speaking-flyer-07-nithub-ai-literacy-workshop.jpeg`

Implementation guardrail:

- Remove, crop, or blur unnecessary third-party phone numbers, email addresses, or contact details from public flyer previews.
- Preserve original evidence files unchanged.

### Evidence Preview Interaction

Approved:

- Use an accessible lightbox/modal for selected research posters and credential evidence.
- Cards must remain text-first.
- Evidence enlargement should be optional through a clearly labelled `View evidence` action.
- Do not force every credential to have a modal if its evidence does not add value.

Modal requirements:

- Keyboard operation.
- Escape to close.
- Focus management/trapping.
- Accessible title/label.
- Obvious close control.
- Responsive mobile behavior.

### Testimonials

Approved:

- Use all three verified testimonials: Kenechukwu Agbo, Chidubem Anyali, and Oluwafunto Salvador.
- Present them as a three-card desktop grid and stacked mobile layout.
- Use the exact approved excerpts from this plan.
- Preserve each complete recommendation in structured testimonial data.
- Do not rewrite direct quotations.
- Do not add recommender photographs.
- Use the general LinkedIn recommendations page as the supporting source: `https://www.linkedin.com/in/odelolasolomon/details/recommendations/`.
- Do not create a dedicated Testimonials page.

### Research Conference Photography

Approved:

- Use `public_candidates/research/conference-04-preferred-research-conference-candidate.jpg` initially.
- Keep `public_candidates/research/conference-05-preferred-research-conference-candidate.jpg` available but undisplayed unless visual QA shows the Research page genuinely benefits from a second conference photograph.
- Prioritize actual research evidence over generic conference photography:
  - SharpXR poster.
  - VAMAE evidence.
  - Alzheimer's poster.
- Do not invent conference/event identity.
- Do not identify other people appearing in photographs.

### Early Foundations

Approved:

- Add a concise Early Foundations subsection on About.
- About should contain the substantive formative story.
- Leadership may make only a light reference where appropriate.
- Do not duplicate the complete early story across both pages.
- Keep present-day AI/ML engineering, research, and technical leadership more visually prominent than secondary-school achievements.

### Updated Implementation Sequence After Approval

1. Create structured asset/testimonial data for the approved assets and quotes.
2. Prepare optimized public copies of approved images while preserving originals.
3. Implement About portrait, secondary journey image, corrected academic wording, and concise Early Foundations.
4. Implement Research evidence cards/lightbox with SharpXR, VAMAE, Alzheimer's poster, and `conference-04` only.
5. Implement Leadership teaching/speaking evidence with the three approved flyer assets after redaction/cropping.
6. Implement Achievements credential hierarchy with evidence preview only where it adds value.
7. Implement Homepage testimonials using all three exact excerpts.
8. Run privacy, accessibility, responsive, and visual QA before considering additional optional assets.

### Remaining Approval Questions

All 17C planning questions have now been answered for the initial implementation pass. Any future decisions should be handled during Milestone 17D visual QA, especially if a selected image weakens the page after in-browser review.

