"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Logo from "@/components/Logo";

// Canvas is client-only (uses window during render).
const SpiralAnimation = dynamic(
  () => import("@/components/ui/spiral-animation").then((m) => m.SpiralAnimation),
  { ssr: false },
);

/**
 * Enter screen — a full-screen spiral particle animation on black with an
 * "Enter" button that fades in, then dismisses (fades out) to reveal the site.
 * Shows once per browser session.
 */
export default function EnterScreen() {
  const [showEnter, setShowEnter] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("constellation-entered")) {
      setGone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShowEnter(true), 1800);
    return () => clearTimeout(t);
  }, []);

  const enter = () => {
    setLeaving(true);
    setTimeout(() => {
      sessionStorage.setItem("constellation-entered", "1");
      document.body.style.overflow = "";
      setGone(true);
    }, 800);
  };

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden bg-black transition-opacity duration-700 ease-out ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>

      {/* Enter */}
      <div
        className={`absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center transition-all duration-1000 ease-out ${
          showEnter ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <Logo className="mb-6 h-10 w-10 drop-shadow-[0_0_20px_rgba(249,115,22,0.6)]" />
        <button
          onClick={enter}
          className="animate-pulse cursor-pointer text-2xl font-extralight uppercase tracking-[0.2em] text-white transition-all duration-700 hover:tracking-[0.32em] hover:text-live"
        >
          Enter
        </button>
      </div>
    </div>
  );
}
