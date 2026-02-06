import tools from "@/data/tools.json";
import ToolCard from "@/components/ToolCard";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const categories = Array.from(
    new Set(tools.map((tool) => tool.category))
  );

  return categories.map((category) => ({
    category,
  }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const filtered = tools.filter(
    (tool) => tool.category === params.category
  );

  if (filtered.length === 0) notFound();

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">
        {params.category} Tools
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}
