"use client"

import { Button } from "@/components/ui/button"
import { Wrench, Car, Shield, Gauge, ArrowRight } from "lucide-react"
import Link from "@/components/demo-link"

export default function FocusAreas() {
  const areas = [
    {
      icon: Wrench,
      title: "Määräaikaishuollot",
      description: "Ammattitaitoiset huollot kaikille automerkeille ilman merkkirajoituksia.",
      stats: "Kaikki merkit",
    },
    {
      icon: Shield,
      title: "Jarrupalvelut",
      description: "Brembo Expert -sertifioitu jarruasiantuntija. Turvalliset jarrut joka tilanteessa.",
      stats: "Brembo Expert",
    },
    {
      icon: Car,
      title: "Matkailuautot",
      description: "Meillä hoituu myös matkailuautojen huollot ja korjaukset ammattitaidolla.",
      stats: "Erikoisosaaminen",
    },
    {
      icon: Gauge,
      title: "Diagnostiikka & Korjaukset",
      description: "Modernit diagnostiikkalaitteet ja kattavat korjauspalvelut kaikille merkeille.",
      stats: "Nykyaikainen",
    },
  ]

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 uppercase tracking-tight">
            Mitä tarjoamme
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Autonomi Elimäki on täyden palvelun korjaamo, jossa hoituu kaikki — määräaikaishuolloista matkailuautoihin.
            Olemme Autonomi-ketjun jäsen ja Brembo Expert -sertifioitu korjaamo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group relative p-8 border border-border hover:border-primary/50 bg-background transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <area.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                  <span className="text-xs tracking-wider uppercase text-primary border border-primary/30 px-3 py-1">{area.stats}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 uppercase tracking-wide">{area.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative p-10 border border-primary/30 bg-background overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <Wrench className="w-12 h-12 text-primary" strokeWidth={1.5} />
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground uppercase tracking-wide">Tarjouspyyntö</h3>
                <p className="text-muted-foreground text-sm mt-1">Pyydä meiltä tarjous tai varaa huoltoaika</p>
              </div>
            </div>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary-600 text-black font-semibold px-8 py-6 text-xs tracking-widest uppercase">
                Ota yhteyttä
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
