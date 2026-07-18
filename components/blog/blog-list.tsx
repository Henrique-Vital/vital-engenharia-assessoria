"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Search, Clock, ArrowRight } from "lucide-react"
import { blogPosts, blogCategories } from "@/lib/blog-data"
import { cn } from "@/lib/utils"

export function BlogList() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return blogPosts.filter((post) => {
      const matchesCategory = !category || post.category === category
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search
            className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar artigos..."
            aria-label="Buscar artigos"
            className="w-full rounded-md border border-input bg-background py-2.5 pl-9 pr-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory(null)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
              category === null
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary hover:text-foreground",
            )}
          >
            Todos
          </button>
          {blogCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat === category ? null : cat)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                category === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-muted-foreground">
          Nenhum artigo encontrado. Tente outra busca ou categoria.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="size-3.5" aria-hidden="true" />
                  {post.readingTime}
                </span>
              </div>
              <h2 className="text-balance text-lg font-semibold leading-snug">{post.title}</h2>
              <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
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
      )}
    </div>
  )
}
