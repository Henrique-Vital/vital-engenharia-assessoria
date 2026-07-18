import { PencilRuler, Landmark, Scale, FileCheck2, Building2 } from "lucide-react"
import type { Service } from "@/lib/services-data"

const icons = {
  drafting: PencilRuler,
  landmark: Landmark,
  scale: Scale,
  "file-check": FileCheck2,
  building: Building2,
} as const

export function ServiceIcon({
  icon,
  className = "size-6",
}: {
  icon: Service["icon"]
  className?: string
}) {
  const Icon = icons[icon]
  return <Icon className={className} aria-hidden="true" />
}
