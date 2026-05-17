"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, subject: "Tarjouspyyntö / Yhteydenotto" }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
        setTimeout(() => setSubmitted(false), 6000)
      }
    } catch {
      // silent
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-primary text-xs tracking-ultra-wide uppercase font-medium">Ota yhteyttä</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 uppercase tracking-tight">
            Yhteystiedot
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ammattitaitoinen henkilökuntamme vastaa yhteydenottoihin nopeasti. Pyydä tarjous tai varaa huoltoaika!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Yhteystiedot */}
          <div className="flex flex-col gap-6">
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  label: "Puhelin",
                  value: "044 585 8122",
                  href: "tel:0445858122",
                },
                {
                  icon: Mail,
                  label: "Sähköposti",
                  value: "osmokarna@netti.fi",
                  href: "mailto:osmokarna@netti.fi",
                },
                {
                  icon: MapPin,
                  label: "Osoite",
                  value: "Elimäentie 2519, 47200 Elimäki",
                  href: "https://maps.google.com/?q=Elimäentie+2519,+47200+Elimäki",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-6 p-6 border border-border hover:border-primary/50 bg-card transition-all duration-300 group"
                >
                  <item.icon className="w-8 h-8 text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-8 border border-primary/30 bg-card relative overflow-hidden mt-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              <div className="relative z-10">
                <p className="text-xs tracking-widest uppercase text-primary mb-3">Aukioloajat</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Maanantai</span>
                    <span className="text-foreground">08:00–17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tiistai</span>
                    <span className="text-foreground">08:00–17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Keskiviikko</span>
                    <span className="text-foreground">08:00–17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Torstai</span>
                    <span className="text-foreground">08:00–17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Perjantai</span>
                    <span className="text-foreground">08:00–17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lauantai</span>
                    <span className="text-muted-foreground">Suljettu</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunnuntai</span>
                    <span className="text-muted-foreground">Suljettu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjouspyyntölomake */}
          <div className="border border-border bg-card p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <CheckCircle className="w-16 h-16 text-primary" strokeWidth={1.5} />
                <h3 className="font-display text-2xl font-bold text-foreground uppercase tracking-wide">
                  Viesti lähetetty!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Kiitos yhteydenotostasi. Palaamme sinulle pian.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-xl font-bold text-foreground uppercase tracking-wide mb-6">
                  Tarjouspyyntö
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                      Nimi *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                      Puhelin
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary rounded-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Sähköposti *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Viesti / Tarjouspyyntö *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Kerro auton merkki, malli, vuosimalli ja mitä huoltoa/korjausta tarvitset..."
                    className="bg-background border-border focus:border-primary rounded-none resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-600 text-black font-semibold py-6 text-xs tracking-widest uppercase rounded-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Lähetetään...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Lähetä tarjouspyyntö
                    </div>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
