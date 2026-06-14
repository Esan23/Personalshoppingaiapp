import {
  RectangleStackIcon,
  ScaleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import SectionReveal from "./ui/SectionReveal";
import { PAINS, STATS } from "../lib/content";

const PAIN_ICONS = [RectangleStackIcon, ScaleIcon, ArrowPathIcon];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="bg-slate-100/70 py-20 dark:bg-white/[0.02] lg:py-28"
    >
      <div className="container-shortlist">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
            Sound familiar?
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink dark:text-white sm:text-4xl">
            It's almost midnight and you still haven't decided.
          </h2>
          <p className="mt-4 text-lg text-muted dark:text-slate-300">
            You came to buy one thing. Hours later you have a spreadsheet, a
            knot behind your ribs, and no answer. It isn't you — it's the volume.
          </p>
        </SectionReveal>

        {/* Three pains */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PAINS.map((pain, i) => {
            const Icon = PAIN_ICONS[i];
            return (
              <SectionReveal
                key={pain.title}
                delay={i * 0.1}
                className="rounded-2xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-cyan/10 dark:text-brand-cyan">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink dark:text-white">
                  {pain.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted dark:text-slate-400">
                  {pain.body}
                </p>
              </SectionReveal>
            );
          })}
        </div>

        {/* Sourced statistics */}
        <SectionReveal className="mt-16" delay={0.1}>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.source}
                className="bg-white p-7 text-center dark:bg-[#0B1020]"
              >
                <p className="font-display text-4xl text-gradient">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-ink dark:text-slate-200">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-muted">Source: {stat.source}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted">
            Category research on choice overload — context for the problem, not
            claims about Shortlist.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
