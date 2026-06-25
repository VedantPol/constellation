import LayoutPreloader from "@/components/ui/layout-preloader";
import Hero from "@/components/ui/animated-shader-hero";
import { TrailCard, type ProjectStatus } from "@/components/ui/trail-card";
import { GlowingShadow } from "@/components/ui/glowing-shadow";
import { CinematicFooter } from "@/components/ui/motion-footer";
import CategoryTabs from "@/components/CategoryTabs";
import Logo from "@/components/Logo";
import { GitHub, LinkedIn } from "@/components/icons";
import { categories, projectsByCategory, liveCount, profile, social } from "@/lib/projects";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Start animation */}
      <LayoutPreloader />

      {/* Sticky glass nav (full-width) */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a href="#top" className="flex shrink-0 items-center gap-2 font-heading text-lg font-semibold tracking-tight">
            <Logo className="h-6 w-6" />
            <span className="hidden sm:inline">Constellation</span>
          </a>

          <CategoryTabs />

          <div className="flex shrink-0 items-center gap-1">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="cursor-pointer rounded-lg p-2 text-slate-300 transition-colors hover:text-star"
            >
              <GitHub className="h-5 w-5" />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="cursor-pointer rounded-lg p-2 text-slate-300 transition-colors hover:text-star"
            >
              <LinkedIn className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Galaxy shader hero (full-width landing) */}
      <Hero
        id="top"
        trustBadge={{
          text: `${liveCount} live deployments · ${profile.location}`,
          icons: [
            <span key="dot" className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-live" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
            </span>,
          ],
        }}
        headline={{ line1: "Every project,", line2: "one constellation." }}
        subtitle={`${profile.name} — ${profile.role}. ${profile.intro}`}
        buttons={{
          primary: { text: "Explore projects", href: "#client" },
          secondary: { text: "Get in touch", href: `mailto:${social.email}` },
        }}
      />

      {/* Project sections */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-24 py-12 sm:py-16">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-live">{cat.eyebrow}</p>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">{cat.label}</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-300">{cat.subtitle}</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projectsByCategory(cat.id).map((project) => {
                const status: ProjectStatus = !project.url ? "repo" : project.status ?? "live";
                return (
                  <GlowingShadow key={project.repo} className="h-full">
                    <TrailCard
                      imageUrl={project.image}
                      title={project.name}
                      location={cat.label}
                      status={status}
                      host={project.host}
                      tags={project.tags}
                      liveUrl={project.url}
                      repoUrl={project.repo}
                    />
                  </GlowingShadow>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Cinematic footer (revealed on scroll) */}
      <CinematicFooter />
    </main>
  );
}
