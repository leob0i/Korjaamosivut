import Image from "next/image"
import { Wrench, Shield, Clock, Award, CircleDot } from "lucide-react"
import FocusAreas from "@/components/focus-areas"

export default function AboutSection() {
  return (
    <>
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {[
            {
              icon: Wrench,
              title: "Monimerkkikorjaamo",
              description: "Kaikki automerkit",
            },
            {
              icon: Shield,
              title: "Brembo Expert",
              description: "Sertifioitu jarruasiantuntija",
            },
            {
              icon: Clock,
              title: "Perustettu 2012",
              description: "Yli 13 vuoden kokemus",
            },
            {
              icon: Award,
              title: "5 tähteä",
              description: "Asiakasarvostelut",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 py-3"
            >
              <item.icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wide">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <FocusAreas />

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-xs tracking-ultra-wide uppercase font-medium">Autonomi-ketju</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 uppercase tracking-tight">
              Luotettava ketjukorjaamo
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kuulumme Autonomi-ketjuun — valtakunnalliseen monimerkkikorjaamoketjuun, joka takaa laadukkaan
              palvelun ja ajantasaisen osaamisen. Olemme toimineet vuodesta 2012 ja tunnemme paikallisten
              asiakkaidemme tarpeet.
            </p>
            <ul className="space-y-4">
              {[
                "Täyden palvelun monimerkkikorjaamo",
                "Brembo Expert -sertifioitu jarruasiantuntija",
                "Matkailuautojen huollot ja korjaukset",
                "Autonomi-ketjun laaduntakuu",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-primary"></div>
                  <span className="text-foreground text-sm tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop"
              alt="Autonomi Elimäki korjaamo"
              width={600}
              height={500}
              className="w-full h-[500px] object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <CircleDot className="w-5 h-5 text-primary" />
              <span className="font-display text-sm tracking-wider uppercase text-foreground">Elimäki, Kouvola</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
