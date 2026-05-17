"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Circle, 
  Shield,
  CheckCircle2,
  Clock,
  Package
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const services = [
  {
    name: "Rengastyö",
    price: "75 €/h",
    description: "Renkaiden vaihto, tasapainotus ja tarkastus.",
  },
  {
    name: "Renkaiden vaihto",
    price: "alk. 40 €",
    description: "Kesä- tai talvirenkaiden vaihto vanteilla.",
  },
  {
    name: "Rengashotelli",
    price: "alk. 49 €/kausi",
    description: "Renkaiden säilytys lämpimässä ja kuivassa tilassa.",
  },
  {
    name: "Uudet renkaat",
    price: "kysy tarjous",
    description: "Laaja valikoima renkaita ja vanteita kauttamme.",
  },
]

const features = [
  {
    icon: Circle,
    title: "ISO VALIKOIMA",
    description: "Renkaat ja vanteet kauttamme - suuri valikoima.",
  },
  {
    icon: Shield,
    title: "TAKUU",
    description: "Kaikelle työlle 2 vuoden takuu.",
  },
  {
    icon: Clock,
    title: "NOPEA PALVELU",
    description: "Rengastyöt usein valmiina saman päivän aikana.",
  },
  {
    icon: Package,
    title: "RENGASHOTELLI",
    description: "Säilytämme renkaasi ammattimaisesti.",
  },
]

export default function RengastyotPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
              alt="Rengastyöt"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 border border-primary/30 px-4 py-2 mb-6">
                <Circle className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium tracking-widest uppercase">Rengaspalvelut</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-none tracking-tight uppercase">
                Rengastyöt
              </h1>
              
              <p className="text-6xl md:text-8xl font-bold text-primary mb-8">
                75 €/h
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Rengaspalvelut ammattitaidolla. Iso valikoima renkaita ja vanteita kauttamme.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-14 text-sm tracking-widest uppercase"
                  onClick={() => window.location.href = "/contact"}
                >
                  Varaa aika
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
              <h2 className="font-display text-4xl font-bold text-foreground mb-4 tracking-tight uppercase">Rengaspalvelut</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kattavat rengaspalvelut kaikkiin autoihin
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
              <h2 className="font-display text-4xl font-bold text-foreground mb-4 tracking-tight uppercase">Rengaspalvelumme</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[
                "Renkaiden vaihto",
                "Renkaiden tasapainotus",
                "Renkaiden korjaus",
                "Vannesuoristus",
                "Rengashotelli",
                "Rengasmyynti",
                "Vannemyynti",
                "TPMS-huolto",
                "Nelipyöräsuuntaus",
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

        {/* CTA */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6 tracking-tight uppercase">
              Tarvitsetko rengaspalvelua?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Ota yhteyttä ja varaa aika rengastöihin. Myymme myös renkaita ja vanteita.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 font-semibold px-8 h-14 text-sm tracking-widest uppercase"
                onClick={() => window.location.href = "/contact"}
              >
                Varaa aika
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
