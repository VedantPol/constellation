import ShaderBackground from "@/components/ShaderBackground";
import ProjectCard from "@/components/ProjectCard";
import CategoryTabs from "@/components/CategoryTabs";
import Logo from "@/components/Logo";
import { ArrowUpRight, GitHub, LinkedIn, Mail } from "@/components/icons";
import { categories, projectsByCategory, liveCount, profile, social } from "@/lib/projects";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Flowing WebGL shader background (fixed, behind everything) */}
      <ShaderBackground />
      {/* Readability scrim over the shader */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-ink/45" />

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

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        {/* Hero / landing screen */}
        <section id="top" className="flex min-h-[calc(100vh-57px)] flex-col items-center justify-center py-16 text-center">
          <div className="relative mx-auto max-w-3xl">
            {/* soft radial scrim to anchor the hero copy over the shader */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[130%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/40 blur-3xl" />

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-live" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
              </span>
              {liveCount} live deployments · {profile.location}
            </span>

            <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              <span className="text-gradient">{profile.tagline}</span>
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              <span className="text-slate-200">{profile.role}.</span> {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#client"
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-live px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-emerald-400"
              >
                Explore projects
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

          {/* scroll cue */}
          <a
            href="#client"
            aria-label="Scroll to projects"
            className="mt-16 hidden animate-float cursor-pointer text-slate-400 transition-colors hover:text-star sm:block"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
        </section>

        {/* Category sections */}
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-24 py-12 sm:py-16">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-live">{cat.eyebrow}</p>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">{cat.label}</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-300">{cat.subtitle}</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projectsByCategory(cat.id).map((project, i) => (
                <ProjectCard key={project.repo} project={project} index={i} />
              ))}
            </div>
          </section>
        ))}

        {/* Footer */}
        <footer className="mt-8 border-t border-white/10 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-heading font-semibold text-star">{profile.name}</p>
              <p className="text-sm text-slate-400">
                {profile.role} · &copy; {new Date().getFullYear()} · Built with Next.js
              </p>
            </div>
            <div className="flex items-center gap-2">
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
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="cursor-pointer rounded-lg p-2 text-slate-400 transition-colors hover:text-star"
              >
                <LinkedIn className="h-5 w-5" />
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
