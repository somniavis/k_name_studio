export default function StructuredData() {
  // Simple structured data without complex nested objects to avoid JSON parsing issues
  const appData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Korean Name Studio",
    "description": "AI-powered Korean name generator with birth date compatibility",
    "url": "https://k-name-studio.vercel.app",
    "applicationCategory": "Lifestyle",
    "operatingSystem": "Web Browser"
  }

  const freeOfferData = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Free Korean Name Generation",
    "price": "0",
    "priceCurrency": "USD"
  }

  const premiumOfferData = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Premium Korean Names Package",
    "price": "2.99",
    "priceCurrency": "USD",
    "description": "3 premium names + K-pop star matches + 2 soulmate names"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(freeOfferData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(premiumOfferData) }}
      />
    </>
  )
}