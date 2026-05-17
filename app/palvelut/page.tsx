"use client"

import { Button } from "@/components/ui/button"
import {
  Wrench,
  Gauge,
  Zap,
  Droplets,
  Settings,
  Cog,
  CircleDot,
  Thermometer,
  Compass,
  Activity,
  RefreshCw,
  ClipboardCheck,
  Wind,
  Plug,
  Footprints,
  LinkIcon,
  ShoppingBag,
  Car,
  ArrowRight,
  Shield,
} from "lucide-react"

const services = [
  {
    category: "Huollot",
    icon: Wrench,
    description: "Ammattitaitoiset huollot kaikille automerkeille ilman merkkirajoituksia.",
    items: [
      {
        title: "Määräaikaishuollot",
        description: "Valmistajan huolto-ohjelman mukaiset huollot kaikille merkeille.",
        icon: Car,
      },
      {
        title: "Diagnostiikkatyöt",
        description: "Vaativat vianetsinnät modernilla diagnoosilaitteistolla.",
        icon: Gauge,
      },
      {
        title: "Autosähkötyöt",
        description: "Valo- ja sähkölaitteiden vianetsintä ja korjaus.",
        icon: Zap,
      },
      {
        title: "Öljynvaihto",
        description: "Moottoriöljyn ja suodattimen vaihto.",
        icon: Droplets,
      },
    ],
  },
  {
    category: "Jarrupalvelut — Brembo Expert",
    icon: Shield,
    description: "Olemme Brembo Expert -sertifioitu jarruasiantuntija. Turvalliset jarrut ovat turvallisuutesi perusta.",
    items: [
      {
        title: "Jarrujen huolto",
        description: "Kattava jarrujen tarkistus, huolto ja osien vaihto.",
        icon: CircleDot,
      },
      {
        title: "Jarrupalojen vaihto",
        description: "Etujarru- ja takajarrupalojen vaihto laadukkailla Brembo-osilla.",
        icon: CircleDot,
      },
      {
        title: "Jarrunesteen vaihto",
        description: "Jarrunesteen vaihto turvallisuussuositusten mukaisesti.",
        icon: Droplets,
      },
      {
        title: "ABS-vianhaku",
        description: "ABS- ja ajonhallintajärjestelmien korjaus.",
        icon: Activity,
      },
    ],
  },
  {
    category: "Matkailuautojen huollot",
    icon: Car,
    description: "Meillä hoituu myös matkailuautojen huollot ja korjaukset ammattitaidolla.",
    items: [
      {
        title: "Matkailuauton määräaikaishuolto",
        description: "Täydellinen matkailuauton huolto valmistajan ohjeiden mukaan.",
        icon: Wrench,
      },
      {
        title: "Matkailuauton korjaukset",
        description: "Kattavat korjauspalvelut matkailuautoille.",
        icon: Settings,
      },
      {
        title: "Järjestelmien tarkistus",
        description: "Sähkö-, vesi- ja lämmitysjärjestelmien tarkistus.",
        icon: ClipboardCheck,
      },
      {
        title: "Kausihuolto",
        description: "Talvi- ja kesäsesongin valmisteluhuolto.",
        icon: RefreshCw,
      },
    ],
  },
  {
    category: "Korjaukset",
    icon: Settings,
    description: "Ammattitaitoiset korjaukset kaikkiin automerkkeihin diagnostiikasta alustaan.",
    items: [
      {
        title: "Alusta- ja jousitustyöt",
        description: "Alustan, jousituksen ja pyöräntuennan osien vaihto.",
        icon: Settings,
      },
      {
        title: "Jakopään vaihtotyöt",
        description: "Jakopään vaihto valmistajan ohjeilla.",
        icon: Cog,
      },
      {
        title: "Kytkimen huolto",
        description: "Kytkimen ja painelaakerin vaihtotyöt.",
        icon: RefreshCw,
      },
      {
        title: "Nelipyöräsuuntaus",
        description: "Ohjauskulmien mittaus ja säätö.",
        icon: Compass,
      },
    ],
  },
  {
    category: "Muut palvelut",
    icon: ShoppingBag,
    description: "Kattavat lisäpalvelut — kaikki mitä autosi tarvitsee yhdestä paikasta.",
    items: [
      {
        title: "Rengastyöt",
        description: "Renkaiden vaihto, tasapainotus ja kausivaihdot.",
        icon: CircleDot,
      },
      {
        title: "Ilmastoinnin huolto",
        description: "Ilmastointijärjestelmän täyttö ja korjaus.",
        icon: Thermometer,
      },
      {
        title: "Katsastuttaminen",
        description: "Katsastuskelpoisuuden tarkistus ja korjaukset.",
        icon: ClipboardCheck,
      },
      {
        title: "Moottorin huuhtelu",
        description: "Kemialliset moottorin sisähuuhtelut.",
        icon: Wind,
      },
      {
        title: "Lämmittimet",
        description: "Defa- ja Calix-lämmittimien asennus.",
        icon: Plug,
      },
      {
        title: "Opetuspolkimet",
        description: "Opetuspolkimien asennus opetuslupaa varten.",
        icon: Footprints,
      },
      {
        title: "Vetokoukut",
        description: "Vetokoukun ja sähkösarjan myynti ja asennus.",
        icon: LinkIcon,
      },
      {
        title: "Renkaiden myynti",
        description: "Bridgestone, Kumho ja Toyo -renkaat.",
        icon: ShoppingBag,
      },
    ],
  },
]

export default function PalvelutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden border-b border-border">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/0 via-primary to-primary/0"></div>
        <div className="container mx-auto px-4">
          <span className="text-primary text-xs tracking-ultra-wide uppercase font-medium">Autonomi Elimäki</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mt-4 mb-6 uppercase tracking-tight">
            Palvelut
          </h1>
          <div className="w-16 h-0.5 bg-primary mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-10">
            Täyden palvelun monimerkkikorjaamo — huollot, jarrupalvelut, matkailuautot ja paljon muuta.
            Brembo Expert -sertifioitu jarruasiantuntija Elimäellä.
          </p>
          <Button
            className="bg-primary hover:bg-primary-600 text-black font-semibold px-10 py-6 text-sm tracking-wider uppercase"
            onClick={() => (window.location.href = "/contact")}
          >
            Tarjouspyyntö
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-24 last:mb-0">
              {/* Category Header */}
              <div className="flex items-start gap-6 mb-12 pb-8 border-b border-border">
                <category.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-tight mb-2">
                    {category.category}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Service Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.items.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="group p-6 border border-border hover:border-primary/50 bg-card transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500"></div>
                    <div className="relative z-10">
                      <service.icon className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />
                      <h3 className="font-display text-base font-semibold text-foreground mb-2 uppercase tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brembo Expert Banner */}
      <section className="py-20 border-y border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="relative p-10 border border-primary/30 bg-background overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <Shield className="w-12 h-12 text-primary flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <span className="text-primary text-xs tracking-ultra-wide uppercase font-medium">Sertifioitu asiantuntija</span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-tight mt-1">
                    Brembo Expert
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 max-w-xl">
                    Olemme virallinen Brembo Expert -korjaamo. Jarruhuollot tehdään laadukkailla Brembo-osilla ammattitaidolla.
                  </p>
                </div>
              </div>
              <Button
                className="bg-primary hover:bg-primary-600 text-black font-semibold px-8 py-6 text-xs tracking-widest uppercase flex-shrink-0"
                onClick={() => (window.location.href = "/contact")}
              >
                Pyydä tarjous
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary text-xs tracking-ultra-wide uppercase font-medium">Ota yhteyttä</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 uppercase tracking-tight">
            Varaa huoltoaika
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
            Ota yhteyttä ja kerro autosi huoltotarpeesta. Annamme kustannusarvion ennen työn aloittamista.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-primary hover:bg-primary-600 text-black font-semibold px-10 py-6 text-sm tracking-wider uppercase"
              onClick={() => (window.location.href = "/contact")}
            >
              Tarjouspyyntö
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border-border text-foreground hover:border-primary hover:text-primary px-10 py-6 text-sm tracking-wider uppercase"
              onClick={() => (window.location.href = "tel:0445858122")}
            >
              Soita: 044 585 8122
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
