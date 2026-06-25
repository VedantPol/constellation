export type ProjectStatus = "live" | "offline";
export type Category = "client" | "core";

export type Project = {
  /** Display name */
  name: string;
  /** One-line summary */
  blurb: string;
  /** Source repository */
  repo: string;
  /** Tech / tags shown on the card */
  tags: string[];
  /** Which section the card appears in */
  category: Category;
  /** Public deployment URL — present only when the project is hosted somewhere */
  url?: string;
  /** Liveness of `url` from the last HTTP probe (only meaningful when `url` is set) */
  status?: ProjectStatus;
  /** Where it is hosted (only when `url` is set) */
  host?: "Vercel" | "GitHub Pages" | "Custom Domain" | "Render" | "Self-hosted";
};

/**
 * Every showcased project. Split into sections by `category`.
 * Liveness of deployed entries was verified by HTTP probe on 2026-06-25.
 * Add self-hosted projects here with their public `url` and host: "Self-hosted".
 */
export const projects: Project[] = [
  // ── Client projects ──────────────────────────────────────────────
  {
    name: "Vision Technocraft",
    blurb: "Official company website for Vision Technocraft, live on a custom domain.",
    repo: "https://github.com/VedantPol/visiontechnocraft.github.io",
    tags: ["HTML/CSS/JS", "Business", "Custom Domain"],
    category: "client",
    url: "https://visiontechnocraft.in",
    status: "live",
    host: "Custom Domain",
  },
  {
    name: "Shri Geeta Tours & Travels",
    blurb: "Premium animated travel site for a Mumbai tour operator with WhatsApp-first booking.",
    repo: "https://github.com/VedantPol/shri-geeta-tours",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    category: "client",
    url: "https://shri-geeta-tours2.vercel.app",
    status: "live",
    host: "Vercel",
  },

  // ── Core projects ────────────────────────────────────────────────
  {
    name: "AI/ML Portfolio",
    blurb: "Animated personal portfolio for AI/ML work — built for Vercel with Cloudflare DNS.",
    repo: "https://github.com/VedantPol/vedant-pol-portfolio",
    tags: ["JavaScript", "Portfolio", "Animated"],
    category: "core",
    url: "https://aiportfoliowebsite.vercel.app",
    status: "live",
    host: "Vercel",
  },
  {
    name: "Terminal Portfolio",
    blurb: "A terminal-styled website to showcase my portfolio and projects.",
    repo: "https://github.com/VedantPol/VedantPol-Website",
    tags: ["TypeScript", "Terminal UI"],
    category: "core",
    url: "https://vedantpol-website-vedantpol.vercel.app",
    status: "live",
    host: "Vercel",
  },
  {
    name: "Enterprise RAG Knowledge Assistant",
    blurb: "Enterprise RAG assistant built with FastAPI, LangChain, Pinecone and Docker.",
    repo: "https://github.com/VedantPol/enterprise-rag-knowledge-assistant",
    tags: ["Python", "LangChain", "RAG"],
    category: "core",
  },
  {
    name: "RetailPulse AI",
    blurb: "Forecasting & recommendation platform for retail.",
    repo: "https://github.com/VedantPol/retailpulse-ai",
    tags: ["Python", "ML", "Forecasting"],
    category: "core",
  },
  {
    name: "Multi-Agent Knowledge Manager",
    blurb: "A multi-agent system for managing and querying knowledge.",
    repo: "https://github.com/VedantPol/multi-agent-knowledge-manager",
    tags: ["Python", "Agents", "LLM"],
    category: "core",
  },
  {
    name: "Personal Finance Analyzer",
    blurb: "A Python-powered tool for analyzing and visualizing personal finances.",
    repo: "https://github.com/VedantPol/personal-finance-analyzer",
    tags: ["Python", "Finance", "Data Viz"],
    category: "core",
    url: "https://personal-finance-analyzernew.vercel.app",
    status: "live",
    host: "Vercel",
  },
  {
    name: "GSoC 2022 — XWiki",
    blurb: "Google Summer of Code 2022 final work-product report with the XWiki org.",
    repo: "https://github.com/VedantPol/GSoC_2022_Report_XWiki",
    tags: ["Open Source", "GSoC"],
    category: "core",
  },
  {
    name: "NoteVault",
    blurb: "A generic note-keeping application. Hosted on Render's free tier — may need a moment to wake.",
    repo: "https://github.com/VedantPol/NoteVault",
    tags: ["JavaScript", "Full-stack", "Notes"],
    category: "core",
    url: "https://notevault-3kcd.onrender.com",
    status: "offline",
    host: "Render",
  },
];

export const clientProjects = projects.filter((p) => p.category === "client");
export const coreProjects = projects.filter((p) => p.category === "core");

export const social = {
  github: "https://github.com/VedantPol",
  email: "polvedant11@gmail.com",
};
