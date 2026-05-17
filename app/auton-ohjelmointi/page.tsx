"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Cpu, 
  Gauge, 
  Zap, 
  Shield,
  CheckCircle2,
  BarChart3
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const services = [
  {
    name: "Moottorin optimointi",
    price: "alk. 399 €",
    description: "Tehon ja väännön optimointi alkuperäistä ohjelmistoa muokkaamalla.",
  },
  {
    name: "AdBlue-ratkaisu",
    price: "alk. 499 €",
    description: "AdBlue-järjestelmän korjaus ja ohjelmointi vikatilanteissa.",
  },
  {
    name: "DPF/FAP-ratkaisu",
    price: "alk. 599 €",
    description: "Hiukkassuodattimen ohjelmointi ja toiminnan optimointi.",
  },
  {
    name: "EGR-ohjelmointi",
    price: "alk. 349 €",
    description: "EGR-venttiilin ohjelmointi ja toiminnan säätö.",
  },
]

const brands = [
  "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Volvo", "Ford",
  "Toyota", "Honda", "Mazda", "Škoda", "Seat", "Peugeot",
  "Renault", "Opel", "Hyundai", "Kia", "Nissan", "Mitsubishi",
]

const features = [
  {
    icon: Cpu,
    title: "KAIKKI MERKIT",
    description: "Ohjelmoimme kaikkia automerkkejä — ei merkkirajoituksia.",
  },
  {
    icon: Shield,
    title: "TURVALLINEN PROSESSI",
    description: "Alkuperäinen ohjelmisto varmuuskopioidaan aina ennen muutoksia.",
  },
  {
    icon: Gauge,
    title: "TESTAUS DYNAAMISESTI",
    description: "Kaikki muutokset testataan ajossa ennen luovutusta.",
  },
  {
    icon: BarChart3,
    title: "DOKUMENTOITU TYÖ",
    description: "Saat tarkan raportin tehdyistä muutoksista.",
  },
]

export default function AutonOhjelmointiPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop"
              alt="Auton ohjelmointi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 border border-primary/30 px-4 py-2 mb-6">
                <Cpu className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium tracking-widest uppercase">Monimerkkikorjaamo — Auton ohjelmointi</span>
              </div>

              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-none tracking-tight uppercase">
                Auton Ohjelmointi
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Ammattimainen auton ohjelmointi ja moottorin optimointi kaikkiin merkkeihin.
                BMW, Mercedes, Audi, Toyota — ohjelmoimme minkä merkin tahansa turvallisesti.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-14 text-sm tracking-widest uppercase"
                  onClick={() => window.location.href = "/contact"}
                >
                  Pyydä tarjous
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-card font-semibold px-8 h-14 text-sm tracking-widest uppercase"
                  onClick={() => window.location.href = "tel:+358401234567"}
                >
                  Soita meille
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1 tracking-widest">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-foreground mb-4 tracking-tight uppercase">Ohjelmointipalvelut</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kaikki merkit — laaja valikoima ohjelmointipalveluita ilman merkkirajoituksia
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-foreground mb-2 tracking-wide uppercase">{service.name}</h3>
                      <p className="text-3xl font-bold text-primary">
                        {service.price}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6">{service.description}</p>
                    <Button
                      className="w-full bg-card border border-border hover:bg-primary hover:text-primary-foreground text-foreground transition-colors text-sm tracking-widest uppercase"
                      onClick={() => window.location.href = "/contact"}
                    >
                      Kysy lisää
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-foreground mb-4 tracking-tight uppercase">Mitä ohjelmointi sisältää?</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[
                "Alkuperäisen ohjelmiston varmuuskopiointi",
                "Moottorin diagnostiikka ennen työtä",
                "Räätälöity ohjelmointi ajoneuvoon",
                "Tehon ja väännön optimointi",
                "Polttoainetalouden parantaminen",
                "Vikakoodien poisto tarvittaessa",
                "Koeajo ja testaus",
                "Kirjallinen dokumentaatio",
                "Takuu ohjelmointityölle",
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-background border border-border p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Brands */}
        <section className="py-20 bg-background border-y border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-3 tracking-tight uppercase">Tuetut automerkit</h2>
              <p className="text-muted-foreground">Ohjelmoimme kaikkia merkkejä — tässä osa asiakkaistamme</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="border border-border px-5 py-2 text-sm text-muted-foreground tracking-wide hover:border-primary/50 hover:text-primary transition-colors duration-200"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6 tracking-tight uppercase">
              Kiinnostaako ohjelmointi?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Ota yhteyttä ja kerro ajoneuvosi merkki sekä tiedot. Annamme tarkan tarjouksen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 font-semibold px-8 h-14 text-sm tracking-widest uppercase"
                onClick={() => window.location.href = "/contact"}
              >
                Ota yhteyttä
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
