# Executar e testar o AUMALINE MIDSP (fase 1)

Este guia destina-se ao teu computador, com acesso à rede.

## 1. Pré-requisitos

| Ferramenta | Versão | Como verificar |
|---|---|---|
| Node.js | 20.9 ou superior (recomendado 22 LTS) | `node -v` |
| npm | 10 ou superior | `npm -v` |

O Next.js 16 não suporta Node 18. Se usares `nvm`: `nvm install 22 && nvm use` (o ficheiro `.nvmrc` indica 22).

## 2. Instalar e arrancar

```bash
cd aumaline-midsp
npm install
npm run dev
```

Abre <http://localhost:3000>. Deves ser redireccionado para `/dashboard`.
Não precisas de `.env.local` nesta fase.

## 3. Verificações automáticas

Por esta ordem:

```bash
npm run typecheck      # TypeScript sem erros
npm run build          # build de produção do Next.js
npm run start          # servidor de produção (deixa a correr)
npm run smoke          # noutro terminal: testa todas as rotas
```

Resultado esperado do `smoke`: linhas `OK` para `/ → /dashboard`, `/dashboard`, `/projectos`, `/midsp`, `/configuracoes`, as 10 páginas de `/modulos/...` e os dois 404, terminando em "Todos os testes passaram.".

## 4. Verificação manual (checklist)

Faz com `npm run dev` ou `npm run start`.

**Navegação**
- [ ] A sidebar mostra 13 entradas, pela ordem pedida, e a ligação "Metodologia MIDSP" no rodapé.
- [ ] Cada entrada abre a página certa e fica destacada (item activo a vermelho).
- [ ] Atalho: Tab no início da página mostra "Saltar para o conteúdo".

**Dashboard**
- [ ] Aviso "Dados de demonstração" visível no topo; selos "Dados de demonstração" nos cartões de actividade e indicadores.
- [ ] Total = 12; estados: 3 / 2 / 2 / 3 / 2 (desenvolvimento / avaliação / aprovado / execução / concluído).
- [ ] Os quatro indicadores de desempenho mostram "—" (sem valores inventados).

**Projectos**
- [ ] Filtros por estado funcionam e o contador actualiza.
- [ ] "Novo projecto" está desactivado.

**Cabeçalho**
- [ ] Pesquisa: ao submeter, aparece a mensagem de que será activada mais tarde.
- [ ] Notificações e perfil abrem; fecham com Escape e ao clicar fora.

**Responsivo e acessibilidade**
- [ ] Largura < 1024 px: sidebar escondida; o botão de menu abre a gaveta; Escape ou clicar fora fecha.
- [ ] A tabela de projectos tem scroll horizontal em ecrãs estreitos, sem partir o layout.
- [ ] Navegação só com teclado: o foco é sempre visível (contorno vermelho).

**Segredos**
- [ ] `git grep -i "service_role\|api_key\|secret"` não devolve chaves reais.

## 5. Se algo falhar

Envia-me:
1. o comando executado;
2. o erro completo do terminal (ou captura do browser, se for visual);
3. o resultado de `node -v` e `npm -v`.

Problemas prováveis, por ordem:
- *"Module not found" / tipos em falta* → `npm install` não terminou; apaga `node_modules` e `package-lock.json` e repete.
- *Aviso sobre `tsconfig.json` modificado* → o Next.js ajusta-o no primeiro arranque; é normal.
- *Estilos em falta* → confirma que `postcss.config.mjs` existe e que o `npm install` instalou `@tailwindcss/postcss`.
- *Erro de versão do Node* → ver secção 1.

## 6. Depois de validado

Só depois de me confirmares que as verificações acima passam, passamos a inicializar o Git e a ligar ao repositório `Aumaline54/aumaline-midsp`. Não foi feito nenhum `git init` nem qualquer ligação ao GitHub.
