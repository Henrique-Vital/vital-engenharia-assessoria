"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "A Amanda cuidou de toda a regularização do nosso imóvel. Processo que estava travado há anos foi resolvido em poucos meses, com comunicação clara do início ao fim.",
    name: "Ricardo Mendes",
    role: "Proprietário — São José dos Campos",
  },
  {
    quote:
      "Contratamos a Vital para estruturar nosso primeiro Apoio à Produção na CAIXA. O dossiê foi aprovado sem exigências relevantes e a obra começou dentro do prazo.",
    name: "Fernanda Costa",
    role: "Diretora — Construtora Vale Sul",
  },
  {
    quote:
      "Projeto arquitetônico impecável e aprovação na prefeitura sem dor de cabeça. Recomendo para quem quer construir com segurança.",
    name: "João Paulo Silva",
    role: "Cliente residencial — Jacareí",
  },
  {
    quote:
      "O suporte nas medições mensais da CAIXA eliminou as glosas que tínhamos todo mês. A assessoria se pagou várias vezes.",
    name: "Marcos Tavares",
    role: "Engenheiro — Incorporadora MT",
  },
  {
    quote:
      "Conseguimos o Habite-se em tempo recorde com a assessoria da Vital. Documentação impecável, tudo resolvido sem burocracia.",
    name: "Carla Andrade",
    role: "Proprietária — Taubaté",
  },
  {
    quote:
      "A consultoria para o Plano Empresário foi essencial. Conseguimos 85% de financiamento e a obra já está 60% concluída sem nenhum atraso nas liberações.",
    name: "Luciano Oliveira",
    role: "Sócio — Incorporadora Novo Horizonte",
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (i: number) => {
    setFade(false)
    setTimeout(() => {
      setIndex(i)
      setFade(true)
    }, 150)
  }

  const prev = () => goTo(index === 0 ? testimonials.length - 1 : index - 1)
  const next = () => goTo(index === testimonials.length - 1 ? 0 : index + 1)

  useEffect(() => {
    intervalRef.current = setInterval(next, 6000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [index])

  const testimonial = testimonials[index]

  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-4xl px-4 py-20 md:px-6">
        <h2 className="text-balance text-center text-3xl font-bold md:text-4xl">
          O que nossos clientes dizem
        </h2>
        <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-8 text-center md:p-12">
          <Quote className="size-10 shrink-0 text-primary" aria-hidden="true" />
          <div
            className={cn(
              "flex flex-col items-center gap-6 transition-opacity duration-200",
              fade ? "opacity-100" : "opacity-0",
            )}
          >
            <blockquote className="text-pretty text-lg leading-relaxed">
              {`"${testimonial.quote}"`}
            </blockquote>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Depoimentos">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Depoimento ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    "size-2.5 rounded-full transition-all",
                    i === index ? "bg-primary" : "bg-border hover:bg-muted-foreground/40",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
