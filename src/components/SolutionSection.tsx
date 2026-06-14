import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import SectionReveal from "./ui/SectionReveal";

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 lg:py-28">
      <div className="container-shortlist">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Narrative */}
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
              The fix
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink dark:text-white sm:text-4xl">
              Three options. One confident answer.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted dark:text-slate-300">
              <p>
                The problem was never that you're indecisive. It's that you were
                alone in a warehouse with the lights off, told to pick the best
                one of ten thousand.
              </p>
              <p>
                So ask the way you'd ask a friend — “I need a decent rain jacket
                for a 10-year-old, under $80, I don't want to think about it.”
                No filters. No infinite scroll.
              </p>
              <p>
                You get back{" "}
                <span className="font-semibold text-ink dark:text-white">
                  three options
                </span>
                , each with a plain reason it earned its place and an honest note
                on who it's <em>not</em> for. The reasoning is the product.
              </p>
            </div>
          </SectionReveal>

          {/* Before / After */}
          <SectionReveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Before */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="flex items-center gap-2 text-muted">
                  <MoonIcon className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    Before
                  </span>
                </div>
                <p className="mt-4 font-display text-2xl text-ink dark:text-white">
                  11:48 p.m.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Twenty-two tabs. A spreadsheet. The knot behind your sternum.
                  Still no decision — you'll “deal with it later.”
                </p>
              </div>

              {/* After */}
              <div className="surface-gradient animate-gradient-pan relative overflow-hidden rounded-2xl border border-transparent p-6 text-white shadow-lg">
                <div className="flex items-center gap-2 text-white/90">
                  <SunIcon className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    After
                  </span>
                </div>
                <p className="mt-4 font-display text-2xl">9:19 a.m.</p>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  Read three. Felt the click of “oh, that one.” Bought it.
                  Looked up — four minutes had passed. The lid is closed.
                </p>
              </div>
            </div>

            {/* UVP callout */}
            <div className="surface-gradient relative mt-4 overflow-hidden rounded-2xl p-6 text-center text-white shadow-lg">
              <p className="text-lg font-medium leading-snug">
                Unlike a search box, Shortlist doesn't show you more — it decides
                with you, and tells you why.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
