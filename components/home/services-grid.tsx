import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/services-data"
import { ServiceIcon } from "@/components/service-icon"

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-bold md:text-4xl">Nossos Serviços</h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Soluções completas para o seu imóvel ou empreendimento — da prancheta ao registro em cartório.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/servicos/${service.slug}`}
            className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-md"
          >
            <span className="flex size-12 items-center justify-center rounded-lg bg-accent text-primary">
              <ServiceIcon icon={service.icon} />
            </span>
            <h3 className="text-lg font-semibold">{service.shortTitle}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            <span className="mt-auto flex items-center gap-1 text-sm font-medium text-primary">
              Saiba mais
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
