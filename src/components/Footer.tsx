const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-muted-foreground flex justify-between items-center">
        <span>© 2026 AI Tool Atlas</span>
        <span>Built with Next.js & Tailwind</span>
        <div className="flex gap-4">
          <a
            href={`${baseUrl}/sitemap.xml`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
