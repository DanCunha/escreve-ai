# EscreveAI ✍️

Gerador de textos com IA construído com **Next.js 15** (App Router), **React 19**, **Tailwind CSS** e **OpenRouter**. Gera textos profissionais em segundos: e-mails, posts para LinkedIn, descrições de produto e bios profissionais — tudo com tema escuro e uma interface simples de página única.

## Funcionalidades

- **4 tipos de texto**: E-mail Profissional, Post LinkedIn, Descrição de Produto e Bio Profissional.
- **Campos dinâmicos**: cada tipo define seus campos (texto, textarea e select) renderizados automaticamente a partir da configuração.
- **Histórico local**: últimos 5 resultados gerados, mantidos em memória durante a sessão.
- **Proteções de API**: rate limiting por IP, validação de payload e guarda de segurança anti-injeção de prompt.

## Como executar

```bash
# 1. Instale as dependências
npm install

# 2. Crie o arquivo .env.local com sua chave do OpenRouter
# OPENROUTER_API_KEY=sk-or-v1-...

# 3. Rode o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Comandos

| Comando          | Descrição                                |
| ---------------- | ---------------------------------------- |
| `npm run dev`    | Servidor de desenvolvimento              |
| `npm run build`  | Build de produção (inclui typecheck)     |
| `npm run start`  | Serve o build de produção                |
| `npm run lint`   | Executa o lint                           |

## Arquitetura

- **Página única** — `app/page.tsx` (client component) gerencia todo o estado: formulário, resultado, histórico, loading e erros.
- **API route** — `app/api/generate/route.ts` faz o proxy para o OpenRouter (modelo `openai/gpt-oss-20b:free`). O client da OpenAI é inicializado sob demanda via `getOpenAI()` para evitar crash no build sem a env var.
- **Configuração por tipo** — `lib/constants.ts` define os 4 tipos de texto via `TextTypeConfig` (id, label, campos, prompts). Adicionar um novo tipo = adicionar um objeto no array.
- **Tipos** — `lib/types.ts` contém as interfaces compartilhadas: `TextType`, `FieldConfig`, `TextTypeConfig`, `HistoryItem`, entre outras.
- **Componentes** — `components/` com `hero`, `text-form`, `result-card` e `history`.

## Estrutura de pastas

```
├── app/
│   ├── api/generate/route.ts   # API route (proxy OpenRouter)
│   └── page.tsx                # Página principal (client)
├── components/
│   ├── hero.tsx
│   ├── text-form.tsx
│   ├── result-card.tsx
│   └── history.tsx
└── lib/
    ├── constants.ts            # Configuração dos 4 tipos de texto
    └── types.ts                # Tipos compartilhados
```

## Configuração

- A chave da API do OpenRouter fica em `.env.local` como `OPENROUTER_API_KEY` (nunca commitada — ver `.gitignore`).
- Tema escuro fixo (`className="dark"` no `<html>`), gradiente azul/roxo no título e botão "Gerar".
- Sem banco de dados, sem autenticação e sem testes — projeto focado em simplicidade.

## Stack

- [Next.js 15](https://nextjs.org/) — App Router
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenAI SDK](https://github.com/openai/openai-node) via [OpenRouter](https://openrouter.ai/)