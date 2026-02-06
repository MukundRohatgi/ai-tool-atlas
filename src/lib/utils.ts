// src/lib/utils.ts
export type Tool = {
  id: number;
  name: string;
  slug: string;
  category: string;
  pricing: string;
  description: string;
  website: string;
  tags: string[];
};

// FILTER TOOLS
export function filterTools(
  tools: Tool[],
  search: string,
  category: string,
  pricing: string
) {
  return tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase()) ||
      tool.tags.join(" ").toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "All" || tool.category === category;
    const matchesPricing = pricing === "All" || tool.pricing === pricing;

    return matchesSearch && matchesCategory && matchesPricing;
  });
}

// SORT TOOLS
export function sortTools(tools: Tool[], sort: "az" | "za") {
  return [...tools].sort((a, b) =>
    sort === "az" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );
}
