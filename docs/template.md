# Template padrão do site

Layout padrão do site (HTML e CSS) que será utilizado em todas as páginas com a definição de identidade visual, aspectos de responsividade e iconografia.

O projeto **e-LABORE** possui uma interface moderna, limpa e intuitiva, com foco em acessibilidade e facilidade de uso, principalmente para usuários com pouca familiaridade com ferramentas digitais. A identidade visual foi construída com base em simplicidade, clareza e orientação progressiva, permitindo que o usuário navegue pelo sistema sem dificuldades.

A interface foi projetada para atender diretamente os requisitos funcionais e não funcionais definidos na <a href="context.md">Context do Projeto</a>, especialmente no que se refere à responsividade, usabilidade e clareza das informações.

---

## Design

O layout do sistema segue um padrão consistente em todas as telas, baseado em uma estrutura simples e organizada.

### Estrutura geral

- **Topo (Header):**
  - Exibição do nome/logo "e-LABORE"
  - Barra de progresso indicando a etapa atual (Seus Detalhes, Mini-Bio, Experiência, Educação, Habilidades)

- **Área principal:**
  - Dividida em duas partes (em desktop):
    - Lado esquerdo: formulário de preenchimento
    - Lado direito: visualização do currículo em tempo real

- **Rodapé da seção:**
  - Botões de navegação:
    - "Voltar"
    - "Salvar & Avançar"

### Responsividade

- Em telas menores (mobile), os elementos são reorganizados verticalmente:
  - O formulário ocupa toda a largura
  - O preview pode ser exibido abaixo ou ocultado para melhor usabilidade
- O layout foi pensado para funcionar a partir de **320px de largura**, conforme os requisitos do projeto

### Padrões de navegação

- Fluxo linear por etapas
- Interface guiada (step-by-step)
- Botões claros e consistentes
- Feedback visual imediato através do preview

---

## Cores

A paleta de cores do sistema foi definida para transmitir profissionalismo, leveza e clareza.

### Paleta principal

- **Azul principal**  
  Utilizado em botões, destaques e elementos interativos  
  Exemplo: botões "Salvar & Avançar", "Enviar"

- **Azul escuro**  
  Utilizado em títulos e textos importantes  

- **Branco (#FFFFFF)**  
  Fundo principal da aplicação  

- **Cinza claro**  
  Fundo de áreas secundárias e campos de formulário  

- **Cinza médio**  
  Bordas, divisores e textos secundários  

- **Verde (feedback positivo)**  
  Utilizado para indicar sucesso ou validação  

### Objetivo da paleta

- Garantir **alto contraste e legibilidade**
- Facilitar o uso por usuários com baixa familiaridade digital
- Seguir boas práticas de acessibilidade (WCAG)

---

## Tipografia

A tipografia foi escolhida para garantir legibilidade e clareza em diferentes dispositivos.

### Fonte principal

- Fonte sugerida: **Inter / Roboto / Poppins (sans-serif)**
- Estilo moderno, limpo e de fácil leitura

### Aplicação

- **Título de página:**
  - Fonte maior
  - Peso alto (bold)
  - Cor azul escuro

- **Títulos de seção:**
  - Peso médio (semi-bold)
  - Destaque visual sem exagero

- **Rótulos de campos (labels):**
  - Tamanho médio
  - Cor neutra
  - Boa legibilidade

- **Corpo de texto:**
  - Tamanho padrão
  - Espaçamento confortável
  - Cor cinza escuro

- **Botões:**
  - Texto em negrito
  - Alto contraste com o fundo

---

## Iconografia

O sistema utiliza ícones simples e intuitivos para melhorar a experiência do usuário.

### Padrão de ícones

- Estilo minimalista
- Linha simples (outline) ou preenchido leve
- Fácil reconhecimento visual

### Ícones utilizados

- ✏️ **Editar** → editar informações
- 🗑️ **Excluir** → remover item
- ⬅️ **Voltar** → navegação entre etapas
- ⬆️ **Upload** → envio de imagem
- ✔️ **Confirmar** → ação concluída
- 📍 **Localização** → endereço
- 📞 **Telefone** → contato
- ✉️ **Email** → contato

### Função dos ícones

- Reduzir dependência de texto
- Tornar ações mais rápidas e intuitivas
- Melhorar acessibilidade visual

---

## Componentes Padrão

O sistema utiliza componentes reutilizáveis para manter consistência visual.

### Botão Primário

- Cor: azul principal
- Texto branco
- Bordas arredondadas
- Uso: ações principais (Salvar, Enviar, Avançar)

### Botão Secundário

- Fundo claro ou transparente
- Borda sutil
- Uso: ações secundárias (Voltar)

### Inputs

- Borda cinza clara
- Cantos arredondados
- Espaçamento interno confortável
- Feedback visual ao focar

### Cards

- Utilizados em:
  - Experiência
  - Educação
- Fundo branco
- Sombra leve
- Borda sutil

### Tags (Habilidades)

- Estilo de "chips"
- Fundo cinza claro ou azul suave
- Texto curto e direto

### Upload de Imagem

- Área tracejada
- Ícone central
- Instruções simples

### Preview do Currículo

- Exibido em tempo real
- Layout fixo e organizado
- Representação fiel do PDF final

---

## Estilos CSS (Diretrizes)

Os estilos CSS seguem padrões consistentes para toda a aplicação.

### Diretrizes principais

- Uso de **Flexbox/Grid** para layout
- **Border-radius** em elementos interativos
- **Sombras suaves** para destacar blocos
- Espaçamento amplo entre elementos
- Cores consistentes com a paleta definida

### Exemplos de padrões

- Botões:
  - `border-radius: 8px`
  - `padding: 10px 16px`

- Inputs:
  - `border: 1px solid #ccc`
  - `border-radius: 6px`

- Cards:
  - `box-shadow: leve`
  - `padding interno`

- Layout:
  - `display: flex` ou `grid`
  - Responsividade com `media queries`

---

## Considerações Finais

O template do **e-LABORE** foi projetado com foco em:

- Simplicidade
- Clareza
- Acessibilidade
- Responsividade
- Experiência guiada

Todas as decisões de design foram tomadas para garantir que qualquer usuário, independentemente do nível de conhecimento técnico, consiga criar um currículo profissional de forma rápida e eficiente.

---

> **Links Úteis**:
>
> -  [Como criar um guia de estilo de design da Web](https://edrodrigues.com.br/blog/como-criar-um-guia-de-estilo-de-design-da-web/#)
> - [CSS Website Layout (W3Schools)](https://www.w3schools.com/css/css_website_layout.asp)
> - [Website Page Layouts](http://www.cellbiol.com/bioinformatics_web_development/chapter-3-your-first-web-page-learning-html-and-css/website-page-layouts/)
> - [Perfect Liquid Layout](https://matthewjamestaylor.com/perfect-liquid-layouts)
> - [How and Why Icons Improve Your Web Design](https://usabilla.com/blog/how-and-why-icons-improve-you-web-design/)
