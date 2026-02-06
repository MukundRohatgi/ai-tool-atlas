import Link from "next/link";

export default function HomePage() {
  return (
    <section className="max-w-6xl mx-auto space-y-16">
      {/* HERO SECTION */}
      <div className="text-center mt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI Tool Atlas
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A curated directory of popular AI tools designed to help developers,
          designers, marketers, and creators discover the right tools for their
          workflows.
        </p>

        <Link
          href="/tools"
          className="inline-block mt-8 px-6 py-3 rounded-lg bg-primary text-white font-medium"
        >
          Explore AI Tools →
        </Link>
      </div>

      {/* PURPOSE SECTION */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Purpose of This Website
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The purpose of this project is to demonstrate how a modern,
            content-driven website can be built using the Next.js App Router
            with static generation. The site focuses on performance, SEO, and
            clean user experience while programmatically generating pages from
            structured data.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            This project was created as part of an SDE Intern assessment and
            showcases real-world frontend engineering practices such as
            component-based design, routing, data-driven UI, and responsive
            layouts.
          </p>
        </div>

        {/* DATASET SECTION */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Dataset Overview
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The dataset consists of a curated list of AI tools, each described
            by attributes such as name, category, pricing model, description,
            and official website link. The data is stored as a static JSON file
            and is used to generate listing pages, detail pages, and category
            pages programmatically.
          </p>

          <ul className="list-disc list-inside mt-4 text-muted-foreground space-y-2">
            <li>Tool name and unique slug</li>
            <li>Category (Productivity, Design, Development, Marketing)</li>
            <li>Pricing model (Free, Freemium, Paid)</li>
            <li>Short descriptive summary</li>
          </ul>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-2">Programmatic Pages</h3>
            <p className="text-sm text-muted-foreground">
              All tool detail and category pages are generated dynamically from
              the dataset using static site generation.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-2">Search & Filters</h3>
            <p className="text-sm text-muted-foreground">
              Users can quickly find tools using client-side search, category
              filters, pricing filters, and sorting.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-2">SEO Optimized</h3>
            <p className="text-sm text-muted-foreground">
              The website includes dynamic metadata, sitemap, and clean URLs to
              ensure search-engine-friendly indexing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
