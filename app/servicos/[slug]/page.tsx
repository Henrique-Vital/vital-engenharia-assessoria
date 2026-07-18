import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services, getService } from "@/lib/services-data"
import { whatsappUrl } from "@/lib/site-config"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return { title: service.title, description: service.description }
}

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  return (
    <>
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1 text-sm text-background/60">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="size-4" aria-hidden="true" />
            <Link href="/servicos" className="hover:text-primary">
              Serviços
            </Link>
            <ChevronRight className="size-4" aria-hidden="true" />
            <span className="text-background">{service.shortTitle}</span>
          </nav>
          <h1 className="max-w-3xl text-balance text-3xl font-bold md:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-background/80">
            {service.description}
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-3 md:px-6">
        <div className="flex flex-col gap-12 md:col-span-2">
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 66vw, 100vw"
            />
          </div>

          {service.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-balance text-2xl font-bold">{section.title}</h2>
              {section.paragraphs?.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {section.items && (
                <ul className="mt-4 flex flex-col gap-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                      <span className="leading-relaxed text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.steps && (
                <ol className="mt-4 flex flex-col gap-4">
                  {section.steps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </div>

        <aside className="flex flex-col gap-6">
          <div className="sticky top-24 flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-2xl bg-foreground p-6 text-background">
              <h2 className="text-balance text-lg font-bold">{service.cta}</h2>
              <p className="text-sm leading-relaxed text-background/80">
                Atendimento direto pelo WhatsApp, sem compromisso.
              </p>
              <Button asChild className="font-semibold">
                <a
                  href={whatsappUrl(
                    `Olá! Gostaria de saber mais sobre ${service.title}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold">Outros serviços</h2>
              <ul className="mt-4 flex flex-col gap-2">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/servicos/${s.slug}`}
                        className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <ChevronRight className="size-4 text-primary" aria-hidden="true" />
                        {s.shortTitle}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
