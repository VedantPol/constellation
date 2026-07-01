import Hero from "@/components/ui/animated-shader-hero";
import { TrailCard, type ProjectStatus } from "@/components/ui/trail-card";
import { GlowingShadow } from "@/components/ui/glowing-shadow";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { Navbar } from "@/components/ui/mini-navbar";
import StarsBackground from "@/components/StarsBackground";
import { categories, projectsByCategory, liveCount, profile, social } from "@/lib/projects";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Shooting-stars page background */}
      <StarsBackground />

      {/* Floating mini navbar */}
      <Navbar />

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
              <p className="mt-3 text-base leading-relaxed text-neutral-300">{cat.subtitle}</p>
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
