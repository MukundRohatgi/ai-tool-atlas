import tools from "@/data/tools.json";
import Link from "next/link";

export default function DesignPage() {
  const filteredTools = tools.filter(
    (tool) => tool.category === "Design"
  );

  return (
    <section className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Design AI Tools
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <div key={tool.id} className="border rounded-xl p-5">
            <h2 className="text-xl font-semibold mb-2">
              {tool.name}
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              {tool.description}
            </p>
            <Link
              href={`/tools/${tool.slug}`}
              className="text-primary font-medium"
            >
              View Tool →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
