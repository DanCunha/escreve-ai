# EscreveAI

Gerador de textos com IA — Next.js 15 App Router, Tailwind dark theme, OpenRouter.

## Comandos

```bash
npm run dev      # dev server em http://localhost:3000
npm run build    # build + typecheck (é o suficiente, não há testes)
```

A chave do OpenRouter precisa estar em `.env.local` como `OPENROUTER_API_KEY`.

## Arquitetura

- **Página única** — `app/page.tsx` (client component) gerencia todo o estado: formulário, resultado, histórico.
- **API route** — `app/api/generate/route.ts` faz o proxy para OpenRouter (modelo `openai/gpt-oss-20b:free`). O client é inicializado sob demanda via `getOpenAI()` para evitar crash em build sem a env var.
- **4 tipos de texto** configurados em `lib/constants.ts` com `TextTypeConfig` (id, campos, prompts). Adicionar um novo tipo = adicionar objeto no array.
- **Campos dinâmicos** renderizados a partir da config do tipo selecionado.
- **Histórico** em `useState` na página (últimos 5, sem persistência).

## Convenções

- Sem banco, sem auth, sem testes.
- Tema escuro fixo (`className="dark"` no `<html>`).
- Componentes em `components/`, tipos em `lib/types.ts`.
- Sempre usar `"use client"` quando depender de estado ou efeito.
- Tailwind sem custom tokens — usar classes utilitárias padrão (`gray-950`, `blue-500`, etc.).
- Gradiente azul/roxo usado no hero título e botão "Gerar".
