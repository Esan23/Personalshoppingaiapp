/**
 * Centralized landing-page copy and data.
 *
 * NOTE on numbers: per the PRD §10, every performance/aggregate figure here
 * ("12,000+ users", "94% second-guess less", "4.8★", testimonials, prices)
 * is an ILLUSTRATIVE PLACEHOLDER pending verified data. The choice-overload
 * statistics in the Problem section are real, externally sourced category
 * research (Baymard, Meta, Columbia) and are framed as context — never as
 * Shortlist's own results.
 */

export const NAV_LINKS = [
  { label: "The problem", href: "#problem" },
  { label: "How it works", href: "#solution" },
  { label: "Time saved", href: "#calculator" },
  { label: "Pricing", href: "#pricing" },
];

// The signature shortlist result shown in the hero animation.
export const SHORTLIST_RESULT = {
  query: "A decent rain jacket for a 10-year-old, under $80",
  options: [
    {
      rank: 1,
      name: "Rainmate Kids Shell",
      price: "$64",
      match: 96,
      why: "Best waterproofing for the price; sized to last two seasons.",
      notFor: "Not for heavy winter — it's a shell, not insulated.",
    },
    {
      rank: 2,
      name: "TrailLight Junior",
      price: "$72",
      match: 89,
      why: "Lightest option, packs into its own pocket for school bags.",
      notFor: "Not for downpours — water-resistant, not fully sealed.",
    },
    {
      rank: 3,
      name: "Everyday Weatherproof",
      price: "$58",
      match: 84,
      why: "Cheapest that still passed; simple and durable.",
      notFor: "Not for style-conscious kids — three colors only.",
    },
  ],
};

export const PAINS = [
  {
    title: "The 22-tab spiral",
    body: "One booster seat becomes an evening. Every tab you open to settle it just spawns three more.",
  },
  {
    title: "Reviews that cancel out",
    body: "A glowing five-star and a scathing one-star of the same thing — and no idea which one to believe.",
  },
  {
    title: "Buyer's remorse on repeat",
    body: "You decide out of exhaustion, then carry the quiet film of “did I get that right?” for days.",
  },
];

export const STATS = [
  {
    value: "69.6%",
    label: "of online carts are abandoned",
    source: "Baymard Institute",
  },
  {
    value: "42%",
    label: "abandon a purchase from cognitive overload",
    source: "Meta",
  },
  {
    value: "3% vs 30%",
    label: "buy when shown many vs. few options",
    source: "Columbia (Iyengar & Lepper)",
  },
];

export const FEATURES = [
  {
    eyebrow: "Ask in plain words",
    title: "Say it like you'd say it to a friend",
    body: "One sentence. No filters, no faceted search, no checkboxes. “I need X under $Y and I don't want to think about it.” That's the whole interface.",
    chip: "I need a quiet white-noise machine under $50",
  },
  {
    eyebrow: "The Shortlist",
    title: "Three options — and the reason for each",
    body: "Not a grid of ten thousand. Three. Each one comes with a plain reason it earned its place and an honest note on who it's not for. The reasoning is the product.",
    chip: "Why it's here · Who it's not for",
  },
  {
    eyebrow: "Confidence Meter",
    title: "A match score that quiets the second-guessing",
    body: "Every option shows how well it fits what you asked for, so you can buy without the 11 p.m. voice whispering “but did you check—”",
    chip: "96% match",
  },
  {
    eyebrow: "Time Reclaimed",
    title: "See the evenings you got back",
    body: "A running tally of the hours you'd otherwise have lost to comparison. The value, made visible — week over week, and across the year.",
    chip: "≈ 19 hours back this quarter",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I typed one sentence, read three options, and bought the right one in four minutes. I kept waiting for the regret to show up. It didn't.",
    name: "Danielle R.",
    role: "Marketing manager, mom of two",
  },
  {
    quote:
      "After a night shift I have nothing left for decisions. It just hands me the answer and tells me why. That's all I ever wanted.",
    name: "Marcus T.",
    role: "ICU nurse",
  },
  {
    quote:
      "First baby, a thousand opinions, zero sleep. Three picks with honest trade-offs cut through all of it. No rabbit hole.",
    name: "Priya & Sam",
    role: "New parents",
  },
];

export const AGGREGATE_STATS = [
  { value: "12,000+", label: "people deciding faster" },
  { value: "1.4M", label: "tabs never opened" },
  { value: "94%", label: "second-guess less" },
  { value: "4.8★", label: "average rating" },
];

export type PlanFeature = string;

export interface Plan {
  name: string;
  monthly: number;
  annual: number; // effective monthly price billed annually
  tagline: string;
  features: PlanFeature[];
  cta: string;
  popular?: boolean;
}

export const PLANS: Plan[] = [
  {
    name: "Free",
    monthly: 0,
    annual: 0,
    tagline: "For the occasional 22-tab night.",
    features: [
      "5 shortlists per month",
      "Three options with reasons",
      "Confidence Meter",
      "Light & dark, web and mobile",
    ],
    cta: "Start free",
  },
  {
    name: "Premium",
    monthly: 9.99,
    annual: 7.99,
    tagline: "For when deciding well is the daily default.",
    features: [
      "Unlimited shortlists",
      "Saved decisions you can revisit",
      "Time Reclaimed tracker",
      "Priority on new retailers",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Family",
    monthly: 16.99,
    annual: 13.59,
    tagline: "One calm way to decide, for up to five.",
    features: [
      "Everything in Premium",
      "Up to 5 members",
      "Shared decisions & lists",
      "Family spending overview",
    ],
    cta: "Start free trial",
  },
];

export const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: ["How it works", "Pricing", "Time saved", "What's new"],
  },
  {
    title: "Company",
    links: ["About", "How we pick", "Careers", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Your data", "Cookie choices"],
  },
];
