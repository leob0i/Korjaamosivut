import type React from "react"
import type { Metadata } from "next"
import { Oswald, Barlow } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"]
})

const barlow = Barlow({ 
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["300", "400", "500", "600"]
})

export const metadata: Metadata = {
  title: "Autonomi Elimäki - Monimerkkikorjaamo Elimäellä",
  description:
    "Autonomi Elimäki on Kouvolan Elimäellä sijaitseva täyden palvelun monimerkkikorjaamo. Brembo Expert -sertifioitu jarruasiantuntija. Myös matkailuautojen huollot. Puh: 044 585 8122.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fi" className={`bg-background ${oswald.variable} ${barlow.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
