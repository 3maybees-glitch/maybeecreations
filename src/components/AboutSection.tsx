import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-accent font-semibold mb-4">
            ✦ About Us ✦
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Creative Apps & Visual Maps
          </h2>
          <div className="ink-divider w-32 mx-auto" />
        </div>

        <div className="space-y-6 text-base md:text-lg text-foreground/90 leading-relaxed">
          <p>
            Maybee Creations is a digital creation company focused on building apps, maps,
            and learning tools that make complex ideas easier to explore. The brand combines
            faith-based projects, civic and freedom-focused tools, sports stat experiences,
            and beginner-friendly AI education into practical digital products.
          </p>
          <p>
            Our work includes Bible-centered apps such as{" "}
            <Link to="/jesus-wept" className="font-semibold text-primary hover:text-accent underline-offset-2 hover:underline">
              Jesus Wept
            </Link>
            ,{" "}
            <Link to="/faith" className="font-semibold text-primary hover:text-accent underline-offset-2 hover:underline">
              Bible book world maps
            </Link>{" "}
            that help learners see Scripture in a visual and memorable way, and Christian
            learning concepts designed to encourage reflection, study, and growth. We also
            develop freedom-focused projects such as{" "}
            <Link to="/freedom" className="font-semibold text-primary hover:text-accent underline-offset-2 hover:underline">
              LibertyID
            </Link>
            , built around conservative politics, civic understanding, and organized
            public-issue learning.
          </p>
          <p>
            Maybee Creations also creates sports and fan-focused products, including
            basketball stat tools like{" "}
            <Link to="/fans" className="font-semibold text-primary hover:text-accent underline-offset-2 hover:underline">
              StatSpeak
            </Link>
            , an Oklahoma Sooners college football app, and Baseball Legend Land maps
            for teams like the{" "}
            <Link to="/fans" className="font-semibold text-primary hover:text-accent underline-offset-2 hover:underline">
              Washington Nationals
            </Link>{" "}
            — simple, useful, and engaging ways to follow teams, track stats, and enjoy
            the games fans care about.
          </p>
          <p>
            A growing part of the company is focused on AI education through{" "}
            <Link to="/future" className="font-semibold text-primary hover:text-accent underline-offset-2 hover:underline">
              colorful tutorial world maps
            </Link>{" "}
            and practical guidebooks that turn AI tools, workflows, and app-building
            concepts into creative learning worlds.
          </p>
          <p className="italic text-primary font-medium">
            Across every project, the mission is the same: create digital tools that help
            people explore faith, freedom, fandom, and the future with clarity and creativity.
          </p>
        </div>
      </div>
    </section>
  );
};
