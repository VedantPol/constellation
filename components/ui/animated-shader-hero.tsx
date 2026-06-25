"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonSpec = {
  text: string;
  onClick?: () => void;
  href?: string;
};

export interface HeroProps {
  trustBadge?: {
    text: string;
    icons?: ReactNode[];
  };
  headline: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  buttons?: {
    primary?: ButtonSpec;
    secondary?: ButtonSpec;
  };
  /** Anchor id for the section */
  id?: string;
  className?: string;
}

/**
 * Animated shader hero — a full-height landing panel whose content floats over
 * the page's flowing WebGL shader background (see ShaderBackground). Faithful to
 * the 21st.dev component API (trustBadge / headline / subtitle / buttons), themed
 * to the Constellation palette. Buttons accept either an href (link) or onClick.
 */
export default function Hero({
  trustBadge,
  headline,
  subtitle,
  buttons,
  id,
  className,
}: HeroProps) {
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-[calc(100vh-57px)] flex-col items-center justify-center overflow-hidden py-16 text-center",
        className,
      )}
    >
      {/* soft radial scrim to anchor the copy over the shader */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[120%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/40 blur-3xl" />

      <div className="mx-auto max-w-3xl">
        {trustBadge && (
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur-sm"
          >
            {trustBadge.icons?.map((icon, i) => (
              <span key={i} className="inline-flex items-center">
                {icon}
              </span>
            ))}
            {trustBadge.text}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease }}
          className="mt-6 font-heading text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl"
        >
          {headline.line1}
          <br />
          <span className="text-gradient">{headline.line2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease }}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
        >
          {subtitle}
        </motion.p>

        {buttons && (
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {buttons.primary && (
              <HeroButton
                spec={buttons.primary}
                className="bg-live text-ink hover:bg-emerald-400 focus-visible:outline-live"
              />
            )}
            {buttons.secondary && (
              <HeroButton
                spec={buttons.secondary}
                className="border border-white/10 text-slate-200 hover:border-white/30 hover:text-star focus-visible:outline-white/40"
              />
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function HeroButton({ spec, className }: { spec: ButtonSpec; className: string }) {
  const classes = cn(
    "inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    className,
  );
  if (spec.href) {
    return (
      <a href={spec.href} className={classes}>
        {spec.text}
      </a>
    );
  }
  return (
    <button type="button" onClick={spec.onClick} className={classes}>
      {spec.text}
    </button>
  );
}
