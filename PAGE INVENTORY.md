# Page Inventory

## Canonical Routes

| # | Page | Route | Type | Mobile Reference |
|---:|---|---|---|---|
| 01 | Home | `/` | Static page with dynamic content previews | Supplied |
| 02 | About | `/about` | Static profile page | Supplied |
| 03 | Experience | `/experience` | Static/timeline data page | Supplied |
| 04 | Projects Listing | `/projects` | Listing/filter page | Supplied |
| 05 | Project Detail | `/projects/[slug]` | Reusable case-study template | Supplied |
| 06 | Research | `/research` | Publications/research page | Inferred |
| 07 | Skills | `/skills` | Skills matrix page | Inferred |
| 08 | Leadership | `/leadership` | Leadership/community page | Inferred |
| 09 | Achievements | `/achievements` | Awards/certifications page | Inferred |
| 10 | Blog Listing | `/blog` | Article listing/search page | Inferred |
| 11 | Blog Post | `/blog/[slug]` | Reusable article template | Supplied |
| 12 | Contact | `/contact` | Contact form and direct links | Supplied |

## Global Navigation

Primary nav links:

- Home: `/`
- About: `/about`
- Experience: `/experience`
- Projects: `/projects`
- Research: `/research`
- Skills: `/skills`
- Leadership: `/leadership`
- Achievements: `/achievements`
- Blog: `/blog`
- Contact: `/contact`

Footer nav repeats selected links in two groups:

- Navigation: Home, About, Experience, Projects.
- Knowledge: Research, Skills, Blog, Contact.

## Page Requirements

### `/`

Required sections:

- Video-first hero.
- Professional headline and role line.
- Resume/contact CTAs.
- Core strengths.
- Featured projects.
- Scholarly publications preview.
- Career path preview.
- Credentials/accolades preview.
- Footer.

Functional requirements:

- Intro video placeholder now, real video later.
- `Download Resume` must link to supplied resume asset.
- `Get in Touch` links to `/contact`.
- Featured project cards link to `/projects/[slug]`.
- Publication links must be functional once URLs are supplied.

### `/about`

Required sections:

- Breadcrumb.
- Profile/visual area.
- Who I Am.
- My Journey.
- Engineering Philosophy.
- Operational Snapshot.
- Academic Credentials.
- Personal Exploration.
- Footer.

Functional requirements:

- Content must be confirmed by user before final publication.
- Profile/visual image asset needed if the abstract/person visual should be real.

### `/experience`

Required sections:

- Breadcrumb.
- Professional Experience intro.
- Role timeline/list.
- Responsibilities and outcomes.
- Technology chips.
- Metric highlights.
- Research positions/academic milestones.
- Footer.

Functional requirements:

- Experience entries should be data-driven.
- Mobile layout should be shorter/stacked like the supplied mobile reference.

### `/projects`

Required sections:

- Breadcrumb.
- Projects intro.
- Category filter bar.
- Project grid.
- Load more action.
- Footer.

Functional requirements:

- Project cards are clickable.
- `View Case Study` navigates to `/projects/[slug]`.
- Filters should operate client-side unless the content volume later requires server-side filtering.
- Load-more behavior can reveal more local data or become pagination if the project list grows.

### `/projects/[slug]`

Required sections:

- Breadcrumb.
- Project metadata.
- Hero image/media.
- Executive summary.
- Quick specs.
- Problem statement.
- Objectives and requirements.
- Role and contributions.
- Architecture and system design.
- Technologies and implementation.
- Engineering decisions/challenges.
- Screenshots and demos.
- Results and impact.
- Lessons learned.
- Related case studies.
- Footer.

Functional requirements:

- Reusable template for multiple case studies.
- Supports architecture diagrams, screenshots, videos, code links, GitHub links, demo links, and substantial long-form content.
- Desktop may use a sidebar/table of contents.
- Mobile should remove/stack sidebars and prioritize content readability.

### `/research`

Required sections:

- Breadcrumb.
- Research intro.
- Domains of discovery.
- Academic impact/publications.
- Academic network.
- Footer.

Functional requirements:

- Publication links must be functional.
- Publication data must be user-supplied/verified.
- Code and supplementary material links should be optional fields.

### `/skills`

Required sections:

- Breadcrumb.
- Skills intro.
- AI & Machine Learning.
- Cloud & Infrastructure.
- MLOps & DevOps.
- Programming Languages.
- Databases & Data Pipelines.
- Software Engineering.
- Footer.

Functional requirements:

- Skills should be managed from structured data.
- Skill cards/pills should support names, icons, proficiency labels, and optional notes.

### `/leadership`

Required sections:

- Breadcrumb.
- Leadership & Community intro.
- Vision & Management.
- Sharing Knowledge.
- Ecosystem Growth.
- Credentials.
- Footer.

Functional requirements:

- Leadership roles and community impact should be content-managed.
- Any public talk/open-source links should be optional and supplied by user.

### `/achievements`

Required sections:

- Breadcrumb.
- Achievements intro.
- Featured recognition/fellowship.
- Awards & Recognition.
- Professional Certifications.
- Scholarship/Foundation.
- Fellowships & Research Grants.
- Footer.

Functional requirements:

- Credential verification links must be real URLs.
- Credential IDs and dates require confirmation.

### `/blog`

Required sections:

- Breadcrumb.
- Articles & Insights intro.
- Search input.
- Featured article.
- Article grid.
- Pagination.
- Footer.

Functional requirements:

- Blog cards navigate to `/blog/[slug]`.
- Search by title/topic/tag.
- Pagination or load more.
- Mobile layout inferred from other mobile references because no mobile blog-list screenshot is supplied.

### `/blog/[slug]`

Required sections:

- Breadcrumb.
- Article metadata.
- Author block.
- Hero image.
- Article body.
- Table of contents.
- Newsletter/stay-updated callout.
- Figures with captions.
- Code snippets.
- Quote/callout blocks.
- Author bio.
- Related articles.
- Footer.

Functional requirements:

- Reusable article template.
- Supports Markdown/MDX-style article content.
- In-page table of contents.
- Related articles.
- Optional newsletter integration.

### `/contact`

Required sections:

- Breadcrumb.
- Contact intro.
- Contact form.
- Direct communication details.
- Networks & citations.
- Closing note.
- Footer.

Functional requirements:

- Form validation.
- Submission handler to be selected later.
- Email, phone, and social/profile links must be verified.
- Subject dropdown values should be defined.

## Content Model Recommendation

Use structured TypeScript data or MDX depending on content type:

- `projects`: structured metadata plus MDX/body sections for case studies.
- `publications`: structured data with links and optional code/supplementary fields.
- `experience`: structured timeline data.
- `skills`: structured grouped skill data.
- `achievements`: structured awards/certifications/fellowships.
- `blog`: MDX articles with frontmatter.
- `site`: shared profile, socials, footer, navigation, SEO defaults.

