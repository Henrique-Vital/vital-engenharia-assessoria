import type { Metadata } from "next"
import Image from "next/image"
import { Target, Eye, Gem, Award, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { whatsappUrl } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a história de Amanda Vital e da Vital Engenharia e Assessoria: missão, visão, valores e parceria com a CAIXA.",
}

const mvv = [
  {
    icon: Target,
    title: "Missão",
    text: "Transformar processos burocráticos em caminhos simples, garantindo que cada cliente tenha seu imóvel projetado, regularizado e financiado com segurança.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser referência no Vale do Paraíba em engenharia, regularização imobiliária e assessoria em financiamento CAIXA para pessoa jurídica.",
  },
  {
    icon: Gem,
    title: "Valores",
    text: "Ética e transparência, excelência técnica, compromisso com prazos, comunicação clara e relacionamento próximo com cada cliente.",
  },
]

export default function SobrePage() {
  return (
    <>
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <h1 className="text-balance text-4xl font-bold md:text-5xl">Sobre Nós</h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-background/80">
            Engenharia com propósito: conheça a história por trás da Vital Engenharia e Assessoria.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-6">
        <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
          <Image
            src="/images/amanda-vital.png"
            alt="Amanda Vital, fundadora da Vital Engenharia e Assessoria"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="flex flex-col gap-5">
          <span className="w-fit rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
            Nossa história
          </span>
          <h2 className="text-balance text-3xl font-bold md:text-4xl">Amanda Vital</h2>
          <p className="leading-relaxed text-muted-foreground">
            A Vital Engenharia e Assessoria nasceu da experiência de Amanda Vital em ver, de perto,
            quantas famílias e empresas ficavam travadas pela burocracia imobiliária: obras sem
            Habite-se, imóveis sem matrícula regular e construtoras sem acesso ao crédito que
            precisavam para crescer.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Com atuação em São José dos Campos e todo o Vale do Paraíba, Amanda uniu o rigor técnico
            da engenharia à visão prática da assessoria legal, construindo um escritório que resolve
            o processo do início ao fim — do projeto arquitetônico à liberação do financiamento na CAIXA.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Hoje, a Vital é parceira de proprietários, construtoras e incorporadoras que buscam
            segurança jurídica, agilidade e um atendimento próximo e acolhedor.
          </p>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <h2 className="text-balance text-center text-3xl font-bold md:text-4xl">
            Missão, Visão e Valores
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {mvv.map((item) => (
              <div key={item.title} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
                <span className="flex size-12 items-center justify-center rounded-lg bg-accent text-primary">
                  <item.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="grid items-center gap-10 rounded-2xl border border-border bg-card p-8 md:grid-cols-2 md:p-12">
          <div className="flex flex-col gap-4">
            <span className="flex size-12 items-center justify-center rounded-lg bg-accent text-primary">
              <Award className="size-6" aria-hidden="true" />
            </span>
            <h2 className="text-balance text-2xl font-bold md:text-3xl">Certificações e parcerias</h2>
            <p className="leading-relaxed text-muted-foreground">
              Atuamos com responsáveis técnicos registrados (ART/RRT ativos) e dominamos os padrões
              documentais exigidos pela CAIXA — incluindo memorial descritivo, orçamento e cronograma
              físico-financeiro nos modelos oficiais.
            </p>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Handshake className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                Assessoria especializada em linhas de crédito CAIXA para pessoa jurídica
              </li>
              <li className="flex items-start gap-2">
                <Handshake className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                Experiência com qualificação SIAC/PBQP-H e Selo Casa Azul+
              </li>
              <li className="flex items-start gap-2">
                <Handshake className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                Relacionamento com cartórios e prefeituras da região
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-xl bg-foreground p-8 text-background">
            <h3 className="text-balance text-xl font-bold">
              Quer conhecer nosso trabalho de perto?
            </h3>
            <p className="text-sm leading-relaxed text-background/80">
              Agende uma conversa gratuita e descubra como podemos ajudar no seu projeto,
              regularização ou financiamento.
            </p>
            <Button asChild className="font-semibold">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Falar com a Amanda
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
