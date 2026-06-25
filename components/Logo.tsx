/**
 * Constellation logomark — five stars wired into a subtle "V" (for Vedant),
 * the lead star glowing in the brand green. Inherits color via currentColor
 * for the connecting lines; stars use the live-green accent.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      {/* connecting lines */}
      <path
        d="M5 7 L11.5 21 L16 13 L20.5 21 L27 7"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      {/* stars */}
      <circle cx="5" cy="7" r="1.6" fill="#22C55E" />
      <circle cx="11.5" cy="21" r="1.4" fill="#86EFAC" />
      <circle cx="20.5" cy="21" r="1.4" fill="#86EFAC" />
      <circle cx="27" cy="7" r="1.6" fill="#22C55E" />
      {/* lead star with glow */}
      <circle cx="16" cy="13" r="3.1" fill="#22C55E" opacity="0.25" />
      <circle cx="16" cy="13" r="1.9" fill="#4ADE80" />
    </svg>
  );
}
