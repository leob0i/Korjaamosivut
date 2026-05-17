"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Users, 
  Shield,
  CheckCircle2,
  Award,
  Clock,
  Heart
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const values = [
  {
    icon: Shield,
    title: "LUOTETTAVUUS",
    description: "2 vuoden takuu kaikelle työllemme. Pidämme lupauksemme.",
  },
  {
    icon: Award,
    title: "AMMATTITAITO",
    description: "Kokeneet mekaanikomme ovat erikoistuneet premium-merkkeihin.",
  },
  {
    icon: Clock,
    title: "NOPEUS",
    description: "Useimmat työt valmiina saman päivän aikana.",
  },
  {
    icon: Heart,
    title: "ASIAKASPALVELU",
    description: "Rehellinen ja avoin kommunikaatio asiakkaidemme kanssa.",
  },
]

const team = [
  {
    name: "Leon",
    role: "Perustaja & Päämekaanikko",
    description: "Yli 20 vuoden kokemus premium-merkkien huollosta ja korjauksesta.",
  },
  {
    name: "Mikko",
    role: "Diagnostiikkaosaaja",
    description: "Erikoistunut sähkövikoihin ja moderniin diagnostiikkaan.",
  },
  {
    name: "Janne",
    role: "Mekaanikko",
    description: "BMW ja Mercedes-Benz -spesialisti.",
  },
]

export default function MeistaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=1920&h=1080&fit=crop"
              alt="Leon Korjaamo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 border border-primary/30 px-4 py-2 mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium tracking-widest uppercase">Tietoa meistä</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-none tracking-tight uppercase">
                Leon Korjaamo
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Olemme premium-autojen erikoiskorjaamo, joka tarjoaa huippuluokan 
                huolto- ja korjauspalveluita. Luotettavuus, ammattitaito ja asiakastyytyväisyys 
                ovat toimintamme kulmakiviä.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-14 text-sm tracking-widest uppercase"
                  onClick={() => window.location.href = "/contact"}
                >
                  Ota yhteyttä
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-card font-semibold px-8 h-14 text-sm tracking-widest uppercase"
                  onClick={() => window.location.href = "/tyomme"}
                >
                  Katso työmme
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1 tracking-widest">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold text-foreground mb-4 tracking-tight uppercase">Tarinamme</h2>
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Leon Korjaamo perustettiin intohimosta autoja kohtaan ja halusta tarjota 
                  asiakkaille parasta mahdollista palvelua. Olemme erikoistuneet 
                  premium-merkkeihin kuten BMW ja Mercedes-Benz, mutta huollamme kaikki merkit.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Meillä on käytössä alan uusimmat diagnostiikkalaitteet ja merkkikohtaiset 
                  erikoistyökalut. Mekaanikkomme ovat koulutettuja ja kokeneita ammattilaisia, 
                  jotka pitävät osaamisensa ajan tasalla jatkuvalla koulutuksella.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Tarjoamme 2 vuoden takuun kaikelle työllemme ja 3 kuukauden korottoman 
                  maksuajan. Meille asiakastyytyväisyys on tärkeintä.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-foreground mb-4 tracking-tight uppercase">Tiimimme</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kokeneet ammattilaiset palveluksessasi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card 
                  key={index} 
                  className="bg-background border-border"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1 tracking-wide uppercase">{member.name}</h3>
                    <p className="text-primary text-sm mb-3 tracking-widest uppercase">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-foreground mb-4 tracking-tight uppercase">Miksi Leon Korjaamo?</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[
                "2 vuoden takuu kaikelle työlle",
                "3 kuukauden koroton maksuaika",
                "Premium-merkkien erikoisosaaminen",
                "Alkuperäiset ja OEM-osat",
                "Moderni diagnostiikka",
                "Nopea ja joustava palvelu",
                "Reilu ja läpinäkyvä hinnoittelu",
                "Ammattitaitoinen henkilökunta",
                "Tyytyväisyystakuu",
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-card border border-border p-4"
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
              Tule tutustumaan!
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Ota yhteyttä ja kerro miten voimme auttaa. Olemme täällä sinua varten.
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
