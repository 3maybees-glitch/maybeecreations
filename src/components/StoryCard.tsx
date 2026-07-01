import { Link } from "react-router-dom";
import { BookOpen, Clock } from "lucide-react";
import type { Story } from "@/data/stories";
import { categories } from "@/data/categories";

export const StoryCard = ({ story }: { story: Story }) => {
  const category = categories.find((c) => c.key === story.category);

  return (
    <article className="parchment rounded-sm overflow-hidden flex flex-col group transition-transform hover:-translate-y-1 duration-300 h-full">
      <Link to={`/stories/${story.slug}`} className="block relative overflow-hidden bg-muted aspect-[16/10]">
        <img
          src={story.image}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
        {category && (
          <div
            className="absolute top-3 left-3 px-3 py-1 bg-background/85 backdrop-blur-sm border border-border text-xs uppercase tracking-widest font-semibold"
            style={{ color: `hsl(var(--${category.accentVar}))` }}
          >
            {category.name}
          </div>
        )}
      </Link>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
          <time dateTime={story.publishedAt}>
            {new Date(story.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {story.readingMinutes} min read
          </span>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-primary leading-tight mb-2">
          <Link to={`/stories/${story.slug}`} className="hover:text-accent transition-colors">
            {story.title}
          </Link>
        </h2>

        <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
          {story.subtitle}
        </p>

        <p className="text-base text-muted-foreground italic mb-6 flex-1">{story.excerpt}</p>

        <div className="ink-divider mb-4" />

        <Link
          to={`/stories/${story.slug}`}
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-accent hover:text-primary transition-colors"
        >
          <BookOpen className="h-4 w-4" />
          Read the story
        </Link>
      </div>
    </article>
  );
};
