export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  tags: string[]
  readingTime: string
  content: ContentBlock[]
  cta: string
}

export const blogCategories = [
  "Financiamento CAIXA",
  "Sustentabilidade",
  "Crédito Empresarial",
  "Gestão de Obras",
  "Estruturação Jurídica",
] as const

export const blogPosts: BlogPost[] = [
  {
    slug: "guia-completo-financiamento-caixa-construcao-civil",
    title: "Guia Completo de Financiamento CAIXA para Construção Civil",
    excerpt:
      "Entenda o papel da CAIXA no financiamento habitacional brasileiro, as diferenças entre crédito PF e PJ e todas as linhas disponíveis para sua construtora.",
    category: "Financiamento CAIXA",
    tags: ["CAIXA", "Construção Civil", "PJ", "Guia"],
    readingTime: "10 min",
    content: [
      { type: "h2", text: "O papel da CAIXA no financiamento habitacional" },
      {
        type: "p",
        text: "A Caixa Econômica Federal é o maior agente de financiamento habitacional do Brasil, responsável por cerca de 70% do crédito imobiliário do país. Por meio de recursos do FGTS, da poupança (SBPE) e de recursos livres, a CAIXA financia desde a casa própria de famílias de baixa renda até grandes empreendimentos de construtoras e incorporadoras.",
      },
      { type: "h2", text: "Diferença entre crédito para PF e PJ" },
      {
        type: "p",
        text: "O crédito para Pessoa Física (PF) é destinado ao comprador final: quem financia um imóvel pronto ou na planta. Já o crédito para Pessoa Jurídica (PJ) é voltado para quem constrói: construtoras, incorporadoras e entidades organizadoras que precisam de capital para viabilizar seus empreendimentos.",
      },
      {
        type: "ul",
        items: [
          "PF: financiamento da compra do imóvel, com prazos de até 35 anos",
          "PJ: financiamento da produção do empreendimento, com liberação por medição de obra",
          "Repasse: durante a obra, as vendas para PF podem ser repassadas à CAIXA, antecipando receita para a construtora",
        ],
      },
      { type: "h2", text: "Linhas de crédito disponíveis para construtoras" },
      {
        type: "ul",
        items: [
          "Apoio à Produção: financia até 100% do custo da obra, com repasse desde o início",
          "Plano Empresário: financia até 85% do custo da obra, com repasse a partir de 80% de execução",
          "Alocação de Recursos: para obras com recursos próprios, com chancela CAIXA para facilitar as vendas",
          "Crédito Especial CAIXA Empresa: capital de giro sem destinação específica",
          "Giro CAIXA Fácil e Cheque Empresa: crédito rotativo e de curto prazo",
          "Minha Casa, Minha Vida: produção habitacional com recursos do FGTS",
        ],
      },
      { type: "h2", text: "Como a Vital Engenharia e Assessoria pode ajudar" },
      {
        type: "p",
        text: "Acessar o crédito CAIXA exige documentação técnica rigorosa: projetos aprovados, orçamento no padrão CAIXA, cronograma físico-financeiro, licenças e regularidade cadastral. A Vital Engenharia e Assessoria domina cada etapa desse processo e acompanha sua empresa da preparação do dossiê até a liberação dos recursos.",
      },
    ],
    cta: "Fale conosco para uma consultoria gratuita sobre financiamento CAIXA",
  },
  {
    slug: "apoio-a-producao-caixa",
    title: "Apoio à Produção CAIXA: financie até 100% da sua obra",
    excerpt:
      "Conheça a linha de crédito exclusiva da CAIXA que financia até 100% do custo da obra, com até 36 meses para construção e repasse das unidades desde o início.",
    category: "Financiamento CAIXA",
    tags: ["Apoio à Produção", "CAIXA", "Construtoras"],
    readingTime: "12 min",
    content: [
      { type: "h2", text: "O que é o Apoio à Produção" },
      {
        type: "p",
        text: "O Apoio à Produção é uma linha de crédito exclusiva da CAIXA criada para acelerar a construção de empreendimentos imobiliários. Os recursos são liberados conforme o cronograma de obras avança, e a construtora pode vender unidades na planta com repasse à CAIXA desde o início da obra.",
      },
      { type: "h2", text: "As duas modalidades" },
      {
        type: "ol",
        items: [
          "SEM Financiamento PJ: a obra é custeada por recursos próprios da construtora somados às vendas para pessoas físicas (repasse PF)",
          "COM Financiamento PJ: a CAIXA financia diretamente a construtora, combinando o crédito PJ com o repasse das unidades vendidas",
        ],
      },
      { type: "h2", text: "Condições da linha" },
      {
        type: "ul",
        items: [
          "Financiamento de até 100% do custo da obra",
          "Até 36 meses de prazo para construção",
          "Até 9 meses de carência para início da obra",
          "Liberação mensal dos recursos após medição da engenharia CAIXA",
          "Recursos 100% sob gestão da CAIXA, garantindo a destinação à obra",
        ],
      },
      { type: "h2", text: "Opções de indexadores" },
      {
        type: "ul",
        items: [
          "Poupança+ (remuneração da poupança + taxa fixa)",
          "TR (Taxa Referencial)",
          "IPCA (índice oficial de inflação)",
          "CDI e CDI + Sobrepreço",
        ],
      },
      { type: "h2", text: "Recursos Livres CAIXA" },
      {
        type: "p",
        text: "Além do funding tradicional (SBPE e FGTS), a CAIXA passou a oferecer os Recursos Livres como nova alternativa: o RLMAP, voltado a empreendimentos de médio e alto padrão, e o RLHP, destinado à habitação popular.",
      },
      { type: "h2", text: "Requisitos para contratar" },
      {
        type: "ul",
        items: [
          "Situação cadastral regular da empresa",
          "Qualificação no SIAC/PBQP-H (Programa Brasileiro de Qualidade e Produtividade do Habitat)",
          "Incorporação registrada no Registro de Imóveis",
          "Projeto aprovado e alvará de construção municipal",
          "Licenças ambientais aplicáveis",
          "Declarações das concessionárias de água, esgoto e energia",
        ],
      },
      { type: "h2", text: "Documentação necessária" },
      {
        type: "ul",
        items: [
          "Matrícula atualizada do imóvel/terreno",
          "Projeto arquitetônico aprovado",
          "Memorial descritivo no modelo CAIXA",
          "ART/RRT dos responsáveis técnicos",
          "Orçamento detalhado da obra",
          "Cronograma físico-financeiro",
          "Licenças ambientais",
        ],
      },
      { type: "h2", text: "Passo a passo do processo" },
      {
        type: "ol",
        items: [
          "Apresentação do projeto na agência CAIXA",
          "Análise de viabilidade econômico-financeira, negocial e jurídica",
          "Assinatura do contrato (cumprimento de exigências em até 6 meses)",
          "Registro no RI e entrega da documentação complementar",
          "Liberação mensal dos recursos por medição de obra",
          "Repasse das unidades vendidas para PF durante toda a obra",
        ],
      },
      { type: "h2", text: "Vantagens para a construtora" },
      {
        type: "ul",
        items: [
          "Fluxo de caixa previsível durante toda a construção",
          "Liberação de recursos por etapa concluída",
          "Possibilidade de repasse das vendas desde o início da obra",
        ],
      },
    ],
    cta: "Quer saber se sua obra se enquadra no Apoio à Produção? Fale conosco",
  },
  {
    slug: "plano-empresario-caixa",
    title: "Plano Empresário CAIXA: financiamento para o seu empreendimento",
    excerpt:
      "Entenda como funciona o Plano Empresário, a linha que financia até 85% do custo da obra, e as diferenças em relação ao Apoio à Produção.",
    category: "Financiamento CAIXA",
    tags: ["Plano Empresário", "CAIXA", "Incorporadoras"],
    readingTime: "9 min",
    content: [
      { type: "h2", text: "O que é o Plano Empresário" },
      {
        type: "p",
        text: "O Plano Empresário é a linha de financiamento da CAIXA destinada à construção de empreendimentos imobiliários, ideal para construtoras que precisam de crédito complementar aos recursos próprios e às vendas.",
      },
      { type: "h2", text: "Diferenças para o Apoio à Produção" },
      {
        type: "ul",
        items: [
          "Financia até 85% do custo da obra (contra até 100% no Apoio à Produção)",
          "O repasse das unidades para PF ocorre a partir de 80% da obra executada (no Apoio, o repasse é possível desde o início)",
        ],
      },
      { type: "h2", text: "Condições da linha" },
      {
        type: "ul",
        items: [
          "Até 36 meses de prazo para construção",
          "Até 9 meses de carência para início da obra",
          "6 a 12 meses de carência pós-obra",
          "18 a 24 meses de prazo de amortização",
        ],
      },
      { type: "h2", text: "Indexadores e funding" },
      {
        type: "p",
        text: "Assim como no Apoio à Produção, estão disponíveis os indexadores Poupança+, TR, IPCA, CDI e CDI + Sobrepreço, além da alternativa de Recursos Livres CAIXA (RLMAP e RLHP).",
      },
      { type: "h2", text: "Documentação e requisitos" },
      {
        type: "p",
        text: "A base documental é a mesma do Apoio à Produção: matrícula atualizada, projeto aprovado com alvará, memorial no padrão CAIXA, ART/RRT, orçamento detalhado, cronograma físico-financeiro, licenças ambientais, qualificação SIAC/PBQP-H e incorporação registrada.",
      },
      { type: "h2", text: "Como funciona o processo" },
      {
        type: "ol",
        items: [
          "Apresentação do empreendimento à CAIXA",
          "Análise de viabilidade técnica, jurídica e econômico-financeira",
          "Assinatura do contrato de financiamento",
          "Liberação dos recursos por medição mensal da engenharia",
        ],
      },
      { type: "h2", text: "Vantagens" },
      {
        type: "ul",
        items: [
          "Ideal para quem precisa de financiamento complementar aos recursos próprios",
          "Juros incidem apenas sobre o valor efetivamente liberado",
          "Carência pós-obra para organizar as vendas remanescentes",
        ],
      },
    ],
    cta: "Descubra se o Plano Empresário é a melhor linha para sua obra",
  },
  {
    slug: "alocacao-de-recursos-caixa",
    title: "Alocação de Recursos CAIXA: a chancela que acelera suas vendas",
    excerpt:
      "Vai construir com recursos próprios? Conheça a Alocação de Recursos, que traz a aprovação simplificada da CAIXA para os compradores do seu empreendimento.",
    category: "Financiamento CAIXA",
    tags: ["Alocação de Recursos", "CAIXA", "Vendas"],
    readingTime: "6 min",
    content: [
      { type: "h2", text: "O que é a Alocação de Recursos" },
      {
        type: "p",
        text: "A Alocação de Recursos é a linha da CAIXA voltada a empreendedores que planejam construir com recursos próprios ou de terceiros, sem financiamento direto à construtora, mas que desejam a chancela CAIXA para facilitar a venda das unidades.",
      },
      { type: "h2", text: "Para quem é indicada" },
      {
        type: "p",
        text: "É a opção ideal para construtoras capitalizadas que não precisam de crédito para a obra, mas querem oferecer aos compradores a facilidade do financiamento habitacional CAIXA com análise simplificada.",
      },
      { type: "h2", text: "Como funciona" },
      {
        type: "p",
        text: "O empreendimento é analisado e aprovado pela CAIXA uma única vez. A partir daí, os compradores pessoa física que financiarem unidades contam com aprovação simplificada, pois a documentação do empreendimento já está validada.",
      },
      { type: "h2", text: "Vantagens" },
      {
        type: "ul",
        items: [
          "Padronização documental do empreendimento",
          "Pasta única por empreendimento, evitando retrabalho a cada venda",
          "Agilidade na aprovação do financiamento dos compradores",
          "Credibilidade da marca CAIXA como argumento de vendas",
        ],
      },
    ],
    cta: "Quer a chancela CAIXA no seu empreendimento? Fale conosco",
  },
  {
    slug: "selo-casa-azul-caixa",
    title: "Selo Casa Azul+ CAIXA: sustentabilidade que reduz custos",
    excerpt:
      "Conheça a certificação de sustentabilidade da CAIXA, seus níveis, critérios ASG e os descontos de até 1% nas taxas de juros para os compradores.",
    category: "Sustentabilidade",
    tags: ["Selo Casa Azul", "ESG", "Sustentabilidade", "CAIXA"],
    readingTime: "8 min",
    content: [
      { type: "h2", text: "O que é o Selo Casa Azul+" },
      {
        type: "p",
        text: "Criado em 2009, o Selo Casa Azul foi o primeiro sistema brasileiro de certificação de sustentabilidade para empreendimentos habitacionais. Hoje, na versão Casa Azul+, avalia critérios ambientais, sociais e de governança (ASG/ESG) dos projetos financiados pela CAIXA.",
      },
      { type: "h2", text: "Níveis de certificação (2025+)" },
      {
        type: "ul",
        items: [
          "Cristal/Bronze: a partir de 50 pontos",
          "Topázio/Prata: a partir de 60 pontos",
          "Safira/Ouro: a partir de 80 pontos",
          "Diamante: 100 pontos",
        ],
      },
      { type: "h2", text: "Obrigatoriedade" },
      {
        type: "p",
        text: "Desde novembro de 2025, o Selo é obrigatório para imóveis acima de R$ 2,25 milhões financiados pelo SFI, com expansão prevista para todas as operações de crédito imobiliário da CAIXA.",
      },
      { type: "h2", text: "Benefícios para construtoras" },
      {
        type: "ul",
        items: [
          "Melhores condições de contratação no Apoio à Produção e no Plano Empresário",
          "Desconto de 0,25% a 1% nas taxas de juros para os compradores PF",
          "Bônus nas taxas conforme o nível do Selo obtido",
          "Diferencial competitivo e argumento de marketing do empreendimento",
        ],
      },
      { type: "h2", text: "Categorias avaliadas" },
      {
        type: "ul",
        items: [
          "Eficiência energética",
          "Gestão hídrica",
          "Inovação",
          "Capacitação profissional",
          "Inclusão social",
        ],
      },
      { type: "h2", text: "Como obter a certificação" },
      {
        type: "ol",
        items: [
          "Apresentar a Proposta de Contratação Institucional (PCI) optante pelo Selo",
          "Entregar a documentação técnica que comprova o atendimento aos critérios",
          "Passar pela análise durante a fase de viabilidade do empreendimento",
          "Obter a certificação Projetar (na contratação) e a certificação Habitar (após a execução da obra)",
        ],
      },
    ],
    cta: "Saiba como o Selo Casa Azul valoriza seu empreendimento e reduz custos",
  },
  {
    slug: "credito-especial-caixa-empresa",
    title: "Crédito Especial CAIXA Empresa: capital de giro para sua construtora",
    excerpt:
      "Linha de crédito sem destinação específica com até 60 meses para pagar. Saiba como usar para fluxo de caixa, estoques, salários e fornecedores.",
    category: "Crédito Empresarial",
    tags: ["Capital de Giro", "CAIXA", "Crédito PJ"],
    readingTime: "5 min",
    content: [
      { type: "h2", text: "O que é o Crédito Especial CAIXA Empresa" },
      {
        type: "p",
        text: "É uma linha de crédito sem destinação específica, pensada para dar fôlego ao capital de giro das empresas. A construtora recebe o valor e decide livremente como aplicá-lo na operação.",
      },
      { type: "h2", text: "Principais usos" },
      {
        type: "ul",
        items: [
          "Equilíbrio do fluxo de caixa entre medições e recebimentos",
          "Reposição de estoques de materiais de construção",
          "Pagamento de salários e 13º da equipe",
          "Quitação de fornecedores com desconto à vista",
        ],
      },
      { type: "h2", text: "Condições" },
      {
        type: "ul",
        items: [
          "Prazo de até 60 meses para pagamento",
          "Disponível para empresas de todos os portes",
          "Taxas e limites definidos conforme o relacionamento e o perfil de crédito da empresa",
        ],
      },
    ],
    cta: "Precisa de capital de giro? Fale com nossa assessoria",
  },
  {
    slug: "cheque-empresa-giro-caixa-facil",
    title: "Cheque Empresa CAIXA e Giro CAIXA Fácil: crédito rápido para emergências",
    excerpt:
      "Conheça as linhas de crédito rotativo da CAIXA: o Cheque Empresa para emergências e o Giro CAIXA Fácil com até R$ 2 milhões contratáveis online.",
    category: "Crédito Empresarial",
    tags: ["Crédito Rotativo", "CAIXA", "Giro"],
    readingTime: "5 min",
    content: [
      { type: "h2", text: "Cheque Empresa CAIXA" },
      {
        type: "p",
        text: "O Cheque Empresa é um crédito rotativo vinculado à conta corrente da empresa, funcionando como um limite de emergência. Os juros incidem apenas sobre o valor e o período efetivamente utilizados — ideal para cobrir imprevistos de curtíssimo prazo.",
      },
      { type: "h2", text: "Giro CAIXA Fácil" },
      {
        type: "ul",
        items: [
          "Crédito de até R$ 2 milhões",
          "Disponível para empresas com faturamento de até R$ 50 milhões/ano",
          "Contratação 100% online, pelos canais digitais da CAIXA",
          "Prazos e taxas conforme o perfil da empresa",
        ],
      },
      { type: "h2", text: "Quando usar cada um" },
      {
        type: "p",
        text: "Use o Cheque Empresa para emergências pontuais de caixa e o Giro CAIXA Fácil para necessidades planejadas de capital de giro com prazos maiores. Em ambos os casos, avalie o custo efetivo total antes de contratar — nossa assessoria ajuda nessa análise.",
      },
    ],
    cta: "Fale conosco antes de contratar e escolha a melhor linha",
  },
  {
    slug: "caixa-fia-construcao-civil",
    title: "CAIXA FIA Construção Civil: invista no setor imobiliário",
    excerpt:
      "Conheça o fundo de investimento em ações da CAIXA focado em empresas do setor de construção civil.",
    category: "Crédito Empresarial",
    tags: ["Investimentos", "CAIXA", "FIA"],
    readingTime: "4 min",
    content: [
      { type: "h2", text: "O que é o CAIXA FIA Construção Civil" },
      {
        type: "p",
        text: "O CAIXA FIA Construção Civil é um fundo de investimento em ações que aplica em empresas do setor de construção civil listadas na bolsa: construtoras, incorporadoras e companhias da cadeia produtiva do setor imobiliário.",
      },
      { type: "h2", text: "Para quem é indicado" },
      {
        type: "p",
        text: "É voltado a investidores que desejam exposição ao setor imobiliário sem comprar imóveis diretamente, aceitando a volatilidade do mercado de ações em troca do potencial de valorização das empresas do setor.",
      },
      { type: "h2", text: "Pontos de atenção" },
      {
        type: "ul",
        items: [
          "Fundo de ações: rentabilidade sujeita à oscilação da bolsa",
          "Indicado para perfil de investidor arrojado e horizonte de longo prazo",
          "Consulte taxas de administração e regulamento antes de investir",
        ],
      },
    ],
    cta: "Quer entender o mercado imobiliário a fundo? Acompanhe nosso blog",
  },
  {
    slug: "portal-das-construtoras-caixa",
    title: "Portal das Construtoras CAIXA: gestão completa do seu financiamento",
    excerpt:
      "Saiba o que é o Portal das Construtoras, como acessar e como usar os relatórios de evolução da dívida e da obra a seu favor.",
    category: "Gestão de Obras",
    tags: ["Portal das Construtoras", "CAIXA", "Gestão"],
    readingTime: "6 min",
    content: [
      { type: "h2", text: "O que é o Portal das Construtoras" },
      {
        type: "p",
        text: "O Portal das Construtoras é o ambiente digital da CAIXA onde as empresas com financiamento ativo acompanham seus empreendimentos, da contratação até a liquidação do contrato.",
      },
      { type: "h2", text: "Como acessar" },
      {
        type: "p",
        text: "O acesso é feito pelo site da CAIXA com o certificado digital da empresa ou credenciais fornecidas pelo gerente de relacionamento. Cada empreendimento contratado fica disponível no painel da construtora.",
      },
      { type: "h2", text: "Funcionalidades" },
      {
        type: "ul",
        items: [
          "Relatórios de evolução da dívida do financiamento",
          "Acompanhamento da evolução física e financeira da obra",
          "Consulta às movimentações da conta vinculada",
          "Histórico de medições e liberações de recursos",
          "Acompanhamento do empreendimento da obra até a liquidação",
        ],
      },
      { type: "h2", text: "Dica da Vital Engenharia" },
      {
        type: "p",
        text: "A conciliação entre os relatórios da CAIXA e os controles internos da construtora é essencial para evitar divergências nas medições e atrasos nas liberações. A Vital Engenharia e Assessoria apoia sua equipe na gestão e conciliação desses relatórios mês a mês.",
      },
    ],
    cta: "Precisa de apoio na gestão do seu contrato CAIXA? Fale conosco",
  },
  {
    slug: "pre-contratacao-caixa-passo-a-passo",
    title: "Pré-Contratação CAIXA: passo a passo completo para aprovar seu projeto",
    excerpt:
      "Checklist completo de documentos e dicas práticas para acelerar a aprovação do seu empreendimento no ambiente digital da CAIXA (Portal Habitação / SIOPI).",
    category: "Financiamento CAIXA",
    tags: ["Pré-Contratação", "SIOPI", "Checklist", "CAIXA"],
    readingTime: "11 min",
    content: [
      { type: "h2", text: "O que é o ambiente digital de pré-contratação" },
      {
        type: "p",
        text: "A pré-contratação é feita pelo Portal Habitação / SIOPI, o ambiente digital onde construtoras, incorporadoras e entidades organizadoras enviam a documentação do empreendimento para análise da CAIXA antes da assinatura do contrato.",
      },
      { type: "h2", text: "Quem pode usar" },
      {
        type: "ul",
        items: [
          "Construtoras",
          "Incorporadoras",
          "Entidades organizadoras (associações e cooperativas habitacionais)",
        ],
      },
      { type: "h2", text: "Checklist de documentos — Empresa/EO" },
      {
        type: "ul",
        items: [
          "Cadastro regular junto à CAIXA e à Receita Federal",
          "Qualificação SIAC/PBQP-H vigente",
          "Dados societários atualizados (contrato social, procurações)",
        ],
      },
      { type: "h2", text: "Checklist — Imóvel/terreno" },
      {
        type: "ul",
        items: ["Matrícula atualizada do terreno", "IPTU em dia"],
      },
      { type: "h2", text: "Checklist — Projeto técnico" },
      {
        type: "ul",
        items: [
          "Projeto de arquitetura aprovado pela prefeitura",
          "Alvará de construção",
          "Projetos complementares (estrutural, elétrico, hidráulico)",
          "Memorial descritivo no modelo CAIXA",
        ],
      },
      { type: "h2", text: "Checklist — Responsáveis técnicos" },
      {
        type: "ul",
        items: ["ART/RRT ativos dos responsáveis por projeto e execução"],
      },
      { type: "h2", text: "Checklist — Execução" },
      {
        type: "ul",
        items: [
          "Orçamento detalhado da obra",
          "Cronograma físico-financeiro",
          "Licenças ambientais aplicáveis",
          "Declaração das concessionárias (água, esgoto, energia)",
        ],
      },
      { type: "h2", text: "Dicas para evitar atrasos na aprovação" },
      {
        type: "ul",
        items: [
          "Atualize a matrícula do terreno antes do protocolo — é o item que mais gera exigências",
          "Use os modelos oficiais da CAIXA para memorial e orçamento",
          "Garanta que ART/RRT estejam pagas e ativas no conselho",
          "Responda às exigências da análise em bloco, não uma a uma",
        ],
      },
      { type: "h2", text: "Como a Vital Engenharia acelera esse processo" },
      {
        type: "p",
        text: "Montamos o dossiê completo no padrão exigido pela CAIXA, revisamos cada documento antes do envio e acompanhamos a análise até a assinatura do contrato — reduzindo drasticamente o tempo de aprovação e o número de exigências.",
      },
    ],
    cta: "Quer aprovar seu projeto mais rápido? Fale com nossa equipe",
  },
  {
    slug: "financiamento-caixa-pj-perguntas-frequentes",
    title: "Financiamento CAIXA para Pessoa Jurídica: perguntas frequentes",
    excerpt:
      "Quem pode solicitar? Qual o limite? Quanto tempo leva? Respondemos as dúvidas mais comuns sobre o crédito CAIXA para construtoras.",
    category: "Financiamento CAIXA",
    tags: ["FAQ", "CAIXA", "PJ"],
    readingTime: "7 min",
    content: [
      { type: "h2", text: "Quem pode solicitar financiamento PJ na CAIXA?" },
      {
        type: "p",
        text: "Construtoras, incorporadoras e entidades organizadoras com situação cadastral regular e qualificação SIAC/PBQP-H.",
      },
      { type: "h2", text: "Qual o limite de financiamento?" },
      {
        type: "p",
        text: "Até 100% do custo da obra no Apoio à Produção e até 85% no Plano Empresário. O valor final depende da análise de viabilidade do empreendimento.",
      },
      { type: "h2", text: "Quanto tempo leva para aprovar?" },
      {
        type: "p",
        text: "O prazo varia conforme a qualidade da documentação apresentada. Dossiês completos e no padrão CAIXA são aprovados significativamente mais rápido — é exatamente aí que nossa assessoria faz diferença.",
      },
      { type: "h2", text: "Preciso já ter o terreno?" },
      {
        type: "p",
        text: "Sim. É necessário apresentar a matrícula atualizada do terreno em nome da empresa (ou da SPE) para iniciar a análise.",
      },
      { type: "h2", text: "Posso financiar mais de um empreendimento?" },
      {
        type: "p",
        text: "Sim. Cada empreendimento passa por análise própria, e a capacidade de endividamento da empresa é avaliada no conjunto das operações.",
      },
      { type: "h2", text: "O Selo Casa Azul é obrigatório?" },
      {
        type: "p",
        text: "Sim para imóveis acima de R$ 2,25 milhões (SFI) desde novembro de 2025, com expansão prevista para todas as operações. Mesmo quando facultativo, o Selo garante bônus nas taxas de juros.",
      },
      { type: "h2", text: "Como a Vital Engenharia pode me ajudar?" },
      {
        type: "p",
        text: "Cuidamos de todo o processo: escolha da linha ideal, preparação do dossiê técnico e documental, regularização do terreno e do projeto, acompanhamento da análise e suporte nas medições mensais após a contratação.",
      },
    ],
    cta: "Ainda tem dúvidas? Fale conosco pelo WhatsApp",
  },
  {
    slug: "minha-casa-minha-vida-caixa",
    title: "Minha Casa, Minha Vida: como construtoras podem participar",
    excerpt:
      "Entenda o papel da CAIXA no MCMV, as faixas de renda atendidas e o que sua construtora precisa para produzir habitação com recursos do FGTS.",
    category: "Financiamento CAIXA",
    tags: ["MCMV", "FGTS", "Habitação Popular"],
    readingTime: "8 min",
    content: [
      { type: "h2", text: "O programa e o papel da CAIXA" },
      {
        type: "p",
        text: "O Minha Casa, Minha Vida (MCMV) é o principal programa habitacional do Brasil, e a CAIXA é seu maior agente operador. O programa subsidia a compra da casa própria para famílias de baixa e média renda e financia a produção de empreendimentos por construtoras.",
      },
      { type: "h2", text: "Modalidade para construtoras" },
      {
        type: "p",
        text: "A principal porta de entrada para construtoras é o Apoio à Produção com recursos do FGTS: a CAIXA financia a obra e as unidades são vendidas a famílias enquadradas nas faixas do programa, com subsídios e taxas reduzidas.",
      },
      { type: "h2", text: "Faixas de renda atendidas" },
      {
        type: "ul",
        items: [
          "Faixa 1: famílias de menor renda, com maiores subsídios",
          "Faixa 2: renda intermediária, com subsídio parcial e taxas reduzidas",
          "Faixa 3: renda superior dentro do programa, com taxas abaixo do mercado",
        ],
      },
      { type: "h2", text: "Como participar" },
      {
        type: "ol",
        items: [
          "Enquadrar o projeto nos limites de valor de venda da região",
          "Atender às especificações técnicas mínimas do programa",
          "Apresentar o empreendimento à CAIXA via pré-contratação",
          "Contratar o Apoio à Produção com recursos FGTS",
        ],
      },
      { type: "h2", text: "Exigências adicionais do programa" },
      {
        type: "ul",
        items: [
          "Especificações mínimas de unidade (área, acabamento, acessibilidade)",
          "Limites de preço de venda por faixa e por município",
          "Infraestrutura completa do empreendimento",
          "Trabalho técnico social em alguns casos",
        ],
      },
    ],
    cta: "Quer produzir para o MCMV? Fale com nossa consultoria especializada",
  },
  {
    slug: "sbpe-fgts-recursos-livres-indexadores",
    title: "SBPE vs FGTS vs Recursos Livres: guia de indexadores CAIXA",
    excerpt:
      "Poupança+, TR, IPCA, CDI: entenda cada fonte de recursos e cada indexador para escolher a melhor estrutura para o seu empreendimento.",
    category: "Financiamento CAIXA",
    tags: ["Indexadores", "SBPE", "FGTS", "Funding"],
    readingTime: "9 min",
    content: [
      { type: "h2", text: "As três fontes de recursos" },
      {
        type: "ul",
        items: [
          "SBPE: recursos da poupança, destinados a imóveis de médio e alto padrão, com taxas de mercado",
          "FGTS: recursos do Fundo de Garantia, voltados à habitação popular (MCMV), com as menores taxas",
          "Recursos Livres: captação própria da CAIXA (RLMAP para médio/alto padrão e RLHP para habitação popular), nova alternativa de funding com condições flexíveis",
        ],
      },
      { type: "h2", text: "Entendendo cada indexador" },
      {
        type: "ul",
        items: [
          "Poupança+: taxa fixa somada à remuneração da poupança — acompanha a Selic com teto, boa previsibilidade",
          "TR: Taxa Referencial — historicamente baixa, é o indexador mais tradicional e previsível",
          "IPCA: índice oficial de inflação — parcelas menores no início, mas com risco em cenários de inflação alta",
          "CDI: taxa interbancária — atrativa em ciclos de queda de juros, arriscada em ciclos de alta",
          "CDI + Sobrepreço: variação do CDI somada a um spread fixo negociado",
        ],
      },
      { type: "h2", text: "Qual escolher para cada perfil de empreendimento" },
      {
        type: "ul",
        items: [
          "Habitação popular / MCMV: FGTS ou RLHP, pelas menores taxas",
          "Médio padrão com vendas rápidas: Poupança+ ou TR, pela previsibilidade",
          "Alto padrão com margem elevada: CDI pode compensar em ciclo de queda de juros",
          "Obras longas: evite indexadores voláteis — priorize TR ou Poupança+",
        ],
      },
      { type: "h2", text: "Tendências 2025/2026" },
      {
        type: "p",
        text: "Com a expansão dos Recursos Livres CAIXA e a perspectiva de flexibilização da política monetária, a tendência é de maior competição entre indexadores. A escolha certa depende do fluxo de vendas projetado e do apetite de risco da construtora — uma análise que fazemos caso a caso na Vital Engenharia e Assessoria.",
      },
    ],
    cta: "Precisa de ajuda para escolher o indexador ideal? Fale conosco",
  },
  {
    slug: "spe-sociedade-proposito-especifico-caixa",
    title: "SPE para Financiamento CAIXA: a estrutura mais segura para sua obra",
    excerpt:
      "Entenda o que é uma Sociedade de Propósito Específico, as garantias exigidas pela CAIXA e como estruturar sua SPE corretamente.",
    category: "Estruturação Jurídica",
    tags: ["SPE", "Garantias", "Estruturação", "CAIXA"],
    readingTime: "8 min",
    content: [
      { type: "h2", text: "O que é uma SPE" },
      {
        type: "p",
        text: "A Sociedade de Propósito Específico (SPE) é uma empresa criada exclusivamente para um empreendimento. Ela isola o patrimônio, as receitas e as obrigações da obra, protegendo tanto os sócios quanto os compradores e o banco financiador.",
      },
      { type: "h2", text: "Por que é a estrutura mais segura" },
      {
        type: "ul",
        items: [
          "Segregação patrimonial: problemas de outras obras não contaminam o empreendimento",
          "Transparência contábil: receitas e despesas exclusivas da obra",
          "Facilita a análise de crédito da CAIXA e a auditoria do contrato",
          "Compatível com o regime de patrimônio de afetação da incorporação",
        ],
      },
      { type: "h2", text: "Acordo de sócios/acionistas" },
      {
        type: "p",
        text: "Quando a SPE reúne mais de um investidor, o acordo de sócios define regras de governança, aportes, distribuição de resultados e saída — documento essencial que a CAIXA analisa na fase jurídica.",
      },
      { type: "h2", text: "Garantias exigidas pela CAIXA" },
      {
        type: "ul",
        items: [
          "Alienação fiduciária do terreno do empreendimento",
          "Cessão fiduciária dos recebíveis das vendas",
          "Fiança dos sócios da SPE",
          "Conta vinculada sob controle da CAIXA, por onde transitam todos os recursos",
        ],
      },
      { type: "h2", text: "Como a Vital Engenharia assessora" },
      {
        type: "p",
        text: "Apoiamos a estruturação da SPE do início ao fim: constituição da sociedade, registro da incorporação, formalização das garantias e adequação de toda a documentação ao padrão exigido pela análise jurídica da CAIXA.",
      },
    ],
    cta: "Vai estruturar uma SPE? Conte com nossa assessoria",
  },
  {
    slug: "engenharia-medicao-obra-liberacao-recursos",
    title: "Engenharia e Medição de Obra: como funciona a liberação de recursos",
    excerpt:
      "RDO, fotos datadas, notas fiscais e cronograma físico-financeiro: saiba como se organizar para receber as liberações da CAIXA sem atrasos.",
    category: "Gestão de Obras",
    tags: ["Medição", "Cronograma", "Engenharia", "CAIXA"],
    readingTime: "7 min",
    content: [
      { type: "h2", text: "O papel da medição pela engenharia" },
      {
        type: "p",
        text: "Nos financiamentos CAIXA, os recursos são liberados mensalmente conforme o avanço físico da obra, atestado pela engenharia da CAIXA. A medição compara o que foi executado com o cronograma físico-financeiro contratado — e só o que está comprovadamente pronto é liberado.",
      },
      { type: "h2", text: "Documentos que sustentam a medição" },
      {
        type: "ul",
        items: [
          "RDO (Relatório Diário de Obra) preenchido diariamente",
          "Fotos datadas de cada frente de serviço",
          "Notas fiscais de materiais e serviços",
          "Relatórios de conclusão de etapas",
        ],
      },
      { type: "h2", text: "O cronograma físico-financeiro" },
      {
        type: "p",
        text: "O cronograma físico-financeiro é o coração do contrato: define quanto de recurso corresponde a cada etapa da obra. Um cronograma realista, com folgas adequadas, evita glosas nas medições e pressão desnecessária sobre o caixa.",
      },
      { type: "h2", text: "Consequências do descumprimento" },
      {
        type: "ul",
        items: [
          "Glosa (redução) do valor liberado na medição",
          "Necessidade de reprogramação formal do cronograma",
          "Em atrasos graves, suspensão das liberações e vencimento antecipado do contrato",
        ],
      },
      { type: "h2", text: "Dicas de organização documental" },
      {
        type: "ul",
        items: [
          "Padronize o registro fotográfico: mesmo ângulo, com data visível",
          "Arquive notas fiscais por etapa do cronograma, não por data",
          "Faça uma pré-medição interna antes da visita da engenharia CAIXA",
          "Mantenha o RDO assinado pelo responsável técnico todos os dias",
        ],
      },
    ],
    cta: "Quer medições sem glosa? Conte com nosso suporte técnico",
  },
]

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}
