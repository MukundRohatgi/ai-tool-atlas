import tools from "@/data/tools.json";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Tool = {
  id: number;
  name: string;
  slug: string;
  category: string;
  pricing: string;
  description: string;
  website: string;
  tags: string[];
};

type Props = {
  params?: { slug?: string };
};

function normalize(slug?: string) {
  if (!slug) return "";
  return slug.toLowerCase().trim();
}

export const dynamicParams = true;

export function generateStaticParams() {
  return (tools as Tool[]).map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const normalizedSlug = normalize(params?.slug);

  const tool = (tools as Tool[]).find(
    (t) => normalize(t.slug) === normalizedSlug
  );

  if (!tool) {
    return { title: "Tool Not Found" };
  }

  return {
    title: tool.name,
    description: tool.description,
  };
}

export default function ToolDetailPage({ params }: Props) {
  const normalizedSlug = normalize(params?.slug);

  const tool = (tools as Tool[]).find(
    (t) => normalize(t.slug) === normalizedSlug
  );

  if (!tool) return notFound();

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{tool.name}</h1>

      <p className="text-muted-foreground mb-6">
        {tool.description}
      </p>

      <div className="space-y-2">
        <p><strong>Category:</strong> {tool.category}</p>
        <p><strong>Pricing:</strong> {tool.pricing}</p>
        <p><strong>Tags:</strong> {tool.tags.join(", ")}</p>
      </div>

      <a
        href={tool.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 text-primary font-medium"
      >
        Visit Website →
      </a>
    </article>
  );
}
