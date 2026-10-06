"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { hero, profile } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const lineMask: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1.1, ease } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -60]);

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-70 blur-[120px]"
        style={{ background: "var(--glow)" }}
      />

      <motion.div
        variants={container}
        initial={reduce ? "show" : "hidden"}
        animate="show"
        className="container-x relative grid items-end gap-14 lg:grid-cols-12 lg:gap-10"
      >
        <div className="lg:col-span-8">
          <motion.div variants={rise} className="mb-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-[0.78rem] text-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </span>
            <span className="eyebrow hidden sm:inline">{hero.eyebrow}</span>
          </motion.div>

          <h1 className="font-display text-[clamp(3rem,6.6vw,6.25rem)] leading-[0.95] tracking-[-0.035em]">
            {hero.headline.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span variants={lineMask} className={`block ${i === 1 ? "italic text-accent" : ""}`}>
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={rise}
            className="mt-8 max-w-2xl text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed text-muted text-pretty"
          >
            {hero.lede}
          </motion.p>

          <motion.div variants={rise} className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn btn-primary">
              View case studies <ArrowDownRight size={16} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Start a conversation <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        <motion.aside variants={rise} style={{ y: portraitY }} className="lg:col-span-4" aria-label="Profile">
          <div className="card relative overflow-hidden p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-surface-2">
              <motion.div
                initial={reduce ? false : { scale: 1.15, filter: "blur(8px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.6, ease, delay: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={profile.avatar}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, 90vw"
                  className="object-cover grayscale-[25%] transition-[filter] duration-700 hover:grayscale-0"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 text-white">
                <p className="font-display text-3xl leading-none">{profile.name}</p>
                <p className="mt-2 flex items-center gap-1.5 text-[0.78rem] text-white/75">
                  <MapPin size={12} /> {profile.location} · {profile.workStyle}
                </p>
              </div>
            </div>

            <LatencyStrip />
          </div>

          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Core stack">
            {hero.stack.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
        </motion.aside>
      </motion.div>
    </section>
  );
}

/** A visual shorthand for the headline claim: the same request, before and after. */
function LatencyStrip() {
  return (
    <div className="px-2 pt-4 pb-2" role="img" aria-label="API response times reduced from seconds to milliseconds">
      <div className="mb-2 flex items-center justify-between">
        <span className="eyebrow">API response time</span>
        <span className="font-mono text-[0.7rem] text-accent">s → ms</span>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-3">
          <span className="w-10 font-mono text-[0.65rem] text-subtle">before</span>
          <div className="h-1.5 flex-1 rounded-full bg-surface-2">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease, delay: 0.8 }}
              className="h-full rounded-full bg-subtle/60"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-10 font-mono text-[0.65rem] text-subtle">after</span>
          <div className="h-1.5 flex-1 rounded-full bg-surface-2">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "4%" }}
              transition={{ duration: 0.5, ease, delay: 2.1 }}
              className="h-full rounded-full bg-accent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
