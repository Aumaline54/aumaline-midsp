import type { ModuleCopy, ModuleSlug } from "@/types/modules";
import type { NavItemId } from "@/types/navigation";
import type { ProjectStatus } from "@/types/project";

export const ptPT = {
  common: {
    skipToContent: "Saltar para o conteúdo",
    demoData: "Dados de demonstração",
    demoNotice:
      "Os valores apresentados nesta página são dados de demonstração e não correspondem a projectos reais.",
    inDevelopment: "Em desenvolvimento",
    comingSoon: "Disponível em fase posterior",
    notConfigured: "Não configurado",
    planned: "Planeado",
    active: "Activo",
    openMenu: "Abrir menu de navegação",
    closeMenu: "Fechar menu de navegação",
    primaryNavigation: "Navegação principal",
    toggleSection: "Alternar secção",
  },
  nav: {
    dashboard: "Dashboard",
    projects: "Projectos",
    "ai-project-builder": "AI Project Builder",
    "market-intelligence": "Market Intelligence",
    "strategic-planning": "Strategic Planning",
    "business-model": "Business Model",
    "commercial-management": "Commercial Management",
    "financial-intelligence": "Financial Intelligence",
    "execution-management": "Execution Management",
    "performance-bsc": "Performance & BSC",
    "risk-management": "Risk Management",
    "reports-documents": "Reports & Documents",
    settings: "Configurações",
  } satisfies Record<NavItemId, string>,
  methodologyNav: "Metodologia MIDSP",
  header: {
    searchLabel: "Pesquisar na plataforma",
    searchPlaceholder: "Pesquisar projectos, módulos, documentos…",
    searchPending: "A pesquisa global será activada numa fase posterior.",
    notifications: "Notificações",
    notificationsEmpty: "Sem notificações.",
    notificationsDemo: "Exemplos de demonstração",
    profileMenu: "Menu do perfil",
    profile: "Perfil",
    settings: "Configurações",
    signOut: "Terminar sessão",
    authPending: "A autenticação real será implementada numa fase posterior.",
  },
  status: {
    development: "Em desenvolvimento",
    evaluation: "Em avaliação",
    approved: "Aprovado",
    execution: "Em execução",
    completed: "Concluído",
  } satisfies Record<ProjectStatus, string>,
  dashboard: {
    title: "Dashboard",
    subtitle: "Visão geral da carteira de projectos.",
    totalProjects: "Total de projectos",
    kpiGroupLabel: "Resumo de projectos por estado",
    distributionTitle: "Distribuição de projectos por estado",
    distributionDescription: "Número de projectos em cada estado do ciclo de vida.",
    distributionTableLabel: "Distribuição por estado",
    statusColumn: "Estado",
    countColumn: "Projectos",
    shareColumn: "Percentagem",
    activityTitle: "Actividade recente",
    activityDescription: "Últimos eventos registados na carteira.",
    performanceTitle: "Indicadores gerais de desempenho",
    performanceDescription: "Indicadores por definir. Ainda não existem valores; os cálculos serão implementados numa fase posterior.",
    averageProgressNote: "Calculado a partir dos projectos de demonstração.",
    averageExecutionProgress: "Progresso médio dos projectos em execução",
    projectsUnit: "projectos",
  },
  projects: {
    title: "Projectos",
    subtitle: "Carteira de projectos empresariais.",
    newProject: "Novo projecto",
    filterLabel: "Filtrar por estado",
    filterAll: "Todos",
    tableCaption: "Lista de projectos de demonstração",
    columns: {
      name: "Projecto",
      sector: "Sector",
      owner: "Responsável",
      status: "Estado",
      progress: "Progresso",
      updatedAt: "Actualizado em",
    },
    empty: "Não existem projectos neste estado.",
    resultsCount: "projectos apresentados",
  },
  methodology: {
    title: "Metodologia MIDSP",
    subtitle: "Modelo Integrado de Desenvolvimento e Sucesso de Projectos",
    intro:
      "A plataforma organiza o percurso de um projecto empresarial desde a criação até ao acompanhamento. A estrutura abaixo é provisória e será validada e detalhada pela AUMALINE em conjunto com a especificação de cada módulo.",
    provisional: "Estrutura provisória — a validar",
    stagesTitle: "Percurso do projecto",
    relatedModules: "Módulos relacionados",
    stages: [
      {
        id: "create",
        title: "Criar",
        description: "Registo da ideia ou oportunidade e definição inicial do projecto.",
        modules: ["ai-project-builder"],
      },
      {
        id: "develop",
        title: "Desenvolver",
        description: "Análise de mercado, planeamento estratégico, modelo de negócio e abordagem comercial.",
        modules: ["market-intelligence", "strategic-planning", "business-model", "commercial-management"],
      },
      {
        id: "evaluate",
        title: "Avaliar",
        description: "Análise de viabilidade, incluindo a vertente financeira e os riscos.",
        modules: ["financial-intelligence", "risk-management"],
      },
      {
        id: "approve",
        title: "Aprovar",
        description: "Decisão sobre o projecto com base na documentação e nas avaliações realizadas.",
        modules: ["reports-documents"],
      },
      {
        id: "execute",
        title: "Executar",
        description: "Coordenação das actividades, prazos e responsáveis durante a implementação.",
        modules: ["execution-management"],
      },
      {
        id: "monitor",
        title: "Acompanhar",
        description: "Medição do desempenho, indicadores e gestão contínua do risco.",
        modules: ["performance-bsc", "risk-management"],
      },
    ] satisfies ReadonlyArray<{
      id: string;
      title: string;
      description: string;
      modules: ModuleSlug[];
    }>,
  },
  settings: {
    title: "Configurações",
    subtitle: "Preferências da conta, da organização e da plataforma.",
    sections: {
      account: {
        title: "Conta",
        description: "Dados do utilizador autenticado.",
        pending: "Disponível após a integração da autenticação.",
        name: "Nome",
        email: "Email",
        role: "Função",
      },
      organization: {
        title: "Organização",
        description: "Dados e membros da organização.",
        name: "Organização",
        nameValue: "AUMALINE",
      },
      language: {
        title: "Idioma",
        description: "Idioma da interface.",
        current: "Idioma actual",
        currentValue: "Português (Portugal)",
        note: "A estrutura está preparada para novos idiomas.",
      },
      integrations: {
        title: "Integrações",
        description: "Estado das ligações a serviços externos.",
        supabase: "Supabase (autenticação e base de dados)",
        anthropic: "API da Anthropic (AI Project Builder)",
        billing: "Subscrições",
        supabaseDetected: "Variáveis de ambiente detectadas",
        supabaseMissing: "Variáveis de ambiente não definidas",
      },
    },
  },
  modulePage: {
    status: "Estado do módulo",
    statusValue: "Em desenvolvimento",
    scopeTitle: "Âmbito previsto",
    scopeNote: "Lista provisória, a confirmar na especificação do módulo.",
    noFunctionality: "Este módulo ainda não tem funcionalidades activas.",
    backToProjects: "Ver projectos",
    notFound: "Módulo não encontrado.",
  },
  modules: {
    "ai-project-builder": {
      title: "AI Project Builder",
      description: "Apoio assistido à estruturação de novos projectos.",
      scope: [
        "Criação guiada de projectos",
        "Geração de rascunhos de documentação",
        "Integração com a API da Anthropic (fase posterior)",
      ],
    },
    "market-intelligence": {
      title: "Market Intelligence",
      description: "Análise de mercado, concorrência e oportunidades.",
      scope: ["Análise de mercado e segmentos", "Mapeamento da concorrência", "Registo de fontes e evidências"],
    },
    "strategic-planning": {
      title: "Strategic Planning",
      description: "Definição de objectivos, estratégia e iniciativas.",
      scope: ["Objectivos e iniciativas estratégicas", "Alinhamento com a visão da organização", "Cenários e prioridades"],
    },
    "business-model": {
      title: "Business Model",
      description: "Desenho e validação do modelo de negócio.",
      scope: ["Proposta de valor e segmentos", "Canais e relação com clientes", "Fontes de receita e estrutura de custos"],
    },
    "commercial-management": {
      title: "Commercial Management",
      description: "Gestão da vertente comercial dos projectos.",
      scope: ["Estratégia e plano comercial", "Acompanhamento de oportunidades", "Metas e responsáveis"],
    },
    "financial-intelligence": {
      title: "Financial Intelligence",
      description: "Análise financeira e de viabilidade.",
      scope: [
        "Pressupostos financeiros",
        "Análise de viabilidade",
        "Cálculos financeiros definitivos (fase posterior)",
      ],
    },
    "execution-management": {
      title: "Execution Management",
      description: "Planeamento e acompanhamento da execução.",
      scope: ["Plano de actividades e marcos", "Responsáveis e prazos", "Estado de execução"],
    },
    "performance-bsc": {
      title: "Performance & BSC",
      description: "Indicadores de desempenho e Balanced Scorecard.",
      scope: ["Indicadores e metas", "Perspectivas do Balanced Scorecard", "Acompanhamento periódico"],
    },
    "risk-management": {
      title: "Risk Management",
      description: "Identificação, avaliação e tratamento de riscos.",
      scope: ["Registo de riscos", "Avaliação de probabilidade e impacto", "Planos de mitigação"],
    },
    "reports-documents": {
      title: "Reports & Documents",
      description: "Relatórios e documentação dos projectos.",
      scope: ["Relatórios de projecto", "Repositório de documentos", "Exportação"],
    },
  } satisfies Record<ModuleSlug, ModuleCopy>,
};

export type Messages = typeof ptPT;
