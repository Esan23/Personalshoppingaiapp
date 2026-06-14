import { useMemo, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SectionReveal from "./ui/SectionReveal";
import Button from "./ui/Button";

const SAVINGS_FACTOR = 0.7; // assumption per PRD §6/§10

function Slider({
  id,
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  format,
}: {
  id: string;
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm font-medium text-ink dark:text-slate-200">
          {label}
        </label>
        <span className="font-display text-xl text-gradient">{format(value)}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-valuetext={format(value)}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 outline-none dark:bg-white/10 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-blue [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:transition [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-brand-blue"
        style={{
          background: `linear-gradient(to right, #2563EB 0%, #0891B2 ${pct}%, transparent ${pct}%)`,
          backgroundColor: "rgb(226 232 240)",
        }}
      />
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl leading-none sm:text-4xl">{value}</p>
      <p className="mt-1.5 text-sm text-white/80">{label}</p>
    </div>
  );
}

export default function TimeReclaimedCalculator() {
  const [decisions, setDecisions] = useState(6);
  const [minutes, setMinutes] = useState(35);
  const [rate, setRate] = useState(50);

  const result = useMemo(() => {
    const savedPerWeekMin = decisions * minutes * SAVINGS_FACTOR;
    const annualHours = (savedPerWeekMin * 52) / 60;
    const dollars = annualHours * rate;
    const workingDays = annualHours / 8;
    return {
      annualHours: Math.round(annualHours),
      weeklyMin: Math.round(savedPerWeekMin),
      dollars: Math.round(dollars),
      workingDays: Math.round(workingDays),
    };
  }, [decisions, minutes, rate]);

  return (
    <section id="calculator" className="py-20 lg:py-28">
      <div className="container-shortlist">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
            The math
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink dark:text-white sm:text-4xl">
            See the evenings you'd get back.
          </h2>
          <p className="mt-4 text-lg text-muted dark:text-slate-300">
            Slide to match your week. The number updates as you go.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mx-auto mt-12 max-w-5xl">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-white/[0.03] lg:grid-cols-2">
            {/* Inputs */}
            <div className="space-y-8 p-8 sm:p-10">
              <Slider
                id="decisions"
                label="Buying decisions per week"
                min={1}
                max={25}
                value={decisions}
                onChange={setDecisions}
                format={(v) => `${v}`}
              />
              <Slider
                id="minutes"
                label="Minutes lost per decision"
                min={5}
                max={90}
                step={5}
                value={minutes}
                onChange={setMinutes}
                format={(v) => `${v} min`}
              />
              <Slider
                id="rate"
                label="What an hour is worth to you"
                min={10}
                max={150}
                step={5}
                value={rate}
                onChange={setRate}
                format={(v) => `$${v}`}
              />
              <p className="text-xs text-muted">
                Illustrative estimate. Assumes Trine saves ~70% of the time
                you'd spend deciding on your own.
              </p>
            </div>

            {/* Output on gradient */}
            <div className="surface-gradient animate-gradient-pan relative overflow-hidden p-8 text-white sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                You could reclaim
              </p>
              <p
                className="mt-2 font-display text-6xl leading-none"
                aria-live="polite"
              >
                {result.annualHours}
                <span className="text-2xl"> hrs/yr</span>
              </p>
              <p className="mt-2 text-lg text-white/90">
                ≈ {result.workingDays} working days back
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <Stat
                  value={`${result.weeklyMin} min`}
                  label="saved every week"
                />
                <Stat
                  value={`$${result.dollars.toLocaleString()}`}
                  label="of your time, per year"
                />
              </div>

              <Button
                href="#start"
                className="group mt-8 w-full !bg-none bg-white !text-brand-blue shadow-md hover:-translate-y-px"
              >
                Start reclaiming it free
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
