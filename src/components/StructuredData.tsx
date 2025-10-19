export default function StructuredData() {
  // Simple structured data without complex nested objects to avoid JSON parsing issues
  const appData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Korean Name Studio",
    "description": "AI-powered Korean name generator with birth date compatibility",
    "url": "https://k-name-studio.com",
    "applicationCategory": "Lifestyle",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "2.99",
      "priceCurrency": "USD"
    }
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the Korean name generator work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Korean name generator uses traditional Saju (Four Pillars) astrology combined with AI to create personalized Korean names based on your birth date, name pronunciation, and cultural preferences. It analyzes your birth elements and matches them with meaningful Korean characters."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Korean name generator free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer free Korean name generation with basic features. Premium packages ($2.99) include additional features like K-pop star name matching, soulmate compatibility names, and detailed cultural meanings."
        }
      },
      {
        "@type": "Question",
        "name": "What is Saju astrology?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Saju (사주) is traditional Korean fortune-telling based on the Four Pillars of Destiny. It uses your birth year, month, day, and hour to determine your elemental balance and life path, which influences name selection in Korean culture."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use these Korean names in real life?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our Korean names are authentic and culturally appropriate. Many users adopt them as nicknames, usernames, or even legal names. Each name comes with its meaning and cultural significance explained."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support multiple languages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Korean Name Studio is available in 10 languages: English, Korean, Japanese, German, Spanish, French, Italian, Portuguese, Thai, and Indonesian."
        }
      }
    ]
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Korean Name Studio",
    "url": "https://k-name-studio.com",
    "logo": "https://k-name-studio.com/logo.png",
    "description": "AI-powered Korean name generator with traditional Saju astrology",
    "sameAs": []
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  )
}