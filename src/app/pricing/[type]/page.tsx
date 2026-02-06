import toolsData from "@/data/tools.json";
import ToolCard from "@/components/ToolCard";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return ["Free", "Freemium", "Paid"].map((type) => ({ type }));
}

export default function PricingPage({ params }: { params: { type: string } }) {
  const filtered = toolsData.filter((tool) => tool.pricing === params.type);

  if (filtered.length === 0) notFound();

  return (
    <section className="max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">
        {params.type} Tools
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}
