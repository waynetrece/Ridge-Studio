## 1. Project Setup

- [ ] 1.1 Initialize project per Framework: Next.js 15 App Router with TypeScript
- [ ] 1.2 Configure Styling: Tailwind CSS v4 + CSS Variables for three-palette tokens
- [ ] 1.3 Implement Font strategy: Self-hosted via next/font for Bodoni, Playfair Display, Inter, Noto Sans TC, IBM Plex Mono
- [ ] 1.4 Install dependencies per Animation: GSAP 主力 + Motion 元件級 + Three.js 點睛 (gsap, motion, three, @react-three/fiber, @react-three/drei)
- [ ] 1.5 Configure Single-page scroll narrative, no routes (only `/` route, no menu / footer / breadcrumb)
- [ ] 1.6 Configure Deployment: Vercel + Preview URLs (link GitHub repo waynetrece/Ridge-Studio)
- [ ] 1.7 Configure environment variables (RESEND_API_KEY, CONTACT_EMAIL_TO, CALENDLY_URL)

## 2. Design System Foundation

- [ ] 2.1 Implement Editorial Dark palette tokens (background, text, accent wine #800000, gold #C9A961)
- [ ] 2.2 Implement Cream Editorial palette tokens (background #FDFCF0, text, hairline gold #D4AF37)
- [ ] 2.3 Implement Gallery White palette tokens (pure white, pure black, sharp corner policy)
- [ ] 2.4 Implement Three-palette segmentation across acts via CSS variable switching with smooth transitions
- [ ] 2.5 Implement Shared typographic DNA across all palettes (serif headings, monospace numerics, common DNA)
- [ ] 2.6 Enforce Zero corner radius and minimal shadows in base styles (max 2px radius globally)
- [ ] 2.7 Establish Magazine-grade whitespace tokens (section padding, body 72ch max, hero 48ch max)
- [ ] 2.8 Implement Accessibility compliance at WCAG AA (focus rings, contrast checks, touch targets ≥44px)

## 3. Motion System Foundation

- [ ] 3.1 Implement Site-wide smooth scrolling using GSAP ScrollSmoother (smooth: 1.5, normalizeScroll: true)
- [ ] 3.2 Setup GSAP technology stack (register ScrollSmoother, ScrollTrigger, SplitText, DrawSVG, Flip)
- [ ] 3.3 Setup Motion library for component animations (whileInView, whileHover, whileTap, AnimatePresence)
- [ ] 3.4 Codify Animation duration and easing standards (0.8-1.5s default, 1.5-2s dramatic, power1.inOut / sine.inOut)
- [ ] 3.5 Implement Responsive animation behavior via ScrollTrigger.matchMedia (desktop full / tablet reduced / mobile minimal)
- [ ] 3.6 Implement Reduced motion compliance handler (`prefers-reduced-motion` global guard)
- [ ] 3.7 Validate Performance budget for motion (transform / opacity only, JS bundle ≤250KB excluding lazy 3D)

## 4. Narrative Structure (Acts 1-7)

- [ ] 4.1 Implement Seven-act narrative structure as continuous scroll on single page
- [ ] 4.2 Apply Non-condescending narrative posture review on all copy (no "you lack", IWARE-first subject)
- [ ] 4.3 Implement Act 1 opening combines quote and statistics (founder quote slow fade-in + statistical CountUp)
- [ ] 4.4 Implement Act 2 — "我們是這樣認識你們的" (left big H1 + right platform list with DrawSVG hairlines)
- [ ] 4.5 Implement Act 3 — "我們欣賞的 Ridge Studio" (asymmetric magazine layout, four observation points)
- [ ] 4.6 Implement Act 4 dramatic climax via scattered-to-reorganized animation per Animation library: GSAP Flip over Motion layoutId for Act 4
- [ ] 4.7 Implement Act 5 — "我們是 IWARE" (case study grid with ScrollSmoother parallax)
- [ ] 4.8 Implement Act 6 — "假設有官網" (4 product modules with mockup parallax)
- [ ] 4.9 Implement Act 7 closes with dual CTAs (約 30 分鐘聊聊 + 想先了解大致預算)
- [ ] 4.10 Verify 3D environmental rendering inquiry is acknowledged but not centered (single sentence in Act 1, demo in Act 6 module 4)

## 5. Asset Strategy

- [ ] 5.1 Implement Image strategy for Act 4: Abstract thumbnails + platform labels (no real Ridge Studio works, generate placeholder thumbnails with case name + year + platform tag)
- [ ] 5.2 Source / produce panorama texture for 3D scene approach: R3F panoramic sphere (theatrical or gallery space, neutral tone)
- [ ] 5.3 Generate placeholder mockup images for Act 6 four product modules
- [ ] 5.4 Curate IWARE case study thumbnails for Act 5 (工研院 AI / 室內雜誌 / 喬登美語 / 美琪生技 etc.)

## 6. Three.js 3D Demo (Act 6 Module 4)

- [ ] 6.1 Implement Three.js demo within Act 6 using R3F + drei (Sphere panorama + OrbitControls + auto-rotate idle)
- [ ] 6.2 Lazy-load 3D bundle via dynamic import to keep initial JS under 250KB gzipped
- [ ] 6.3 Implement reduced-motion fallback for 3D scene (static rendered frame, no auto-rotation)

## 7. CTA and Conversion

- [ ] 7.1 Implement Dual CTA in Act 7 (two hairline-bordered buttons, serif label, zero radius, side by side)
- [ ] 7.2 Implement Primary CTA opens scheduling via external Calendly URL
- [ ] 7.3 Implement Secondary CTA opens inquiry form (name + email + optional message)
- [ ] 7.4 Implement Form input validation (name required, email pattern, inline error display)
- [ ] 7.5 Implement Form data persistence and privacy (HTTPS only, no localStorage / cookies post-submit, no third-party tracking)
- [ ] 7.6 Implement CTA hover and tap feedback via Motion (spring stiffness 200 damping 20, scale 0.97 on tap)
- [ ] 7.7 Implement CTA accessibility (keyboard focus order, visible focus rings, aria-label, aria-describedby for errors)
- [ ] 7.8 Setup CTA backend: Vercel Functions + Resend integration (api/contact route, Resend email send, success/failure feedback)

## 8. Quality and Launch Prep

- [ ] 8.1 Run accessibility audit (axe DevTools) — confirm WCAG AA pass across all three palettes
- [ ] 8.2 Run PageSpeed Insights on production preview — confirm LCP < 2.5s, CLS < 0.1
- [ ] 8.3 Cross-browser test (Chrome, Safari, Firefox, mobile Safari, mobile Chrome)
- [ ] 8.4 Generate custom OG image for share previews (LINE / FB / Twitter rendering check)
- [ ] 8.5 Final pre-send internal review (Vercel preview URL, IWARE team QA pass)
- [ ] 8.6 Production deploy and obtain final URL for client delivery
