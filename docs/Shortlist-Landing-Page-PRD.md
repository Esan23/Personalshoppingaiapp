# Trine Shopping AI — Landing Page PRD (B2C)

**Product:** Trine Shopping AI — consumer shopping-decision app (iOS, Android, web)
**Document:** Landing Page PRD v1.0 · Draft for review
**Date:** June 13, 2026
**Owner:** Product / Growth
**Source of truth:** Problem Aware avatar + Trine Shopping AI Brand Identity & Design System

---

## 1. Executive Overview

**Purpose.** Specifies the marketing landing page for *Trine Shopping AI*, a consumer app that turns an overwhelming field of shopping options into three confident, reasoned choices. The page converts time-strapped, problem-aware visitors into free sign-ups by mirroring their pain, demonstrating tangible time savings, and removing friction.

**Product in one line.** Ask in plain words; get three options back, each with a clear reason it made the cut and who it is not for — so the decision takes minutes instead of an evening.

**Primary conversion goal.** Free account sign-up. Secondary: Premium trial start; Time Reclaimed Calculator engagement.

### Source PRD translation (B2B → B2C)

| Original B2B element | Trine Shopping AI (B2C) equivalent |
|---|---|
| "Trusted by 500+ sales teams" | "Loved by 12,000+ time-strapped shoppers" |
| ROI Calculator (reps, deals, ARR) | Time Reclaimed Calculator (decisions → hours & dollars) |
| Predictive lead scoring feature | The Shortlist: three options with reasons |
| "Schedule a demo" primary CTA | "Start free" primary CTA |
| SOC 2 / SAML security section | "Private by design" trust section |
| Pipeline / win-rate statistics | Choice-overload statistics (Baymard, Meta, Columbia) |

---

## 2. Goals & Success Metrics

**Primary KPIs**

| Metric | Target |
|---|---|
| Free sign-up rate (visitors → account) | 4–6% |
| Premium trial start rate | 1.5–3% |
| Time Reclaimed Calculator engagement | ≥ 25% of visitors |
| Scroll depth reaching final CTA | ≥ 55% |
| Bounce rate | < 45% |
| Median time on page | ≥ 90 seconds |

**Secondary metrics:** Core Web Vitals; CTR per CTA instance; demo-video play/completion; traffic-source conversion.

---

## 3. Target User — Problem Aware Avatar

**Stage of awareness.** Problem Aware. She feels the symptom acutely (lost evenings, decision fatigue, regret) but does not yet know a product category exists to solve it. Messaging must **lead with the symptom, not the app.**

**Representative persona.** "Danielle," 38, senior marketing manager, married with two children, household income ~$185K, part-way through an MBA. A maximizer who fears the wrong choice more than she wants the best one.

**What keeps her up at night**
- Being busy but not in control; time leaking away in 20-minute increments.
- Quiet shame that a $60 purchase can derail an evening.
- Buyer's remorse — deciding out of exhaustion, then second-guessing for days.

**Her language (use verbatim in copy):** "Rabbit hole." "Analysis paralysis." "I don't have the bandwidth." "Just tell me what to buy." "Too many tabs." "I'll deal with it later."

**Decision triggers:** a trusted recommendation that removes risk; a concrete, believable time-savings claim; social proof from people who look like her.

---

## 4. Brand & Design Foundation

**Essence.** Clarity, calm, decisiveness, trust, efficiency, confidence, care.

**Voice.** Calm, confident, quietly reassuring — the voice of someone who has already done the research and is simply handing you the answer. Plain words, sentence case, active voice, zero hype.

**Color palette — gradient signature:**
`linear-gradient(135deg, #312E81, #4338CA, #2563EB, #0891B2, #14B8A6, #34D399, #FBBF24)`

| Hex | Name | Attribute |
|---|---|---|
| #312E81 | Indigo | Depth (the midnight overwhelm) |
| #2563EB | Blue | Trust — primary action color |
| #0891B2 | Cyan | Clarity |
| #14B8A6 | Teal | Calm |
| #34D399 | Emerald | Relief |
| #FBBF24 | Amber | Optimism (the morning after) |

Neutrals: text `#0F172A`, secondary `#64748B`, bg `#F8FAFC`, surface `#FFFFFF`, border `#E2E8F0`. Functional: success `#16A34A`, warning `#F59E0B`, error `#DC2626`.

**Typography.** Display — **DM Serif Display** (headlines only; editorial, signals human judgment). Body/UI — **Inter** (legible, calm).

| Token | rem | px | Line-height |
|---|---|---|---|
| Display | 4.5 | 72 | 1.1 |
| H1 | 3.0 | 48 | 1.2 |
| H2 | 2.25 | 36 | 1.25 |
| H3 | 1.5 | 24 | 1.35 |
| Body | 1.0 | 16 | 1.6 |
| Small | 0.875 | 14 | 1.55 |
| Caption | 0.75 | 12 | 1.4 |

---

## 5. Page Architecture & Components

Twelve sections, top to bottom.

**5.1 Navigation Bar.** *Purpose:* persistent orientation + constant path to sign-up.
- Fixed/sticky, 72px desktop / 60px mobile, z-index 1000; transparent over hero, solid with blur after 20px scroll.
- Left: logo. Center: The problem, How it works, Time saved, Pricing. Right: light/dark toggle, "Start free." Mobile: hamburger → drawer.
- Touch targets ≥ 44px; visible keyboard focus.

**5.2 Hero.** *Purpose:* state the pain in the visitor's own words and offer the one-tap escape.
- ~60/40 split, copy left, visual right; stacks below 1024px; min height ~92vh.
- Pre-headline pill: "Loved by 12,000+ people who'd rather not spend their night choosing."
- H1 (60–80 chars): "Stop losing your evenings to 22 open tabs."
- Subheadline: plain-words ask → three reasoned options → night reclaimed.
- Dual CTA: primary "Start free"; ghost "See how it works." Micro-copy: Free to start · No card required · Decide in minutes.
- **Signature visual:** animated "22 tabs collapse into 3 options" — a chaotic tab cloud resolves into a ranked shortlist with reasons and a "time saved" badge. Spend the boldness here. Respect `prefers-reduced-motion`.

**5.3 Problem / Pain Point.** *Purpose:* establish problem awareness with statement + statistics.
- Headline: "It's almost midnight and you still haven't decided."
- Three named pains: The 22-tab spiral; Reviews that cancel out; Buyer's remorse on repeat.
- Sourced stats: 69.6% cart abandonment (Baymard); 42% abandon due to cognitive overload (Meta); 3% vs 30% purchase with many vs. few options (Columbia).
- Line icons; contrasting background; 1-column on mobile.

**5.4 Solution Positioning.** *Purpose:* position three-with-reasons as the answer — narrative before features.
- Headline: "Three options. One confident answer."
- Three short paragraphs: pain → approach (ask like you'd ask a friend) → differentiator (a plain reason + who it's not for).
- Before/After visual ("11:48 p.m. knot" → "decided in four minutes").
- UVP callout on gradient: "Unlike a search box, Trine Shopping AI doesn't show you more — it decides with you, and tells you why."

**5.5 Features & Benefits.** *Purpose:* tie four capabilities to outcomes in an alternating layout.
- Ask in plain words (one-sentence input, no filters).
- The Shortlist (three options, each with a reason + a "not for" note — the reasoning is the product).
- Confidence Meter (per-option match score; reduces second-guessing).
- Time Reclaimed tracker (weekly/annual hours returned).
- Fade-and-rise on scroll; 100px between blocks; single column at 768px.

**5.6 Time Reclaimed Calculator.** *Purpose:* personalized, tangible value (the rebuilt ROI calculator).
- Inputs (sliders): decisions/week (1–25); minutes/decision (5–90); value of an hour ($10–$150).
- Logic: `saved/week = decisions × minutes × 0.70`; `annual hours = saved/week × 52 / 60`; `dollars = annual hours × rate`; `working days = annual hours / 8`.
- Output on gradient: annual hours, "≈ N working days back," weekly time, dollar value; updates live.
- CTA: "Start reclaiming it free." Disclaimer: illustrative estimate. *0.70 factor is an assumption (see §10).*

**5.7 Social Proof.** *Purpose:* credibility through relatable voices + aggregate stats.
- Three equal-height testimonial cards (working parent, night-shift nurse, new parent); lead voice echoes the avatar.
- Quotes emphasize the differentiator and relief, not features.
- Stats bar: 12,000+ deciding faster · 1.4M tabs never opened · 94% second-guess less · 4.8★. *All placeholders (see §10).*

**5.8 Works-everywhere & Privacy (Trust).** *Purpose:* address coverage and data-trust concerns.
- Left — "Works wherever you shop": paste a link, screenshot, or describe it.
- Right — "Private by design": never paid placements; searches not sold; delete history anytime; encrypted.
- 50/50 desktop, stacked mobile.

**5.9 Demo Video.** *Purpose:* self-service walkthrough.
- 16:9, max-width 900px, centered; play overlay; ~90-second walkthrough. Lazy-load; captions; autoplay off. Secondary CTA: "Convinced? Start free instead."

**5.10 Pricing.** *Purpose:* transparent tiers; convert on value.
- Free ($0, 5 shortlists/mo); Premium ($9.99/mo, "Most popular," unlimited + saved decisions + tracker); Family ($16.99/mo, up to 5 members).
- Monthly/annual toggle (annual ≈ 20% off: Premium $7.99, Family $13.59 effective).
- Trust line: No card to start · Cancel anytime · 30-day money-back guarantee.
- Equal-height cards; popular card elevated; stack on mobile. *Prices are assumptions (see §10).*

**5.11 Final CTA.** *Purpose:* strong conversion push at the bottom.
- Full-width gradient band, centered. Headline: "Get your evenings back." Reinforcing line + dual CTA + trust micro-copy. Generous padding.

**5.12 Footer.** *Purpose:* navigation, legal, brand sign-off.
- Columns: brand + tagline + social; Product; Company; Legal. Contrasting background; collapses on tablet/mobile; 14px type.

---

## 6. Visual Style Guide

- **Spacing:** base unit 8px; scale 8/16/24/32/40/48/64/80/100/120. Section padding 120/80/64px (desktop/tablet/mobile).
- **Buttons:** Primary — gradient fill, white text, radius 10px, ≥ 48px; hover lifts 1px + gradient shift; active scale 0.98. Ghost — transparent, 1.5px border; hover tints brand blue.
- **Cards:** surface fill, 1px border, radius 14px, soft shadow; hover lifts. **Inputs:** 48px height, 6px radius, brand focus ring.
- **Motion:** 150ms micro / 300ms standard; easing `cubic-bezier(0.4, 0, 0.2, 1)`. Scroll reveal = fade + 22px rise (IntersectionObserver, ~100ms stagger); disabled under `prefers-reduced-motion`.
- **Breakpoints (Tailwind):** sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536.
- **Dark/light:** both first-class via DaisyUI themes; system detection + persistent toggle. Dark mode leans into the deep-indigo "midnight" end of the gradient.

---

## 7. Technical Requirements

- **Performance:** load < 3s on 3G; FCP < 1.5s; TTI < 3.5s; Lighthouse ≥ 90 across all categories. WebP + lazy load + srcset; SVG icons.
- **Accessibility (WCAG 2.1 AA):** semantic HTML, correct heading order; contrast ≥ 4.5:1 body / 3:1 large; visible focus; full keyboard operability; alt text; ARIA labels + live regions for dynamic shortlist/calculator; reduced-motion respected.
- **SEO:** title 50–60 chars; meta description 150–160; OG + Twitter cards; JSON-LD (Organization, Product, FAQPage); sitemap; robots.txt.
- **Analytics & experimentation:** GA4 events for each CTA, sign-ups, trial starts, calculator interactions, video plays, scroll depth (25/50/75/100%); heatmaps; A/B testing.
- **Sign-up & lead capture:** minimal-friction (email or OAuth); real-time validation; loading/success/error states in the interface's voice; privacy link + consent; CRM/ESP connection.
- **Browser support:** last 2 versions of Chrome, Firefox, Safari, Edge; iOS Safari 13+; Chrome Android 8+.

---

## 8. Content & Voice Guidelines

- Lead with the symptom, then the benefit (the avatar is problem-aware, not product-aware).
- Use her words ("22 tabs," "rabbit hole," "just decide for me"); plain verbs, sentence case, no filler.
- Be specific over clever: "Decide in four minutes" beats "Save time."
- Active voice; an action keeps its name end to end ("Start free" → confirmation says "Started").
- Errors and empty states give direction in the interface's voice; never apologize or go vague.
- No false scarcity; create urgency through opportunity cost (the evening lost), not countdown timers.

---

## 9. Conversion Optimization

- **A/B backlog:** hero format (tab-collapse vs. calculator-as-hero); H1 variants; pricing default (monthly vs. annual) and "most popular" placement; testimonial placement; video vs. static hero; CTA copy/color.
- **Personalization:** category-specific hero via URL params (baby gear, electronics, gifts); returning vs. new visitor CTA; geo-relevant testimonials.
- **Exit intent:** modal offering the calculator result or a "How we pick" explainer rather than a discount, to keep the trust-first tone.

---

## 10. Open Assumptions & Risks

- **Performance claims are placeholders.** "31 min saved per decision," "70% time saved," "12,000+ users," "94% second-guess less," "4.8★," "1.4M tabs" must be replaced with measured data or removed — unsubstantiated claims are a credibility and legal/FTC risk.
- **Choice-overload statistics are real and sourced** (Baymard, Meta, Columbia/Iyengar–Lepper) but cite *category* research, not Trine Shopping AI's own performance — frame as context, never as our results.
- **Pricing and tier limits are assumptions** pending the monetization model.
- **Retailer coverage** ("works wherever you shop") must match actual integration scope at launch.
- **Testimonials are illustrative** and must be replaced with consented, real customer quotes.

---

## 11. Development Handoff

**Build priority order**
1. Navigation + Hero (first impression and signature visual).
2. Problem + Solution (awareness and the fix).
3. Features (core product story).
4. Pricing (conversion-critical).
5. Social proof + Trust.
6. Time Reclaimed Calculator (interactive; may follow as a fast second pass).
7. Final CTA + Footer.
8. Polish: animation, dark mode, performance, accessibility audit.

**Pre-launch checklist**
- Responsive across all breakpoints; all links and CTAs functional.
- Sign-up validates and submits; media loads; calculator math verified.
- Lighthouse ≥ 90; accessibility audit (NVDA/VoiceOver) passed; cross-browser verified.
- Analytics events firing; SEO meta and schema correct; dark mode consistent.
- All §10 placeholders replaced with verified content.

**Assets required:** logo (SVG, light + dark); app screenshots; consented customer quotes/photos; retailer logos (SVG); demo video (MP4/WebM, captioned); custom icons (SVG).
