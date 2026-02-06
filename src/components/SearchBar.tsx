"use client";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Search AI tools..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full mb-6 px-4 py-2 border rounded-lg bg-background"
    />
  );
}
