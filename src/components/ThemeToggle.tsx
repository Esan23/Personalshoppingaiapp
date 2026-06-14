import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

interface ThemeToggleProps {
  theme: "light" | "dark";
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-ink transition hover:border-brand-blue hover:text-brand-blue dark:border-white/15 dark:text-slate-200 dark:hover:border-brand-cyan dark:hover:text-white"
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
}
