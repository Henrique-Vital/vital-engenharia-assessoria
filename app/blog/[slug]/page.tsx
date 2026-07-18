import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Clock, Tag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPosts, getPost, type ContentBlock } from "@/lib/blog-data"
import { whatsappUrl } from "@/lib/site-config"

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-10 text-balance text-2xl font-bold">{block.text}</h2>
    case "p":
      return <p className="mt-4 leading-relaxed text-muted-foreground">{block.text}</p>
    case "ul":
      return (
        <ul className="mt-4 flex flex-col gap-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span className="leading-relaxed text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      )
    case "ol":
      return (
        <ol className="mt-4 flex flex-col gap-3">
          {block.items.map((item, i) => (
            <li key={item} className="flex items-start gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {i + 1}
              </span>
              <span className="leading-relaxed text-muted-foreground">{item}</span>
            </li>
          ))}
        </ol>
      )
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)

  return (
    <>
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-sm text-background/60">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="size-4" aria-hidden="true" />
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <ChevronRight className="size-4" aria-hidden="true" />
            <span className="text-background">{post.category}</span>
          </nav>
          <h1 className="text-balance text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-background/70">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden="true" />
              {post.readingTime} de leitura
            </span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 md:px-6">
        <p className="text-pretty text-lg leading-relaxed">{post.excerpt}</p>
        {post.content.map((block, i) => (
          <Block key={i} block={block} />
        ))}

        <div className="mt-10 flex flex-wrap items-center gap-2">
          <Tag className="size-4 text-primary" aria-hidden="true" />
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl bg-foreground p-8 text-background">
          <h2 className="text-balance text-xl font-bold">{post.cta}</h2>
          <p className="text-sm leading-relaxed text-background/80">
            A Vital Engenharia e Assessoria acompanha sua empresa em todo o processo — da
            documentação à aprovação.
          </p>
          <Button asChild className="font-semibold">
            <a
              href={whatsappUrl(`Olá! Li o artigo "${post.title}" e gostaria de uma consultoria.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com um especialista
            </a>
          </Button>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-muted">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
            <h2 className="text-balance text-2xl font-bold">Continue lendo</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-md"
                >
                  <h3 className="text-balance font-semibold leading-snug">{p.title}</h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-auto flex items-center gap-1 pt-2 text-sm font-medium text-primary">
                    Ler artigo
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
