import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/services-data"
import { ServiceIcon } from "@/components/service-icon"

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Projetos arquitetônicos, regularização imobiliária, assessoria legal, Habite-se e financiamento CAIXA PJ. Conheça todos os serviços da Vital Engenharia.",
}

export default function ServicosPage() {
  return (
    <>
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <h1 className="text-balance text-4xl font-bold md:text-5xl">Nossos Serviços</h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-background/80">
            Soluções completas em engenharia, regularização e financiamento — para pessoas físicas,
            construtoras e incorporadoras.
          </p>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 md:px-6">
        {services.map((service, i) => (
          <Link
            key={service.slug}
            href={`/servicos/${service.slug}`}
            className="group grid items-center gap-6 overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary hover:shadow-md md:grid-cols-2"
          >
            <div className={`relative aspect-video md:aspect-auto md:h-full ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-10">
              <span className="flex size-12 items-center justify-center rounded-lg bg-accent text-primary">
                <ServiceIcon icon={service.icon} />
              </span>
              <h2 className="text-balance text-2xl font-bold">{service.title}</h2>
              <p className="leading-relaxed text-muted-foreground">{service.description}</p>
              <span className="flex items-center gap-1 text-sm font-semibold text-primary">
                Ver detalhes
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </section>
    </>
  )
}
