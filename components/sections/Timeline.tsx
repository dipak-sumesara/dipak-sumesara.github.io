"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { GraduationCap, MapPin, Plus } from "lucide-react";
import { education, experience, type Role } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PANEL_MS = 450;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function toMonthIndex(label: string) {
  const [mon, year] = label.split(" ");
  return Number(year) * 12 + MONTHS.indexOf(mon);
}

// Oldest first, so the trajectory bar reads left to right like a career does.
const chronological = [...experience].reverse();
const totalMonths =
  toMonthIndex(experience[0].end) - toMonthIndex(chronological[0].start);

export function Timeline() {
  const [open, setOpen] = useState<string>(experience[0].company);
  const railRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: railRef, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  function focusRole(company: string) {
    setOpen(company);
    // Wait for the previously open panel to finish collapsing, or the target shifts mid-scroll.
    setTimeout(() => {
      document.getElementById(roleId(company))?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, PANEL_MS + 30);
  }

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Career trajectory"
          title={
            <>
              From first commit to <em className="text-accent">leading the backend.</em>
            </>
          }
          lede="Eight-plus years moving up the stack of responsibility — from shipping features, to owning backend architecture, to leading the engineers who build on it."
        />

        {/* Trajectory bar: segment width is proportional to tenure */}
        <Reveal className="mb-14">
          <div className="flex h-12 w-full gap-1 overflow-hidden rounded-xl" role="group" aria-label="Jump to role, sized by tenure">
            {chronological.map((role) => {
              const months = toMonthIndex(role.end) - toMonthIndex(role.start);
              const active = open === role.company;
              return (
                <button
                  key={role.company}
                  type="button"
                  onClick={() => focusRole(role.company)}
                  style={{ flexGrow: months }}
                  title={`${role.company} · ${role.start} – ${role.end}`}
                  className={`group relative min-w-0 basis-0 overflow-hidden rounded-lg border px-3 text-left transition-colors duration-300 ${
                    active
                      ? "border-accent bg-accent text-accent-fg"
                      : "border-line bg-surface text-muted hover:border-line-strong hover:text-fg"
                  }`}
                >
                  <span className="block truncate text-[0.72rem] font-medium">{role.company}</span>
                  <span className={`block truncate font-mono text-[0.62rem] ${active ? "opacity-80" : "text-subtle"}`}>
                    {role.start.split(" ")[1]}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-2 flex justify-between font-mono text-[0.65rem] text-subtle">
            <span>{chronological[0].start}</span>
            <span>{Math.floor(totalMonths / 12)}+ years</span>
            <span>{experience[0].end}</span>
          </div>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-12">
          {/* Rail */}
          <ol ref={railRef} className="relative lg:col-span-8">
            <div aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-line md:left-[calc(9rem+7px)]" />
            <motion.div
              aria-hidden="true"
              style={{ scaleY: fill }}
              className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-accent md:left-[calc(9rem+7px)]"
            />
            {experience.map((role) => (
              <TimelineItem
                key={role.company}
                role={role}
                open={open === role.company}
                onToggle={() => setOpen(open === role.company ? "" : role.company)}
              />
            ))}
          </ol>

          {/* Education */}
          <aside className="lg:col-span-4">
            <Reveal className="card p-6 lg:sticky lg:top-24">
              <div className="mb-6 flex items-center gap-2">
                <GraduationCap size={16} className="text-accent" />
                <span className="eyebrow">Education</span>
              </div>
              <ul className="space-y-6">
                {education.map((e) => (
                  <li key={e.degree} className="border-l border-line pl-4">
                    <span className="font-mono text-xs text-subtle">{e.year}</span>
                    <p className="mt-1 font-medium leading-snug">{e.degree}</p>
                    <p className="mt-1 text-sm text-muted">{e.school}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}

function roleId(company: string) {
  return `role-${company.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function TimelineItem({ role, open, onToggle }: { role: Role; open: boolean; onToggle: () => void }) {
  const panelId = `${roleId(role.company)}-panel`;

  return (
    <li id={roleId(role.company)} className="relative grid scroll-mt-28 gap-2 pb-12 pl-8 last:pb-0 md:grid-cols-[9rem_1fr] md:gap-0 md:pl-0">
      <div className="md:pr-8 md:text-right">
        <span className="font-mono text-xs text-muted">
          {role.start.split(" ")[1]} — {role.end.split(" ")[1]}
        </span>
        <span className="mt-0.5 block font-mono text-[0.65rem] text-subtle">{role.years}</span>
      </div>

      <span
        aria-hidden="true"
        className={`absolute top-1 left-0 h-[15px] w-[15px] rounded-full border-2 transition-colors duration-300 md:left-[9rem] ${
          open ? "border-accent bg-accent" : "border-line-strong bg-bg"
        }`}
      />

      <div className="md:pl-10">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full items-start justify-between gap-4 text-left"
        >
          <div>
            <h3 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] leading-tight transition-colors group-hover:text-accent">
              {role.company}
            </h3>
            <p className="mt-1 text-[0.95rem] font-medium">{role.title}</p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-subtle">
              <MapPin size={11} />
              {role.location} · {role.start} – {role.end}
            </p>
          </div>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-muted group-hover:border-accent group-hover:text-accent"
          >
            <Plus size={14} />
          </motion.span>
        </button>

        <p className="mt-3 max-w-xl text-muted">{role.summary}</p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: PANEL_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ul className="mt-5 space-y-2.5">
                {role.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Stack">
                {role.stack.map((s) => (
                  <li key={s} className="chip font-mono text-[0.68rem]">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
}
