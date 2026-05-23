export interface Servico {
  slug: string;
  titulo: string;
  resumo: string;
  descricaoCurta: string;
  icon: string;
  itens: string[];
  paraQuem: string;
}

const ICONS = {
  user: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="8" r="4"/><path d="M4 22c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>',
  globe: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2c2.5 3 3.9 6.4 4 10-.1 3.6-1.5 7-4 10-2.5-3-3.9-6.4-4-10 .1-3.6 1.5-7 4-10z"/></svg>',
  ledger: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 6h18M3 12h18M3 18h12"/></svg>',
  shield: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z"/></svg>',
  users: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  home: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 12l9-9 9 9M5 10v10h14V10"/></svg>',
};

export const servicos: Servico[] = [
  {
    slug: "pessoa-fisica",
    titulo: "Pessoa Física",
    resumo: "IRPF, GCAP, Carnê-leão e declarações para clientes de alta renda.",
    descricaoCurta: "Declaração de Imposto de Renda com tratamento técnico apurado para quem tem ativos complexos, herança, investimentos no exterior ou patrimônio relevante.",
    icon: ICONS.user,
    itens: [
      "Declaração Anual de Imposto de Renda Pessoa Física (DAA)",
      "GCAP — apuração de ganho de capital em vendas de bens e direitos",
      "Carnê-leão — apuração mensal de rendimentos do exterior e de pessoa física",
      "Declaração de Saída Definitiva do País",
      "Declarações de doações para apuração do ITCMD",
      "Retificadoras e malha fina",
      "Planejamento sucessório do ponto de vista tributário",
    ],
    paraQuem: "Atuamos desde declarações mais simples até casos de pessoas físicas com patrimônios relevantes — investidores com ativos no Brasil e no exterior, herdeiros, sócios de empresas, expatriados e clientes com estruturas offshore.",
  },
  {
    slug: "offshore",
    titulo: "Offshore & Exterior",
    resumo: "Empresas offshore, DCBE, Lei 14.754, tributação internacional.",
    descricaoCurta: "Especialistas em IRPF de brasileiros com investimentos no exterior e estruturas offshore. Suporte completo desde a constituição até as obrigações acessórias.",
    icon: ICONS.globe,
    itens: [
      "Apuração de tributos sob a Lei 14.754 (offshores e fundos exclusivos)",
      "DCBE — Declaração de Capitais Brasileiros no Exterior (Banco Central)",
      "Contabilidade de offshores em BVI, Delaware, Cayman e outras jurisdições",
      "Estruturação fiscal de investimentos internacionais",
      "Apoio junto ao agente fiduciário para constituição, manutenção e compliance da offshore",
    ],
    paraQuem: "Investidores com ativos no exterior, empresários com operações internacionais, famílias com estruturas patrimoniais offshore.",
  },
  {
    slug: "contabilidade",
    titulo: "Contabilidade & Escrituração",
    resumo: "Para micro, pequenas e grandes empresas. BR GAAP, IFRS e US GAAP.",
    descricaoCurta: "Contabilidade completa para empresas de todos os portes — de micro e pequenas em Simples Nacional ou Lucro Presumido até operações que exigem relatórios em padrão internacional e suporte a auditoria.",
    icon: ICONS.ledger,
    itens: [
      "Contabilidade para micro e pequenas empresas (Simples Nacional, Lucro Presumido)",
      "Escrituração contábil mensal em BR GAAP, IFRS e US GAAP",
      "Elaboração de Balanço Patrimonial, DRE, DFC e DMPL",
      "Conciliações bancárias e contábeis",
      "Lançamentos fiscais e ajustes",
      "Constituição e manutenção de empresas",
      "Demonstrações para auditoria externa",
    ],
    paraQuem: "Atendemos de estruturas simples — micro e pequenas empresas em Simples Nacional ou Lucro Presumido — até operações mais complexas, com relatórios em padrão internacional e suporte a auditoria externa.",
  },
  {
    slug: "fiscal",
    titulo: "Fiscal & Tributário",
    resumo: "Planejamento, apuração, obrigações acessórias e recuperação de créditos.",
    descricaoCurta: "Apuração precisa de tributos federais, estaduais e municipais, com planejamento tributário estratégico para reduzir a carga fiscal dentro da lei.",
    icon: ICONS.shield,
    itens: [
      "Planejamento tributário estratégico",
      "Apuração de tributos federais, estaduais e municipais",
      "Obrigações acessórias: ECD, ECF, EFD-Contribuições, EFD-Reinf, DCTFWeb",
      "Recuperação de créditos tributários",
      "Análise de regime tributário (Simples, Lucro Presumido, Lucro Real)",
      "Consultoria em operações específicas",
    ],
    paraQuem: "Empresas que querem otimizar a carga tributária e ter segurança no cumprimento das obrigações fiscais.",
  },
  {
    slug: "departamento-pessoal",
    titulo: "Departamento Pessoal",
    resumo: "Folha, eSocial, admissões, rescisões, encargos.",
    descricaoCurta: "Gestão completa do departamento pessoal com mais de 27 anos de experiência da sócia Ana Leite, atendendo empresas de diversos setores e regimes.",
    icon: ICONS.users,
    itens: [
      "Processamento mensal de folha de pagamento",
      "Gestão de encargos trabalhistas e previdenciários",
      "Admissões, rescisões e movimentações",
      "eSocial completo",
      "Pró-labore e distribuição de lucros",
      "Atendimento a fiscalizações trabalhistas",
    ],
    paraQuem: "Empresas com funcionários CLT que precisam de gestão técnica e atualizada do departamento pessoal.",
  },
  {
    slug: "holding-patrimonial",
    titulo: "Holding Patrimonial",
    resumo: "Estruturação, planejamento sucessório, manutenção contábil.",
    descricaoCurta: "Estruturação completa de holdings patrimoniais com análise prévia de viabilidade, planejamento tributário e manutenção contábil contínua.",
    icon: ICONS.home,
    itens: [
      "Análise de viabilidade e retorno do investimento",
      "Planejamento tributário e sucessório",
      "Constituição da holding (com suporte jurídico)",
      "Manutenção contábil e fiscal",
      "Avaliação de imóveis e ativos",
      "Distribuição de lucros e gestão patrimonial",
    ],
    paraQuem: "Famílias com patrimônio relevante que buscam organização sucessória, proteção patrimonial e eficiência tributária.",
  },
];

export const getServico = (slug: string) => servicos.find(s => s.slug === slug);
