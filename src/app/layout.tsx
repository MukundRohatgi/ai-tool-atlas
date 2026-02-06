import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "AI Tool Atlas",
    template: "%s | AI Tool Atlas"
  },
  description: "A curated directory of the best AI tools for productivity, design, coding, and more.",
  keywords: ["AI tools", "artificial intelligence", "AI directory"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "AI Tool Atlas",
    description: "Discover powerful AI tools in one place",
    url: "https://your-vercel-url.vercel.app",
    siteName: "AI Tool Atlas",
    type: "website"
  }
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark" >
      <body className={`${inter.className} bg-background text-foreground`}>
          <Navbar />
          <main className="min-h-screen px-6 py-8">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
