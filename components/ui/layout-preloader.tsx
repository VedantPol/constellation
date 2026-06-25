"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";

/**
 * Start animation / preloader — a full-screen galaxy intro shown on first load:
 * a high-quality nebula image, drifting film-grain, the constellation logo and a
 * loading bar, which then fades out to reveal the site. Shows once per session.
 */
export default function LayoutPreloader() {
  const [mounted, setMounted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Show once per browser session.
    if (typeof window !== "undefined" && sessionStorage.getItem("constellation-preloaded")) {
      setGone(true);
      return;
    }
    setMounted(true);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = reduced ? 600 : 2200;

    const start = requestAnimationFrame(() => setProgress(100));
    const leave = setTimeout(() => setLeaving(true), hold);
    const finish = setTimeout(() => {
      setGone(true);
      sessionStorage.setItem("constellation-preloaded", "1");
    }, hold + 700);

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
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-ink transition-all duration-700 ${
        leaving ? "scale-105 opacity-0" : "opacity-100"
      }`}
      style={{ visibility: mounted ? "visible" : "hidden" }}
    >
      {/* Galaxy / nebula backdrop */}
      <Image
        src="/preloader/stars.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      {/* vignette + fade to ink */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.5)_55%,rgba(15,23,42,0.95)_100%)]" />
      {/* drifting film grain */}
      <div className="preloader-noise pointer-events-none absolute -inset-[10%] opacity-[0.12] mix-blend-soft-light" />

      {/* Center mark */}
      <div className="relative z-10 flex flex-col items-center">
        <Logo className="h-14 w-14 animate-float drop-shadow-[0_0_24px_rgba(34,197,94,0.55)]" />
        <h1 className="mt-5 font-heading text-2xl font-semibold uppercase tracking-[0.45em] text-star sm:text-3xl">
          Constellation
        </h1>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-400">Vedant Pol · Projects</p>

        {/* Loading bar */}
        <div className="mt-8 h-px w-48 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-live to-emerald-300 transition-[width] duration-[2000ms] ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
