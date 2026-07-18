const stats = [
  { value: "300+", label: "Imóveis regularizados" },
  { value: "10+", label: "Anos de experiência" },
  { value: "98%", label: "Clientes satisfeitos" },
  { value: "50+", label: "Projetos aprovados na CAIXA" },
]

export function Stats() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-16 md:grid-cols-4 md:px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <span className="text-4xl font-bold text-primary md:text-5xl">{stat.value}</span>
            <span className="text-sm text-background/70">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
