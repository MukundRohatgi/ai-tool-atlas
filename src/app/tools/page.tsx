"use client";

import { useState } from "react";
import tools from "@/data/tools.json";
import ToolCard from "@/components/ToolCard";
import SearchBar from "@/components/SearchBar";

export default function ToolsPage() {
  // 🔹 STATE
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [pricing, setPricing] = useState("All");
  const [sort, setSort] = useState("az");

  // 🔹 FILTER LOGIC
  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase()) ||
      tool.tags.join(" ").toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || tool.category === category;

    const matchesPricing =
      pricing === "All" || tool.pricing === pricing;

    return matchesSearch && matchesCategory && matchesPricing;
  });

  // 🔹 SORT LOGIC
  const sortedTools = [...filteredTools].sort((a, b) => {
    if (sort === "az") {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });

  return (
    <section>
      {/* 🔹 SEARCH */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* 🔹 FILTERS + SORT */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* CATEGORY FILTER */}
        <select
          className="border px-3 py-2 rounded-lg bg-background"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Productivity">Productivity</option>
          <option value="Design">Design</option>
          <option value="Development">Development</option>
          <option value="Marketing">Marketing</option>
        </select>

        {/* PRICING FILTER */}
        <select
          className="border px-3 py-2 rounded-lg bg-background"
          value={pricing}
          onChange={(e) => setPricing(e.target.value)}
        >
          <option value="All">All Pricing</option>
          <option value="Free">Free</option>
          <option value="Freemium">Freemium</option>
          <option value="Paid">Paid</option>
        </select>

        {/* SORT */}
        <select
          className="border px-3 py-2 rounded-lg bg-background"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="az">Sort: A–Z</option>
          <option value="za">Sort: Z–A</option>
        </select>
      </div>

      {/* 🔹 TOOL GRID */}
      {sortedTools.length === 0 ? (
        <p className="text-muted-foreground">No tools found.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {sortedTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </section>
  );
}
