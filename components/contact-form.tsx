"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services-data"
import { siteConfig } from "@/lib/site-config"

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const text = [
      `Olá! Meu nome é ${name}.`,
      phone && `Telefone: ${phone}`,
      service && `Serviço de interesse: ${service}`,
      message && `Mensagem: ${message}`,
    ]
      .filter(Boolean)
      .join("\n")
    window.open(
      `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    )
  }

  const inputClass =
    "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="text-sm font-medium">
          Nome
        </label>
        <input
          id="contact-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          placeholder="Seu nome completo"
          autoComplete="name"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-phone" className="text-sm font-medium">
          Telefone / WhatsApp
        </label>
        <input
          id="contact-phone"
          required
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass}
          placeholder="(12) 99999-9999"
          autoComplete="tel"
        />
      </div>
      {!compact && (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-service" className="text-sm font-medium">
            Serviço de interesse
          </label>
          <select
            id="contact-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputClass}
          >
            <option value="">Selecione um serviço</option>
            {services.map((s) => (
              <option key={s.slug} value={s.shortTitle}>
                {s.shortTitle}
              </option>
            ))}
            <option value="Outro assunto">Outro assunto</option>
          </select>
        </div>
      )}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium">
          Mensagem
        </label>
        <textarea
          id="contact-message"
          rows={compact ? 3 : 5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
          placeholder="Conte um pouco sobre o que você precisa"
        />
      </div>
      <Button type="submit" size="lg" className="font-semibold">
        Enviar pelo WhatsApp
      </Button>
      <p className="text-xs text-muted-foreground">
        Ao enviar, você será direcionado ao WhatsApp com sua mensagem preenchida.
      </p>
    </form>
  )
}
