## ADDED Requirements

### Requirement: Site-wide smooth scrolling

The site SHALL apply GSAP ScrollSmoother to the entire scroll container with `smooth: 1.5` and `effects: true`. The scroll behavior SHALL feel inertial without disabling native scroll affordances such as scroll bar, keyboard scroll, and `scrollIntoView`.

#### Scenario: Mouse wheel scroll is smoothed

- **WHEN** the visitor scrolls with a mouse wheel on a desktop browser
- **THEN** the scroll position SHALL animate with a perceptible smoothing rather than stepping in discrete jumps

#### Scenario: Keyboard scroll remains functional

- **WHEN** the visitor presses Page Down or Space
- **THEN** the page SHALL scroll the expected distance using the smoothed easing

---

### Requirement: GSAP technology stack

The motion system SHALL use the following GSAP plugins as the primary animation toolkit: ScrollSmoother for inertial scrolling, ScrollTrigger for scroll-bound animations, SplitText for character-level text reveals, DrawSVG for line stroke animations, and Flip for layout transitions in Act 4. All plugins SHALL be registered via `gsap.registerPlugin` at the application root.

#### Scenario: Required plugins are registered before use

- **WHEN** the application initializes
- **THEN** all five GSAP plugins (ScrollSmoother, ScrollTrigger, SplitText, DrawSVG, Flip) SHALL be registered before any component attempts to use them

---

### Requirement: Motion library for component animations

The site SHALL use Motion (the package formerly known as `framer-motion`, imported as `motion/react`) for React component-level animations including `whileInView`, `whileHover`, `whileTap`, and `AnimatePresence`. Motion SHALL be used in addition to GSAP, never as a replacement for the GSAP scroll system.

#### Scenario: Motion handles hover interactions

- **WHEN** the visitor hovers over any CTA button
- **THEN** the button SHALL animate using Motion's `whileHover` with spring physics, not via CSS hover

#### Scenario: GSAP handles scroll choreography

- **WHEN** any animation depends on scroll position
- **THEN** the animation SHALL be driven by GSAP ScrollTrigger, not by Motion's `useScroll`

---

### Requirement: Three.js demo within Act 6

Act 6 SHALL include one interactive 3D scene built with Three.js via `@react-three/fiber` and `@react-three/drei`. The scene SHALL allow drag-to-rotate via OrbitControls, scroll-to-zoom, and SHALL auto-rotate slowly when idle. The scene SHALL load asynchronously and SHALL NOT block the initial page render.

#### Scenario: 3D scene is interactive

- **WHEN** the visitor clicks and drags on the 3D scene canvas
- **THEN** the scene SHALL rotate to reflect the drag movement

#### Scenario: 3D scene is lazy-loaded

- **WHEN** the page first renders
- **THEN** the Three.js bundle SHALL NOT be included in the critical-path JavaScript and SHALL load only when Act 6 enters the viewport or via dynamic import

---

### Requirement: Animation duration and easing standards

Non-dramatic animations SHALL use a duration between 0.8 and 1.5 seconds. Dramatic moments (Act 1 quote reveal, Act 4 reorganization) SHALL use a duration between 1.5 and 2 seconds. Easing SHALL default to `power1.inOut` or `sine.inOut` for elegance, and `slow(0.5, 0.8)` for dramatic moments. Bouncy easings (`bounce`, `elastic`) SHALL NOT be used outside of explicit interactive feedback.

#### Scenario: Audit confirms duration ranges

- **WHEN** an automated or manual audit inspects all GSAP and Motion animation declarations
- **THEN** every animation duration SHALL fall within the specified ranges (0.8-1.5s default, 1.5-2s dramatic)

---

### Requirement: Responsive animation behavior

The site SHALL register responsive breakpoints via `ScrollTrigger.matchMedia`. Desktop (≥1024px) SHALL receive the full animation suite. Tablet (768px–1023px) SHALL receive a reduced animation suite. Mobile (<768px) SHALL receive only essential animations (text fade-in, basic transitions) and SHALL omit pin, scrub, and complex layout transitions.

#### Scenario: Mobile omits Flip layout transitions

- **WHEN** Act 4 is reached on a mobile viewport (<768px wide)
- **THEN** the GSAP Flip layout transition SHALL NOT execute, and the thumbnails SHALL render directly in the organized grid state

---

### Requirement: Reduced motion compliance

When the visitor's browser reports `prefers-reduced-motion: reduce`, all decorative animations SHALL be disabled and transitions SHALL be replaced by instant state changes. Content SHALL remain fully readable and navigable. The 3D scene in Act 6 SHALL replace its auto-rotation with a static rendered frame.

#### Scenario: Reduced motion disables auto-rotation

- **WHEN** `prefers-reduced-motion: reduce` is detected
- **THEN** the Three.js scene in Act 6 SHALL NOT auto-rotate and SHALL render a single static viewpoint

#### Scenario: Reduced motion disables SplitText reveal

- **WHEN** `prefers-reduced-motion: reduce` is detected
- **THEN** all SplitText character animations SHALL be skipped and text SHALL render in its final visible state immediately

---

### Requirement: Performance budget for motion

The site SHALL maintain a Largest Contentful Paint (LCP) of less than 2.5 seconds and a Cumulative Layout Shift (CLS) of less than 0.1 on a fast 3G connection. Animations SHALL animate `transform` and `opacity` only, never `width`, `height`, `top`, or `left`. The total JavaScript bundle (excluding lazy-loaded Three.js) SHALL NOT exceed 250KB gzipped.

#### Scenario: Animations use GPU-accelerated properties only

- **WHEN** an audit inspects every GSAP and Motion animation property
- **THEN** the animated property MUST be `transform` (translate, scale, rotate), `opacity`, or a CSS variable, not a layout-triggering property
