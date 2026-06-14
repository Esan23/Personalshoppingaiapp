interface LogoProps {
  className?: string;
}

/** Shortlist mark — three stacked lines narrowing to a confident pick. */
export default function Logo({ className = "h-8 w-8" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      role="img"
      aria-label="Shortlist"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shortlist-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4338CA" />
          <stop offset="50%" stopColor="#0891B2" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#shortlist-logo)" />
      <g stroke="#fff" strokeWidth="2.6" strokeLinecap="round">
        <line x1="11" y1="11" x2="23" y2="11" />
        <line x1="11" y1="16" x2="23" y2="16" />
        <line x1="11" y1="21" x2="18" y2="21" />
      </g>
      <circle cx="8" cy="11" r="1.6" fill="#FBBF24" />
      <circle cx="8" cy="16" r="1.6" fill="#fff" />
      <circle cx="8" cy="21" r="1.6" fill="#fff" />
    </svg>
  );
}
