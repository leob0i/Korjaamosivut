import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-90"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">About BFAJK&GB</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            A non-profit, non-political alliance of visionary entrepreneurs, investors, economists, and professionals
            committed to economic transformation grounded in Islamic ethics.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Leadership</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                    IA
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">Mr. Imran Aziz</h3>
                    <Badge className="bg-emerald-100 text-emerald-800 mb-4">Forum Leader</Badge>
                    <p className="text-gray-600 leading-relaxed">
                      Under the visionary leadership of Mr. Imran Aziz, BFAJK&GB champions an ethical business ecosystem
                      through capacity-building, policy advocacy, and strategic alliances. His commitment to Islamic
                      ethics and sustainable development drives our mission forward.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-emerald-50 to-emerald-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-12 h-12 text-emerald-600 mr-4" />
                  <h3 className="text-3xl font-bold text-gray-800">Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To build a Shariah-compliant business ecosystem that fosters sustainable success, guiding individuals
                  and communities towards prosperity in this world and spiritual fulfillment in the Hereafter.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-12 h-12 text-blue-600 mr-4" />
                  <h3 className="text-3xl font-bold text-gray-800">Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To empower the business communities of AJK and GB through ethical leadership, capacity development,
                  and strategic collaboration—driving inclusive economic growth, innovation, and meaningful policy
                  reform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Core Objectives</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Promote Shariah-compliant and ethically sound business practices",
              "Enable professional development and technical excellence",
              "Facilitate strategic networking and market connectivity",
              "Strengthen links with national and global business forums",
              "Advocate for inclusive, business-friendly policy frameworks",
              "Advance the vision of an interest-free economic system",
            ].map((objective, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{objective}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Approach</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Thought Leadership",
                description: "Curating knowledge through publications, policy briefs, seminars, and roundtables",
                icon: "💡",
              },
              {
                title: "Skill Development",
                description: "Delivering impactful workshops, trainings, and exposure visits",
                icon: "🎯",
              },
              {
                title: "Policy Engagement",
                description: "Partnering with AJK & GB governments to influence policy direction",
                icon: "🤝",
              },
              {
                title: "Global Outreach",
                description: "Leading trade delegations and forging international partnerships",
                icon: "🌍",
              },
            ].map((approach, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{approach.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{approach.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{approach.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
