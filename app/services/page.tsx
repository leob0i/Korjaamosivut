import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Laptop, Pickaxe, Building, Palette } from "lucide-react"

export default function ServicesPage() {
  const focusAreas = [
    {
      title: "Tourism & Hospitality",
      icon: MapPin,
      description: "With over 1.2 million visitors annually, AJK offers immense tourism potential.",
      details:
        "The Forum promotes eco-tourism, upgrades infrastructure, and supports a regulatory framework that attracts sustainable investment.",
      stats: "1.2M+ Annual Visitors",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Information Technology & Digital Economy",
      icon: Laptop,
      description:
        "The region's young, tech-savvy population and improving internet infrastructure make it ripe for digital growth.",
      details:
        "BFAJK&GB supports freelancing, digital startups, tech incubators, and policies that connect local talent to global markets.",
      stats: "Growing Tech Hub",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Mining & Natural Resources",
      icon: Pickaxe,
      description: "AJK and GB possess valuable yet underutilized mineral resources.",
      details:
        "The Forum advocates responsible exploration, efficient extraction, and value-added processing to stimulate industrial growth and export potential.",
      stats: "Rich Mineral Deposits",
      color: "from-emerald-600 to-green-600",
    },
    {
      title: "Urban Development & Real Estate",
      icon: Building,
      description: "As urbanization accelerates, there's a pressing need for smart, sustainable development.",
      details:
        "Priorities include smart city planning, affordable housing, and infrastructure investment through public-private partnerships.",
      stats: "Smart City Planning",
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Light Manufacturing & Creative Industries",
      icon: Palette,
      description: "Traditional crafts and agro-industries are central to cultural heritage and economic resilience.",
      details:
        "BFAJK&GB promotes innovation, branding, and market access to revitalize these industries and expand exports.",
      stats: "Cultural Heritage Focus",
      color: "from-teal-500 to-emerald-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-90"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Strategic Focus Areas</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Unlocking the economic potential of key regional sectors through strategic initiatives and partnerships
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {focusAreas.map((area, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  <div
                    className={`lg:w-1/3 bg-gradient-to-br ${area.color} p-8 text-white flex flex-col justify-center`}
                  >
                    <area.icon className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                    <Badge className="bg-white/20 text-white w-fit">{area.stats}</Badge>
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">{area.description}</p>
                    <p className="text-gray-600 leading-relaxed">{area.details}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Join BFAJK&GB</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Access a prestigious network of ethical business leaders",
              "Benefit from mentorship and strategic growth opportunities",
              "Establish district-level units to deepen community engagement",
              "Promote Islamic values in commerce and enterprise",
              "Empower micro and small businesses with essential tools and resources",
              "Influence impactful economic reforms through collective advocacy",
            ].map((benefit, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                      ✓
                    </div>
                    <p className="text-white/90 leading-relaxed">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
