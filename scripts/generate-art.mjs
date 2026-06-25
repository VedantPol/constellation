/**
 * AI preview-art generator for Constellation — uses Google's Gemini
 * "nano banana" image model (gemini-2.5-flash-image).
 *
 * Calls the Gemini API, then downscales each result to a web-optimized WebP.
 * Output goes to public/art/ (NOT public/previews/) so you can review before
 * deciding to replace the real screenshots.
 *
 * Usage (Node 20.6+ loads the key from .env.local):
 *   node --env-file=.env.local scripts/generate-art.mjs              # generate all
 *   node --env-file=.env.local scripts/generate-art.mjs retailpulse patent
 *
 * Requires billing enabled on the Gemini key — image gen is not on the free tier.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash-image";
const OUT_DIR = "public/art";

// Shared visual language so every card feels like one set.
const STYLE =
  "Minimal abstract editorial tech illustration. Deep navy background (#0F172A). " +
  "Emerald and teal green accents (#22C55E, #86EFAC). A subtle constellation of thin " +
  "connected star-lines woven into the composition. Soft volumetric glow, premium, " +
  "high contrast, generous negative space, flat vector feel with light depth. " +
  "Absolutely NO text, NO words, NO letters, NO logos. Wide 3:2 landscape composition.";

// One subject per project, keyed to the same filenames used in lib/projects.ts.
const PROMPTS = {
  "vision-technocraft": "Abstract IT/technology company motif: interconnected circuit nodes and a faint geometric building skyline.",
  "shri-geeta": "Abstract travel motif: a glowing dotted journey route arcing over stylized mountains, with a compass-rose constellation.",
  "enterprise-rag": "Abstract knowledge-retrieval motif: stacked documents dissolving into glowing connected nodes of a knowledge graph.",
  "multi-agent": "Abstract multi-agent AI motif: several glowing orbs connected by light beams forming a coordinated network.",
  "retailpulse": "Abstract retail forecasting motif: a rising glowing line-and-bar chart merging into a constellation, with subtle box/package shapes.",
  "finance-analyzer": "Abstract personal-finance motif: ascending bar chart and coin discs connected by star-lines, calm and trustworthy.",
  "aiml-portfolio": "Abstract creative-developer workspace motif: a glowing monitor and orbiting UI shards arranged as a constellation.",
  "terminal-portfolio": "Abstract terminal motif: a stylized command-line window with a glowing cursor and code-bracket shapes as stars.",
  "notevault": "Abstract secure-notes motif: layered note cards and a faint vault/lock shape connected by star-lines.",
  "gsoc-xwiki": "Abstract open-source motif: interlocking gears and a rising sun made of connected stars, collaborative feel.",
  patent: "Abstract ML-diagnosis motif: a printer silhouette emitting an audio waveform that turns into a neural-network constellation.",
};

async function generate(name) {
  const prompt = `${PROMPTS[name]} ${STYLE}`;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ["IMAGE"] },
    }),
  });
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status} ${(await res.text()).slice(0, 300)}`);
  const data = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts || [];
  const img = parts.find((p) => p.inlineData?.data);
  if (!img) throw new Error(`${name}: no image in response`);
  const buf = Buffer.from(img.inlineData.data, "base64");
  const out = path.join(OUT_DIR, `${name}.webp`);
  await sharp(buf).resize({ width: 1000, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
  console.log(`✓ ${name} -> ${out} (${(fs.statSync(out).size / 1024) | 0} KB)`);
}

async function main() {
  if (!API_KEY) {
    console.error("Missing GEMINI_API_KEY. Run:  node --env-file=.env.local scripts/generate-art.mjs");
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const args = process.argv.slice(2);
  const names = args.length ? args : Object.keys(PROMPTS);
  for (const name of names) {
    if (!PROMPTS[name]) {
      console.warn(`! unknown: ${name} (known: ${Object.keys(PROMPTS).join(", ")})`);
      continue;
    }
    try {
      await generate(name);
    } catch (e) {
      console.error(`✗ ${e.message}`);
    }
  }
  console.log(`\nReview images in ${OUT_DIR}/. To use one, copy it into public/previews/ (same filename).`);
}

main();
