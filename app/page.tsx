import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import StatsSection from "@/components/stats-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <StatsSection />
<ContactSection />
    </main>
  )
}
