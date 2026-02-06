import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ToolCard({ tool }: { tool: any }) {
  return (
    <Link href={`/tools/${tool.slug}`}>
      <div className="border rounded-xl p-4 hover:shadow-md transition cursor-pointer">
        <h3 className="font-semibold text-lg mb-2">
          {tool.name}
        </h3>

        <p className="text-sm text-muted-foreground mb-3">
          {tool.description}
        </p>

        <div className="flex justify-between text-sm">
          <span>{tool.category}</span>
          <span>{tool.pricing}</span>
        </div>
      </div>
    </Link>
  );
}
