import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import SectionReveal from "./ui/SectionReveal";
import Button from "./ui/Button";
import { PLANS } from "../lib/content";

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="container-shortlist">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink dark:text-white sm:text-4xl">
            Start free. Upgrade when deciding well becomes the habit.
          </h2>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white p-1 dark:border-white/10 dark:bg-white/[0.04]">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                !annual
                  ? "bg-ink text-white dark:bg-white dark:text-ink"
                  : "text-muted hover:text-ink dark:hover:text-white"
              }`}
              aria-pressed={!annual}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${
                annual
                  ? "bg-ink text-white dark:bg-white dark:text-ink"
                  : "text-muted hover:text-ink dark:hover:text-white"
              }`}
              aria-pressed={annual}
            >
              Annual
              <span className="rounded-full bg-success/15 px-2 py-0.5 text-xs font-bold text-success">
                Save ~20%
              </span>
            </button>
          </div>
        </SectionReveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => {
            const price = annual ? plan.annual : plan.monthly;
            const popular = plan.popular;
            return (
              <SectionReveal
                key={plan.name}
                delay={i * 0.08}
                className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                  popular
                    ? "border-transparent bg-white shadow-2xl shadow-brand-blue/15 ring-2 ring-brand-blue dark:bg-white/[0.06] lg:-mt-4 lg:mb-4"
                    : "border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.03]"
                }`}
              >
                {popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full surface-gradient px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow">
                    Most popular
                  </span>
                )}

                <h3 className="text-lg font-semibold text-ink dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{plan.tagline}</p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-5xl text-ink dark:text-white">
                    ${price % 1 === 0 ? price : price.toFixed(2)}
                  </span>
                  <span className="mb-2 text-sm text-muted">
                    {price === 0 ? "forever" : "/mo"}
                  </span>
                </div>
                {annual && price > 0 && (
                  <p className="mt-1 text-xs text-muted">
                    billed annually
                  </p>
                )}

                <Button
                  href="#start"
                  variant={popular ? "primary" : "ghost"}
                  className="mt-6 w-full"
                >
                  {plan.cta}
                </Button>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                      <span className="text-ink dark:text-slate-200">{f}</span>
                    </li>
                  ))}
                </ul>
              </SectionReveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          No card to start · Cancel anytime · 30-day money-back guarantee
        </p>
        <p className="mt-2 text-center text-xs text-muted">
          Prices and tier limits are illustrative pending the final model.
        </p>
      </div>
    </section>
  );
}
