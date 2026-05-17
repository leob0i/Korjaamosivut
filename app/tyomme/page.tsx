"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Camera, 
  Star
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const projects = [
  {
    title: "BMW M3 Täyshuolto",
    category: "Huolto",
    description: "Suuri huolto ja jakopään ketjujen vaihto.",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop",
  },
  {
    title: "Mercedes-AMG C63",
    category: "Moottorin korjaus",
    description: "Moottorin remontti ja tehojen optimointi.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
  },
  {
    title: "BMW X5 Alusta",
    category: "Korjaus",
    description: "Ilmajousituksen täydellinen uusinta.",
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800&h=600&fit=crop",
  },
  {
    title: "Mercedes E-Class",
    category: "Huolto",
    description: "Määräaikaishuolto ja automaattivaihteiston öljynvaihto.",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&h=600&fit=crop",
  },
  {
    title: "BMW 5-sarja",
    category: "Ohjelmointi",
    description: "Moottorin optimointi ja lisävarusteiden aktivointi.",
    image: "https://images.unsplash.com/photo-1520050206757-d3c4c4e6a0f3?w=800&h=600&fit=crop",
  },
  {
    title: "Mercedes GLC",
    category: "Renkaat",
    description: "Premium-talvirenkaat ja vannesuoristus.",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop",
  },
]

const stats = [
  { value: "500+", label: "Tyytyväistä asiakasta" },
  { value: "2000+", label: "Suoritettua huoltoa" },
  { value: "15+", label: "Vuotta kokemusta" },
  { value: "100%", label: "Tyytyväisyystakuu" },
]

export default function TyommePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&h=1080&fit=crop"
              alt="Työmme"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 border border-primary/30 px-4 py-2 mb-6">
                <Camera className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium tracking-widest uppercase">Portfolio</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-none tracking-tight uppercase">
                Työmme
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Tutustu tekemiimme töihin ja näe laatu omin silmin. 
                Jokainen projekti on meille yhtä tärkeä.
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
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground tracking-widest uppercase text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-foreground mb-4 tracking-tight uppercase">Viimeaikaisia projekteja</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Jokainen auto saa meiltä yksilöllistä huomiota ja ammattitaitoista palvelua
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium border border-primary/30 text-primary px-2 py-1 tracking-widest uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 tracking-wide uppercase">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-foreground mb-4 tracking-tight uppercase">Asiakkaiden palaute</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  text: "Erinomainen palvelu ja ammattitaito. BMW huollettiin nopeasti ja hinta oli kilpailukykyinen.",
                  author: "Matti K.",
                },
                {
                  text: "Löysivät vian jota muut korjaamot eivät löytäneet. Suosittelen lämpimästi!",
                  author: "Anna S.",
                },
                {
                  text: "Mercedes on käynyt täällä huollossa jo vuosia. Luotettava ja rehellinen korjaamo.",
                  author: "Pekka L.",
                },
              ].map((review, index) => (
                <Card 
                  key={index} 
                  className="bg-background border-border"
                >
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">&quot;{review.text}&quot;</p>
                    <p className="text-primary font-medium tracking-widest uppercase text-sm">- {review.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6 tracking-tight uppercase">
              Haluatko autosi meille?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Ota yhteyttä ja kerro tarpeestasi. Hoidamme autosi ammattitaidolla.
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
