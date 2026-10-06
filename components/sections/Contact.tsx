"use client";

import { useState } from "react";
import { ArrowDownToLine, ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";
import { profile } from "@/lib/content";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="04"
          eyebrow="Contact"
          title={
            <>
              Have a system that needs to be <em className="text-accent">faster, safer, or both?</em>
            </>
          }
          lede="I'm open to senior backend roles. Tell me about the system and the problem you're solving."
        />

        <div className="grid gap-4 lg:grid-cols-12">
          <Reveal className="card flex flex-col justify-between gap-10 p-6 md:p-10 lg:col-span-7">
            <div>
              <span className="eyebrow">Email</span>
              <a
                href={`mailto:${profile.email}`}
                className="mt-4 block break-all font-display text-[clamp(1.75rem,3.6vw,3rem)] leading-tight transition-colors hover:text-accent"
              >
                {profile.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <Mail size={15} /> Write to me
              </a>
              <button type="button" onClick={copyEmail} className="btn btn-ghost">
                {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
                {copied ? "Copied" : "Copy address"}
              </button>
              <a href={profile.phoneHref} className="btn btn-ghost">
                <Phone size={15} /> {profile.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4 lg:col-span-5">
            <div className="grid flex-1 grid-cols-2 gap-4">
              <ChannelLink href={profile.github} label="GitHub" handle={profile.githubHandle} icon={<GitHubIcon size={20} />} />
              <ChannelLink
                href={profile.linkedin}
                label="LinkedIn"
                handle={profile.linkedinHandle}
                icon={<LinkedInIcon size={20} />}
              />
            </div>

            <a
              href={profile.resume}
              download="Dipak-Sumesara-Resume.pdf"
              className="card group flex items-center justify-between p-6 transition-colors hover:border-accent"
            >
              <div>
                <span className="eyebrow">Résumé</span>
                <p className="mt-2 font-medium">Download the full PDF</p>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-fg text-bg transition-transform group-hover:translate-y-0.5">
                <ArrowDownToLine size={16} />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ChannelLink({
  href,
  label,
  handle,
  icon,
}: {
  href: string;
  label: string;
  handle: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card group flex flex-col justify-between gap-8 p-5 transition-colors hover:border-accent"
    >
      <div className="flex items-start justify-between">
        <span className="text-fg">{icon}</span>
        <ArrowUpRight
          size={16}
          className="text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>
      <div>
        <p className="font-medium">{label}</p>
        <p className="truncate font-mono text-[0.7rem] text-subtle">@{handle}</p>
      </div>
    </a>
  );
}
