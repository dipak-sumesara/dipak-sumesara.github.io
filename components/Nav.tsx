"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { nav, profile } from "@/lib/content";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
    // Above the first tracked section nothing intersects, so clear the stale highlight.
    if (y < window.innerHeight * 0.5) setActive(null);
  });

  // Highlight whichever section currently owns the middle of the viewport.
  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled || open ? "border-b border-line bg-bg/75 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-6">
          <a href="#top" className="group flex items-center gap-2.5" aria-label={`${profile.name} — back to top`}>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-fg font-display text-[1.05rem] italic text-bg transition-transform duration-500 group-hover:rotate-[-8deg]">
              d
            </span>
            <span className="text-sm font-medium tracking-tight">{profile.name}</span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border border-line bg-surface/60 p-1 backdrop-blur">
              {nav.map((item) => (
                <li key={item.href} className="relative">
                  {active === item.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-surface-2"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <a
                    href={item.href}
                    className={`relative block rounded-full px-4 py-1.5 text-[0.82rem] transition-colors ${
                      active === item.href ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.resume}
              download="Dipak-Sumesara-Resume.pdf"
              className="hidden items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-[0.8rem] text-muted transition-colors hover:border-line-strong hover:text-fg sm:inline-flex"
            >
              <ArrowDownToLine size={14} strokeWidth={1.75} />
              Résumé
            </a>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted md:hidden"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
        <motion.div
          aria-hidden="true"
          style={{ scaleX: scrollYProgress }}
          className="h-px origin-left bg-accent"
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="h-[calc(100dvh-4rem)] border-b border-line bg-bg md:hidden"
          >
            <ul className="container-x flex flex-col pt-6">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-b border-line"
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-5 font-display text-4xl"
                  >
                    {item.label}
                    <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
              <li className="pt-8">
                <a href={profile.resume} download="Dipak-Sumesara-Resume.pdf" className="btn btn-primary w-full">
                  <ArrowDownToLine size={16} /> Download résumé
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
