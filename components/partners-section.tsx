export default function PartnersSection() {
  const brands = [
    { name: "BMW", logo: "https://www.carlogos.org/car-logos/bmw-logo-2020-blue-white.png" },
    { name: "Mercedes-Benz", logo: "https://www.carlogos.org/car-logos/mercedes-benz-logo-2011.png" },
    { name: "Audi", logo: "https://www.carlogos.org/car-logos/audi-logo-2016.png" },
    { name: "Volkswagen", logo: "https://www.carlogos.org/car-logos/volkswagen-logo-2019.png" },
    { name: "Toyota", logo: "https://www.carlogos.org/car-logos/toyota-logo-2020-europe.png" },
    { name: "Volvo", logo: "https://www.carlogos.org/car-logos/volvo-logo-2014.png" },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Huollamme kaikki merkit</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Erikoistumme erityisesti BMW ja Mercedes-Benz merkkeihin, mutta huollamme ammattitaidolla kaikki automerkit
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center bg-white/10 border border-border rounded-full">
                  <span className="text-2xl font-bold text-foreground">{brand.name.charAt(0)}</span>
                </div>
                <span className="text-sm text-muted-foreground font-medium">{brand.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
