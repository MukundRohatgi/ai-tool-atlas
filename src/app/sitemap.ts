import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/categories/Productivity`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/categories/Design`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/freemium`,
      lastModified: new Date(),
    },
  ];
}
