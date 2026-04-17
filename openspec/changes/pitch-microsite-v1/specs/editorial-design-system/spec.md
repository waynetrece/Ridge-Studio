## ADDED Requirements

### Requirement: Three-palette segmentation across acts

The site SHALL use a three-palette segmentation system mapped to the seven acts. The Editorial Dark palette SHALL apply to acts 1 and 4. The Cream Editorial palette SHALL apply to acts 3 and 6. The Gallery White palette SHALL apply to acts 2, 5, and 7.

#### Scenario: Each act renders its assigned palette

- **WHEN** a visitor enters a given act
- **THEN** the background, foreground text, and accent colors SHALL match the palette assigned to that act

#### Scenario: Transitions between palettes are bridged smoothly

- **WHEN** a visitor scrolls from one act to the next where the palette changes
- **THEN** the transition SHALL fade through an intermediate state and SHALL NOT cut abruptly

---

### Requirement: Editorial Dark palette tokens

The Editorial Dark palette SHALL define the following tokens. Background primary `#0A0A0A`. Background secondary `#1A1A1A`. Text primary `#F5F2EC`. Text secondary `#8C8680`. Accent primary `#800000` (deep wine, drawn from S15 Gothic). Accent secondary `#C9A961` (restrained gold).

#### Scenario: Dark palette enforces high contrast

- **WHEN** a contrast check is performed on text primary against background primary
- **THEN** the ratio SHALL meet or exceed WCAG AA (4.5:1 for body text, 3:1 for large text)

---

### Requirement: Cream Editorial palette tokens

The Cream Editorial palette SHALL define the following tokens. Background primary `#FDFCF0` (cream white from S19). Background secondary `#F9F9F9`. Text primary `#111111`. Brand accent `#000000`. Hairline accent `#D4AF37` (refined gold from S19). Border weight SHALL default to 0.5px hairlines.

#### Scenario: Cream palette renders 0.5px hairlines

- **WHEN** any divider, border, or rule appears in a section using this palette
- **THEN** the stroke width SHALL default to 0.5px and SHALL use the hairline accent color or text primary

---

### Requirement: Gallery White palette tokens

The Gallery White palette SHALL define the following tokens. Background primary `#FFFFFF`. Background secondary `#F5F5F5`. Text primary `#000000`. Text secondary `#333333`. Border subtle `#E0E0E0`. Border strong `#000000`. Shadow policy SHALL be none or hard shadow only (`4px 4px 0 #000000`).

#### Scenario: Gallery palette uses sharp corners

- **WHEN** any container, button, or input renders in this palette
- **THEN** corner radius SHALL be 0px to 2px maximum

---

### Requirement: Shared typographic DNA across all palettes

Every palette SHALL use serif typography for headings and SHALL use the same heading family (Bodoni for Cream and Editorial Dark; Playfair Display for Gallery White; both rendered with weight 400-700). Body text SHALL use a clean sans-serif (Inter for Latin, Noto Sans TC for Traditional Chinese). Numerics within statistical displays SHALL use a monospace family (IBM Plex Mono or JetBrains Mono).

#### Scenario: Heading font family is consistent within a palette

- **WHEN** a reviewer inspects any H1 or H2 across the site
- **THEN** the heading family MUST be one of the two assigned serifs, never a system default sans-serif

#### Scenario: Numeric data uses monospace

- **WHEN** any statistical figure (e.g., "29,260 views") renders in Act 1 or Act 5
- **THEN** the numeric characters SHALL use the assigned monospace family

---

### Requirement: Zero corner radius and minimal shadows

All UI elements (buttons, cards, dividers, inputs) across all three palettes SHALL use a corner radius of 0px to 2px maximum. Shadows SHALL be either none, hard editorial shadow (`4px 4px 0 #000000`), or very subtle elevation (`0 10px 30px rgba(0,0,0,0.05)`). Soft glowing shadows, neumorphism, and rounded blob shapes SHALL NOT be used.

#### Scenario: Visual audit finds no rounded corners

- **WHEN** a visual audit is performed across the rendered site
- **THEN** no element SHALL display a corner radius greater than 2px

---

### Requirement: Magazine-grade whitespace

Section vertical padding SHALL be at minimum 112px on desktop and 64px on mobile. Content max-width for body text SHALL NOT exceed 72ch. Headlines SHALL respect a `hero_max` of 48ch.

#### Scenario: Body text width does not exceed 72ch

- **WHEN** body paragraphs render at desktop width
- **THEN** the line measure SHALL NOT exceed 72 characters

---

### Requirement: Accessibility compliance at WCAG AA

All text-on-background combinations across all three palettes SHALL meet WCAG AA contrast thresholds. All interactive elements SHALL have visible focus rings. Touch targets SHALL be at least 44px square. The site SHALL provide a `prefers-reduced-motion` fallback that disables non-essential animations.

#### Scenario: Reduced motion preference is respected

- **WHEN** the visitor's browser reports `prefers-reduced-motion: reduce`
- **THEN** all decorative scroll-triggered animations SHALL be disabled or rendered as instant transitions, while content SHALL remain fully accessible
