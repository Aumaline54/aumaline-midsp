#!/usr/bin/env node
/**
 * Teste de fumo (sem dependências). Verifica se as rotas respondem e se o
 * conteúdo essencial está presente.
 *
 * Uso:
 *   1) npm run build && npm run start      (num terminal)
 *   2) npm run smoke                       (noutro terminal)
 *
 * Opcional: BASE_URL=http://localhost:3000 npm run smoke
 */
const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";

const navLabels = [
  "Dashboard",
  "Projectos",
  "AI Project Builder",
  "Market Intelligence",
  "Strategic Planning",
  "Business Model",
  "Commercial Management",
  "Financial Intelligence",
  "Execution Management",
  "Performance &amp; BSC",
  "Risk Management",
  "Reports &amp; Documents",
  "Configurações",
];

const moduleSlugs = [
  "ai-project-builder",
  "market-intelligence",
  "strategic-planning",
  "business-model",
  "commercial-management",
  "financial-intelligence",
  "execution-management",
  "performance-bsc",
  "risk-management",
  "reports-documents",
];

/** @type {{ path: string, status: number, contains?: string[] }[]} */
const checks = [
  { path: "/dashboard", status: 200, contains: ["Dados de demonstração", "Total de projectos", ...navLabels] },
  { path: "/projectos", status: 200, contains: ["Dados de demonstração", "Novo projecto"] },
  { path: "/midsp", status: 200, contains: ["Metodologia MIDSP", "Estrutura provisória"] },
  { path: "/configuracoes", status: 200, contains: ["Integrações"] },
  ...moduleSlugs.map((slug) => ({ path: `/modulos/${slug}`, status: 200, contains: ["Em desenvolvimento"] })),
  { path: "/modulos/inexistente", status: 404 },
  { path: "/rota-inexistente", status: 404 },
];

let failures = 0;

function report(ok, label, detail = "") {
  if (!ok) failures += 1;
  console.log(`${ok ? "OK   " : "FALHA"} ${label}${detail ? ` — ${detail}` : ""}`);
}

// A raiz deve redireccionar para /dashboard.
try {
  const res = await fetch(`${BASE_URL}/`, { redirect: "manual" });
  const location = res.headers.get("location") ?? "";
  report([307, 308].includes(res.status) && location.endsWith("/dashboard"), "/ → /dashboard", `${res.status} ${location}`);
} catch (error) {
  console.error(`Não foi possível ligar a ${BASE_URL}. A aplicação está a correr?`);
  console.error(String(error));
  process.exit(2);
}

for (const check of checks) {
  const res = await fetch(`${BASE_URL}${check.path}`);
  const html = await res.text();
  const missing = (check.contains ?? []).filter((text) => !html.includes(text));
  const ok = res.status === check.status && missing.length === 0;
  report(ok, check.path, ok ? String(res.status) : `estado ${res.status}; em falta: ${missing.join(", ") || "—"}`);
}

console.log(failures === 0 ? "\nTodos os testes passaram." : `\n${failures} teste(s) falharam.`);
process.exit(failures === 0 ? 0 : 1);
