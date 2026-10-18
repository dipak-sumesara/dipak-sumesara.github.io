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
          eyebrow="Selected projects"
          title={
            <>
              What I worked on, <em className="text-accent">and what changed.</em>
            </>
          }
          lede="Three projects: the problem, what I built, and the outcome. Scope and role are noted on each."
        />

        <div className="space-y-6 md:space-y-8">
          {caseStudies.map((study) => (
            <CaseStudyBlock key={study.id} study={study} />
          ))}
        </div>

        <p className="mt-8 text-sm text-muted">Client code is private; happy to walk through architecture on a call.</p>
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
            {study.note && <p className="mt-2 text-sm text-subtle">{study.note}</p>}
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
            <PartLabel icon={<Layers size={14} />} label="What I built" />
            <ol className="mt-4 divide-y divide-line">
              {study.architecture.map((a, i) => (
                <li key={a.label} className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[2.5rem_11rem_1fr] sm:gap-4">
                  <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                  <span className="text-sm font-medium">{a.label}</span>
                  <span className="text-sm leading-relaxed text-muted">{a.detail}</span>
                </li>
              ))}
            </ol>
            {study.id === "aloha" && <ProductUpdateDiagram />}
          </div>
        </div>

        {/* ROI */}
        <footer className="border-t border-line bg-surface-2/50 p-6 md:p-10">
          <PartLabel icon={<TrendingUp size={14} />} label="Outcomes" />
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

/** Product-update event flow for Aloha. Colors come from theme tokens, so it follows light/dark mode. */
function ProductUpdateDiagram() {
  const box = { fill: "var(--surface)", stroke: "var(--border-strong)", strokeWidth: 1 } as const;
  const label = { fill: "var(--fg)", fontSize: 12, textAnchor: "middle" as const, dominantBaseline: "central" as const };
  const small = { fill: "var(--fg-muted)", fontSize: 10.5 };
  const line = { stroke: "var(--fg-subtle)", strokeWidth: 1.25, fill: "none", markerEnd: "url(#arrow)" } as const;

  return (
    <figure className="mt-10 border-t border-line pt-8">
      <svg
        viewBox="0 0 640 300"
        role="img"
        aria-label="Product update flow: a product update publishes to SNS, which fans out to two SQS queues, one for Salesforce sync and one for Elasticsearch indexing. Idempotent consumers read from each queue. Messages that keep failing go to a dead-letter queue and can be replayed to the queues."
        className="h-auto w-full"
      >
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 1 L9 5 L0 9 z" fill="var(--fg-subtle)" />
          </marker>
        </defs>

        {/* Connectors */}
        <path d="M104 117 H130" {...line} />
        <path d="M194 117 H222 V42 H250" {...line} />
        <path d="M222 117 V192 H250" {...line} />
        <path d="M410 42 H450" {...line} />
        <path d="M410 192 H450" {...line} />
        <path d="M610 42 H624 V272 H460" {...line} />
        <path d="M610 192 H624" stroke="var(--fg-subtle)" strokeWidth={1.25} fill="none" />
        <path d="M300 272 H236 V42 H250" {...line} strokeDasharray="4 3" />
        <path d="M236 192 H250" {...line} strokeDasharray="4 3" />

        {/* Nodes */}
        <rect x="4" y="95" width="100" height="44" rx="8" {...box} />
        <text x="54" y="117" {...label}>Product update</text>
        <rect x="130" y="95" width="64" height="44" rx="8" {...box} />
        <text x="162" y="117" {...label}>SNS</text>

        <rect x="250" y="20" width="160" height="44" rx="8" {...box} />
        <text x="330" y="42" {...label}>SQS · Salesforce sync</text>
        <rect x="250" y="170" width="160" height="44" rx="8" {...box} />
        <text x="330" y="192" {...label}>SQS · Elasticsearch index</text>

        <rect x="450" y="20" width="160" height="44" rx="8" {...box} />
        <text x="530" y="42" {...label}>Idempotent consumer</text>
        <rect x="450" y="170" width="160" height="44" rx="8" {...box} />
        <text x="530" y="192" {...label}>Idempotent consumer</text>

        <rect x="300" y="250" width="160" height="44" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" strokeWidth={1} />
        <text x="380" y="272" {...label}>Dead-letter queue</text>

        <text x="618" y="258" {...small} textAnchor="end">failed after retries</text>
        <text x="230" y="288" {...small} textAnchor="end">replay</text>
      </svg>
      <figcaption className="mt-3 text-xs text-subtle">
        Simplified product-update flow: SNS fans out to SQS; consumers are idempotent, with retries and a dead-letter queue
        for failed messages.
      </figcaption>
    </figure>
  );
}
