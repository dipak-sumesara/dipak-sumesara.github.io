import { CircleAlert, Layers, TrendingUp } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CaseStudies() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="Selected case studies"
          title={
            <>
              The problem, the architecture, <em className="text-accent">the return.</em>
            </>
          }
          lede="Three engagements that show how I work: diagnose the constraint, design the system around it, and measure what changed."
        />

        <div className="space-y-6 md:space-y-8">
          {caseStudies.map((study) => (
            <CaseStudyBlock key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyBlock({ study }: { study: CaseStudy }) {
  return (
    <Reveal>
      <article id={`case-${study.id}`} className="card overflow-hidden" aria-labelledby={`case-${study.id}-title`}>
        {/* Header */}
        <header className="grid gap-6 border-b border-line p-6 md:grid-cols-12 md:p-10">
          <div className="md:col-span-2">
            <span className="font-display text-6xl leading-none text-accent md:text-7xl">{study.index}</span>
          </div>
          <div className="md:col-span-10">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="text-sm font-medium">{study.client}</span>
              <span className="font-mono text-[0.72rem] text-subtle">{study.period}</span>
            </div>
            <h3
              id={`case-${study.id}-title`}
              className="mt-3 font-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05] tracking-[-0.02em] text-balance"
            >
              {study.title}
            </h3>
            <p className="mt-3 text-muted">{study.context}</p>
          </div>
        </header>

        <div className="grid md:grid-cols-12">
          {/* Problem */}
          <div className="border-b border-line p-6 md:col-span-5 md:border-r md:border-b-0 md:p-10">
            <PartLabel icon={<CircleAlert size={14} />} label="The problem" />
            <p className="mt-4 leading-relaxed text-pretty">{study.problem}</p>
            <ul className="mt-6 space-y-3">
              {study.problemPoints.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted">
                  <span className="mt-2 h-px w-4 shrink-0 bg-subtle" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture */}
          <div className="p-6 md:col-span-7 md:p-10">
            <PartLabel icon={<Layers size={14} />} label="Technical architecture" />
            <ol className="mt-4 divide-y divide-line">
              {study.architecture.map((a, i) => (
                <li key={a.label} className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[2.5rem_11rem_1fr] sm:gap-4">
                  <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                  <span className="text-sm font-medium">{a.label}</span>
                  <span className="text-sm leading-relaxed text-muted">{a.detail}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* ROI */}
        <footer className="border-t border-line bg-surface-2/50 p-6 md:p-10">
          <PartLabel icon={<TrendingUp size={14} />} label="Quantifiable ROI" />
          <div className="mt-6 grid gap-8 lg:grid-cols-12">
            <dl
              className={`grid items-start gap-6 lg:col-span-7 ${
                study.outcomes.length > 2 ? "sm:grid-cols-3" : "sm:grid-cols-2"
              }`}
            >
              {study.outcomes.map((o) => (
                <div key={o.label} className="border-l-2 border-accent pl-4">
                  <dt className="sr-only">{o.label}</dt>
                  <dd className="font-display text-5xl leading-none tracking-[-0.03em]">{o.value}</dd>
                  <dd className="mt-2 text-sm text-muted">{o.label}</dd>
                </div>
              ))}
            </dl>
            <div className="lg:col-span-5">
              <p className="font-display text-xl leading-snug italic text-pretty">“{study.impact}”</p>
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Stack">
                {study.stack.map((s) => (
                  <li key={s} className="chip font-mono text-[0.7rem]">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </article>
    </Reveal>
  );
}

function PartLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-accent">
      {icon}
      <span className="eyebrow !text-accent">{label}</span>
    </div>
  );
}
