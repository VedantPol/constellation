"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";

/**
 * Start animation / preloader — a single, full-screen galaxy intro shown on load:
 * a high-quality nebula image, the constellation logo + wordmark, and a loading
 * bar, which then fades out to reveal the site.
 *
 * It renders visible from the first paint (no visibility gate) so the site never
 * flashes underneath it, and it's the only intro animation.
 */
export default function LayoutPreloader() {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = reduced ? 500 : 1700;

    const start = requestAnimationFrame(() => setProgress(100));
    const leave = setTimeout(() => setLeaving(true), hold);
    const finish = setTimeout(() => setGone(true), hold + 650);

    return () => {
      cancelAnimationFrame(start);
      clearTimeout(leave);
      clearTimeout(finish);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-ink transition-opacity duration-[650ms] ease-out ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Galaxy / nebula backdrop */}
      <Image src="/preloader/stars.webp" alt="" fill priority sizes="100vw" className="object-cover opacity-60" />
      {/* vignette + fade to ink */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.55)_55%,rgba(15,23,42,0.96)_100%)]" />

      {/* Single center mark */}
      <div className="relative z-10 flex flex-col items-center animate-fade-in-up">
        <Logo className="h-14 w-14 drop-shadow-[0_0_24px_rgba(249,115,22,0.55)]" />
        <h1 className="mt-5 font-heading text-2xl font-semibold uppercase tracking-[0.45em] text-star sm:text-3xl">
          Constellation
        </h1>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-400">Vedant Pol · Projects</p>

        <div className="mt-8 h-px w-48 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-live to-orange-300 transition-[width] duration-[1700ms] ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
