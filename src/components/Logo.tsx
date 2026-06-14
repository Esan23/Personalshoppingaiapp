interface LogoProps {
  className?: string;
}

/** Trine mark — three connected points in a triangle (a "trine"): the
 *  three-option mechanic plus calm/harmony, reversed white on the brand
 *  gradient tile (indigo → amber, "midnight → morning"). */
export default function Logo({ className = "h-8 w-8" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      role="img"
      aria-label="Trine"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="trine-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#312E81" />
          <stop offset="38%" stopColor="#2563EB" />
          <stop offset="70%" stopColor="#14B8A6" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#trine-logo)" />
      {/* Triangle edges connecting the three points */}
      <path
        d="M16 8.5 L23.5 22 L8.5 22 Z"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.55"
      />
      {/* The three points */}
      <circle cx="16" cy="8.5" r="2.9" fill="#fff" />
      <circle cx="23.5" cy="22" r="2.9" fill="#fff" />
      <circle cx="8.5" cy="22" r="2.9" fill="#fff" />
    </svg>
  );
}
