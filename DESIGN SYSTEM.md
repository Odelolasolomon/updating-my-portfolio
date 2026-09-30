# Design System

## Approved Palette Supersedes Screenshot Colors

The original Figma screenshots remain authoritative for page structure, component composition, hierarchy, spacing, layout rhythm, and overall user experience. Their original dark navy/cyan color direction is no longer authoritative.

The final approved color palette below supersedes the screenshot colors and must be used for implementation.

## Visual Direction

The site uses a premium, bright technology-product visual system: sophisticated, spacious, precise, and credible. It should still feel like a senior AI/ML engineering portfolio, not a generic startup landing page.

Core traits:

- White-dominant page backgrounds.
- Electric blue for primary actions, active navigation, links, focus states, and brand elements.
- Vibrant orange used selectively for video controls, small highlights, emphasis, and occasional calls to action.
- Modern charcoal for headings, primary text, and selected contrasting sections.
- Soft light-blue and light-orange accents for low-intensity panels, tags, callouts, and hover states.
- Compact, information-rich sections.
- Technical imagery and diagrams.
- Thin borders, clean surfaces, and restrained shadows.
- Crisp charcoal and slate typography.
- Cards used for repeated items and framed tools, not for every page section.

Avoid reverting to the original dark navy and cyan scheme. Avoid making the entire site dark, using excessive gradients, adding unnecessary glow effects, or combining saturated blue and orange in large competing areas.

## Color Palette

Final approved palette:

| Token | Value | Usage |
|---|---:|---|
| `color-blue` | `#2563EB` | Primary buttons, links, active nav, brand accents |
| `color-orange` | `#F97316` | Video controls, selective highlights, emphasis CTAs |
| `color-white` | `#FFFFFF` | Dominant page/card background |
| `color-charcoal` | `#252B36` | Headings, body emphasis, selected contrast sections |
| `color-soft-bg` | `#F8F9FB` | Page background bands, quiet section backgrounds |
| `color-light-grey` | `#E8EDF3` | Borders, dividers, disabled surfaces |
| `color-secondary-text` | `#64748B` | Body copy, metadata, captions |
| `color-light-blue` | `#EFF6FF` | Blue-tinted cards, active tabs, subtle highlights |
| `color-light-orange` | `#FFF7ED` | Orange-tinted badges, video UI, warm callouts |

Recommended semantic tokens:

| Token | Value | Usage |
|---|---:|---|
| `background` | `#FFFFFF` | Primary surface |
| `background-subtle` | `#F8F9FB` | Alternating sections |
| `surface` | `#FFFFFF` | Cards, forms, menus |
| `surface-blue` | `#EFF6FF` | Light technical emphasis |
| `surface-orange` | `#FFF7ED` | Light warm emphasis |
| `foreground` | `#252B36` | Headings and primary text |
| `muted-foreground` | `#64748B` | Secondary text |
| `border` | `#E8EDF3` | Borders and dividers |
| `primary` | `#2563EB` | Primary actions and links |
| `accent` | `#F97316` | Selective highlight/action |

The original dark screenshots may still guide placement, density, and contrast relationships, but dark navy and cyan should be translated into this bright palette.

## Gradients And Effects

The original exports used dark-blue depth and technical glow. In the approved direction, these should become clean white/light-grey surfaces, light-blue panels, restrained charcoal overlays, and small blue/orange accent moments.

Implementation guidance:

- Use white as the default background.
- Use charcoal sections sparingly for intentional contrast, especially around video or technical media.
- Use subtle shadows for elevated cards and menus.
- Avoid decorative orbs, bokeh blobs, or generic portfolio gradients.
- Preserve readable contrast.

## Typography

Exact font family is not available from the raster exports. Recommended implementation:

- Use a modern sans family such as `Inter`, `Manrope`, or `Geist Sans`.
- Use a single cohesive type family unless a confirmed brand font is supplied.
- Use uppercase labels for metadata/category tags.
- Use compact line heights for cards and metadata.
- Use large, bold hero headings only in hero/page-title contexts.

Approximate hierarchy:

| Style | Usage |
|---|---|
| Hero H1 | Homepage main headline |
| Page H1 | Page titles like Projects, Research, Contact |
| Section Heading | Core Strengths, Academic Impact, Professional Certifications |
| Card Title | Project, article, role, certification names |
| Body | Paragraph copy |
| Metadata | Dates, categories, read times, tags, locations |
| Button Text | Compact semibold labels |

Rules:

- Letter spacing should remain `0` or very subtle for uppercase labels.
- Avoid viewport-width-based font scaling.
- Ensure mobile card text wraps without overflow.

## Layout System

Desktop:

- Reference width: `1440px`.
- Use a centered max-width content container, approximately `1180px` to `1240px`.
- Header spans page width with content constrained inside.
- Common desktop patterns: 3-column card grids, 2-column content/sidebar layouts, timeline/list sections, and full-width section bands without floating page-section cards.

Mobile:

- Reference width: `390px`.
- Use approximately `20px` side padding.
- Collapse grids to one column.
- Stack form/sidebar/content sections.
- Replace desktop nav with compact brand and menu.

## Shared Components

### Header

Desktop:

- Brand mark plus full name.
- Horizontal nav links.
- Active and hover states use electric blue with restrained treatment.
- Header should feel light, crisp, and integrated with white/soft-background pages.

Mobile:

- Compact brand label.
- Menu icon button.
- Expandable menu required, although open state is not supplied.

### Breadcrumb

Used on inner pages:

- `Home > About`
- `Home > Projects > HydraML Pipeline`
- `Home > Blog > Decentralized State Orchestration`

Breadcrumbs should be text links with muted separators and blue hover states.

### Footer

Shared across all pages:

- Brand summary.
- Navigation links.
- Knowledge links.
- Social icons.
- Copyright/legal line.

Footer should translate from the dark original into either a white/light-grey footer or a controlled charcoal footer. If charcoal is used, keep it intentional and limited to the footer band rather than turning the whole page dark.

### Buttons

Observed button/action types:

- Primary CTA: `Download Resume`, submit/contact actions.
- Secondary CTA: `Get in Touch`.
- Text/arrow link: `View Case Study`, `Read Article`, `Read Publication`, `Verify Credential`.
- Utility action: `Load More Projects`, pagination controls.

Primary buttons should use electric blue. Secondary buttons should use white/charcoal or light-blue treatments. Orange is reserved for video controls, small highlight badges, and occasional emphasis CTAs.

Use Lucide icons where appropriate for download, external link, arrow, mail, phone, menu, search, GitHub, and social-style actions if the exact brand icon is unavailable.

### Cards

Card families:

- Strength cards.
- Project cards.
- Publication cards.
- Experience role blocks.
- Skill category blocks and skill pills.
- Leadership/community cards.
- Certification/achievement cards.
- Blog/article cards.
- Contact information cards.

Card rules:

- Use small border radius, about `6px` to `8px`.
- Use thin light-grey borders.
- Use white surfaces over white or soft-background sections, relying on borders and subtle shadows.
- Use light-blue/light-orange accents for selected states only.
- Avoid nesting cards inside cards.
- Keep card content dense and aligned.

### Tags And Pills

Used for project technologies, publication topics, skill items, category labels, and metrics.

Tags should be compact, bordered, and readable at mobile sizes. Use light-blue tags for primary technical topics and light-orange tags only for special emphasis.

### Forms

Contact form fields:

- Name input.
- Email input.
- Subject select.
- Message textarea.
- Submit button.

Required states:

- Default, focus, error, disabled/loading, success.
- Accessible labels and validation.
- Electric-blue focus rings.
- Orange only for warm emphasis or warning states, not normal error styling unless intentionally chosen.

## Imagery Rules

- Do not use full screenshots as page backgrounds.
- Use individual image/video assets inside the intended component areas.
- Maintain aspect ratios for project thumbnails and article images.
- Architecture diagrams should be readable and not cropped aggressively.
- Homepage hero must be video-first and ready for the future intro video.
- Video section should use tasteful charcoal overlays, electric-blue branding, and carefully placed orange controls/highlights.

## Motion

Use motion lightly:

- Header/mobile menu open and close.
- Card hover lift/shadow.
- Section reveal on scroll, if subtle.
- Button hover/focus.
- In-page anchor scrolling.

Avoid heavy animation that fights the dense technical reading experience.

## Accessibility Rules

- Semantic headings per page.
- Keyboard-accessible navigation, filters, pagination, menus, and forms.
- Visible focus states.
- Alt text for all meaningful images.
- Form labels and error messages.
- Sufficient text contrast against bright and charcoal backgrounds.
- Reduced-motion support.
