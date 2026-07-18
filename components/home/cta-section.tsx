import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { whatsappUrl, siteConfig } from "@/lib/site-config"
import { Phone, Mail, Globe } from "lucide-react"

export function CtaSection() {
  return (
    <section className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-20 md:grid-cols-2 md:px-6">
      <div className="flex flex-col gap-6">
        <h2 className="text-balance text-3xl font-bold md:text-4xl">
          Pronto para tirar seu projeto do papel?
        </h2>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          Fale agora com a nossa equipe e receba uma consulta gratuita. Analisamos o seu caso —
          seja um projeto, uma regularização ou um financiamento CAIXA — e indicamos o melhor caminho.
        </p>
        <Button asChild size="lg" className="w-fit font-semibold">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            <Phone className="size-4" aria-hidden="true" />
            Chamar no WhatsApp
          </a>
        </Button>
        <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {siteConfig.phone}
          </li>
          <li className="flex items-center gap-2">
            <Mail className="size-4 text-primary" aria-hidden="true" />
            {siteConfig.email}
          </li>
          <li className="flex items-center gap-2">
            <Globe className="size-4 text-primary" aria-hidden="true" />
            {siteConfig.instagram}
          </li>
        </ul>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <h3 className="text-lg font-semibold">Contato rápido</h3>
        <p className="mb-6 mt-1 text-sm text-muted-foreground">Respondemos em até 1 dia útil.</p>
        <ContactForm compact />
      </div>
    </section>
  )
}
