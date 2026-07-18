export type ServiceSection = {
  title: string
  paragraphs?: string[]
  items?: string[]
  steps?: string[]
}

export type Service = {
  slug: string
  title: string
  shortTitle: string
  description: string
  icon: "drafting" | "landmark" | "scale" | "file-check" | "building"
  image: string
  imageAlt: string
  sections: ServiceSection[]
  cta: string
}

export const services: Service[] = [
  {
    slug: "projetos-arquitetonicos",
    title: "Projetos Arquitetônicos",
    shortTitle: "Projetos Arquitetônicos",
    description:
      "Projetos residenciais, comerciais e industriais completos: do levantamento à aprovação na prefeitura.",
    icon: "drafting",
    image: "/images/projeto-residencial.png",
    imageAlt: "Casa residencial moderna projetada pela Vital Engenharia",
    sections: [
      {
        title: "O que desenvolvemos",
        paragraphs: [
          "Desenvolvemos projetos arquitetônicos completos para todos os tipos de empreendimento, sempre com foco em funcionalidade, estética e conformidade legal.",
        ],
        items: [
          "Projetos residenciais: casas, sobrados e condomínios",
          "Projetos comerciais: lojas, escritórios e centros comerciais",
          "Projetos industriais: galpões, fábricas e centros logísticos",
        ],
      },
      {
        title: "Etapas do projeto",
        steps: [
          "Levantamento: análise do terreno, medições e estudo de viabilidade",
          "Anteprojeto: primeiras propostas de layout e volumetria",
          "Projeto executivo: detalhamento técnico completo para execução da obra",
          "Aprovação na prefeitura: protocolo, acompanhamento e emissão do alvará",
        ],
      },
      {
        title: "Por que escolher a Vital Engenharia",
        items: [
          "Acompanhamento integral do processo de aprovação municipal",
          "Projetos compatíveis com as exigências da CAIXA para financiamento",
          "Comunicação clara e prazos definidos desde o início",
        ],
      },
    ],
    cta: "Solicite um orçamento para o seu projeto",
  },
  {
    slug: "regularizacao-imobiliaria",
    title: "Regularização Imobiliária",
    shortTitle: "Regularização Imobiliária",
    description:
      "Regularização de área, desmembramento, unificação e usucapião com acompanhamento completo do processo.",
    icon: "landmark",
    image: "/images/regularizacao.png",
    imageAlt: "Documentos e plantas de regularização imobiliária",
    sections: [
      {
        title: "Tipos de regularização",
        items: [
          "Regularização de área construída: legalização de construções e ampliações não averbadas",
          "Desmembramento: divisão de um lote em duas ou mais unidades independentes",
          "Unificação: junção de lotes contíguos em uma única matrícula",
          "Usucapião: reconhecimento da propriedade pela posse prolongada, nas vias judicial ou extrajudicial",
        ],
      },
      {
        title: "Legislação e documentação",
        paragraphs: [
          "Cada processo de regularização segue legislação específica — código de obras municipal, lei de parcelamento do solo (Lei 6.766/79), Lei de Registros Públicos (Lei 6.015/73) e a Lei da REURB (Lei 13.465/17), entre outras.",
        ],
        items: [
          "Matrícula atualizada do imóvel",
          "IPTU e certidões negativas municipais",
          "Levantamento topográfico e planta do imóvel",
          "ART/RRT do responsável técnico",
          "Documentos pessoais dos proprietários",
        ],
      },
      {
        title: "Fluxo do processo",
        steps: [
          "Análise inicial da documentação e diagnóstico da situação do imóvel",
          "Levantamento técnico em campo (medições e vistoria)",
          "Elaboração de plantas e memoriais conforme exigências do município",
          "Protocolo na prefeitura e acompanhamento das exigências",
          "Averbação na matrícula junto ao Cartório de Registro de Imóveis",
        ],
      },
    ],
    cta: "Regularize seu imóvel com quem entende do processo",
  },
  {
    slug: "assessoria-legal",
    title: "Assessoria Legal",
    shortTitle: "Assessoria Legal",
    description:
      "Consultoria em direito imobiliário, análise de documentação e acompanhamento cartorial completo.",
    icon: "scale",
    image: "/images/regularizacao.png",
    imageAlt: "Análise de documentação imobiliária",
    sections: [
      {
        title: "Consultoria em direito imobiliário",
        paragraphs: [
          "Orientamos proprietários, compradores, construtoras e investidores em todas as questões legais que envolvem imóveis: compra e venda, incorporação, locação, condomínio e financiamento.",
        ],
      },
      {
        title: "Análise de documentação",
        items: [
          "Due diligence imobiliária completa antes da compra",
          "Verificação de matrículas, ônus e gravames",
          "Análise de contratos de compra e venda",
          "Conferência de certidões pessoais e do imóvel",
        ],
      },
      {
        title: "Acompanhamento cartorial e registro",
        items: [
          "Lavratura de escrituras públicas",
          "Registro de imóveis e averbações",
          "Registro de incorporação imobiliária",
          "Instituição de condomínio e convenções",
        ],
      },
    ],
    cta: "Fale com nossa assessoria e compre ou venda com segurança",
  },
  {
    slug: "habite-se-certidoes",
    title: "Habite-se e Certidões",
    shortTitle: "Habite-se e Certidões",
    description:
      "Obtenção de Habite-se, CND, certidões de matrícula e negativas com checklist documental e prazos claros.",
    icon: "file-check",
    image: "/images/projeto-comercial.png",
    imageAlt: "Edifício comercial regularizado com Habite-se",
    sections: [
      {
        title: "O que obtemos para você",
        items: [
          "Habite-se (Auto de Conclusão de Obra): documento que atesta que a construção está apta para uso",
          "CND do INSS: certidão negativa de débitos da obra, obrigatória para averbação",
          "Certidões de matrícula: matrícula atualizada e certidão de ônus reais",
          "Certidões negativas: municipais, estaduais e federais do imóvel e proprietários",
        ],
      },
      {
        title: "Checklist documental",
        items: [
          "Projeto aprovado e alvará de construção",
          "ART/RRT de execução da obra",
          "Comprovantes de recolhimento do INSS da obra (CNO)",
          "Vistoria final do corpo técnico da prefeitura",
          "Matrícula do imóvel e IPTU em dia",
        ],
      },
      {
        title: "Prazos estimados",
        paragraphs: [
          "Os prazos variam conforme o município e a complexidade da obra. Em geral, o Habite-se leva de 30 a 90 dias após o protocolo, e a CND do INSS de 15 a 45 dias. Nossa equipe acompanha cada etapa para evitar exigências e atrasos.",
        ],
      },
    ],
    cta: "Precisa do Habite-se? Deixe a burocracia com a gente",
  },
  {
    slug: "financiamento-caixa-pj",
    title: "Financiamento Imobiliário CAIXA — Pessoa Jurídica",
    shortTitle: "Financiamento CAIXA (PJ)",
    description:
      "Assessoria completa para construtoras e incorporadoras acessarem as linhas de crédito CAIXA: Apoio à Produção, Plano Empresário e mais.",
    icon: "building",
    image: "/images/financiamento-caixa.png",
    imageAlt: "Empreendimento em construção financiado pela CAIXA",
    sections: [
      {
        title: "O que fazemos",
        paragraphs: [
          "A CAIXA é o maior agente de financiamento habitacional do Brasil e oferece linhas exclusivas para construtoras e incorporadoras. A Vital Engenharia e Assessoria acompanha sua empresa em todo o processo: da estruturação da documentação técnica à aprovação e liberação dos recursos.",
        ],
        items: [
          "Apoio à Produção: financiamento de até 100% do custo da obra",
          "Plano Empresário: financiamento de até 85% do custo da obra",
          "Alocação de Recursos: chancela CAIXA para obras com recursos próprios",
          "Selo Casa Azul+: certificação de sustentabilidade com bônus nas taxas",
          "Crédito Especial e Giro CAIXA: capital de giro para sua empresa",
        ],
      },
      {
        title: "Como ajudamos sua construtora",
        steps: [
          "Diagnóstico do empreendimento e escolha da melhor linha de crédito",
          "Preparação do dossiê técnico: projeto, orçamento, cronograma e memorial no padrão CAIXA",
          "Regularização documental: matrícula, alvará, licenças e incorporação",
          "Acompanhamento da análise de viabilidade junto à agência",
          "Suporte nas medições mensais de engenharia e liberação de recursos",
        ],
      },
      {
        title: "Aprenda mais no nosso blog",
        paragraphs: [
          "Publicamos guias completos sobre cada linha de financiamento CAIXA para pessoa jurídica. Acesse nossa Central de Conhecimento e entenda cada detalhe antes de dar o próximo passo.",
        ],
      },
    ],
    cta: "Quer financiar sua obra com a CAIXA? Fale conosco",
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
