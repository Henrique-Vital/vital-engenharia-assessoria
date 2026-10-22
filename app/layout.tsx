import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const _inter = Inter({ subsets: ['latin'] })

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://www.vitalassessoria.com.br')

const siteDescription =
  'Projetos arquitetônicos, regularização de imóveis, assessoria legal, Habite-se e financiamento imobiliário CAIXA para pessoa jurídica em São José dos Campos — SP.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'Vital Engenharia e Assessoria',
  title: {
    default: 'Vital Engenharia e Assessoria | Projetos, Regularização e Financiamento CAIXA',
    template: '%s | Vital Engenharia e Assessoria',
  },
  description: siteDescription,
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Vital Engenharia e Assessoria',
    title: 'Vital Engenharia e Assessoria | Projetos, Regularização e Financiamento CAIXA',
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vital Engenharia e Assessoria | Projetos, Regularização e Financiamento CAIXA',
    description: siteDescription,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#EFB92F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
