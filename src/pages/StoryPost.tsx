import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Compass, ExternalLink, Map } from "lucide-react";
import { StoriesPageLayout } from "@/components/StoriesPageLayout";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import { getStoryBySlug } from "@/data/stories";
import { usePageSeo } from "@/hooks/usePageSeo";
import { SITE_NAME } from "@/lib/pageMeta";
import { storyPageSchemas } from "@/lib/structuredData";

const StoryPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = slug ? getStoryBySlug(slug) : undefined;

  const meta = story
    ? {
        title: `${story.title} — Stories | ${SITE_NAME}`,
        description: story.excerpt,
        path: `/stories/${story.slug}`,
        type: "article" as const,
        publishedTime: story.publishedAt,
        modifiedTime: story.publishedAt,
        image: story.image,
        imageAlt: story.title,
      }
    : {
        title: `Story Not Found | ${SITE_NAME}`,
        description: "This story could not be found.",
        path: "/stories",
        noindex: true,
      };

  usePageSeo(meta, story ? storyPageSchemas(story) : null);

  if (!story) {
    return <Navigate to="/stories" replace />;
  }

  const category = categories.find((c) => c.key === story.category);

  return (
    <StoriesPageLayout
      compact
      title={story.title}
      subtitle={story.subtitle}
      eyebrow={category ? `${category.explorerName} · Storytime` : "Storytime"}
    >
      <article className="py-4 md:py-8 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link
            to="/stories"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            All Stories
          </Link>

          <div className="rounded-sm overflow-hidden border border-border mb-8">
            <img
              src={story.image}
              alt={story.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-8">
            <time dateTime={story.publishedAt}>
              {new Date(story.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span aria-hidden>·</span>
            <span>{story.readingMinutes} min read</span>
            {category && (
              <>
                <span aria-hidden>·</span>
                <Link
                  to={category.path}
                  className="hover:text-accent transition-colors"
                  style={{ color: `hsl(var(--${category.accentVar}))` }}
                >
                  {category.name}
                </Link>
              </>
            )}
          </div>

          <div className="prose prose-stone prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-p:text-foreground/90 prose-p:leading-relaxed prose-a:text-accent">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <div className="ink-divider my-10" />

          <div className="parchment rounded-sm p-6 md:p-8 flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] font-semibold text-accent">
              Continue exploring
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              {story.productLink && (
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={story.productLink.url} target="_blank" rel="noopener noreferrer">
                    <Compass className="h-4 w-4 mr-2" />
                    {story.productLink.label}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              {category && (
                <Button asChild variant="outline" className="border-primary/30">
                  <Link to={story.categoryPath}>
                    <Map className="h-4 w-4 mr-2" />
                    Browse {category.name}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </article>
    </StoriesPageLayout>
  );
};

export default StoryPost;
