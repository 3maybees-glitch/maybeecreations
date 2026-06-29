import { Linkedin, Youtube } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/socialLinks";
import { cn } from "@/lib/utils";

const iconClassName = "h-5 w-5";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "x":
      return <XIcon className={iconClassName} />;
    case "youtube":
      return <Youtube className={iconClassName} />;
    case "linkedin":
      return <Linkedin className={iconClassName} />;
    default:
      return null;
  }
}

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export const SocialLinks = ({ className, iconClassName: linkClassName }: SocialLinksProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-background/70 text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent",
            linkClassName,
          )}
        >
          <SocialIcon name={link.name} />
        </a>
      ))}
    </div>
  );
};
