import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckBadgeIcon, ClockIcon } from "@heroicons/react/24/solid";
import { SHORTLIST_RESULT } from "../lib/content";

// 22 deterministic "tab" positions (percent-based) so layout stays stable.
const TABS = Array.from({ length: 22 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const r = seed / 233280;
  const r2 = ((i * 4096 + 150889) % 714025) / 714025;
  return {
    id: i,
    left: 4 + r * 78, // %
    top: 4 + r2 * 80, // %
    rot: (r - 0.5) * 26, // deg
    delay: r2 * 0.5,
  };
});

function Tab({
  left,
  top,
  rot,
  collapsed,
  delay,
}: {
  left: number;
  top: number;
  rot: number;
  collapsed: boolean;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute w-[78px] rounded-md border border-slate-200 bg-white p-1.5 shadow-sm dark:border-white/10 dark:bg-white/10"
      style={{ left: `${left}%`, top: `${top}%` }}
      initial={false}
      animate={
        collapsed
          ? { opacity: 0, scale: 0.2, left: "42%", top: "44%", rotate: 0 }
          : { opacity: 1, scale: 1, rotate: rot }
      }
      transition={{
        duration: 0.7,
        delay: collapsed ? delay : delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div className="mb-1 flex gap-0.5">
        <span className="h-1 w-1 rounded-full bg-error/70" />
        <span className="h-1 w-1 rounded-full bg-warning/70" />
        <span className="h-1 w-1 rounded-full bg-success/70" />
      </div>
      <div className="space-y-0.5">
        <div className="h-1 w-full rounded bg-slate-200 dark:bg-white/20" />
        <div className="h-1 w-2/3 rounded bg-slate-200 dark:bg-white/20" />
      </div>
    </motion.div>
  );
}

function MatchBar({ value }: { value: number }) {
  return (
    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
      <motion.div
        className="h-full rounded-full surface-gradient"
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
      />
    </div>
  );
}

function ShortlistCards() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col gap-2.5 p-1"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
      }}
    >
      <motion.div
        className="mb-0.5 flex items-center justify-between"
        variants={{
          hidden: { opacity: 0, y: 10 },
          show: { opacity: 1, y: 0 },
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          Your shortlist
        </p>
        <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-semibold text-success">
          <ClockIcon className="h-3 w-3" />
          4 min · ~30 saved
        </span>
      </motion.div>

      {SHORTLIST_RESULT.options.map((opt) => (
        <motion.div
          key={opt.rank}
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ ease: [0.4, 0, 0.2, 1] }}
          className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.06]"
        >
          <div className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full surface-gradient text-xs font-bold text-white">
            {opt.rank}
          </div>
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
            <div className="mt-1.5 flex items-center gap-2">
              <MatchBar value={opt.match} />
              <span className="flex-shrink-0 text-[11px] font-semibold text-brand-cyan">
                {opt.match}%
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function TabCollapseVisual() {
  const reduce = useReducedMotion();
  const [collapsed, setCollapsed] = useState(reduce ? true : false);

  useEffect(() => {
    if (reduce) {
      setCollapsed(true);
      return;
    }
    // Loop: chaos -> collapse -> hold shortlist -> reset
    let mounted = true;
    const run = () => {
      if (!mounted) return;
      setCollapsed(false);
      const t1 = setTimeout(() => mounted && setCollapsed(true), 2300);
      const t2 = setTimeout(run, 8800);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    };
    const cleanup = run();
    return () => {
      mounted = false;
      cleanup?.();
    };
  }, [reduce]);

  return (
    <div className="relative w-full">
      {/* Glow behind the panel */}
      <div
        aria-hidden
        className="surface-gradient absolute -inset-4 rounded-[2rem] opacity-20 blur-2xl animate-gradient-pan"
      />

      <div className="relative rounded-[1.75rem] border border-slate-200/80 bg-white/70 p-4 shadow-2xl shadow-brand-indigo/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
        {/* Query bar */}
        <div className="mb-3 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.06]">
          <span className="h-2 w-2 flex-shrink-0 rounded-full surface-gradient" />
          <p className="truncate text-xs font-medium text-muted sm:text-sm">
            “{SHORTLIST_RESULT.query}”
          </p>
        </div>

        {/* Stage */}
        <div className="relative h-[340px] overflow-hidden rounded-xl bg-slate-50/60 dark:bg-black/20 sm:h-[360px]">
          {/* Chaos layer */}
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                key="chaos"
                className="absolute inset-0"
                exit={{ opacity: 0 }}
              >
                {TABS.map((t) => (
                  <Tab key={t.id} {...t} collapsed={collapsed} />
                ))}
                <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-ink/5 px-3 py-1 text-[11px] font-medium text-muted dark:bg-white/5">
                  22 tabs open
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Shortlist layer */}
          <AnimatePresence>
            {collapsed && (
              <motion.div
                key="shortlist"
                className="absolute inset-0 p-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ShortlistCards />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted">
          <CheckBadgeIcon className="h-4 w-4 text-success" />
          Each pick comes with a reason — and who it&apos;s not for.
        </div>
      </div>
    </div>
  );
}
