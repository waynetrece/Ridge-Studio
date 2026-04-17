## ADDED Requirements

### Requirement: Dual CTA in Act 7

Act 7 SHALL render exactly two call-to-action buttons. The primary CTA SHALL invite the visitor to schedule a 30-minute conversation. The secondary CTA SHALL invite the visitor to inquire about an approximate budget range. Both buttons SHALL be visually distinct yet share the same baseline visual treatment (hairline border, serif label, zero radius).

#### Scenario: Both CTAs render in Act 7

- **WHEN** the visitor reaches Act 7
- **THEN** the page SHALL render exactly two CTA buttons with distinct labels matching the primary and secondary intents

---

### Requirement: Primary CTA opens scheduling

The primary CTA ("schedule a 30-minute conversation") SHALL open a scheduling interface. The implementation SHALL be one of: an embedded Calendly widget, a redirect to an external Calendly URL, or a `mailto:` link with a pre-filled subject and body. The exact implementation SHALL be selected during the design phase and recorded in `design.md`.

#### Scenario: Primary CTA action is functional

- **WHEN** the visitor clicks the primary CTA
- **THEN** the visitor SHALL be presented with a scheduling option (calendar widget, external page, or pre-filled email composer)

---

### Requirement: Secondary CTA opens inquiry form

The secondary CTA ("inquire about budget range") SHALL open a contact form. The form SHALL collect, at minimum, the visitor's name, email address, and an optional message. Form submission SHALL trigger an email notification to IWARE and SHALL display a confirmation message to the visitor.

#### Scenario: Form submission notifies IWARE

- **WHEN** the visitor submits the inquiry form with valid input
- **THEN** an email notification SHALL be delivered to the IWARE inbox within one minute

#### Scenario: Form submission confirms to visitor

- **WHEN** the form submission succeeds
- **THEN** the form SHALL replace its content with a confirmation message stating that IWARE has received the inquiry and will reply soon

#### Scenario: Form submission handles failure

- **WHEN** the form submission fails (network error, server error)
- **THEN** the form SHALL display an inline error message and SHALL NOT clear the visitor's entered data, allowing retry

---

### Requirement: CTA hover and tap feedback via Motion

Both CTA buttons SHALL provide hover and tap feedback using Motion's `whileHover` and `whileTap`. Hover SHALL animate the border from 0.5px to 1.5px thickness using a spring transition with stiffness 200 and damping 20. Tap SHALL animate the scale to 0.97 and back.

#### Scenario: Hover increases border thickness

- **WHEN** the visitor hovers a CTA button on a pointer-capable device
- **THEN** the button border SHALL animate from 0.5px to 1.5px using the specified spring parameters

#### Scenario: Tap animates scale

- **WHEN** the visitor taps or clicks down on a CTA button
- **THEN** the button SHALL animate to scale 0.97 and return to scale 1 on release

---

### Requirement: Form input validation

The inquiry form SHALL validate input client-side before submission. Name SHALL be required and non-empty. Email SHALL be required and SHALL match a basic email pattern. Message SHALL be optional. Validation errors SHALL appear inline next to the offending field and SHALL NOT block the visitor from correcting and re-submitting.

#### Scenario: Empty required field is caught

- **WHEN** the visitor attempts to submit the form with the name field empty
- **THEN** the form SHALL display an inline error next to the name field and SHALL NOT submit

#### Scenario: Invalid email is caught

- **WHEN** the visitor enters an email that does not contain `@` and a domain
- **THEN** the form SHALL display an inline error next to the email field and SHALL NOT submit

---

### Requirement: Form data persistence and privacy

The form SHALL NOT store visitor data in browser local storage or cookies after submission. Submitted data SHALL be transmitted over HTTPS and SHALL be retained only by the IWARE inbox or backend recipient defined in `design.md`. The form SHALL NOT include third-party tracking pixels or analytics scripts beyond what is documented in `design.md`.

#### Scenario: Data transmits over HTTPS

- **WHEN** the form is submitted from the production site
- **THEN** the request SHALL use HTTPS and SHALL NOT fall back to plaintext HTTP

---

### Requirement: CTA accessibility

Both CTA buttons SHALL be reachable via keyboard tab navigation, SHALL display a visible focus ring meeting WCAG AA standards, and SHALL announce their purpose to screen readers via descriptive button text or `aria-label`. The form SHALL associate each input with a visible label and SHALL announce validation errors to assistive technology via `aria-describedby` or `aria-live` regions.

#### Scenario: Keyboard user can activate CTAs

- **WHEN** a keyboard-only visitor tabs through Act 7
- **THEN** both CTA buttons SHALL receive focus in document order with a visible focus ring, and SHALL be activatable via Enter or Space
