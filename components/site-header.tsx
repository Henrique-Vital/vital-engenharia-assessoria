"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services-data"
import { whatsappUrl } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/servicos", label: "Serviços", hasDropdown: true },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-md bg-foreground font-bold text-primary">
            V
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight">Vital Engenharia</span>
            <span className="text-xs text-muted-foreground">e Assessoria</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                    pathname.startsWith("/servicos") ? "text-primary" : "text-foreground",
                  )}
                >
                  {link.label}
                  <ChevronDown className="size-4" aria-hidden="true" />
                </Link>
                <div className="invisible absolute left-0 top-full w-72 rounded-lg border border-border bg-background p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/servicos/${service.slug}`}
                      className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                    >
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-foreground",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="font-semibold">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              Consulta Grátis
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-md md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background px-4 pb-6 pt-2 md:hidden" aria-label="Navegação móvel">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium"
                      onClick={() => setServicesOpen(!servicesOpen)}
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      <ChevronDown className={cn("size-4 transition-transform", servicesOpen && "rotate-180")} />
                    </button>
                    {servicesOpen && (
                      <ul className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                        <li>
                          <Link
                            href="/servicos"
                            className="block rounded-md px-3 py-2 text-sm"
                            onClick={() => setMobileOpen(false)}
                          >
                            Todos os Serviços
                          </Link>
                        </li>
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/servicos/${service.slug}`}
                              className="block rounded-md px-3 py-2 text-sm text-muted-foreground"
                              onClick={() => setMobileOpen(false)}
                            >
                              {service.shortTitle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-md px-3 py-2.5 text-sm font-medium",
                      pathname === link.href && "text-primary",
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Button asChild className="mt-4 w-full font-semibold">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              Solicite uma Consulta Grátis
            </a>
          </Button>
        </nav>
      )}
    </header>
  )
}
