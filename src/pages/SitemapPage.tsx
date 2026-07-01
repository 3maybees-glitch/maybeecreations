import { Navigation } from "@/components/Navigation";

import { Footer } from "@/components/Footer";

import { Map, Home, FileText, List, BookOpen, Share2 } from "lucide-react";
import { storiesSorted } from "@/data/stories";
import { SOCIAL_LINKS } from "@/lib/socialLinks";

import { Link } from "react-router-dom";

import { usePageSeo } from "@/hooks/usePageSeo";

import { pageMeta } from "@/lib/pageMeta";

import { staticPageSchemas } from "@/lib/structuredData";



interface SitemapSection {

  title: string;

  icon: React.ReactNode;

  links: { label: string; path: string }[];

}



const sections: SitemapSection[] = [

  {

    title: "Home",

    icon: <Home className="h-5 w-5" />,

    links: [{ label: "Homepage", path: "/" }],

  },

  {

    title: "Realms",

    icon: <Map className="h-5 w-5" />,

    links: [

      { label: "Faith — Bible world maps & Soul Explorer guides", path: "/faith" },

      { label: "Freedom — Liberty Explorer world maps", path: "/freedom" },

      { label: "Fans — Legend Explorer Baseball Legend Lands", path: "/fans" },

      { label: "Future — Tomorrow Explorer AI maps & Adventure Packs", path: "/future" },

    ],

  },

  {

    title: "Stories",

    icon: <BookOpen className="h-5 w-5" />,

    links: [

      { label: "Stories — The Story Behind the Map", path: "/stories" },

      ...storiesSorted.map((story) => ({

        label: story.title,

        path: `/stories/${story.slug}`,

      })),

    ],

  },

  {

    title: "Legal",

    icon: <FileText className="h-5 w-5" />,

    links: [

      { label: "Privacy Policy", path: "/privacy" },

      { label: "Terms of Service", path: "/terms" },

    ],

  },

  {
    title: "Connect",
    icon: <Share2 className="h-5 w-5" />,
    links: [
      { label: "Payhip Storefront", path: "https://payhip.com/MaybeeCreations" },
      ...SOCIAL_LINKS.map((link) => ({
        label: link.shortLabel,
        path: link.href,
      })),
    ],
  },

];

const SitemapPage = () => {
  usePageSeo(
    pageMeta.sitemap,
    staticPageSchemas(
      pageMeta.sitemap.path,
      pageMeta.sitemap.title,
      pageMeta.sitemap.description,
      "Sitemap",
    ),
  );



  return (

    <div className="min-h-screen flex flex-col">

      <Navigation />



      <main className="flex-1 pt-16 pb-16">

          <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sm text-muted-foreground mb-6">
            For AI assistants and answer engines, see{" "}
            <a href="/llms.txt" className="text-accent hover:underline">
              llms.txt
            </a>
            .
          </p>

          <div className="flex items-center gap-3 mb-8">

            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">

              <List className="h-6 w-6 text-primary-foreground" />

            </div>

            <h1 className="text-4xl md:text-5xl font-bold">Sitemap</h1>

          </div>



          <p className="text-lg text-muted-foreground mb-10">

            A complete guide to every page on maybeecreations.com.

          </p>



          <div className="space-y-10">

            {sections.map((section) => (

              <section key={section.title}>

                <div className="flex items-center gap-2 mb-4">

                  <span className="text-accent">{section.icon}</span>

                  <h2 className="text-xl font-bold uppercase tracking-wider">{section.title}</h2>

                </div>

                <ul className="space-y-2 pl-7">

                  {section.links.map((link) => (
                    <li key={link.path}>
                      {link.path.startsWith("http") ? (
                        <a
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}

                </ul>

              </section>

            ))}

          </div>

        </div>

      </main>



      <Footer />

    </div>

  );

};



export default SitemapPage;

