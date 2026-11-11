---
name: Serambi Digital SMKN 2
colors:
  surface: '#fff8f8'
  surface-dim: '#f3d2d8'
  surface-bright: '#fff8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f2'
  surface-container: '#ffe8ec'
  surface-container-high: '#ffe1e6'
  surface-container-highest: '#fcdae1'
  on-surface: '#29161b'
  on-surface-variant: '#524346'
  inverse-surface: '#402b30'
  inverse-on-surface: '#ffecef'
  outline: '#847376'
  outline-variant: '#d7c1c4'
  surface-tint: '#8c4b5b'
  primary: '#501a2a'
  on-primary: '#ffffff'
  primary-container: '#6b3040'
  on-primary-container: '#e99aac'
  inverse-primary: '#ffb1c2'
  secondary: '#844f5b'
  on-secondary: '#ffffff'
  secondary-container: '#febac8'
  on-secondary-container: '#7a4753'
  tertiary: '#352a2d'
  on-tertiary: '#ffffff'
  tertiary-container: '#4c4043'
  on-tertiary-container: '#bdacaf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e0'
  primary-fixed-dim: '#ffb1c2'
  on-primary-fixed: '#390819'
  on-primary-fixed-variant: '#6f3444'
  secondary-fixed: '#ffd9df'
  secondary-fixed-dim: '#f8b5c2'
  on-secondary-fixed: '#350e19'
  on-secondary-fixed-variant: '#693844'
  tertiary-fixed: '#f1dee1'
  tertiary-fixed-dim: '#d4c2c5'
  on-tertiary-fixed: '#23191b'
  on-tertiary-fixed-variant: '#504446'
  background: '#fff8f8'
  on-background: '#29161b'
  surface-variant: '#fcdae1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  quote-editorial:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-uppercase:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.12em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  gutter-mobile: 1rem
  margin-mobile: 1rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3rem
---

## Brand & Style
This design system sets the visual benchmark for the official digital school bulletin board (*mading digital*) of SMKN 2 Bandar Lampung. It strikes a balance between academic dignity, vocational pride, and high-school vitality.

### Visual Style
- **Aesthetic Movement:** Soft Editorial Bento. Merges editorial publication poise (high-contrast serifs, deliberate typographic rhythm, pull quotes) with the structured utility of a modern modular bento grid.
- **Atmospheric Depth:** Frosted organic layers, paper-soft surfaces, and warm, tinted shadows that evoke curated magazine spreads rather than cold administrative portals.
- **Audience:** High school students, educators, alumni, and prospective parents seeking clear information, student achievements, and creative showcases.

## Colors
The color architecture draws from deep academic maroon softened by warm rosewater tones, creating an inviting, cultured, and distinctly school-grounded palette.

### Palette Tokens & Roles
- **Primary Maroon (`#6B3040`):** Anchor tone for institutional authority. Applied to high-level headings, primary call-to-action buttons, key navigation states, and the dominant footer.
  - *Primary Dark Hover (`#532532`):* Interactive pressed and hover states for primary controls.
- **Accent Dusty Rose (`#C98B98`):** Active borders, highlight pill tags, pinned badges, and featured laurels.
- **Accent Light (`#F6E3E6`):** Tonal card washes, quote containers, inactive tag pills, and subtle section backings.
- **Neutral Primary Text (`#2E1B20`):** Deep plum-black for high legibility across cards and editorial blocks.
- **Neutral Secondary Text (`#6F565C`):** Muted plum-gray for metadata, timestamps, author bylines, and subtitles.
- **Canvas Background (`#FBEFF0`):** Soft rose-tinted neutral base layer, enriched by flowing organic wave accents in `#F0CFD5` and `#E3B3BD` at 60% opacity.
- **Surface / Card (`#FDF7F7` at 90% opacity):** Frosted card body coupled with a delicate `1px` stroke in `#EBD0D5`.
- **System Feedback:** Success states resolve to `#3F8F6B` (laurel green); Error/Alert states resolve to `#B8434F` (crimson red).

## Typography
Typographic personality hinges on the dynamic interplay between the classic, high-contrast serif **Playfair Display** and the rational, crystal-clear grotesque **Inter**.

### Guidelines
- **Headlines & Mastheads:** Always set in `Playfair Display`. Use `font-style: italic` selectively on single accent words or student quotes to introduce editorial cadence.
- **Editorial Quotes & Student Voices:** Utilize `quote-editorial` (italicized Playfair Display) to elevate thought leadership, principal remarks, and poetry features.
- **Informational Body & Metadata:** Render all body paragraphs, article summaries, dates, and author bylines in `Inter` to preserve legibility against soft bento containers.
- **Badges & Category Pills:** Use `label-uppercase` in all caps with expanded letter spacing (`0.12em`) for institutional discipline and structural balance.

## Layout & Spacing
The layout follows a responsive 12-column bento-grid model capable of organizing varied bulletin media (articles, galleries, announcements, achievement polaroids).

### Breakpoints & Responsive Behavior
- **Desktop (1200px+):** 12-column fluid grid, `2rem` outer page margins, `1.5rem` gutters. Bento cards span multi-row modules (e.g., 8-col hero news + 4-col agenda stack).
- **Tablet (768px – 1199px):** 6-column fluid grid, `1.5rem` outer page margins, `1.25rem` gutters. Content cascades into vertical pairs.
- **Mobile (< 768px):** 2-column or single-stack fluid grid, `1rem` outer canvas margins, `1rem` gutters. Hero modules occupy full width; bento groups flatten into vertical swipeable lists.

### Organic Rhythm
Large sections are segmented by subtle horizontal SVG wave partitions tinted with `#F0CFD5` and `#E3B3BD` at 60% opacity, providing visual ease between content clusters.

## Elevation & Depth
Depth is tactile, light-permeable, and painterly, eschewing aggressive drop shadows in favor of tinted ambient warmth.

### Layering Philosophy
- **Base Canvas:** Solid `#FBEFF0` with ambient SVG wave backings.
- **Card Surfaces:** Semi-translucent `#FDF7F7` rendered at `90%` opacity with a uniform `1px` border in `#EBD0D5` and a soft backdrop blur (`backdrop-filter: blur(8px)`).
- **Primary Ambient Shadow:** `box-shadow: 0 8px 24px rgba(107, 48, 64, 0.12)`. The shadow adopts a diluted maroon tint rather than neutral carbon, harmonizing with the pink substrate.
- **Hover Transition:** On interactive cards, elevation blooms subtly to `box-shadow: 0 14px 32px rgba(107, 48, 64, 0.16)` while translating 2px along the Y-axis.

## Shapes
Shapes express a deliberate balance between structured editorial panes and gentle, welcoming curves.

### Corner Radius Hierarchy
- **Bento & Feature Cards:** Uniform `24px` (`rounded-xl` equivalent in this system).
- **Card Images & Inner Media Frames:** `16px` (`rounded-lg`), inset neatly within parent card borders.
- **Controls & Metadata Tags:** Pill curvature (`border-radius: 999px`) applied strictly to buttons, navigation tabs, category badges, and quick-filter chips.
- **Student Polaroid Cards:** Flat bottom with rounded-top (`16px 16px 4px 4px`) to preserve authentic photographic proportions while honoring the system's softness.

## Components

### 1. School Header & Masthead
- **Emblem Display:** Circular official SMKN 2 emblem framed by a `2px` border in `#C98B98` and a subtle halo of `#F6E3E6`.
- **Title Block:** Serif title ("SMKN 2 BANDAR LAMPUNG") paired with a secondary sans-serif tracker ("Mading Digital Vokasi Unggul").
- **Container:** Suspended frosted bar with `backdrop-filter: blur(12px)`, pinned to the top on scroll.

### 2. Pill Navigation Bar
- **Base Wrap:** Centered floating container, background `#F6E3E6` at 80% opacity, `padding: 6px`, radius `999px`.
- **Active State:** Background `#6B3040`, text color `#FFFFFF`, soft shadow `0 4px 12px rgba(107,48,64,0.2)`.
- **Rest/Hover State:** Text `#6F565C`; transitions to `#2E1B20` with a hover background in `#FDF7F7`.

### 3. Editorial Bento Cards
- **Structure:** Card surface `#FDF7F7` (90% opacity), `1px` border `#EBD0D5`, radius `24px`, ambient shadow.
- **Category Badge:** Upper left or right corner, pill-shaped, background `#F6E3E6`, text `#6B3040`, font `label-uppercase`.
- **Image Treatment:** Inset by 12px or clipped flush to top with `16px` inner radius.

### 4. Student Achievement Polaroid Cards
- **Visual Concept:** Reminiscent of a physical bulletin pin-up with academic laurels.
- **Card Body:** Crisp `#FFFFFF` card with bottom-weighted white margin.
- **Accents:** Dual subtle laurel branch iconography in `#C98B98` embracing the student's portrait or distinction badge.
- **Typography:** Student name in `headline-sm` with major/class in `body-sm` (`#6F565C`).

### 5. News & Editorial Feed Cards
- **Layout:** Horizontal split on desktop (thumbnail left 35%, content right 65%), stacked on mobile.
- **Metadata Row:** Date, reading duration, and category chip in `label-md`.

### 6. Buttons & Interactive Controls
- **Primary Button:** Background `#6B3040`, text `#FFFFFF`, radius `999px`, hover state `#532532`.
- **Secondary Button:** Outlined `1.5px` `#C98B98`, background transparent, text `#6B3040`, hover background `#F6E3E6`.
- **Inputs & Search:** Inset surface `#FDF7F7`, border `1px` `#EBD0D5`, active focus ring `2px` `#C98B98` with `0 0 0 3px rgba(201,139,152,0.2)`.

### 7. Full-Width Institutional Footer
- **Background:** Solid academic maroon (`#6B3040`), text colors `#FDF7F7` and `#C98B98`.
- **Motto Bar:** Centered, prominent letter-spaced banner featuring:
  `KREATIVITAS • INFORMASI • INSPIRASI`
  rendered in `label-uppercase` with high tracking (`letter-spacing: 0.25em`).
- **Footer Links & Copyright:** Clean two-tier metadata acknowledging student editorial crew and official vocational school links.