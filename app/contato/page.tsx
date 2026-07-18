import type { Metadata } from "next"
import { Phone, Mail, Globe, MapPin, Clock, MessageSquare } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { siteConfig, whatsappUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Vital Engenharia e Assessoria. Agende uma consulta grátis pelo WhatsApp ou envie um email.",
}

const contactChannels = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: siteConfig.phone,
    href: whatsappUrl(),
    description: "Consulta grátis · Resposta rápida",
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Envie sua mensagem",
  },
  {
    icon: Globe,
    label: "Instagram",
    value: siteConfig.instagram,
    href: siteConfig.instagramUrl,
    description: "Acompanhe nossos projetos",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: siteConfig.location,
    href: null,
    description: "Atendimento presencial e online",
  },
]

export default function ContatoPage() {
  return (
    <>
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <h1 className="text-balance text-4xl font-bold md:text-5xl">Entre em Contato</h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-background/80">
            Faça uma consulta grátis pelo WhatsApp e descubra como podemos ajudar no seu próximo
            projeto.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactChannels.map((channel) => {
                const Icon = channel.icon
                const Tag = channel.href ? "a" : "div"
                return (
                  <Tag
                    key={channel.label}
                    href={channel.href ?? undefined}
                    target={channel.href?.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-md"
                  >
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                    <span className="text-sm font-medium text-foreground">{channel.label}</span>
                    <span className="text-sm text-muted-foreground">{channel.value}</span>
                    <span className="text-xs text-primary">{channel.description}</span>
                  </Tag>
                )
              })}
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="size-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Pronto para regularizar seu imóvel?</p>
                  <p className="text-xs text-muted-foreground">
                    Clique no botão abaixo e inicie uma consulta gratuita
                  </p>
                </div>
              </div>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Phone className="size-4" aria-hidden="true" />
                Consulta Grátis no WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-balance text-xl font-bold">Envie sua mensagem</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Preencha o formulário e enviaremos sua mensagem diretamente pelo WhatsApp.
            </p>
            <div className="mt-6">
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <Clock className="size-8 text-primary" aria-hidden="true" />
            <h2 className="text-balance text-2xl font-bold">Horário de Atendimento</h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Segunda a Sexta: 8h às 18h
              <br />
              Sábado: 8h às 12h
              <br />
              <span className="text-xs">Atendimento online via WhatsApp em horário comercial</span>
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="size-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
