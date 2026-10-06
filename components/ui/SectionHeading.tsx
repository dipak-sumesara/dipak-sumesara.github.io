import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
};

export function SectionHeading({ index, eyebrow, title, lede }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 grid gap-6 border-t border-line pt-6 md:mb-16 md:grid-cols-12">
      <div className="flex items-center gap-3 md:col-span-3 md:items-start">
        <span className="font-mono text-xs text-accent">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <div className="md:col-span-9">
        <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-balance">
          {title}
        </h2>
        {lede && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{lede}</p>}
      </div>
    </Reveal>
  );
}
