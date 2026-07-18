import Link from "next/link"
import { Phone, Mail, Globe, MapPin } from "lucide-react"
import { services } from "@/lib/services-data"
import { siteConfig, whatsappUrl } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-md bg-primary font-bold text-primary-foreground">
              V
            </span>
            <span className="text-sm font-bold">Vital Engenharia e Assessoria</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-background/70">
            Projetos arquitetônicos, regularização de imóveis, assessoria legal e financiamento
            imobiliário CAIXA para pessoa jurídica.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-primary">Serviços</h3>
          <ul className="mt-4 flex flex-col gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="text-sm text-background/70 transition-colors hover:text-primary"
                >
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-primary">Institucional</h3>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <Link href="/sobre" className="text-sm text-background/70 transition-colors hover:text-primary">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm text-background/70 transition-colors hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contato" className="text-sm text-background/70 transition-colors hover:text-primary">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-primary">Contato</h3>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-primary"
              >
                <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-primary"
              >
                <Globe className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {siteConfig.instagram}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-background/70">
              <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
              {siteConfig.location}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-background/50 md:px-6">
          © {new Date().getFullYear()} Vital Engenharia e Assessoria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
