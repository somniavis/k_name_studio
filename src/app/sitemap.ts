import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://k-name-studio.com'
  const currentDate = new Date()

  // Supported languages
  const languages = ['en', 'ko', 'ja', 'de', 'es', 'fr', 'it', 'pt', 'th', 'id']

  // Main pages with high priority
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/generate`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/korean-names-299-deal`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Language-specific pages for main routes
  const languagePages: MetadataRoute.Sitemap = []
  languages.forEach(lang => {
    languagePages.push({
      url: `${baseUrl}?lang=${lang}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })
    languagePages.push({
      url: `${baseUrl}/generate?lang=${lang}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })
  })

  // Static pages
  const staticPages = [
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  return [
    ...mainPages,
    ...languagePages,
    ...staticPages,
  ]
}