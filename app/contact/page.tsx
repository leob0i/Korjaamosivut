"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
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

  const contactItems = [
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
  ]

  const hours = [
    { day: "Maanantai", time: "08:00–17:00", open: true },
    { day: "Tiistai", time: "08:00–17:00", open: true },
    { day: "Keskiviikko", time: "08:00–17:00", open: true },
    { day: "Torstai", time: "08:00–17:00", open: true },
    { day: "Perjantai", time: "08:00–17:00", open: true },
    { day: "Lauantai", time: "Suljettu", open: false },
    { day: "Sunnuntai", time: "Suljettu", open: false },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden border-b border-border">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/0 via-primary to-primary/0"></div>
        <div className="container mx-auto px-4">
          <span className="text-primary text-xs tracking-ultra-wide uppercase font-medium">Autonomi Elimäki</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mt-4 mb-6 uppercase tracking-tight">
            Yhteystiedot
          </h1>
          <div className="w-16 h-0.5 bg-primary mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Ota yhteyttä — pyydä tarjous tai varaa huoltoaika. Palvelemme arkisin 08–17.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* Vasen sarake: yhteystiedot + aukioloajat */}
            <div className="flex flex-col gap-6">
              {/* Yhteystietokortit */}
              <div className="space-y-4">
                {contactItems.map((item, i) => (
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

              {/* Aukioloajat */}
              <div className="p-8 border border-primary/30 bg-card relative overflow-hidden flex-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    <p className="text-xs tracking-widest uppercase text-primary font-medium">Aukioloajat</p>
                  </div>
                  <div className="space-y-3">
                    {hours.map((h, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{h.day}</span>
                        <span className={h.open ? "text-foreground font-medium" : "text-muted-foreground"}>
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Oikea sarake: lomake */}
            <div className="border border-border bg-card p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
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
                      Aihe
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="esim. Jarruhuolto, Määräaikaishuolto..."
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

      {/* Karttaosio */}
      <section className="py-0 border-t border-border">
        <div className="w-full h-80">
          <iframe
            title="Autonomi Elimäki sijainti"
            src="https://maps.google.com/maps?q=Elimäentie+2519,+47200+Elimäki,+Finland&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.8)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  )
}
