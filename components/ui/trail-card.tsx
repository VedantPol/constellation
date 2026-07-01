"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GitHub } from "@/components/icons";

export type ProjectStatus = "live" | "offline" | "repo";

// Adapted from the 21st.dev TrailCard (hiking) to showcase software projects:
// image + gradient + title/location overlay, a hover action button, then a
// detail row with status/host + repo link, divider, and tech tags.
interface TrailCardProps {
  className?: string;
  imageUrl: string;
  title: string;
  location: string;
  status: ProjectStatus;
  host?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
}

const STATUS_META: Record<ProjectStatus, { label: string; className: string }> = {
  live: { label: "Live", className: "text-live" },
  offline: { label: "Sleeping", className: "text-slate-400" },
  repo: { label: "Repository", className: "text-slate-300" },
};

const TrailCard = React.forwardRef<HTMLDivElement, TrailCardProps>(
  ({ className, imageUrl, title, location, status, host, tags, liveUrl, repoUrl }, ref) => {
    const s = STATUS_META[status];
    const primary = liveUrl ?? repoUrl;

    return (
      <motion.div
        ref={ref}
        className={cn(
          "group flex h-full w-full flex-col overflow-hidden rounded-2xl bg-card text-card-foreground shadow-lg",
          className,
        )}
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Top: preview image with overlay */}
        <a
          href={primary}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title}`}
          className="relative block h-52 w-full overflow-hidden"
        >
          <Image
            src={imageUrl}
            alt={`Preview of ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 flex w-full items-end justify-between gap-3 p-4">
            <div className="text-white">
              <h3 className="text-lg font-bold leading-tight">{title}</h3>
              <p className="text-xs text-white/80">{location}</p>
            </div>
            <div className="shrink-0 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <Button variant="secondary" size="sm" asChild>
                <a href={primary} target="_blank" rel="noopener noreferrer">
                  {liveUrl ? "Visit" : "Code"}
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </a>

        {/* Bottom: details */}
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className={cn("font-bold", s.className)}>{s.label}</p>
              <p className="text-xs text-muted-foreground">{host ?? "Open source"}</p>
            </div>
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} source on GitHub`}
              className="cursor-pointer rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <GitHub className="h-5 w-5" />
            </a>
          </div>

          <div className="my-4 h-px w-full bg-border" />

          <ul className="mt-auto flex flex-wrap gap-2">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  },
);

TrailCard.displayName = "TrailCard";

export { TrailCard };
