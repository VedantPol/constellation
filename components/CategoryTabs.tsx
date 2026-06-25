"use client";

import { useEffect, useState } from "react";
import { categories } from "@/lib/projects";

/**
 * Sticky category tabs. Anchor links scroll to each section; an
 * IntersectionObserver highlights the tab for the section nearest the
 * viewport's middle (scroll-spy).
 */
export default function CategoryTabs() {
  const [active, setActive] = useState<string>(categories[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    categories.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Project categories" className="flex items-center gap-0.5 overflow-x-auto">
      {categories.map((c) => (
        <a
          key={c.id}
          href={`#${c.id}`}
          aria-current={active === c.id ? "true" : undefined}
          className={`cursor-pointer whitespace-nowrap rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${
            active === c.id ? "text-live" : "text-slate-300 hover:text-star"
          }`}
        >
          {c.label}
        </a>
      ))}
    </nav>
  );
}
