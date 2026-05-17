import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Users, Award, TrendingUp } from "lucide-react"

export default function MembershipPage() {
  const membershipTiers = [
    {
      name: "Individual Member",
      price: "PKR 5,000",
      period: "per year",
      description: "Perfect for individual entrepreneurs and professionals",
      features: [
        "Access to all forum discussions",
        "Monthly networking events",
        "Business directory listing",
        "Newsletter subscription",
        "Basic mentorship access",
      ],
      color: "from-emerald-500 to-teal-500",
      popular: false,
    },
    {
      name: "Corporate Member",
      price: "PKR 25,000",
      period: "per year",
      description: "Ideal for established businesses and organizations",
      features: [
        "All Individual Member benefits",
        "Priority event access",
        "Speaking opportunities",
        "Policy advocacy participation",
        "Advanced networking privileges",
        "Quarterly business reviews",
      ],
      color: "from-blue-500 to-indigo-500",
      popular: true,
    },
    {
      name: "Institutional Member",
      price: "PKR 50,000",
      period: "per year",
      description: "For large institutions and government bodies",
      features: [
        "All Corporate Member benefits",
        "Strategic partnership opportunities",
        "Policy development participation",
        "Research collaboration access",
        "International delegation participation",
        "Custom training programs",
      ],
      color: "from-purple-500 to-pink-500",
      popular: false,
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: "Prestigious Network",
      description: "Connect with ethical business leaders across AJK and GB",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Access mentorship and strategic business development",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Gain recognition for your contributions to ethical business",
    },
    {
      icon: Star,
      title: "Islamic Values",
      description: "Promote and practice Islamic values in commerce",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-90"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Join BFAJK&GB</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Become part of a prestigious network of ethical business leaders committed to sustainable economic
            development in AJK and GB
          </p>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Membership Plans</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 ${tier.popular ? "ring-2 ring-blue-500 scale-105" : ""}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} mx-auto mb-4 flex items-center justify-center`}
                  >
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">{tier.name}</CardTitle>
                  <p className="text-gray-600">{tier.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-gray-800">{tier.price}</div>
                    <div className="text-gray-600">{tier.period}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full bg-gradient-to-r ${tier.color} hover:opacity-90 text-white font-semibold py-3`}
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Membership Benefits</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards being part of an ethical business ecosystem that drives sustainable economic
            growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8">
              Apply for Membership
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 font-semibold px-8"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
