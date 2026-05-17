"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export default function NewsSection() {
  const news = [
    {
      title: "Kevään rengassesonki alkaa",
      excerpt: "Varaa aikasi ajoissa kevään rengasvaihtoon. Palvelemme Ma–Pe 08:00–17:00.",
      date: "04.2025",
      category: "Renkaat",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      title: "Brembo Expert -sertifikaatti uusittu",
      excerpt: "Olemme jälleen vahvistaneet asemamme Brembo Expert -sertifioituna jarruasiantuntijana.",
      date: "03.2025",
      category: "Uutiset",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop",
    },
    {
      title: "Matkailuautojen huoltopalvelut",
      excerpt: "Meillä hoituu nyt myös matkailuautojen huollot ja korjaukset — luotettavasti Elimäellä.",
      date: "02.2025",
      category: "Palvelut",
      image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=400&h=300&fit=crop",
    },
  ]

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <span className="text-primary text-xs tracking-ultra-wide uppercase font-medium">Ajankohtaista</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 uppercase tracking-tight">
              Uutiset
            </h2>
          </div>
          <Button
            variant="outline"
            className="border-border text-muted-foreground hover:text-primary hover:border-primary text-xs tracking-wider uppercase w-fit"
            onClick={() => (window.location.href = "/contact")}
          >
            Ota yhteyttä
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] tracking-widest uppercase text-primary border border-primary/50 bg-background/80 backdrop-blur-sm px-3 py-1">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Calendar className="w-3 h-3" />
                {item.date}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
