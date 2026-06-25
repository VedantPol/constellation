export type ProjectStatus = "live" | "offline";
export type Category = "client" | "ai" | "web";

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
  /** Local preview image (sneak peek) under /public */
  image: string;
  /** Public deployment URL — present only when the project is hosted somewhere */
  url?: string;
  /** Liveness of `url` from the last HTTP probe (only meaningful when `url` is set) */
  status?: ProjectStatus;
  /** Where it is hosted (only when `url` is set) */
  host?: "Vercel" | "GitHub Pages" | "Custom Domain" | "Render" | "Self-hosted";
};

export type CategoryMeta = {
  id: Category;
  label: string;
  eyebrow: string;
  subtitle: string;
};

export const categories: CategoryMeta[] = [
  {
    id: "client",
    label: "Client Work",
    eyebrow: "For businesses",
    subtitle: "Websites I've designed and shipped for real clients.",
  },
  {
    id: "ai",
    label: "AI / ML & Data",
    eyebrow: "Intelligent systems",
    subtitle: "Deployed RAG, agentic and forecasting systems — most running live on my own server.",
  },
  {
    id: "web",
    label: "Web & Open Source",
    eyebrow: "Apps & contributions",
    subtitle: "Personal sites, products and open-source work.",
  },
];

/**
 * Every showcased project. Liveness verified by HTTP probe on 2026-06-25.
 * Preview images live in /public/previews (screenshots for live sites,
 * GitHub social cards for offline / repo-only projects).
 */
export const projects: Project[] = [
  // ── Client work ──────────────────────────────────────────────────
  {
    name: "Vision Technocraft",
    blurb: "Official company website for Vision Technocraft, live on a custom domain.",
    repo: "https://github.com/VedantPol/visiontechnocraft.github.io",
    tags: ["Business", "HTML/CSS/JS", "Custom Domain"],
    category: "client",
    image: "/previews/vision-technocraft.webp",
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
    image: "/previews/shri-geeta.webp",
    url: "https://shri-geeta-tours2.vercel.app",
    status: "live",
    host: "Vercel",
  },

  // ── AI / ML & Data ───────────────────────────────────────────────
  {
    name: "Enterprise RAG Knowledge Assistant",
    blurb:
      "A source-aware assistant for policy and technical docs: PDF parsing, embeddings, reranking and citation-grounded answers.",
    repo: "https://github.com/VedantPol/enterprise-rag-knowledge-assistant",
    tags: ["LangChain", "FastAPI", "Docker", "RAG"],
    category: "ai",
    image: "/previews/enterprise-rag.webp",
    url: "https://enterprise_rag.vedant-home-server.in/",
    status: "live",
    host: "Self-hosted",
  },
  {
    name: "Multi-Agent Knowledge Manager",
    blurb:
      "A LangGraph + AutoGen system with Retriever, Planner and Critic agents, guardrails, hallucination checks and LLM-as-Judge evaluation.",
    repo: "https://github.com/VedantPol/multi-agent-knowledge-manager",
    tags: ["LangGraph", "AutoGen", "FastAPI", "Agents"],
    category: "ai",
    image: "/previews/multi-agent.webp",
    url: "https://multi_agent_kms.vedant-home-server.in/",
    status: "live",
    host: "Self-hosted",
  },
  {
    name: "RetailPulse AI",
    blurb:
      "A Dockerized retail analytics platform: demand forecasting, stockout risk scoring, anomaly detection and AI-assisted insights.",
    repo: "https://github.com/VedantPol/retailpulse-ai",
    tags: ["LightGBM", "Streamlit", "FastAPI", "MLOps"],
    category: "ai",
    image: "/previews/retailpulse.webp",
    url: "https://retail_pulse.vedant-home-server.in/",
    status: "live",
    host: "Self-hosted",
  },
  {
    name: "Personal Finance Analyzer",
    blurb: "A Python tool that turns bank statements into masked, verified spending insights and plain-language advice.",
    repo: "https://github.com/VedantPol/personal-finance-analyzer",
    tags: ["Python", "Finance", "Data Viz"],
    category: "ai",
    image: "/previews/finance-analyzer.webp",
    url: "https://personal-finance-analyzernew.vercel.app",
    status: "live",
    host: "Vercel",
  },

  // ── Web & Open Source ────────────────────────────────────────────
  {
    name: "AI/ML Portfolio",
    blurb: "My animated personal portfolio — experience, projects, a patent, Kaggle and more.",
    repo: "https://github.com/VedantPol/vedant-pol-portfolio",
    tags: ["React", "Vite", "Framer Motion"],
    category: "web",
    image: "/previews/aiml-portfolio.webp",
    url: "https://aiportfoliowebsite.vercel.app",
    status: "live",
    host: "Vercel",
  },
  {
    name: "Terminal Portfolio",
    blurb: "A playful terminal-styled site — type commands to explore my work.",
    repo: "https://github.com/VedantPol/VedantPol-Website",
    tags: ["TypeScript", "Terminal UI"],
    category: "web",
    image: "/previews/terminal-portfolio.webp",
    url: "https://vedantpol-website-vedantpol.vercel.app",
    status: "live",
    host: "Vercel",
  },
  {
    name: "NoteVault",
    blurb: "A full-stack note-keeping app. Hosted on Render's free tier — may need a moment to wake.",
    repo: "https://github.com/VedantPol/NoteVault",
    tags: ["JavaScript", "Full-stack", "Notes"],
    category: "web",
    image: "/previews/notevault.webp",
    url: "https://notevault-3kcd.onrender.com",
    status: "offline",
    host: "Render",
  },
  {
    name: "GSoC 2022 — XWiki",
    blurb: "Google Summer of Code with XWiki: built the Snap package and automated cloud-ready release workflows.",
    repo: "https://github.com/VedantPol/GSoC_2022_Report_XWiki",
    tags: ["Open Source", "GSoC", "Docker"],
    category: "web",
    image: "/previews/gsoc-xwiki.webp",
  },
];

export const projectsByCategory = (id: Category) => projects.filter((p) => p.category === id);

export const liveCount = projects.filter((p) => p.status === "live").length;

export const profile = {
  name: "Vedant Pol",
  role: "ML, GenAI & Data Science Engineer",
  location: "Mumbai, India",
  tagline: "Every project, one constellation.",
  intro:
    "A single place to explore everything I've built — client websites, deployed AI/ML systems, and open-source work.",
};

export const social = {
  github: "https://github.com/VedantPol",
  linkedin: "https://www.linkedin.com/in/vedant-pol-30987b20a",
  email: "polvedant11@gmail.com",
};
