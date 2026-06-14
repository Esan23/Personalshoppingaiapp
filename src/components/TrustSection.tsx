import {
  LinkIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
  NoSymbolIcon,
  LockClosedIcon,
  TrashIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import SectionReveal from "./ui/SectionReveal";

const WAYS = [
  { icon: LinkIcon, label: "Paste a link" },
  { icon: PhotoIcon, label: "Drop a screenshot" },
  { icon: ChatBubbleLeftRightIcon, label: "Just describe it" },
];

const PRIVACY = [
  { icon: NoSymbolIcon, label: "No paid placements — ever", body: "Rankings are never for sale. The order is the honest answer." },
  { icon: EyeSlashIcon, label: "Your searches aren't sold", body: "What you look for stays yours. We don't broker it." },
  { icon: TrashIcon, label: "Delete your history anytime", body: "One tap clears it. No dark patterns, no “are you sure” maze." },
  { icon: LockClosedIcon, label: "Encrypted in transit and at rest", body: "Standard strong encryption guards everything you send." },
];

export default function TrustSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-shortlist">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Works everywhere */}
          <SectionReveal className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.03] sm:p-10">
            <h2 className="font-display text-2xl text-ink dark:text-white sm:text-3xl">
              Works wherever you shop
            </h2>
            <p className="mt-3 text-muted dark:text-slate-300">
              You don't have to learn a new store. Bring the thing you're stuck
              on, however you've got it.
            </p>
            <ul className="mt-8 space-y-3">
              {WAYS.map((w) => (
                <li
                  key={w.label}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue dark:bg-brand-cyan/10 dark:text-brand-cyan">
                    <w.icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-ink dark:text-slate-100">
                    {w.label}
                  </span>
                </li>
              ))}
            </ul>
          </SectionReveal>

          {/* Private by design */}
          <SectionReveal
            delay={0.1}
            className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.03] sm:p-10"
          >
            <h2 className="font-display text-2xl text-ink dark:text-white sm:text-3xl">
              Private by design
            </h2>
            <p className="mt-3 text-muted dark:text-slate-300">
              A recommendation you can trust starts with knowing who it answers
              to. The answer is you.
            </p>
            <ul className="mt-8 space-y-5">
              {PRIVACY.map((p) => (
                <li key={p.label} className="flex gap-3">
                  <span className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-success/10 text-success">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink dark:text-white">
                      {p.label}
                    </p>
                    <p className="text-sm text-muted dark:text-slate-400">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
