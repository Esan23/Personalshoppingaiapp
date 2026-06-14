import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Button from "./ui/Button";
import TabCollapseVisual from "./TabCollapseVisual";

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0 : 0.6, delay, ease: [0.4, 0, 0.2, 1] },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-[60px] lg:pt-[72px]"
    >
      {/* Ambient gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-32 top-[-10%] h-[480px] w-[480px] rounded-full bg-brand-iris/20 blur-[120px] dark:bg-brand-iris/25" />
        <div className="absolute right-[-10%] top-1/3 h-[420px] w-[420px] rounded-full bg-brand-teal/20 blur-[120px] dark:bg-brand-cyan/20" />
        <div className="absolute bottom-[-15%] left-1/3 h-[360px] w-[360px] rounded-full bg-brand-amber/15 blur-[120px]" />
      </div>

      <div className="container-shortlist grid items-center gap-12 py-16 lg:grid-cols-[58fr_42fr] lg:gap-10 lg:py-20">
        {/* Copy */}
        <div className="max-w-2xl">
          <motion.div {...rise(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <SparklesIcon className="h-4 w-4 text-brand-cyan" />
              Loved by 12,000+ people who'd rather not spend their night choosing
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.08)}
            className="mt-6 font-display text-[2.6rem] leading-[1.08] tracking-tight text-ink dark:text-white sm:text-5xl lg:text-[3.75rem]"
          >
            Stop losing your evenings to{" "}
            <span className="text-gradient">22 open tabs.</span>
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted dark:text-slate-300"
          >
            Ask in plain words — “a rain jacket for a 10-year-old, under $80.”
            Get three options back, each with a clear reason it made the cut.
            The decision takes minutes, and the evening is yours again.
          </motion.p>

          <motion.div
            {...rise(0.24)}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#start" className="group">
              Start free
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="#solution" variant="ghost">
              See how it works
            </Button>
          </motion.div>

          <motion.p
            {...rise(0.32)}
            className="mt-5 text-sm text-muted dark:text-slate-400"
          >
            Free to start · No card required · Decide in minutes
          </motion.p>
        </div>

        {/* Signature visual */}
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduce ? 0 : 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <TabCollapseVisual />
        </motion.div>
      </div>
    </section>
  );
}
