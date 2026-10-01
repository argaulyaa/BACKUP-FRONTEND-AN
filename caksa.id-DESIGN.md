---
version: alpha
name: Caksa
description: |
  CAKSA's design system projects technical precision, institutional credibility,
  and high-altitude ambition through a carefully controlled modernist aesthetic.
  The visual language combines bold, ultra-heavy typographic statements (Archivo
  Black at display scales with aggressive negative letter-spacing) against a
  dark, sophisticated palette anchored by deep navy and punctuated by a warm,
  energetic orange accent. The experience feels forward-focused and
  confident—marked by sharp edges, flat surfaces, and deliberate use of color
  blocking rather than gradients. Motion is restrained and purposeful: subtle
  hover effects employ grayscale removal, micro-translations, and restrained
  scaling to signal interactivity without distraction. The overall impression is
  of an elite research organization speaking with authority to a global
  audience.
source:
  url: "https://caksa.id"
  pagesAnalyzed: 1
  extractedAt: 2026-10-01
  tokensMeasured: true
colors:
  primary: "#101827"
  canvas: "#0F1B33"
  ink: "#FFFFFF"
  body: "#F8F7F3"
  muted: "#D1D6DF"
  faint: "#101827"
  hairline: "#C8CCD1"
  accent-1: "#F4841E"
typography:
  display-xxl:
    fontFamily: "Archivo Black"
    fontSize: 328.32px
    fontWeight: 400
    lineHeight: 0.7
    letterSpacing: -47.61px
  display-xl:
    fontFamily: "Archivo Black"
    fontSize: 133.92px
    fontWeight: 400
    lineHeight: 0.76
    letterSpacing: -14.73px
  display-lg:
    fontFamily: "Archivo Black"
    fontSize: 126.72px
    fontWeight: 400
    lineHeight: 0.77
    letterSpacing: -13.94px
  display-md:
    fontFamily: "Archivo Black"
    fontSize: 89.28px
    fontWeight: 400
    lineHeight: 0.78
    letterSpacing: -9.82px
  display-sm:
    fontFamily: "Archivo Black"
    fontSize: 87.84px
    fontWeight: 400
    lineHeight: 0.7
    letterSpacing: -8.78px
  display-xs:
    fontFamily: "Archivo Black"
    fontSize: 43.2px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -4.32px
  heading:
    fontFamily: "Archivo Black"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: -3.84px
  body-xl:
    fontFamily: "Barlow Condensed"
    fontSize: 25.2px
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: 0px
  body-lg:
    fontFamily: "Barlow Condensed"
    fontSize: 17.6px
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: 0.88px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: 400
    lineHeight: 0.72
    letterSpacing: 0px
  body-sm:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0px
  body-sm-loose:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0px
  body-sm-tight:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  caption:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0px
  code-md:
    fontFamily: "DM Mono"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  code-md-2:
    fontFamily: "DM Mono"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.5px
  code-sm:
    fontFamily: "DM Mono"
    fontSize: 9px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.9px
  code-sm-tight:
    fontFamily: "DM Mono"
    fontSize: 9px
    fontWeight: 400
    lineHeight: 0.72
    letterSpacing: 0.45px
  code-xs:
    fontFamily: "DM Mono"
    fontSize: 8px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.88px
  code-xs-tight:
    fontFamily: "DM Mono"
    fontSize: 8px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0.64px
rounded:
  none: 0px
spacing:
  xxs: 8px
  xs: 12px
  sm: 20px
  md: 24px
  lg: 28px
  xl: 32px
  xxl: 36px
  xxxl: 40px
  section: 44px
  band: 56px
shadows:
  sm: "rgba(15, 27, 51, 0.1) 0px 10px 30px 0px"
elevationStrategy: single-tier
themes:
  derived: light   # the other theme is the site's measured palette
  light:
    bg: "#FBFBFB"
    surface: "#F1F1F1"
    surfaceRaised: "#E9E9E9"
    text: "#111112"
    textMuted: "#737374"
    border: "#D8D8D8"
    accent: "#101827"
    accentFg: "#FFFFFF"
    focusRing: "#101827"
    elevation: shadow
  dark:
    bg: "#0F1B33"
    surface: "#0F1A31"
    surfaceRaised: "#222C41"
    text: "#FFFFFF"
    textMuted: "#F8F7F3"
    border: "#C8CCD1"
    accent: "#4568A9"
    accentFg: "#FFFFFF"
    focusRing: "#101827"
    elevation: "border+surface"
gradients:
  - context: hero
    kind: radial
    value: "radial-gradient(rgba(11, 21, 42, 0.38) 0.7px, rgba(0, 0, 0, 0) 0.7px)"
  - context: hero
    kind: linear
    value: "linear-gradient(rgba(255, 255, 255, 0.06) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, rgba(0, 0, 0, 0) 1px)"
  - context: section
    kind: linear
    value: "linear-gradient(rgba(0, 0, 0, 0) 38%, rgba(8, 15, 29, 0.92))"
components:
  button-filled:
    textColor: "{colors.canvas}"
    height: 55.6094px
    padding: "14px 18px 14px 18px"
    fontSize: 12.8px
    fontFamily: "Barlow Condensed"
    fontWeight: 700
    lineHeight: 1.5
    backgroundColor: "{colors.accent-1}"
  button-text:
    typography: "{typography.code-sm}"
    textColor: "rgb(11, 21, 42)"
    height: 37.5px
    padding: "12px 0px 12px 38px"
  button-text-lg:
    textColor: "{colors.ink}"
    height: 46px
    padding: "10px 0px 10px 16px"
    fontSize: 16px
    fontFamily: Manrope
    fontWeight: 400
    lineHeight: 1.5
  card:
    textColor: "rgb(11, 21, 42)"
    fontSize: 16px
    fontFamily: Manrope
    fontWeight: 400
    lineHeight: 1.5
  card-sm:
    textColor: "{colors.ink}"
    fontSize: 16px
    boxShadow: "rgba(15, 27, 51, 0.1) 0px 10px 30px 0px"
    fontFamily: Manrope
    fontWeight: 400
    lineHeight: 1.5
  navigation:
    textColor: "rgb(11, 21, 42)"
    padding: "0px 0px 34px 0px"
    fontSize: 16px
    fontFamily: Manrope
    fontWeight: 400
    lineHeight: 1.5
    backgroundColor: "{colors.accent-1}"
  footer:
    textColor: "{colors.ink}"
    border: "1px solid rgba(255, 255, 255, 0.18)"
    padding: "0px 57.6px 30px 57.6px"
    fontSize: 16px
    fontFamily: Manrope
    fontWeight: 400
    lineHeight: 1.5
    backgroundColor: "rgb(11, 21, 42)"
  link:
    typography: "{typography.display-xxl}"
    textColor: "rgb(198, 203, 211)"
  link-sm:
    textColor: "rgb(11, 21, 42)"
    border: "1px solid rgb(11, 21, 42)"
    fontSize: 16px
    fontFamily: "Barlow Condensed"
    fontWeight: 700
    lineHeight: 0.85
    rounded: "50%"
states:
  nav-hover:
    target: nav
    state: hover
    opacity: 1
  link-hover:
    target: link
    state: hover
    transform: "translate(3px, -3px)"
    backgroundColor: "rgb(255, 156, 66)"
  other-hover:
    target: other
    state: hover
    filter: "grayscale(0)"
  card-hover:
    target: card
    state: hover
    filter: "grayscale(0)"
    transform: "scale(1.06)"
  button-hover:
    target: button
    state: hover
    textColor: "rgb(11, 21, 42)"
breakpoints:
  - width: 375
    containerWidth: 345
    gridColumns: 2
    navLinksVisible: 7
    menuToggleVisible: true
    headingPx: 60
    bodyPx: 16
    sectionPaddingX: 15
  - width: 768
    containerWidth: 707
    gridColumns: 4
    navLinksVisible: 7
    menuToggleVisible: true
    headingPx: 71
    bodyPx: 16
    sectionPaddingX: 31
  - width: 1024
    containerWidth: 942
    gridColumns: 4
    navLinksVisible: 7
    menuToggleVisible: true
    headingPx: 95
    bodyPx: 16
    sectionPaddingX: 41
  - width: 1280
    containerWidth: 1178
    gridColumns: 4
    navLinksVisible: 7
    menuToggleVisible: true
    headingPx: 119
    bodyPx: 16
    sectionPaddingX: 51
  - width: 1440
    containerWidth: 1325
    gridColumns: 4
    navLinksVisible: 7
    menuToggleVisible: true
    headingPx: 134
    bodyPx: 16
    sectionPaddingX: 58
coverage:
  statesFound: 30
  gradientsFound: 3
  rolesUnassigned: 1
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: false
  semanticRampDeclared: false
---

```tokens
colors:
  primary: '#101827'
  accent-1: '#F4841E'
  canvas: '#0F1B33'
  ink: '#FFFFFF'
  body: '#F8F7F3'
  muted: '#D1D6DF'
  hairline: '#C8CCD1'

typography:
  display-xxl:
    size: 328.32px
    weight: 400
    lineHeight: 0.7
    letterSpacing: -47.61px
    family: 'Archivo Black'
  display-xl:
    size: 133.92px
    weight: 400
    lineHeight: 0.76
    letterSpacing: -14.73px
    family: 'Archivo Black'
  display-lg:
    size: 126.72px
    weight: 400
    lineHeight: 0.77
    letterSpacing: -13.94px
    family: 'Archivo Black'
  display-md:
    size: 89.28px
    weight: 400
    lineHeight: 0.78
    letterSpacing: -9.82px
    family: 'Archivo Black'
  display-sm:
    size: 87.84px
    weight: 400
    lineHeight: 0.7
    letterSpacing: -8.78px
    family: 'Archivo Black'
  display-xs:
    size: 43.2px
    weight: 400
    lineHeight: 1.5
    letterSpacing: -4.32px
    family: 'Archivo Black'
  heading:
    size: 32px
    weight: 700
    lineHeight: 1.5
    letterSpacing: -3.84px
    family: 'Manrope'
  body-xl:
    size: 25.2px
    weight: 600
    lineHeight: 0.9
    letterSpacing: 0px
    family: 'Barlow Condensed'
  body-lg:
    size: 17.6px
    weight: 600
    lineHeight: 0.9
    letterSpacing: 0.88px
    family: 'Barlow Condensed'
  body-md:
    size: 16px
    weight: 400
    lineHeight: 0.72
    letterSpacing: 0px
    family: 'Manrope'
  body-sm-loose:
    size: 13px
    weight: 400
    lineHeight: 1.8
    letterSpacing: 0px
    family: 'Manrope'
  body-sm:
    size: 13px
    weight: 400
    lineHeight: 1.7
    letterSpacing: 0px
    family: 'Manrope'
  body-sm-tight:
    size: 13px
    weight: 400
    lineHeight: 1.6
    letterSpacing: 0px
    family: 'Manrope'
  caption:
    size: 12px
    weight: 400
    lineHeight: 1.7
    letterSpacing: 0px
    family: 'Manrope'
  code-xs-tight:
    size: 8px
    weight: 400
    lineHeight: 1.55
    letterSpacing: 0.64px
    family: 'DM Mono'
  code-xs:
    size: 8px
    weight: 400
    lineHeight: 1.5
    letterSpacing: 0.72px
    family: 'DM Mono'
  code-sm:
    size: 9px
    weight: 400
    lineHeight: 1.5
    letterSpacing: 0.81px
    family: 'DM Mono'
  code-md:
    size: 10px
    weight: 400
    lineHeight: 1.5
    letterSpacing: 0px
    family: 'DM Mono'
  code-md-2:
    size: 10px
    weight: 400
    lineHeight: 1.5
    letterSpacing: 0.5px
    family: 'DM Mono'

spacing:
  xxs: 8px
  xs: 12px
  sm: 20px
  md: 24px
  lg: 28px
  xl: 32px
  xxl: 36px
  xxxl: 40px
  section: 44px
  band: 56px

rounded:
  none: 0px

shadows:
  sm: 'rgba(15, 27, 51, 0.1) 0px 10px 30px 0px'

opacity:
  high: 0.75
  medium: 0.28
  low: 0.12

zIndex:
  base: 1
  raised: 2
  overlay: 3
  sticky: 4
  dropdown: 20
  modal: 40
  toast: 50
  top: 90

gradients:
  heroRadial: 'radial-gradient(rgba(11, 21, 42, 0.38) 0.7px, rgba(0, 0, 0, 0) 0.7px)'
  heroLinear: 'linear-gradient(rgba(255, 255, 255, 0.06) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, rgba(0, 0, 0, 0) 1px)'
  sectionLinear: 'linear-gradient(rgba(0, 0, 0, 0) 38%, rgba(8, 15, 29, 0.92))'

breakpoints:
  mobile: 375px
  tablet: 768px
  desktop: 1024px
  wide: 1280px
  ultraWide: 1440px
```

# Design System Inspired by CAKSA UAV

## 1. Visual Theme & Atmosphere

CAKSA's design system projects technical precision, institutional credibility, and high-altitude ambition through a carefully controlled modernist aesthetic. The visual language combines bold, ultra-heavy typographic statements (Archivo Black at display scales with aggressive negative letter-spacing) against a dark, sophisticated palette anchored by deep navy and punctuated by a warm, energetic orange accent. The experience feels forward-focused and confident—marked by sharp edges, flat surfaces, and deliberate use of color blocking rather than gradients. Motion is restrained and purposeful: subtle hover effects employ grayscale removal, micro-translations, and restrained scaling to signal interactivity without distraction. The overall impression is of an elite research organization speaking with authority to a global audience.

**Key Characteristics**
- Ultra-condensed, high-contrast typography with extreme negative letter-spacing on display sizes
- Dark navy (`{colors.canvas}` — `#0F1B33`) as the dominant surface, offset by warm orange accent (`{colors.accent-1}` — `#F4841E`)
- Sharp, unrounded corners across all interactive components (0px border-radius)
- Single, subtle elevation shadow applied sparingly to card elements
- Motion constrained to 2–3px micro-translations and modest scale shifts on hover
- Monochromatic color blocking over gradual transitions; depth through surface color changes, not layered shadows
- Generous negative space and section-scale padding reinforce breathing room and premium feel

## 2. Color Palette & Roles

### Primary
- **Primary Brand** (`{colors.primary}` — `#101827`): Dominant accent for CTAs, brand mark, active states, and primary UI elements. A deep, near-black navy that grounds the system.

### Accent Colors
- **Secondary Accent / Decorative** (`{colors.accent-1}` — `#F4841E`): Warm, saturated orange used for call-to-action buttons, highlights, and navigation activations. Carries no semantic meaning but acts as the visual signature and energy point of the interface.

### Interactive
- **Canvas Background** (`{colors.canvas}` — `#0F1B33`): The default page background and primary surface. A rich, dark blue-black that defines the system's nocturnal, technical character.
- **Surface / Ink** (`{colors.ink}` — `#FFFFFF`): Pure white used for primary headings and text on dark surfaces.

### Neutral Scale
- **Body / Secondary Text** (`{colors.body}` — `#F8F7F3`): Warm off-white used for body copy and secondary messaging.
- **Muted / Tertiary Text** (`{colors.muted}` — `#D1D6DF`): Light gray for captions, metadata, and de-emphasized copy.
- **Hairline / Border** (`{colors.hairline}` — `#C8CCD1`): Very light gray reserved for 1px dividers, borders, and subtle stroke elements.

### Surface & Borders
- **Footer Surface** (`#0B152A`): Slightly darker navy than canvas, creating subtle depth in the footer component.
- **Card Surface / Overlay** (`#151F3F`, `#16263F`): Marginally lighter variants of canvas applied to cards and overlays to create visual hierarchy without changing hue.

## 3. Typography Rules

### Font Family

**Display / Heading Font:** Archivo Black
Fallback: `'Archivo Black', sans-serif`

**Body / UI Font:** Manrope
Fallback: `'Manrope', sans-serif`

**Accent / Subtitle Font:** Barlow Condensed
Fallback: `'Barlow Condensed', sans-serif`

**Code / Technical Font:** DM Mono
Fallback: `'DM Mono', monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Display XXL | Archivo Black | 328.32px | 400 | 0.7 | −47.61px | Ultra-massive hero display; extreme condensation |
| Display XL | Archivo Black | 133.92px | 400 | 0.76 | −14.73px | Primary page headings; h1-equivalent |
| Display LG | Archivo Black | 126.72px | 400 | 0.77 | −13.94px | Secondary headings; h2-equivalent |
| Display MD | Archivo Black | 89.28px | 400 | 0.78 | −9.82px | Section emphasis display |
| Display SM | Archivo Black | 87.84px | 400 | 0.7 | −8.78px | Compact display use |
| Display XS | Archivo Black | 43.2px | 400 | 1.5 | −4.32px | Small display; h3-equivalent |
| Heading | Manrope | 32px | 700 | 1.5 | −3.84px | Subheadings and section titles |
| Body XL | Barlow Condensed | 25.2px | 600 | 0.9 | 0px | Large body / call-out text |
| Body LG | Barlow Condensed | 17.6px | 600 | 0.9 | 0.88px | Medium body copy with emphasis |
| Body MD | Manrope | 16px | 400 | 0.72 | 0px | Standard body copy and links |
| Body SM | Manrope | 13px | 400 | 1.7 | 0px | Standard body copy (loose leading) |
| Body SM Tight | Manrope | 13px | 400 | 1.6 | 0px | Compact body copy |
| Caption | Manrope | 12px | 400 | 1.7 | 0px | Fine print, metadata, captions |
| Code XS | DM Mono | 8px | 400 | 1.5 | 0.72px | Tiny monospaced code |
| Code SM | DM Mono | 9px | 400 | 1.5 | 0.81px | Small monospaced labels |
| Code MD | DM Mono | 10px | 400 | 1.5 | 0px | Standard code blocks |

### Principles

- **Aggressive negative tracking** on all display sizes (Archivo Black, sizes 43–328px) creates a compressed, forward-leaning energy. Letter-spacing ranges from −4.32px to −47.61px depending on size.
- **Two-tier letter-spacing model**: Display scales use strong negative tracking (−4 to −47px); body scales use 0px (neutral) or slight positive (`0.88px` on Barlow Condensed).
- **Contrast through size and weight**, not italic or color: body copy is weight 400, headings step up to 600–700, and display remains 400 to maximize the negative-space impact of condensed letter-spacing.
- **Line-height tightening on display**: ratios drop to 0.7–0.78 on very large sizes, forcing an intense, stacked appearance; body line-heights expand to 1.6–1.8 for legibility.
- **Monospaced code font** (DM Mono) reserved for technical labels, button text, and UI metadata; never used for body.

## 4. Component Stylings

### Buttons

**Primary / Filled Button**
- Background: `{colors.accent-1}` (`#F4841E`)
- Text Color: `{colors.primary}` (`#101827`)
- Font: Barlow Condensed, 12.8px, weight 700, line-height 19.2px
- Padding: `14px 18px`
- Border Radius: `{rounded.none}` (0px — sharp corners)
- Border: none
- Box Shadow: none
- Hover State: text color changes to `#0B152A` (darker navy); no scale or shadow shift
- Focus State: outline `2px solid` `{colors.accent-1}` (`#F4841E`)

**Secondary / Text Button**
- Background: transparent
- Text Color: `{colors.primary}` (`#101827`)
- Font: DM Mono, 9px, weight 400, line-height 13.5px
- Padding: `12px 0px 12px 38px`
- Border Radius: `{rounded.none}` (0px)
- Border: none
- Box Shadow: none
- Hover State: `transform: translate(4px, 0px)`; color shifts to `{colors.accent-1}` (`#F4841E`)

**Tertiary / Text Large Button**
- Background: transparent
- Text Color: `{colors.ink}` (`#FFFFFF`)
- Font: Manrope, 16px, weight 400, line-height 24px
- Padding: `10px 0px 10px 16px`
- Border Radius: `{rounded.none}` (0px)
- Border: none
- Box Shadow: none
- Hover State: `transform: translate(17px, 0px)` on nav links; opacity and color shift to full brightness

### Cards & Containers

**Default Card (Large)**
- Background: transparent (overlay on image or canvas)
- Text Color: `{colors.primary}` (`#101827`)
- Border: none
- Border Radius: `{rounded.none}` (0px)
- Box Shadow: none
- Padding: 0px
- Dimensions: 1065.62px wide, 530px tall
- Hover State: `filter: grayscale(0)` (if grayscale applied); `transform: scale(1.06)` or `rotate(−2deg) translateY(−20px)` depending on card role; opacity jumps to 1

**Small Card**
- Background: transparent or semi-transparent overlay
- Text Color: `{colors.ink}` (`#FFFFFF`)
- Border: none
- Border Radius: `{rounded.none}` (0px)
- Box Shadow: `{shadows.sm}` (`rgba(15, 27, 51, 0.1) 0px 10px 30px 0px`)
- Padding: 0px
- Dimensions: 362.312px wide, 430px tall
- Hover State: `filter: grayscale(0)`; `transform: scale(1.05)` or `rotate(0deg/2deg) translateY(−20px)` depending on variant; `opacity: 1`

### Inputs & Forms

**Text Input / Form Field**
- Background: transparent or light overlay
- Text Color: `{colors.primary}` (`#101827`)
- Border: `1px solid` `{colors.hairline}` (`#C8CCD1`)
- Border Radius: `{rounded.none}` (0px)
- Padding: varies by field type; typically `{spacing.xs}` to `{spacing.md}`
- Font: Manrope, 16px, weight 400
- Focus State: `borderColor: {colors.accent-1}` (`#F4841E`)
- Hover State: `backgroundColor: rgba(21, 36, 63, 1)` (slight lightening)

### Navigation

**Primary Navigation Bar**
- Background: `{colors.accent-1}` (`#F4841E`)
- Text Color: `{colors.primary}` (`#101827`)
- Border: none
- Border Radius: `{rounded.none}` (0px)
- Font: Manrope, 16px, weight 400, line-height 24px
- Padding: `0px 0px 34px 0px` (significant bottom padding for overflow space)
- Height: scales with content; measured at 900px on full viewport
- Link Hover State: `color: {colors.ink}` (`#FFFFFF`); `transform: translate(17px, 0px)` or `translateY(8px)` depending on link type
- Link Focus State: `color: {colors.accent-1}` (`#F4841E`)

**Secondary Navigation / Breadcrumb**
- Background: transparent
- Text Color: `{colors.primary}` (`#101827`)
- Font: Barlow Condensed, small sizes (9–10px), weight 600–700
- Border: `1px solid` `{colors.primary}` (`#101827`) on circular badges
- Border Radius: 50% on badge-style nav items (exception to sharp-corner rule)
- Hover State: `borderColor: {colors.accent-1}` (`#F4841E`); `color: {colors.ink}` (`#FFFFFF`)

### Footer

**Footer Container**
- Background: `#0B152A` (darker navy, slightly below canvas)
- Text Color: `{colors.ink}` (`#FFFFFF`)
- Border: `1px solid rgba(255, 255, 255, 0.18)` (subtle hairline, 18% opacity white)
- Border Radius: `{rounded.none}` (0px)
- Padding: `0px 57.6px 30px 57.6px` (horizontal padding scales with viewport; vertical space is minimal)
- Font: Manrope, 16px, weight 400, line-height 24px
- Box Shadow: none

## 5. Layout Principles

### Spacing System

The spacing system is built on a **base unit of 8px**, scaling to 12px, 20px, 24px, 28px, 32px, 36px, 40px, 44px, and 56px. Usage contexts:

- `{spacing.xxs}` (8px): Micro-spacing within button labels, tiny icon gaps
- `{spacing.xs}` (12px): Padding inside compact inputs, label–field gaps
- `{spacing.sm}` (20px): Button padding, small container margins
- `{spacing.md}` (24px): Standard form field padding, component internal spacing
- `{spacing.lg}` (28px): Medium section spacing, card title–body gaps
- `{spacing.xl}` (32px): Header–body spacing, large component gutters
- `{spacing.xxl}` (36px): Section boundaries, major layout divisions
- `{spacing.xxxl}` (40px): Large page sections, footer–content spacing
- `{spacing.section}` (44px): Inter-section padding, semantic boundaries
- `{spacing.band}` (56px): Hero bands, full-width section spacing

### Grid & Container

- **Maximum content width**: 1325px at 1440px viewport (measured); scales down proportionally
- **Grid columns**: 4 columns across all measured breakpoints (375px to 1440px)
- **Container padding (horizontal)**: Scales from `{spacing.sm}` (15px) at mobile to `{spacing.xxl}` + (58px) at ultra-wide
- **Section pattern**: Full-width background bands (hero, divider, footer) with centered content columns inside; no sidebar or three-column layouts observed
- **Whitespace ratio**: Approximately 1:1 external-to-content on large viewports; heavily constrained on mobile

### Whitespace Philosophy

The system privileges generous, deliberate space over density. Large display typography is set with tight line-heights (0.7–0.78) but surrounded by ample margins, creating visual "breathing room" despite the condensed letterforms. Section padding steps up with viewport size, reinforcing premium, unhurried experience. No "squeezed" states are used; mobile layouts reflow rather than compress. Negative space is treated as a design element, not wasted capacity.

### Border Radius Scale

- `{rounded.none}` = 0px: All interactive components (buttons, inputs, cards, overlays, images) render with sharp, 90-degree corners
- **Exception**: Circular badge links in navigation measure `border-radius: 50%`, creating pill-shaped buttons only in that specific context

This sharp-everywhere approach unifies the system and reinforces its technical, modern character. No softened or rounded variants exist across the measured site.

### Border Widths

- **Hairline**: `1px` — used on footer top border (white, 18% opacity), input focus borders, and navigation badge outlines
- **No thick borders**: The system favors color blocking and shadow for depth; stroke widths remain minimal

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no transform | Canvas background, body text, most UI elements |
| Raised | Single `{shadows.sm}` (`rgba(15, 27, 51, 0.1) 0px 10px 30px 0px`) | Cards on light backgrounds; testimonial / team cards |
| Interactive | Flat base + hover `transform` (scale, translate, rotate, grayscale removal) | Buttons, links, interactive cards; no shadow added on hover |

**Shadow Philosophy**

The system uses a **single-tier, color-blocking elevation model**. Rather than stacking graduated shadows, depth is primarily achieved through surface color changes (navy → slightly lighter navy → orange overlays) and restrained hover transforms. The one shadow exists—a soft 10–30px blur at 10% opacity—and applies only to small, contained cards. This minimal approach reinforces clarity and technical simplicity; the eye distinguishes elements through hue and position, not shadow layers.

### Opacity Levels

- `0.75` (75%): Semi-transparent overlays; hero gradient darkening
- `0.28` (28%): Muted text labels, disabled state hints
- `0.12` (12%): Extremely subtle separators, background pattern opacity (e.g., grid pattern overlay)

### Z-index / Layering

- `1`: Base layer (body, main content)
- `2`: Raised cards, lifted sections
- `3`: Overlays, semi-transparent surfaces
- `4`: Sticky navigation, persistent elements
- `20`: Dropdown menus, floating panels
- `40`: Modal dialogs, full-screen overlays
- `50`: Toasts, notifications, transient alerts
- `90`: Top-level UI (cursor hints, keyboard focus rings)

## 7. Do's and Don'ts

### Do

- **Use `{colors.accent-1}` (`#F4841E`) sparingly.** Reserve the orange for primary CTAs, button fills, and hover states. It is the visual signature and must not saturate the interface.
- **Stack display text with extreme negative letter-spacing.** Arquivo Black at display scales should measure −4 to −47px letter-spacing; tighter is bolder.
- **Apply hover transforms (2–5px translate, 1.04–1.07x scale, grayscale removal) to interactive elements.** Motion should feel subtle and purpose-driven, not flashy.
- **Maintain sharp corners (`0px` border-radius) on all components** except circular badge links (50%).
- **Use the full spacing scale.** Distribute `{spacing.md}` to `{spacing.band}` across sections; whitespace is part of the hierarchy.
- **Rely on color blocking for depth.** Use `{colors.canvas}`, lighter navy variants, and orange overlays to separate surfaces; shadows are minimal.
- **Test typography at measured breakpoints** (375px, 768px, 1024px, 1280px, 1440px). Heading sizes scale proportionally with viewport.
- **Keep body line-heights generous** (1.6–1.8) even on mobile. Legibility trumps space saving.

### Don't

- **Do not round corners on buttons, inputs, cards, or images.** The system is sharp; exceptions exist only for circular navigation badges.
- **Do not invent new colors.** The palette is intentionally constrained: two neutrals (navy, white), one accent (orange), and supporting grays. Do not add mid-tones or pastels.
- **Do not layer heavy shadows.** The system defines depth through color shifts and hover transforms, not shadow stacks.
- **Do not over-use orange.** Reserve `{colors.accent-1}` for primary actions and highlights; backgrounds should remain navy/gray.
- **Do not set display text with positive letter-spacing or loose line-heights.** Arquivo Black is defined by its condensation; tight tracking and line-heights (0.7–0.78) are non-negotiable.
- **Do not apply multiple hover effects simultaneously.** Choose one: scale OR translate OR rotate; motion should be clear and economical.
- **Do not mix fonts freely.** Stick to Archivo Black (display), Manrope (body), Barlow Condensed (accents), and DM Mono (code).
- **Do not add borders to cards.** Cards are borderless; elevation comes from shadow or color.

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Viewport Width | Content Column | Grid Columns | Largest Heading | Body Size | Section Padding X | Key Changes |
|---|---|---|---|---|---|---|---|
| Mobile | 375px | 345px | 2 | 60px | 16px | 15px | Single-column nav; compact typography |
| Tablet | 768px | 707px | 4 | 71px | 16px | 31px | Multi-column layout; nav remains visible |
| Desktop | 1024px | 942px | 4 | 95px | 16px | 41px | Full-width sections; hero expands |
| Wide | 1280px | 1178px | 4 | 119px | 16px | 51px | Generous margins; display text grows |
| Ultra-Wide | 1440px | 1325px | 4 | 134px | 16px | 58px | Maximum content width; full spacing |

**Measured breakpoint triggers:**
- **Mobile-to-tablet (768px)**: Content column grows from 345px to 707px; largest heading jumps from 60px to 71px; section padding increases from 15px to 31px
- **Tablet-to-desktop (1024px)**: Heading size 95px (major jump); section padding 41px; grid remains 4 columns
- **Desktop-to-wide (1280px)**: Heading 119px; padding 51px; continues 4-column grid
- **Wide-to-ultra-wide (1440px)**: Final breakpoint; heading 134px; padding 58px; max content width 1325px

**Navigation visibility:** Menu toggle appears and nav collapses at 375px mobile; nav remains visible (non-hamburger) across all measured breakpoints at link count of 7.

### Touch Targets

- **Minimum interactive element size**: `44px × 44px` (implied by button measurements and measured hover zones)
- **Button padding**: `{spacing.sm}` to `{spacing.md}` (20–24px) vertically, allowing thumb-safe tap areas on mobile
- **Link hit zones**: Extend 2–3px beyond visible text for affordance

### Collapsing Strategy

- **Typography**: Largest heading scales linearly with viewport (60px at 375px → 134px at 1440px); body text remains constant 16px across all breakpoints
- **Layout**: Single-column reflow at mobile (375px); shifts to 2-column at tablet, then 4-column grid at 768px+; no elements hide or compress, only reflow
- **Spacing**: Horizontal padding adjusts per breakpoint (`{spacing.sm}` at mobile, `{spacing.xxl}` at desktop); vertical spacing remains consistent, reinforcing mobile-first hierarchy
- **Navigation**: Remains visible (7 links shown) across all measured widths; no hamburger menu observed in extraction, but toggle implied at mobile

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA**: Orange (`{colors.accent-1}` — `#F4841E`) — button fills, highlights, hover states
- **Background**: Dark Navy (`{colors.canvas}` — `#0F1B33`) — default page and surface
- **Secondary Background**: Darker Navy (`#0B152A`) — footer, elevated surfaces
- **Primary Heading Text**: White (`{colors.ink}` — `#FFFFFF`) — h1, h2, display text on dark
- **Body Text**: Off-White (`{colors.body}` — `#F8F7F3`) — body copy, secondary messaging
- **Secondary Text / Muted**: Light Gray (`{colors.muted}` — `#D1D6DF`) — captions, metadata
- **Borders / Hairlines**: Very Light Gray (`{colors.hairline}` — `#C8CCD1`) — 1px dividers, input borders
- **UI Accent / Dark Text**: Deep Navy (`{colors.primary}` — `#101827`) — button text, primary interactive text

### Implementation Rules

1. **Display typography must use Archivo Black with aggressive negative letter-spacing.** Measured values range from −4.32px (small display) to −47.61px (ultra-massive); never render display text with letter-spacing: 0 or positive values.

2. **All interactive components (buttons, inputs, cards, images, overlays) have 0px border-radius.** The single exception is circular navigation badges (border-radius: 50%). Enforce sharp corners as a system-wide constraint.

3. **Apply exactly one shadow value, applied only to small cards:** `rgba(15, 27, 51, 0.1) 0px 10px 30px 0px`. No other shadows are measured in the system; depth comes from surface color shifts and hover transforms.

4. **Hover states use modest, purposeful transforms:** translate (2–5px), scale (1.04–1.07x), rotate (±2° to ±10°), and grayscale removal. Never combine more than two transforms; motion should feel intentional.

5. **Responsive typography scales with viewport width.** Largest heading progresses 60px → 71px → 95px → 119px → 134px across breakpoints (375–1440px); all other sizes (body, captions, code) remain fixed at measured values.

6. **Maintain consistent body text size (16px Manrope) and generous line-heights (1.6–1.8) across all breakpoints.** Do not compress line-height on mobile; reflowing is acceptable.

7. **Reserve `#F4841E` orange for primary actions.** Use navy, white, and gray for non-interactive surfaces. Saturation control maintains visual hierarchy.

8. **Use Manrope for body text, Barlow Condensed for medium-weight accents (17–25px), and DM Mono exclusively for code and technical labels.** Do not mix fonts within a single role.

9. **Padding scales with breakpoint:** 15px (mobile) → 31px (tablet) → 41px (desktop) → 51px (wide) → 58px (ultra-wide). Apply to section and container left/right padding; maintain consistent vertical spacing.

10. **Test interactive feedback on all hover, focus, and active states.** Recorded states include link hover (color shift + transform), button hover (color shift, no scale), card hover (grayscale removal + scale or rotate), and input focus (orange border). Implement all observed states faithfully.

## 10. Known Gaps

- **Semantic status colors**: The site declares no error, success, warning, or info states. No red, green, or yellow colour roles were extracted. If semantic feedback is needed, colour definitions are absent from this system.

- **Disabled / inactive states**: No explicit disabled button or input styles were measured. Opacity levels (0.28, 0.12) exist in the extraction but their precise application to disabled elements is not confirmed.

- **Dark / light mode variants**: The system appears single-theme (dark). No light-mode alternative was analysed or measured. One color was marked as "derived" in extraction telemetry, meaning it was calculated rather than observed on the live site; this derived colour is not documented here.

- **Animation / transition timings**: Hover transforms (translate, scale, rotate) are recorded, but CSS `transition-duration`, `transition-timing-function`, and animation keyframes are not specified in the extraction. Implementers must choose appropriate easing and duration.

- **Micro-interactions and gesture feedback**: Only hover states are documented. Tap feedback, focus rings, focus-visible styling, and multi-gesture interactions (swipe, pinch) are not measured.

- **Typography behaviour on very small screens (< 375px)**: The smallest measured breakpoint is 375px. Devices narrower than this (small phones, legacy widths) are not specified.

- **Surfaces behind authentication**: The site may contain protected areas or user dashboards not visible during extraction. This system documents only public-facing pages.

- **One colour role unassigned**: `{colors.accent-1}` (`#F4841E`) has no explicit semantic role in the extraction. It functions decoratively as an accent and highlight; no documented secondary or tertiary meaning applies.

- **Component variants not observed**: The extraction captured primary, secondary, and tertiary buttons; card, navigation, footer, and link elements. Other potential components (tabs, modals, popovers, tooltips, radio buttons, checkboxes, selects, progress bars) may exist but were not measured.

- **Interaction states beyond hover**: Focus-visible outlines, active (pressed) button states, visited link states, and form validation feedback are partially recorded but not exhaustively documented. Implementation should follow WCAG best practices.