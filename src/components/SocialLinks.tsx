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

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.599-.299-1.484c0-1.391.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.481 1.806 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.744 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.292-1.155l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.936.289 1.929.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
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
    case "pinterest":
      return <PinterestIcon className={iconClassName} />;
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
