import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Korean Names for $2.99 | 70% OFF Premium Package Deal",
  description: "FLASH SALE: Premium Korean names normally $9.99, now just $2.99! Includes K-pop star matching, soulmate names, and birth date compatibility. Limited time offer!",
  keywords: "korean names $2.99, korean name discount, korean name sale, premium korean names deal, k-pop name matching discount",
  openGraph: {
    title: "🔥 Korean Names $2.99 | 70% OFF Premium Deal",
    description: "Get K-pop star matching + soulmate names for just $2.99 (was $9.99)!",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function KoreanNamesDealPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header with Deal Banner */}
      <div className="bg-red-600 text-white text-center py-3">
        <div className="container mx-auto px-4">
          <p className="font-bold text-lg">
            🔥 FLASH SALE: 70% OFF Premium Korean Names - Limited Time Only! 🔥
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Premium Korean Names
            <br />
            <span className="text-red-600">Only $2.99</span>
            <br />
            <span className="text-2xl md:text-3xl text-gray-600 line-through">
              Was $9.99
            </span>
          </h1>

          <div className="bg-yellow-400 text-black px-6 py-3 rounded-full inline-block text-xl font-bold mb-8">
            Save 70% - That&apos;s $7 OFF!
          </div>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Get authentic Korean names with K-pop star matching, soulmate compatibility,
            and birth date astrology - all for the price of a coffee!
          </p>
        </div>

        {/* What You Get */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            What You Get for Just $2.99
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold mb-2">3 Premium Names</h3>
              <p className="text-gray-600">
                Carefully curated Korean names based on your birth date and personality
              </p>
            </div>

            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-bold mb-2">K-pop Star Matches</h3>
              <p className="text-gray-600">
                Names that match K-pop celebrities with similar birth date compatibility
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💕</span>
              </div>
              <h3 className="text-xl font-bold mb-2">2 Soulmate Names</h3>
              <p className="text-gray-600">
                Names of people who would be most compatible with you romantically
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-gray-100 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-lg font-bold text-gray-900 mb-2">
                Total Value: $9.99
              </p>
              <p className="text-3xl font-bold text-red-600">
                Your Price: $2.99
              </p>
              <p className="text-green-600 font-bold">
                You Save: $7.00 (70% OFF)
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">
            Join 10,000+ Happy Customers
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="mb-4">&quot;Amazing value! Got my K-pop name for just $2.99 instead of $10. Love my new Korean name!&quot;</p>
              <p className="font-bold">- Sarah K.</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="flex mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="mb-4">&quot;The soulmate names feature is incredible. Found my perfect match name for cheap!&quot;</p>
              <p className="font-bold">- Mike L.</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="flex mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="mb-4">&quot;Professional quality Korean names at student budget price. Totally worth $2.99!&quot;</p>
              <p className="font-bold">- Emma T.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Don&apos;t Miss This Deal!
            </h2>
            <p className="text-xl mb-6">
              Premium Korean names for the price of a coffee.
              <br />
              <span className="font-bold">Limited time offer ends soon!</span>
            </p>

            <Link
              href="/"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition-colors inline-block"
            >
              Get My Premium Names for $2.99 →
            </Link>

            <p className="text-sm mt-4 opacity-90">
              ✅ Instant delivery ✅ 100% satisfaction guaranteed ✅ No hidden fees
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">
                Why is the price so low compared to $9.99?
              </h3>
              <p className="text-gray-600">
                We&apos;re running a limited-time promotion to introduce more people to our premium service.
                This deal won&apos;t last long, so grab it while you can!
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">
                What makes these names &quot;premium&quot;?
              </h3>
              <p className="text-gray-600">
                Premium names include K-pop celebrity compatibility analysis, soulmate matching,
                and detailed astrology readings - features not available in our free service.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">
                Is this a one-time payment?
              </h3>
              <p className="text-gray-600">
                Yes! $2.99 is a one-time payment with no subscription or hidden fees.
                You get instant access to all premium features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}