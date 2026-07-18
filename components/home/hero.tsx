import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { whatsappUrl } from "@/lib/site-config"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      <Image
        src="/images/hero-construcao.png"
        alt=""
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-24 md:px-6 md:py-36">
        <span className="rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          Engenharia, assessoria e financiamento CAIXA
        </span>
        <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-6xl">
          Do projeto à aprovação: seu imóvel <span className="text-primary">regularizado e financiado</span>
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-background/80">
          Projetos arquitetônicos, regularização de imóveis, Habite-se e assessoria completa em
          financiamento imobiliário CAIXA para construtoras e incorporadoras, em São José dos Campos e região.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="font-semibold">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              Solicite uma Consulta Grátis
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground"
          >
            <Link href="/servicos">Conheça os Serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
