export type ProjectStatus = "live" | "offline";

export type Project = {
  /** Display name */
  name: string;
  /** One-line summary */
  blurb: string;
  /** Public deployment URL (the live site) */
  url: string;
  /** Source repository */
  repo: string;
  /** Tech / tags shown on the card */
  tags: string[];
  /** Whether the deployment responded with 200 on the last check */
  status: ProjectStatus;
  /** Where it is hosted */
  host: "Vercel" | "GitHub Pages" | "Custom Domain" | "Render" | "Self-hosted";
  /** Highlighted (rendered larger in the grid) */
  featured?: boolean;
};

/**
 * The constellation. Each entry is a LIVE (or recently-live) deployment.
 * Liveness was verified by HTTP probe on 2026-06-25.
 * Add self-hosted projects here as you confirm their public URLs.
 */
export const projects: Project[] = [
  {
    name: "AI/ML Portfolio",
    blurb: "Animated personal portfolio for AI/ML work — built for Vercel with Cloudflare DNS.",
    url: "https://aiportfoliowebsite.vercel.app",
    repo: "https://github.com/VedantPol/vedant-pol-portfolio",
    tags: ["JavaScript", "Portfolio", "Animated"],
    status: "live",
    host: "Vercel",
    featured: true,
  },
  {
    name: "Vision Technocraft",
    blurb: "Official company website for Vision Technocraft, live on a custom domain.",
    url: "https://visiontechnocraft.in",
    repo: "https://github.com/VedantPol/visiontechnocraft.github.io",
    tags: ["HTML/CSS/JS", "Business", "Custom Domain"],
    status: "live",
    host: "Custom Domain",
    featured: true,
  },
  {
    name: "Shri Geeta Tours & Travels",
    blurb: "Premium animated travel site for a Mumbai tour operator with WhatsApp-first booking.",
    url: "https://shri-geeta-tours2.vercel.app",
    repo: "https://github.com/VedantPol/shri-geeta-tours",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    status: "live",
    host: "Vercel",
    featured: true,
  },
  {
    name: "Terminal Portfolio",
    blurb: "A terminal-styled website to showcase my portfolio and projects.",
    url: "https://vedantpol-website-vedantpol.vercel.app",
    repo: "https://github.com/VedantPol/VedantPol-Website",
    tags: ["TypeScript", "Terminal UI"],
    status: "live",
    host: "Vercel",
  },
  {
    name: "Personal Finance Analyzer",
    blurb: "A Python-powered tool for analyzing and visualizing personal finances.",
    url: "https://personal-finance-analyzernew.vercel.app",
    repo: "https://github.com/VedantPol/personal-finance-analyzer",
    tags: ["Python", "Finance", "Data Viz"],
    status: "live",
    host: "Vercel",
  },
  {
    name: "NoteVault",
    blurb: "A generic note-keeping application. Hosted on Render's free tier — may need a moment to wake.",
    url: "https://notevault-3kcd.onrender.com",
    repo: "https://github.com/VedantPol/NoteVault",
    tags: ["JavaScript", "Full-stack", "Notes"],
    status: "offline",
    host: "Render",
  },
];

/** Notable repositories worth showcasing that don't have a public deployment (yet). */
export type Repo = { name: string; blurb: string; repo: string; tags: string[] };

export const notableRepos: Repo[] = [
  {
    name: "Enterprise RAG Knowledge Assistant",
    blurb: "Enterprise RAG assistant built with FastAPI, LangChain, Pinecone and Docker.",
    repo: "https://github.com/VedantPol/enterprise-rag-knowledge-assistant",
    tags: ["Python", "LangChain", "RAG"],
  },
  {
    name: "RetailPulse AI",
    blurb: "Forecasting & recommendation platform for retail.",
    repo: "https://github.com/VedantPol/retailpulse-ai",
    tags: ["Python", "ML", "Forecasting"],
  },
  {
    name: "Multi-Agent Knowledge Manager",
    blurb: "A multi-agent system for managing and querying knowledge.",
    repo: "https://github.com/VedantPol/multi-agent-knowledge-manager",
    tags: ["Python", "Agents", "LLM"],
  },
  {
    name: "Google Meet Live Summarizer",
    blurb: "Live multilingual Google Meet summarizer — a Chrome extension.",
    repo: "https://github.com/VedantPol/Google_Meet_Live_Summarizer",
    tags: ["JavaScript", "Chrome Extension"],
  },
  {
    name: "Medinate",
    blurb: "Database management system for blood transfer between blood banks, donors and hospitals.",
    repo: "https://github.com/VedantPol/Medinate-Flutter",
    tags: ["Flutter", "Dart", "Healthcare"],
  },
  {
    name: "GSoC 2022 — XWiki",
    blurb: "Google Summer of Code 2022 final work-product report with the XWiki org.",
    repo: "https://github.com/VedantPol/GSoC_2022_Report_XWiki",
    tags: ["Open Source", "GSoC"],
  },
];

export const social = {
  github: "https://github.com/VedantPol",
  email: "polvedant11@gmail.com",
};
