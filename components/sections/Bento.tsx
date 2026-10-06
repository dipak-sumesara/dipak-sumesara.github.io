"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Compass, FileCode2, ShieldCheck, Sparkles, Users, Zap } from "lucide-react";
import { aiProjects, competencies, leadership, metrics, principles } from "@/lib/content";
import { BentoCard } from "@/components/ui/BentoCard";
import { CountUp } from "@/components/ui/CountUp";
import { SectionHeading } from "@/components/ui/SectionHeading";

const principleIcons = [ShieldCheck, FileCode2, Zap];

export function Bento() {
  const [headline, ...rest] = metrics;
  const smallMetrics = rest.slice(0, 4);

  return (
    <section id="impact" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="01"
          eyebrow="Impact at a glance"
          title={
            <>
              Systems measured in <em className="text-accent">outcomes</em>, not lines of code.
            </>
          }
          lede="The numbers below come from production — enterprise SaaS, government health tech, and live sports traffic."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {/* Headline metric with the request path that produced it */}
          <BentoCard className="sm:col-span-2 lg:col-span-6 lg:row-span-2">
            <div className="flex h-full flex-col justify-between gap-10">
              <div>
                <span className="eyebrow">{headline.label}</span>
                <p className="mt-4 font-display text-[clamp(4rem,9vw,7rem)] leading-none tracking-[-0.04em]">
                  {headline.value.split("→")[0]}
                  <span className="text-subtle">→</span>
                  <span className="italic text-accent">{headline.value.split("→")[1]}</span>
                </p>
                <p className="mt-4 max-w-sm text-muted">{headline.context}.</p>
              </div>
              <RequestPath />
            </div>
          </BentoCard>

          {smallMetrics.map((m, i) => (
            <BentoCard key={m.label} className="lg:col-span-3" delay={0.06 * (i + 1)}>
              <div className="flex h-full flex-col justify-between gap-8">
                <span className="eyebrow">{m.label}</span>
                <div>
                  <CountUp value={m.value} className="block font-display text-6xl leading-none tracking-[-0.03em]" />
                  <p className="mt-3 text-sm leading-relaxed text-muted">{m.context}</p>
                </div>
              </div>
            </BentoCard>
          ))}

          {/* Core competencies */}
          <BentoCard className="sm:col-span-2 lg:col-span-7">
            <div className="mb-6 flex items-center justify-between">
              <span className="eyebrow">Core competencies</span>
              <Compass size={18} strokeWidth={1.5} className="text-subtle" />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {competencies.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-3 text-[0.95rem] font-medium">{group.title}</h3>
                  <ul className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="chip hover:border-accent hover:text-fg">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Leadership */}
          <BentoCard className="sm:col-span-2 lg:col-span-5" delay={0.08}>
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="flex items-center justify-between">
                <span className="eyebrow">Leadership philosophy</span>
                <Users size={18} strokeWidth={1.5} className="text-subtle" />
              </div>
              <div>
                <h3 className="font-display text-3xl leading-tight">{leadership.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{leadership.body}</p>
              </div>
              <div className="flex items-end justify-between gap-4 border-t border-line pt-5">
                <ul className="space-y-1.5 text-sm text-muted">
                  {leadership.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="text-right">
                  <CountUp value={leadership.stat.value} className="block font-display text-4xl leading-none" />
                  <span className="mt-1 block text-xs text-subtle">{leadership.stat.label}</span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Architecture principles */}
          {principles.map((p, i) => {
            const Icon = principleIcons[i];
            return (
              <BentoCard key={p.title} className="lg:col-span-4" delay={0.06 * i}>
                <div className="flex h-full flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-subtle">Principle 0{i + 1}</span>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-accent-soft text-accent">
                      <Icon size={16} strokeWidth={1.75} />
                    </span>
                  </div>
                  <h3 className="font-display text-[1.9rem] leading-tight">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </BentoCard>
            );
          })}

          {/* AI engineering */}
          <BentoCard className="sm:col-span-2 lg:col-span-12">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles size={16} className="text-accent" />
                  <span className="eyebrow">Now building · AI engineering</span>
                </div>
                <h3 className="font-display text-3xl leading-tight">
                  LLM systems with the same rigor as the backend underneath them.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  RAG, agentic workflows, guardrails, and structured output — written in Node.js and TypeScript,
                  tested like production code.
                </p>
              </div>
              <ul className="grid gap-3 md:grid-cols-3 lg:col-span-8">
                {aiProjects.map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex h-full flex-col justify-between gap-6 rounded-2xl border border-line bg-bg p-5 transition-colors hover:border-accent"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="font-medium leading-snug">{p.name}</h4>
                          <ArrowUpRight
                            size={16}
                            className="shrink-0 text-subtle transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-accent"
                          />
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
                      </div>
                      <span className="font-mono text-[0.7rem] text-subtle">{p.stack}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

/** Minimal request-path diagram: most reads now stop at the cache instead of the database. */
function RequestPath() {
  const reduce = useReducedMotion();
  const nodes = ["Client", "API Gateway", "Redis", "MongoDB"];

  return (
    <div aria-hidden="true" className="rounded-2xl border border-line bg-bg p-4">
      <div className="relative flex items-center justify-between gap-2">
        <div className="absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-line-strong" />
        {!reduce && (
          <motion.span
            className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]"
            animate={{ left: ["6%", "64%", "6%"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        {nodes.map((n) => (
          <span
            key={n}
            className={`relative z-10 rounded-full border px-2.5 py-1 font-mono text-[0.65rem] sm:text-[0.7rem] ${
              n === "Redis" ? "border-accent bg-accent-soft text-accent" : "border-line bg-surface text-muted"
            }`}
          >
            {n}
          </span>
        ))}
      </div>
      <p className="mt-3 font-mono text-[0.65rem] text-subtle">
        hot reads served from cache · indexed queries · read/write split
      </p>
    </div>
  );
}
