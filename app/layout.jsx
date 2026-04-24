import { Fraunces, Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'
import Footer from '@/components/Footer'

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
  title: 'Sceneset.AI — Visualization for High-End Development',
  description: 'We render Class-A towers, mixed-use landmarks and interior fit-outs at 8K fidelity — before a single shovel is in the ground.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
      </body>
    </html>
  )
}
