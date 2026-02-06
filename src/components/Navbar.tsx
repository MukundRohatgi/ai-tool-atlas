import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          AI Tool Atlas
        </Link>

        <div className="flex gap-6 text-sm">
          <Link href="/tools" className="hover:text-primary">
            Tools
          </Link>
          <Link href="/productivity" className="hover:text-primary">
            Productivity
          </Link>
        <Link href="/design">Design</Link>
        <Link href="/freemium">Freemium</Link>
        </div>
        <div className="flex items-center gap-4">
  <ThemeToggle />
</div>

      </nav>
    </header>
  );
}



