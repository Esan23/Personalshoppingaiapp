# Shortlist Brand Identity & Design System

## Brand Identity (Contribution led by the Brand Strategist)

### Brand Essence

Distilled from the project overview (an AI-powered shopping-decision app that collapses overwhelming option sets into a confident shortlist) and the Problem Aware avatar's psychology:

- **Clarity** — turning noise into a clear, defensible answer.
- **Calm** — the antidote to decision fatigue and the "22-tab" spiral.
- **Decisiveness** — moving the user from circling to choosing.
- **Trust** — recommendations that feel like a smart friend, not a sponsored grid.
- **Efficiency** — time reclaimed, measured and visible.
- **Confidence** — buying without the residue of regret.
- **Care** — the brand is on the user's side, protecting their attention.

### Brand Voice

- **Tone:** Calm, confident, and quietly reassuring. Never hyped, never urgent. The voice of someone who has already done the research and is simply handing you the answer.
- **Language:** Plain, human, and economical. Mirrors how the avatar actually talks — "just tell me what to buy," "I don't have the bandwidth." Zero jargon, zero filler, no exclamation-point energy.
- **Communication Style:** Symptom-first and benefit-led. Names the pain (lost time, analysis paralysis, regret) before introducing the fix. Solution-oriented, outcome-focused, and respectful of the user's intelligence and time.

### Brand Narrative

Every week, capable people lose hours they will never get back — not to big decisions, but to small ones. A booster seat. A rain jacket. A coffee maker. The internet answers "which one?" with ten thousand options, contradictory reviews, and sponsored noise, and a smart, busy professional ends up at midnight with twenty-two tabs open and no answer. Shortlist exists for that person. It listens the way a trusted friend would — *"I need a decent rain jacket for a 10-year-old, under $80, I don't want to think about it"* — and returns three options, each with a plain-language reason it earned its place. No infinite scroll. No rabbit hole. Just a confident answer in minutes and the lightness of moving on. Shortlist isn't a store or a search engine; it's a decision, handled, so its users can spend their attention on the things that actually matter.

## Design System (Contribution led by the Lead UI/UX Designer and Lead Front-End Developer)

### Color Palette

#### Primary Colors

- **Gradient Base:** The brand's core visual identity is the following gradient, mapping the user's journey from overwhelm to relief:

```css
background: linear-gradient(135deg, #312E81 0%, #4338CA 16%, #2563EB 33%, #0891B2 50%, #14B8A6 66%, #34D399 83%, #FBBF24 100%);
```

- **Primary Colors (extracted from gradient):**

| Hex | Name | Attribute |
|---|---|---|
| `#312E81` | Indigo | Depth |
| `#4338CA` | Iris | Focus |
| `#2563EB` | Blue | Trust |
| `#0891B2` | Cyan | Clarity |
| `#14B8A6` | Teal | Calm |
| `#34D399` | Emerald | Relief |
| `#FBBF24` | Amber | Optimism |

#### Secondary Colors

| Role | Hex |
|---|---|
| Dark Blue (primary text) | `#0F172A` |
| Medium Gray (secondary text) | `#64748B` |
| Light Gray (backgrounds) | `#F1F5F9` |
| White | `#FFFFFF` |
| Black | `#000000` |

#### Functional Colors

| Role | Hex |
|---|---|
| Success | `#16A34A` |
| Warning | `#F59E0B` |
| Error | `#DC2626` |
| Info | `#2563EB` |

### Typography

#### Font Family

- **Primary Font — Inter (sans-serif):** Inter is engineered for screen legibility at small sizes and high information density, with a tall x-height and open apertures. It carries the calm, neutral, trustworthy tone the brand requires for body copy, UI labels, and product cards without drawing attention to itself.
- **Secondary Font — DM Serif Display (serif):** Used sparingly for major headlines and hero statements, DM Serif Display adds editorial sophistication and a human, considered quality — signaling that there is judgment and care behind the recommendation, not just an algorithm.

#### Font Sizes

| Token | rem | px | line-height |
|---|---|---|---|
| Display | 4.5rem | 72px | 1.1 |
| H1 | 3rem | 48px | 1.2 |
| H2 | 2.25rem | 36px | 1.25 |
| H3 | 1.875rem | 30px | 1.3 |
| H4 | 1.5rem | 24px | 1.35 |
| H5 | 1.25rem | 20px | 1.4 |
| H6 | 1.125rem | 18px | 1.45 |
| Body (Regular) | 1rem | 16px | 1.6 |
| Body (Small) | 0.875rem | 14px | 1.55 |
| Body (XSmall) | 0.75rem | 12px | 1.5 |
| Caption | 0.75rem | 12px | 1.4 |

#### Font Weights

- **Light** — 300
- **Regular** — 400
- **Medium** — 500
- **Semibold** — 600
- **Bold** — 700

### UI Components

#### 21st.dev Components

- **Navigation** — top bar, mobile drawer, breadcrumbs
- **Layout** — containers, grids, section wrappers, split panels
- **Forms** — natural-language query input, filters, sliders (budget), selects
- **Feedback** — toasts, inline validation, empty states, progress indicators
- **Data Display** — cards, comparison tables, badges, stat blocks
- **Disclosure** — accordions ("why this option"), tabs, tooltips, popovers

#### MagicUI Components

1. **Animated Cards** — staggered reveal of the three shortlist results.
2. **Number Ticker** — animated "time saved this month" counter on the dashboard.
3. **Shimmer / Skeleton Loading** — calm placeholder state while the engine narrows options (reinforces "no chaos").
4. **Confetti / Success Burst** — subtle reward on a confirmed decision.
5. **Animated Gradient / Beam** — the brand gradient in motion across the hero and onboarding.
6. **Marquee Testimonials** — looping social proof from "people like the user."

#### reactbits.dev Components

- **Backgrounds** — animated gradient and subtle particle/aurora hero backdrops
- **Text Animations** — gradient and fade-in headline effects
- **Components** — animated buttons, spotlight cards, magnetic CTAs
- **Animations** — scroll-triggered and on-mount entrance effects

#### Custom Components

1. **Shortlist Stack** — the signature three-option comparison module with per-option "why it's here / who it's not for" reasoning.
2. **Time Reclaimed Tracker** — a running visualization of minutes/hours saved versus baseline self-research (the core value proof).
3. **Confidence Meter** — a per-recommendation match indicator that quantifies fit and reduces buyer's-remorse anxiety.
4. **Natural-Language Query Bar** — conversational input ("I need X under $Y, I don't want to think about it") that anchors the entire experience.

### Micro-Interactions

1. **Button Hover** — gentle scale (1.02) plus gradient shift; 150ms ease-out.
2. **Form Focus** — soft glow ring in Cyan `#0891B2` with smooth border transition.
3. **Loading States** — calm shimmer skeletons, never spinners that imply struggle.
4. **Success Actions** — brief confetti burst and a checkmark draw-in on decision confirmation.
5. **Navigation** — slide/fade transitions between views; mobile drawer eases in at 250ms.
6. **Scrolling** — staggered fade-and-rise reveals for cards and stats as they enter the viewport.

### Responsive Design (Contribution led by the Lead Front-End Developer)

- **Mobile-First Approach:** All layouts are designed for the smallest viewport first, then progressively enhanced — the avatar most often hits this pain at night on a phone.
- **Breakpoints (Tailwind CSS):**

| Token | Min width |
|---|---|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

- **Mobile Adaptations:** Simplified navigation via a hamburger/drawer menu; single-column stacked layouts for the Shortlist Stack and comparison tables; larger touch targets (min 44×44px); sticky query bar within thumb reach; condensed stat blocks.

### Accessibility

- **Color Contrast (WCAG AA):** All text/background pairings meet or exceed 4.5:1 (3:1 for large text).
- **Keyboard Navigation:** Full operability via keyboard, with logical tab order and skip links.
- **Screen Reader Support (ARIA):** Semantic HTML plus ARIA roles, labels, and live regions for dynamic shortlist updates.
- **Visible Focus Indicators:** Persistent, high-contrast focus rings on all interactive elements.
- **Respect for Reduced Motion:** Honor `prefers-reduced-motion` to disable or dampen non-essential animation.

### Dark/Light Mode

Both light and dark modes are first-class and implemented via **DaisyUI themes**, with **automatic system-preference detection** (`prefers-color-scheme`) and a **user-selectable toggle** that persists across sessions.

## Implementation Guidelines (Contribution led by the Lead Front-End Developer)

### CSS Framework

- **Tailwind CSS** — utility-first styling foundation
- **DaisyUI** — themeable component layer and dark/light mode engine
- **Custom Utilities** — *[placeholder for project-specific utility classes and brand-token extensions]*

### Animation Library

- **Framer Motion** — orchestrated, complex, and state-driven animations (shortlist reveals, page transitions, confidence meter).
- **Tailwind Animations** — lightweight, simple transitions (hovers, focus rings, fades).

### Icon System

- **Heroicons** — primary, comprehensive icon set for consistency and accessibility.
- **Custom SVGs** — for brand-specific marks (Shortlist Stack glyph, Time Reclaimed icon).

### Asset Management

- **SVG** — icons and vector marks
- **WebP** — raster images and photography
- **MP4 / WebM** — video and motion assets

### Code Structure

- **Component-Based Architecture** — encapsulated, reusable components with clear props contracts.
- **Utility-First CSS** — Tailwind utilities composed into components; minimal custom CSS.
- **Responsive Variants** — breakpoint-prefixed utilities applied mobile-first throughout.

## Design Tokens

```json
{
  "colors": {
    "primary": {
      "indigo": "#312E81",
      "iris": "#4338CA",
      "blue": "#2563EB",
      "cyan": "#0891B2",
      "teal": "#14B8A6",
      "emerald": "#34D399",
      "amber": "#FBBF24"
    },
    "neutral": {
      "darkBlue": "#0F172A",
      "mediumGray": "#64748B",
      "lightGray": "#F1F5F9",
      "white": "#FFFFFF",
      "black": "#000000"
    },
    "functional": {
      "success": "#16A34A",
      "warning": "#F59E0B",
      "error": "#DC2626",
      "info": "#2563EB"
    }
  },
  "typography": {
    "fontFamily": {
      "primary": "Inter, sans-serif",
      "secondary": "DM Serif Display, serif"
    }
  },
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "2rem",
    "2xl": "3rem",
    "3xl": "4rem"
  },
  "borderRadius": {
    "sm": "0.125rem",
    "md": "0.25rem",
    "lg": "0.5rem",
    "xl": "1rem",
    "full": "9999px"
  }
}
```
