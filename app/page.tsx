import Starfield from "@/components/Starfield";
import ProjectCard from "@/components/ProjectCard";
import { ArrowUpRight, GitHub, Mail, Sparkle } from "@/components/icons";
import { clientProjects, coreProjects, projects, social } from "@/lib/projects";

export default function Home() {
  const liveCount = projects.filter((p) => p.status === "live").length;

  return (
    <main className="relative min-h-screen space-bg">
      <Starfield />

      {/* subtle star-chart grid overlay */}
      <div className="pointer-events-none absolute inset-0 starchart-grid opacity-40" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Nav */}
        <header className="flex items-center justify-between py-6">
          <a href="#top" className="flex items-center gap-2 font-heading text-lg font-semibold tracking-tight">
            <Sparkle className="h-5 w-5 text-live" />
            Constellation
          </a>
          <nav className="flex items-center gap-2">
            <a
              href="#client"
              className="hidden cursor-pointer rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:text-star sm:inline-block"
            >
              Client
            </a>
            <a
              href="#core"
              className="hidden cursor-pointer rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:text-star sm:inline-block"
            >
              Core
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-200 transition-colors hover:border-white/30 hover:text-star"
            >
              <GitHub className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section id="top" className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-live" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
              </span>
              {liveCount} live deployments and counting
            </span>
            <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Every project,
              <br />
              <span className="text-gradient">one constellation.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              A single launchpad to navigate everything I&rsquo;ve built &mdash; client websites,
              personal portfolios, web apps and AI/ML tools.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="#client"
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-live px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-emerald-400"
              >
                Explore the projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${social.email}`}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 px-5 py-2.5 text-sm text-slate-200 transition-colors hover:border-white/30 hover:text-star"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </div>
          </div>
        </section>

        {/* Client projects */}
        <section id="client" className="scroll-mt-20 py-10">
          <SectionHeading
            eyebrow="For clients"
            title="Client projects"
            subtitle="Websites I've designed and shipped for businesses and clients."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {clientProjects.map((project, i) => (
              <ProjectCard key={project.repo} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Core projects */}
        <section id="core" className="scroll-mt-20 py-16">
          <SectionHeading
            eyebrow="Built by me"
            title="Core projects"
            subtitle="Personal portfolios, products and experiments — live deployments and source repositories."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreProjects.map((project, i) => (
              <ProjectCard key={project.repo} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} Vedant Pol &middot; Built with Next.js &amp; Tailwind
            </p>
            <div className="flex items-center gap-3">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="cursor-pointer rounded-lg p-2 text-slate-400 transition-colors hover:text-star"
              >
                <GitHub className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${social.email}`}
                aria-label="Email"
                className="cursor-pointer rounded-lg p-2 text-slate-400 transition-colors hover:text-star"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-live">{eyebrow}</p>
      <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-slate-400">{subtitle}</p>
    </div>
  );
}
