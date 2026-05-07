import { Fraunces, Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'
import Footer from '@/components/Footer'
import { defaultOgImage, pageSeo, siteName, siteUrl } from '@/lib/seo'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  keywords: [
    'commercial real estate renderings',
    'mixed-use visualization',
    'residential renderings',
    'AI real estate renderings',
    'AI architectural visualization',
    'single family home renderings',
    'real estate launch films',
    'architectural visualization',
    'commercial property marketing',
    'luxury home visualization',
    'leasing renderings',
    'retail development visualization',
    'office amenity visualization',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  ...pageSeo({
    title: 'SceneSet.AI | AI Property Visualization for Real Estate',
    description: 'AI-powered cinematic renderings, films, and launch assets for commercial, mixed-use, residential, single-family, hospitality, and development teams.',
    image: defaultOgImage,
  }),
}

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteName,
    url: siteUrl,
    email: 'chris@sceneset.ai',
    description: 'AI-powered real estate visualization studio creating renderings, films, launch assets, and campaign image systems for commercial, mixed-use, residential, and single-family properties.',
    areaServed: 'US',
    serviceType: [
      'Commercial real estate renderings',
      'Mixed-use visualization',
      'Residential renderings',
      'AI real estate renderings',
      'AI architectural visualization',
      'Single-family home visualization',
      'Real estate launch films',
      'Architectural visualization',
    ],
    sameAs: [],
  }

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
      </body>
    </html>
  )
}
