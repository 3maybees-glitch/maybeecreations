import { StoriesPageLayout } from "@/components/StoriesPageLayout";
import { StoryCard } from "@/components/StoryCard";
import { storiesSorted } from "@/data/stories";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageMeta } from "@/lib/pageMeta";
import { storiesIndexSchemas } from "@/lib/structuredData";

const Stories = () => {
  usePageSeo(pageMeta.stories, storiesIndexSchemas());

  return (
    <StoriesPageLayout>
      <section className="py-4 md:py-8 px-4">
        <div className="container mx-auto">
          <div className="mb-8 md:mb-12 max-w-3xl">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Pull up a chair for Storytime — essays on the history, meaning, and everyday joy of
              using Maybee Creations maps and guides with the people you love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {storiesSorted.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
      </section>
    </StoriesPageLayout>
  );
};

export default Stories;
