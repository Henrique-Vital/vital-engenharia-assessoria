import type { Metadata } from "next"
import { BlogList } from "@/components/blog/blog-list"

export const metadata: Metadata = {
  title: "Blog — Central de Conhecimento",
  description:
    "Artigos sobre financiamento CAIXA para construtoras, regularização de imóveis, Selo Casa Azul, SPE, medição de obra e muito mais.",
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <h1 className="text-balance text-4xl font-bold md:text-5xl">Central de Conhecimento</h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-background/80">
            Guias completos sobre financiamento CAIXA para pessoa jurídica, regularização de imóveis
            e gestão de obras — escritos para quem constrói.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <BlogList />
      </section>
    </>
  )
}
