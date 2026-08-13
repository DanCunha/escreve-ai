import { TextTypeConfig } from "./types";

export const TEXT_TYPE_CONFIGS: TextTypeConfig[] = [
  {
    id: "email",
    label: "E-mail Profissional",
    description: "E-mails formais para ambiente corporativo",
    icon: "\u2709\uFE0F",
    systemPrompt:
      "Voc\u00ea \u00e9 um assistente especializado em reda\u00e7\u00e3o de e-mails profissionais. Crie e-mails claros, objetivos e com o tom adequado para o ambiente corporativo. Responda apenas com o conte\u00fado do e-mail, sem explica\u00e7\u00f5es adicionais.",
    userPromptTemplate: `Crie um e-mail profissional com as seguintes caracter\u00edsticas:

Para quem: {{para-quem}}
Assunto: {{assunto}}
Tom: {{tom}}

Escreva o e-mail completo com linha de assunto, sauda\u00e7\u00e3o, corpo e despedida.`,
    fields: [
      {
        name: "para-quem",
        label: "Para quem",
        type: "text",
        placeholder: "Ex: cliente, chefe, equipe...",
        maxLength: 200,
      },
      {
        name: "assunto",
        label: "Assunto",
        type: "text",
        placeholder: "Ex: Reuni\u00e3o de alinhamento",
        maxLength: 200,
      },
      {
        name: "tom",
        label: "Tom",
        type: "select",
        options: [
          { label: "Formal", value: "formal" },
          { label: "Semiformal", value: "semiformal" },
          { label: "Informal", value: "informal" },
        ],
      },
    ],
  },
  {
    id: "linkedin",
    label: "Post LinkedIn",
    description: "Publica\u00e7\u00f5es profissionais para engajar sua rede",
    icon: "\U0001f4bc",
    systemPrompt:
      "Voc\u00ea \u00e9 um especialista em marketing de conte\u00fado para LinkedIn. Crie posts profissionais e engajadores que geram conex\u00e3o com a audi\u00eancia. Responda apenas com o conte\u00fado do post, sem explica\u00e7\u00f5es.",
    userPromptTemplate: `Crie um post para LinkedIn com as seguintes caracter\u00edsticas:

Tema: {{tema}}
Objetivo: {{objetivo}}
Tom: {{tom}}

O post deve ter uma abertura impactante, desenvolvimento do assunto e uma chamada para a\u00e7\u00e3o no final. Use par\u00e1grafos curtos e inclua hashtags relevantes.`,
    fields: [
      {
        name: "tema",
        label: "Tema",
        type: "text",
        placeholder: "Ex: Lideran\u00e7a, inova\u00e7\u00e3o, carreira...",
      },
      {
        name: "objetivo",
        label: "Objetivo",
        type: "text",
        placeholder: "Ex: inspirar, educar, promover...",
      },
      {
        name: "tom",
        label: "Tom",
        type: "select",
        options: [
          { label: "Profissional", value: "profissional" },
          { label: "Inspirador", value: "inspirador" },
          { label: "Educativo", value: "educativo" },
          { label: "Descontra\u00eddo", value: "descontraido" },
        ],
      },
    ],
  },
  {
    id: "product",
    label: "Descri\u00e7\u00e3o de Produto",
    description: "Descri\u00e7\u00f5es persuasivas para e-commerce",
    icon: "\U0001f3f7\uFE0F",
    systemPrompt:
      "Voc\u00ea \u00e9 um copywriter especializado em e-commerce. Crie descri\u00e7\u00f5es de produto persuasivas que destacam benef\u00edcios e geram desejo de compra. Responda apenas com a descri\u00e7\u00e3o do produto, sem explica\u00e7\u00f5es.",
    userPromptTemplate: `Crie uma descri\u00e7\u00e3o de produto com as seguintes caracter\u00edsticas:

Nome do produto: {{nome-produto}}
P\u00fablico-alvo: {{publico}}
Diferenciais: {{diferenciais}}

A descri\u00e7\u00e3o deve incluir um t\u00edtulo chamativo, par\u00e1grafos destacando benef\u00edcios e diferenciais, e uma chamada para a\u00e7\u00e3o.`,
    fields: [
      {
        name: "nome-produto",
        label: "Nome do produto",
        type: "text",
        placeholder: "Ex: Cadeira Ergon\u00f4mica Pro",
      },
      {
        name: "publico",
        label: "P\u00fablico-alvo",
        type: "text",
        placeholder: "Ex: Profissionais de home office",
      },
      {
        name: "diferenciais",
        label: "Diferenciais",
        type: "textarea",
        placeholder: "Ex: Ajuste de altura, suporte lombar, 5 anos de garantia",
      },
    ],
  },
  {
    id: "bio",
    label: "Bio Profissional",
    description: "Bios curtas para redes sociais e portf\u00f3lio",
    icon: "\U0001f464",
    systemPrompt:
      "Voc\u00ea \u00e9 um redator especializado em branding pessoal. Crie bios profissionais concisas e impactantes para redes sociais, sites e portf\u00f3lios. Responda apenas com a bio, sem explica\u00e7\u00f5es.",
    userPromptTemplate: `Crie uma bio profissional com as seguintes caracter\u00edsticas:

Nome: {{nome}}
Cargo: {{cargo}}
Experi\u00eancia: {{experiencia}}
Tom: {{tom}}

A bio deve ser concisa (m\u00e1ximo 3 par\u00e1grafos), destacar a expertise e ser adaptada ao tom escolhido.`,
    fields: [
      {
        name: "nome",
        label: "Nome",
        type: "text",
        placeholder: "Ex: Maria Silva",
      },
      {
        name: "cargo",
        label: "Cargo",
        type: "text",
        placeholder: "Ex: Desenvolvedora Full Stack",
      },
      {
        name: "experiencia",
        label: "Experi\u00eancia",
        type: "textarea",
        placeholder: "Ex: 5 anos com React, Node.js e Python",
      },
      {
        name: "tom",
        label: "Tom",
        type: "select",
        options: [
          { label: "S\u00f3brio", value: "sobrio" },
          { label: "Criativo", value: "criativo" },
          { label: "Executivo", value: "executivo" },
          { label: "Descontra\u00eddo", value: "descontraido" },
        ],
      },
    ],
  },
];
