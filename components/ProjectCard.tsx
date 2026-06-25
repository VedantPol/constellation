"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { ArrowUpRight, GitHub } from "./icons";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const hasLink = Boolean(project.url);
  const isLive = project.status === "live";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-ink-2/40 p-6 backdrop-blur-sm transition-colors duration-200 hover:border-live/40 hover:bg-ink-2/60"
    >
      {/* glow on hover */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-live/10 blur-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-4 flex items-center justify-between gap-3">
          <StatusBadge hasLink={hasLink} isLive={isLive} />
          <span className="text-xs uppercase tracking-widest text-slate-400">
            {hasLink ? project.host : "GitHub"}
          </span>
        </div>

        <h3 className="font-heading text-xl font-semibold text-star">{project.name}</h3>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-slate-300">
          {project.blurb}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-6 flex items-center gap-3">
        {hasLink && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-live px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-live"
          >
            {isLive ? "Visit live" : "Open (may be asleep)"}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} source code on GitHub`}
          className={`inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            hasLink
              ? "border border-white/10 text-slate-200 hover:border-white/30 hover:text-star focus-visible:outline-white/40"
              : "bg-live px-4 font-medium text-ink hover:bg-emerald-400 focus-visible:outline-live"
          }`}
        >
          <GitHub className="h-4 w-4" />
          {hasLink ? "Code" : "View on GitHub"}
        </a>
      </div>
    </motion.article>
  );
}

function StatusBadge({ hasLink, isLive }: { hasLink: boolean; isLive: boolean }) {
  if (!hasLink) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
        <span className="h-2 w-2 rounded-full bg-slate-400" />
        Repository
      </span>
    );
  }
  if (isLive) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-live/10 px-3 py-1 text-xs font-medium text-live">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-live" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
        </span>
        Live
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
      <span className="h-2 w-2 rounded-full bg-amber-300" />
      Sleeping
    </span>
  );
}
