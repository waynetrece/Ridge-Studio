## ADDED Requirements

### Requirement: Seven-act narrative structure

The site SHALL present content in seven sequential acts, accessed by a single continuous scroll on the home route. The order SHALL be: (1) Founder Quote Opening, (2) How We Got To Know You, (3) What We Admire About Ridge Studio, (4) Where Things Currently Live, (5) About IWARE, (6) If You Had A Website, (7) Next Steps CTA.

#### Scenario: User scrolls from top to bottom

- **WHEN** a visitor loads the site and scrolls continuously from the top to the bottom
- **THEN** the visitor SHALL pass through all seven acts in order without any required clicks, page loads, or detours

#### Scenario: User refreshes mid-scroll

- **WHEN** a visitor refreshes the page after scrolling to act 4
- **THEN** the site SHALL reload at act 1, not preserve scroll position

---

### Requirement: Non-condescending narrative posture

The narrative copy SHALL NOT tell the client what they lack, what is wrong with their current setup, or what they have failed to do. The narrative SHALL frame all observations from IWARE's perspective using subjects such as "we observed", "we admire", "we propose", instead of "you lack" or "you have failed to".

#### Scenario: Copy review for forbidden patterns

- **WHEN** a reviewer reads any narrative copy in any of the seven acts
- **THEN** the copy MUST NOT contain phrases that diagnose the client's current state as deficient (e.g. "your works are scattered", "you have no website", "you are missing X")

#### Scenario: Copy uses IWARE-first subject

- **WHEN** a reviewer evaluates the subject of each major sentence in acts 2, 3, 4, and 6
- **THEN** the subject MUST be either IWARE ("we"), the client's strengths ("Ridge Studio"), or a neutral observation, not a deficit attributed to the client

---

### Requirement: Act 1 opening combines quote and statistics

Act 1 SHALL open with a full-screen dark backdrop, followed by a slow fade-in of a verbatim quote from Yuan Hao-Cheng (Ridge Studio founder, sourced from the Canopi 2024 interview), followed by a transition to a light backdrop displaying statistical observations IWARE collected (count of representative works, business lines, warehouse area, Behance views, likes, followers).

#### Scenario: Quote precedes statistics

- **WHEN** a visitor first lands on the site
- **THEN** the founder quote SHALL appear before any statistical data, and the statistics SHALL appear only after the quote has fully rendered

#### Scenario: Quote attribution is present

- **WHEN** the quote is displayed
- **THEN** the attribution line SHALL include the founder's name, role, and the source publication name with year

---

### Requirement: Act 4 dramatic climax via scattered-to-reorganized animation

Act 4 SHALL display work thumbnails in a scattered, randomly-positioned arrangement labelled by source platform (Behance / Instagram / Facebook / Portaly), pause for visual absorption, then animate the thumbnails into an organized portfolio grid using a layout transition driven by GSAP Flip.

#### Scenario: Scattered state is visually disorderly

- **WHEN** Act 4 first appears in the viewport
- **THEN** thumbnails SHALL be positioned at randomized coordinates and rotations within the viewport, each labelled with the source platform name

#### Scenario: Reorganization is triggered by scroll

- **WHEN** the visitor scrolls past the scattered-state pause point
- **THEN** the thumbnails SHALL animate into a regular grid arrangement using GSAP Flip with a duration between 1.5 and 2 seconds

---

### Requirement: Act 7 closes with dual CTAs

Act 7 SHALL display exactly two call-to-action buttons side by side: one labelled in the spirit of "let's talk for 30 minutes" (low-commitment relationship warming) and one labelled in the spirit of "I want to know the rough budget range" (interest signal).

#### Scenario: Two CTAs are present and distinguishable

- **WHEN** the visitor reaches Act 7
- **THEN** the page SHALL render two visually distinct buttons with the two stated intents

#### Scenario: Neither CTA requires committing to a paid engagement

- **WHEN** the visitor activates either CTA
- **THEN** the resulting action SHALL NOT require payment, signed contract, or formal proposal acceptance — only a meeting request or a budget inquiry

---

### Requirement: 3D environmental rendering inquiry is acknowledged but not centered

The narrative SHALL acknowledge that Ridge Studio recently inquired about IWARE's 3D environmental rendering service, but SHALL frame that inquiry as the occasion for the proposal rather than the central topic. The 3D rendering SHALL appear as a single sentence in Act 1 and as a demo module within Act 6, and SHALL NOT be the primary visual or narrative anchor of Act 1.

#### Scenario: Act 1 mentions 3D rendering inquiry once

- **WHEN** a reviewer counts the references to 3D environmental rendering in Act 1
- **THEN** the count SHALL be exactly one short sentence, positioned after the founder quote and the statistics

#### Scenario: Act 6 contains a 3D demo module

- **WHEN** a visitor reaches the fourth product module within Act 6
- **THEN** the page SHALL render an interactive 3D scene that demonstrates how 3D environmental rendering would integrate into a Ridge Studio website
