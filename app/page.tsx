import { Hero } from "@/components/home/hero"
import { ServicesGrid } from "@/components/home/services-grid"
import { Stats } from "@/components/home/stats"
import { Testimonials } from "@/components/home/testimonials"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Stats />
      <Testimonials />
      <CtaSection />
    </>
  )
}
