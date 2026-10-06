import { profile } from "@/lib/content";
import { GitHubIcon, LinkedInIcon } from "./ui/BrandIcons";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-2xl">{profile.name}</p>
          <p className="mt-1 text-sm text-subtle">
            {profile.role} · {profile.location}
          </p>
        </div>
        <div className="flex items-center gap-5 text-sm text-muted">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-fg" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <span className="font-mono text-xs text-subtle">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
