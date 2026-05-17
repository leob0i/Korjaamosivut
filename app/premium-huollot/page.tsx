"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Shield, 
  Award, 
  Wrench, 
  CheckCircle2,
  Star,
  Clock,
  BadgeCheck
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const bmwServices = [
  {
    name: "Öljyhuolto",
    price: "alk. 299 €",
    description: "Moottorin öljynvaihto BMW Long Life -öljyllä ja alkuperäisellä suodattimella.",
  },
  {
    name: "Pieni huolto",
    price: "alk. 499 €",
    description: "Öljynvaihto, suodattimet, nesteiden tarkistus ja jarrujen tarkastus.",
  },
  {
    name: "Keskisuuri huolto",
    price: "alk. 699 €",
    description: "Pienen huollon sisältö + ilmansuodatin, raitisilmasuodatin ja laajempi tarkastus.",
  },
  {
    name: "Suuri huolto",
    price: "alk. 999 €",
    description: "Täydellinen huoltopaketti sisältäen kaikki suodattimet, nesteet ja jarrunesteen vaihdon.",
  },
]

const mercedesServices = [
  {
    name: "Öljyhuolto",
    price: "alk. 329 €",
    description: "Mercedes-Benz -spesifikaation mukainen öljynvaihto alkuperäisosilla.",
  },
  {
    name: "Huolto A",
    price: "alk. 499 €",
    description: "Pieni huolto Mercedes-standardien mukaisesti. Öljyt, suodattimet ja tarkastukset.",
  },
  {
    name: "Huolto B",
    price: "alk. 799 €",
    description: "Laaja huolto sisältäen kaikki suodattimet, nesteet ja perusteellisen tarkastuksen.",
  },
  {
    name: "Täyshuolto",
    price: "alk. 1199 €",
    description: "Premium-huoltopaketti vaativaan käyttöön. Kaikki tarvittavat toimenpiteet.",
  },
]

const features = [
  {
    icon: Shield,
    title: "2 vuoden takuu",
    description: "Kaikelle työllemme 2 vuoden takuu. Varaosille valmistajan mukainen takuu.",
  },
  {
    icon: Award,
    title: "Alkuperäisosat",
    description: "Käytämme vain alkuperäisiä tai OEM-laatuisia varaosia.",
  },
  {
    icon: Wrench,
    title: "Erikoistyökalut",
    description: "Merkkikohtaiset erikoistyökalut ja diagnostiikkalaitteet.",
  },
  {
    icon: BadgeCheck,
    title: "Sertifioitu osaaminen",
    description: "Mekaanikkomme ovat erikoistuneet premium-merkkeihin.",
  },
]

export default function PremiumHuollotPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-950">
        {/* Hero Section with BMW Background */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&h=1080&fit=crop"
              alt="BMW"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">Premium-merkkien erikoisosaaja</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                Määräaikaishuolto
              </h1>
              <p className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-8">
                alk. 499 €
              </p>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                BMW ja Mercedes-Benz määräaikaishuollot alkuperäisosilla ja merkkikohtaisella osaamisella. 
                Takuu säilyy, laatu varmistettu.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-8 h-14 text-lg"
                  onClick={() => window.location.href = "/contact"}
                >
                  Varaa huoltoaika
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-800 font-semibold px-8 h-14 text-lg"
                  onClick={() => window.location.href = "tel:+358401234567"}
                >
                  Soita meille
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-900/50 border-y border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BMW Services */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-900">BMW</span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">BMW Huollot</h2>
                <p className="text-gray-400 mt-1">Kaikki BMW-mallit 1-sarjasta X7:ään</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bmwServices.map((service, index) => (
                <Card 
                  key={index} 
                  className="bg-gray-900/50 border-gray-800 hover:border-emerald-500/50 transition-all duration-300 group overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                        {service.price}
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                    <Button
                      className="w-full bg-gray-800 hover:bg-emerald-600 text-white transition-colors"
                      onClick={() => window.location.href = "/contact"}
                    >
                      Varaa aika
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mercedes Services */}
        <section className="py-24 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">MB</span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">Mercedes-Benz Huollot</h2>
                <p className="text-gray-400 mt-1">A-sarjasta S-sarjaan ja AMG-malleihin</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mercedesServices.map((service, index) => (
                <Card 
                  key={index} 
                  className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {service.price}
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                    <Button
                      className="w-full bg-gray-800 hover:bg-blue-600 text-white transition-colors"
                      onClick={() => window.location.href = "/contact"}
                    >
                      Varaa aika
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Mitä huolto sisältää?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Kaikki huollot suoritetaan valmistajan huolto-ohjelman mukaisesti
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Moottoriöljyn ja suodattimen vaihto",
                "Ilmansuodattimen tarkastus/vaihto",
                "Raitisilmasuodattimen vaihto",
                "Jarrujen ja renkaiden tarkastus",
                "Nesteiden tarkastus ja täyttö",
                "Valojen ja pyyhkijöiden tarkastus",
                "Alustan tarkastus",
                "Huoltovälin nollaus",
                "Digitaalinen huoltoraportti",
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-emerald-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <Clock className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">3 kuukauden koroton maksuaika</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Varaa huoltoaika nyt
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ota yhteyttä ja sovi sopiva huoltoaika. Tarjoamme ilmaisen kustannusarvion ennen huoltoa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 h-14 text-lg"
                onClick={() => window.location.href = "/contact"}
              >
                Varaa aika verkossa
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 font-semibold px-8 h-14 text-lg"
                onClick={() => window.location.href = "tel:+358401234567"}
              >
                Soita: 040 123 4567
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
