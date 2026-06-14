import { ClockIcon } from "@heroicons/react/24/solid";
import { SHORTLIST_RESULT } from "../lib/content";

/**
 * Branded in-app UI mockup (the three-result shortlist screen). Used as the
 * product showcase / demo-video poster. Swap for a real screenshot at launch.
 */
export default function AppMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex h-full w-full flex-col overflow-hidden bg-white text-left dark:bg-[#0E1426] ${className}`}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3 dark:border-white/10">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-error/70" />
          <span className="h-3 w-3 rounded-full bg-warning/70" />
          <span className="h-3 w-3 rounded-full bg-success/70" />
        </div>
        <div className="mx-auto flex w-full max-w-md items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 dark:border-white/10 dark:bg-white/[0.05]">
          <span className="h-2 w-2 flex-shrink-0 rounded-full surface-gradient" />
          <span className="truncate text-xs text-muted">
            {SHORTLIST_RESULT.query}, I don&apos;t want to think about it
          </span>
        </div>
        <span className="hidden flex-shrink-0 items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 text-xs font-semibold text-success sm:inline-flex">
          <ClockIcon className="h-3.5 w-3.5" />
          Decided in 4 min
        </span>
      </div>

      {/* Body */}
      <div className="flex-1 px-5 py-4 sm:px-7 sm:py-6">
        <div className="mb-3 flex items-baseline justify-between">
          <p className="font-display text-lg text-ink dark:text-white sm:text-xl">
            Your shortlist
          </p>
          <p className="text-xs text-muted">
            3 of 22 — the rest didn&apos;t make the cut
          </p>
        </div>

        <div className="space-y-2.5">
          {SHORTLIST_RESULT.options.map((opt) => (
            <div
              key={opt.rank}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/[0.04] sm:gap-4 sm:p-3.5"
            >
              <div className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full surface-gradient text-sm font-bold text-white">
                {opt.rank}
              </div>
              {/* Thumb */}
              <div className="hidden h-12 w-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-white/10 dark:to-white/5 sm:block" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-semibold text-ink dark:text-white">
                    {opt.name}
                  </p>
                  <span className="flex-shrink-0 text-sm font-bold text-ink dark:text-white">
                    {opt.price}
                  </span>
                </div>
                <p className="mt-0.5 truncate text-xs text-muted">{opt.why}</p>
                <p className="mt-0.5 hidden truncate text-xs text-muted/80 sm:block">
                  {opt.notFor}
                </p>
              </div>
              {/* Confidence */}
              <div className="hidden w-20 flex-shrink-0 sm:block">
                <div className="flex items-center justify-between text-[10px] font-semibold text-brand-cyan">
                  <span>Match</span>
                  <span>{opt.match}%</span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                  <div
                    className="h-full rounded-full surface-gradient"
                    style={{ width: `${opt.match}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
