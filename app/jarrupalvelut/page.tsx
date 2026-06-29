import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Shield, Clock } from "lucide-react"

export default function JarrupalvelutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background flex flex-col">
        <section className="flex-1 flex items-center justify-center py-32">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 border border-primary/30 px-4 py-2 mb-8">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-medium tracking-widest uppercase">Brembo Expert</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-none tracking-tight uppercase">
              Jarrupalvelut
            </h1>

            <div className="w-16 h-0.5 bg-primary mx-auto mb-8"></div>

            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12 leading-relaxed">
              Brembo Expert -sertifioitu jarruasiantuntija. Turvalliset jarrut joka tilanteessa.
            </p>

            <div className="inline-flex items-center gap-3 border border-border px-8 py-5 bg-card">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-foreground text-sm tracking-widest uppercase font-medium">Tämä osio valmistuu pian</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
