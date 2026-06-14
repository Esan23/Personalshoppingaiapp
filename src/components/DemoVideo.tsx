import { useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import SectionReveal from "./ui/SectionReveal";
import Button from "./ui/Button";
import AppMockup from "./AppMockup";

export default function DemoVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-slate-100/70 py-20 dark:bg-white/[0.02] lg:py-28">
      <div className="container-shortlist">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
            See it work
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink dark:text-white sm:text-4xl">
            Ninety seconds, start to decided.
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mx-auto mt-12 max-w-4xl">
          <div className="group relative aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-white/10">
            {/* Branded app mockup serves as the poster (swap for real video) */}
            <AppMockup />

            {!playing ? (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play the 90-second demo"
                className="absolute inset-0 grid place-items-center bg-ink/10 transition group-hover:bg-ink/20"
              >
                <span className="grid h-20 w-20 place-items-center rounded-full bg-white/95 shadow-2xl transition-transform duration-150 group-hover:scale-105">
                  <PlayIcon className="ml-1 h-9 w-9 text-brand-blue" />
                </span>
                <span className="absolute bottom-6 left-6 rounded-full bg-ink/50 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
                  Watch the 90-second walkthrough
                </span>
              </button>
            ) : (
              <div className="surface-gradient absolute inset-0 grid place-items-center text-center text-white">
                <div>
                  <p className="font-display text-2xl">Demo video goes here</p>
                  <p className="mt-2 text-sm text-white/80">
                    Drop in the captioned MP4/WebM walkthrough at launch.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 text-center">
            <Button href="#start" variant="ghost" size="md">
              Convinced? Start free instead
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
