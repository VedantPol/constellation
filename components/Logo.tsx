/**
 * Constellation logomark — a clean "V" (for Vedant) drawn as a constellation:
 * two top stars and a glowing lead star at the vertex, joined by faint lines,
 * with smaller stars along the strokes. Amber palette to match the galaxy.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      {/* connecting lines: a single clean V */}
      <path
        d="M6 7 L16 23 L26 7"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />
      {/* top stars */}
      <circle cx="6" cy="7" r="1.7" fill="#FFFFFF" />
      <circle cx="26" cy="7" r="1.7" fill="#FFFFFF" />
      {/* mid stars on the strokes */}
      <circle cx="10.6" cy="14.4" r="1.15" fill="#A3A3A3" />
      <circle cx="21.4" cy="14.4" r="1.15" fill="#A3A3A3" />
      {/* lead star at the vertex, with glow */}
      <circle cx="16" cy="23" r="3.2" fill="#FFFFFF" opacity="0.25" />
      <circle cx="16" cy="23" r="2" fill="#FFFFFF" />
    </svg>
  );
}
