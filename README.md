# AUMALINE MIDSP

> **Estado: Fase 1 — a aguardar validação técnica.**
> O código foi escrito num ambiente sem acesso à rede, por isso `npm install`, `npm run dev` e `npm run build` **ainda não foram executados com sucesso**. Siga [`docs/EXECUTAR_E_TESTAR.md`](docs/EXECUTAR_E_TESTAR.md) para validar. Todos os dados apresentados na aplicação são **dados de demonstração**; os indicadores de desempenho estão por definir.

**Modelo Integrado de Desenvolvimento e Sucesso de Projectos** — fundação técnica (etapa 1).

Stack: Next.js (App Router) · TypeScript · Tailwind CSS v4 · componentes ao estilo shadcn/ui · Supabase (fase posterior) · GitHub.

## Arranque

Requer Node.js 20.9 ou superior.

```bash
npm install
cp .env.example .env.local   # opcional nesta etapa
npm run dev                  # http://localhost:3000
npm run typecheck
npm run build
npm run start                # noutro terminal: npm run smoke
```

Instruções completas de execução e teste: [`docs/EXECUTAR_E_TESTAR.md`](docs/EXECUTAR_E_TESTAR.md). Teste de fumo: `npm run smoke` (com a aplicação a correr).

## Estrutura

```
app/                  rotas (App Router)
  (app)/              área da aplicação (usa o AppShell)
    dashboard/ projectos/ midsp/ configuracoes/ modulos/[slug]/
components/
  ui/                 primitivos reutilizáveis (button, card, badge, input, progress, popover)
  layout/             shell, sidebar, cabeçalho, pesquisa, notificações, menu de perfil
  dashboard/          cartões e painéis do dashboard
  shared/             page-header, demo-notice, status-badge
features/             lógica e componentes por domínio (dashboard, projects, modules)
config/               navegação, estados de projecto, site, i18n
lib/                  utilitários, formatação, env, auth (ponto de ligação), i18n
types/                tipos partilhados
hooks/                hooks reutilizáveis
```

## Decisões desta etapa

- **Dados de demonstração:** vivem em `features/dashboard/demo-data.ts` e são identificados na interface.
- **Autenticação:** `lib/auth/session.ts` devolve um utilizador de demonstração; é o único ponto a alterar quando existir Supabase Auth.
- **Supabase:** apenas leitura de variáveis em `lib/env.ts`. Nenhuma chave no código; ver `.env.example`.
- **i18n:** textos em `lib/i18n/messages/pt-PT.ts`, acedidos por `getMessages()`.
- **shadcn/ui:** os componentes em `components/ui` foram escritos à mão, compatíveis com `components.json`; podem ser substituídos via CLI do shadcn.
- **Fora de âmbito (por especificação):** API da Anthropic, autenticação real, base de dados, subscrições, cálculos financeiros definitivos.
