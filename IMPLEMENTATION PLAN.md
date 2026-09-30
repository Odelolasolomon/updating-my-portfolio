# Implementation Plan

## Technical Stack

- Next.js with TypeScript.
- Tailwind CSS.
- React reusable components.
- Motion for subtle animation.
- Lucide React icons.
- MDX or structured content files for long-form project and blog pages.
- Responsive, accessible, semantic layouts.

Current setup direction follows the official Next.js App Router pattern with TypeScript and Tailwind support, and Tailwind theme tokens will be defined around the approved palette.

## Approved Visual Direction For Implementation

The original Figma screenshots remain authoritative for page structure, layout, component composition, content hierarchy, spacing, and responsive behavior. The screenshot colors are not authoritative anymore.

Implementation must use the final approved bright palette:

- Electric Blue: `#2563EB`
- Vibrant Orange: `#F97316`
- Pure White: `#FFFFFF`
- Modern Charcoal: `#252B36`
- Soft Background: `#F8F9FB`
- Light Grey: `#E8EDF3`
- Secondary Text: `#64748B`
- Light Blue Accent: `#EFF6FF`
- Light Orange Accent: `#FFF7ED`

White should dominate the website. Electric blue should drive primary UI actions and active states. Orange should be selective, mainly for video controls, small highlights, and occasional emphasis. Charcoal should anchor headings, primary text, and selected contrast areas. Do not recreate the original dark navy/cyan site.

## Prepared Folder Structure

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
      Header.tsx
      MobileMenu.tsx
      Footer.tsx
      Breadcrumbs.tsx
      PageShell.tsx
    ui/
      Button.tsx
      Card.tsx
      Tag.tsx
      SectionHeader.tsx
      Metric.tsx
      FormField.tsx
      Pagination.tsx
    home/
      HeroVideo.tsx
      StrengthCard.tsx
      FeaturedProjects.tsx
    projects/
      ProjectCard.tsx
      ProjectFilters.tsx
      ProjectHero.tsx
      ProjectSpecs.tsx
      CaseStudySection.tsx
      RelatedProjects.tsx
    blog/
      ArticleCard.tsx
      ArticleHero.tsx
      ArticleBody.tsx
      TableOfContents.tsx
      RelatedArticles.tsx
    data-display/
      ExperienceTimeline.tsx
      PublicationCard.tsx
      SkillGroup.tsx
      AchievementCard.tsx
  content/
    projects/
    blog/
  data/
    navigation.ts
    profile.ts
    projects.ts
    publications.ts
    experience.ts
    skills.ts
    achievements.ts
    leadership.ts
  lib/
    content.ts
    seo.ts
    routes.ts
public/
  assets/
    images/
    video/
    documents/
```

## Development Milestones

### Milestone 0: Project Setup

- Confirm package manager and Next.js version.
- Configure TypeScript, Tailwind, Motion, and Lucide React.
- Add global CSS variables and Tailwind theme tokens using the approved bright palette.
- Add route constants, profile placeholders, and shared metadata.
- Create reusable component architecture without implementing full page content.

### Milestone 1: Shared Design System And Homepage

- Build global layout, header, mobile menu, footer, breadcrumbs, buttons, cards, tags, metrics, and form primitives.
- Build homepage with the original video-first hero structure, adapted to the approved bright palette.
- Use placeholders only where real user assets are pending.
- Compare desktop `1440px` and mobile `390px` browser screenshots against `01 Home` references, accounting for the approved color changes.

### Milestone 2: Core Profile Pages

- Build About, Experience, Skills.
- Implement responsive behavior from supplied About/Experience mobile references and inferred Skills mobile layout.
- Validate section hierarchy, spacing, and footer consistency.

### Milestone 3: Projects System

- Build `/projects` listing with filters and cards.
- Build `/projects/[slug]` reusable case-study template.
- Support project hero media, architecture diagrams, screenshots, videos, GitHub/demo links, metrics, and related projects.
- Compare against desktop and mobile references for pages 04 and 05.

### Milestone 4: Research, Leadership, Achievements

- Build Research page with publication data and external links.
- Build Leadership page.
- Build Achievements page with credential verification links.
- Derive mobile layouts from the established mobile design system and clearly document them as inferred.

### Milestone 5: Blog System

- Build `/blog` listing with search and pagination.
- Build `/blog/[slug]` article template with table of contents, code blocks, figures, newsletter callout, author bio, and related articles.
- Compare Blog Post against supplied desktop/mobile references.
- Infer Blog Listing mobile layout.

### Milestone 6: Contact And Form Handling

- Build Contact page from desktop/mobile references.
- Add accessible form validation.
- Decide and implement submit target: email service, API route, or third-party form endpoint.
- Verify email/phone/social links.

### Milestone 7: QA And Visual Comparison

- Capture browser screenshots at matching widths: desktop `1440px`, mobile `390px`, and Experience mobile `395px`.
- Compare against supplied PNG references.
- Fix spacing, alignment, text scale, image aspect ratios, and responsive stacking.
- Run accessibility checks and keyboard navigation review.
- Run production build.

## Architecture Notes

### Routing

Use Next.js App Router with true multipage routes. Do not collapse all sections into the homepage.

### Content Management

Initial version can use local structured data and MDX:

- Structured TypeScript for navigation, profile, skills, publications, achievements, and experience.
- MDX for blog posts and project case studies if rich content is needed.
- Project and blog slugs should be generated from content metadata.

### Reusable Templates

Reusable templates needed:

- Project case study page.
- Blog article page.
- Listing grids.
- Publication cards.
- Timeline/experience rows.
- Metric rows.
- Footer/header.

### Accessibility

Build with semantic landmarks:

- `header`, `nav`, `main`, `section`, `article`, `footer`.
- One H1 per page.
- Keyboard-friendly mobile menu.
- Skip link recommended.
- Reduced-motion media query.
- Alt text for all project/article/diagram images.

### Motion

Use Motion only where it supports clarity:

- Mobile menu transition.
- Subtle card hover.
- Section entrance animations with reduced-motion support.
- Smooth table-of-contents navigation.

## Verification Plan

Implementation should be verified by visual comparison, not by eyeballing components in isolation.

Required comparisons:

- Desktop and mobile Home.
- Desktop and mobile About.
- Desktop and mobile Experience.
- Desktop and mobile Projects Listing.
- Desktop and mobile Project Detail.
- Desktop Research, Skills, Leadership, Achievements, Blog Listing.
- Desktop and mobile Blog Post.
- Desktop and mobile Contact.

For pages without mobile references, compare against the inferred mobile rules documented in `DESIGN ANALYSIS.md` and `DESIGN SYSTEM.md`.

## Current Stop Point

At this stage, only documentation updates and project foundation are approved. Do not implement the homepage or all 12 pages yet.

The next milestone, after explicit user approval, is implementing the shared design system and homepage, then comparing browser screenshots against the original Figma reference while applying the approved color changes.
