export const siteConfig = {
  name: "Vital Engenharia e Assessoria",
  owner: "Amanda Vital",
  location: "São José dos Campos — SP",
  phone: "(12) 99608-8779",
  phoneRaw: "5512996088779",
  email: "contato@amandavital.com.br",
  instagram: "@a.amandavital",
  instagramUrl: "https://instagram.com/a.amandavital",
}

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(
    message ??
      "Olá! Vim pelo site da Vital Engenharia e gostaria de solicitar uma consulta grátis.",
  )
  return `https://wa.me/${siteConfig.phoneRaw}?text=${text}`
}
