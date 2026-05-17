"use client"

import { useState, useEffect } from "react"

export default function StatsSection() {
  const [counts, setCounts] = useState({
    customers: 0,
    services: 0,
    years: 0,
    satisfaction: 0,
  })

  const finalCounts = {
    customers: 1200,
    services: 5000,
    years: 13,
    satisfaction: 5,
  }

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const timers = Object.keys(finalCounts).map((key) => {
      const finalValue = finalCounts[key as keyof typeof finalCounts]
      const increment = finalValue / steps

      return setInterval(() => {
        setCounts((prev) => ({
          ...prev,
          [key]: Math.min(prev[key as keyof typeof prev] + increment, finalValue),
        }))
      }, stepDuration)
    })

    setTimeout(() => {
      timers.forEach((timer) => clearInterval(timer))
      setCounts(finalCounts)
    }, duration)

    return () => timers.forEach((timer) => clearInterval(timer))
  }, [])

  const stats = [
    {
      number: Math.floor(counts.customers),
      label: "Tyytyväistä asiakasta",
      suffix: "+",
    },
    {
      number: Math.floor(counts.services),
      label: "Huoltoa tehty",
      suffix: "+",
    },
    {
      number: Math.floor(counts.years),
      label: "Vuotta kokemusta",
      suffix: "",
    },
    {
      number: Math.floor(counts.satisfaction),
      label: "Tähden arvostelut",
      suffix: "★",
    },
  ]

  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-2">
                {stat.number.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-xs tracking-ultra-wide uppercase text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
