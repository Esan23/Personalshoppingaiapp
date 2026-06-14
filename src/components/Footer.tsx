import Logo from "./Logo";
import { FOOTER_COLUMNS } from "../lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#080C18]">
      <div className="container-shortlist py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="font-display text-2xl text-ink dark:text-white">
                Shortlist
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              A decision, handled — so your attention goes to the things that
              actually matter.
            </p>
            <div className="mt-5 flex gap-3">
              {["X", "in", "IG"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-xs font-semibold text-muted transition hover:border-brand-blue hover:text-brand-blue dark:border-white/10 dark:hover:border-brand-cyan dark:hover:text-brand-cyan"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink dark:text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition hover:text-ink dark:hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-muted dark:border-white/10 sm:flex-row">
          <p>© {new Date().getFullYear()} Shortlist. All rights reserved.</p>
          <p className="text-xs">
            Made for everyone with too many tabs open.
          </p>
        </div>
      </div>
    </footer>
  );
}
