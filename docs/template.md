# Template Padrão do Site

Layout padrão do site em HTML e CSS que será utilizado nas páginas do e-LABORE, com definição de identidade visual, responsividade, componentes e iconografia.

O projeto **e-LABORE** possui uma interface moderna, limpa e intuitiva, com foco em acessibilidade e facilidade de uso, principalmente para usuários com pouca familiaridade com ferramentas digitais. A identidade visual foi construída com base em simplicidade, clareza e orientação progressiva, permitindo que o usuário navegue pelo sistema sem dificuldades.

A interface foi projetada para atender diretamente os requisitos funcionais e não funcionais definidos na [Especificação do Projeto](especification.md), especialmente no que se refere a responsividade, usabilidade, clareza das informações e funcionamento sem backend.

---

## Design

O layout do sistema segue um padrão consistente em todas as telas, baseado em uma estrutura simples e organizada.

### Estrutura geral

- **Topo (Header):**
  - exibição do nome/logo "e-LABORE";
  - navegação simples na landing page;
  - barra de progresso nas telas internas, indicando a etapa atual do currículo.

- **Área principal da landing page:**
  - apresentação da proposta de valor;
  - chamada principal para começar o currículo;
  - indicação visual do resultado esperado.

- **Área principal do login/cadastro:**
  - painel central com alternância entre login e cadastro;
  - campos de e-mail e senha;
  - mensagens de validação claras;
  - botão principal para entrar ou criar conta.

- **Área principal do construtor:**
  - dividida em duas partes no desktop:
    - lado esquerdo: formulário de preenchimento;
    - lado direito: visualização do currículo em tempo real.

- **Rodapé da seção:**
  - botões de navegação:
    - "Voltar";
    - "Salvar & Avançar";
    - "Baixar PDF" na etapa final.

### Responsividade

- Em telas menores, os elementos são reorganizados verticalmente.
- O formulário ocupa toda a largura no mobile.
- O preview pode ser exibido abaixo do formulário ou ocultado para melhor usabilidade.
- A tela de login/cadastro deve permanecer centralizada, com campos largos e botões fáceis de tocar.
- O layout deve funcionar a partir de **320px de largura**, conforme os requisitos do projeto.

### Padrões de navegação

- Fluxo linear por etapas.
- Interface guiada passo a passo.
- Botões claros e consistentes.
- Feedback visual imediato através do preview.
- Login/cadastro posicionado antes do início do preenchimento.
- Opção de voltar e editar antes do download final.

---

## Cores

A paleta de cores do sistema foi definida para transmitir profissionalismo, leveza e clareza.

### Paleta principal

- **Azul principal:** utilizado em botões, destaques e elementos interativos.
- **Azul escuro:** utilizado em títulos e textos importantes.
- **Branco (#FFFFFF):** fundo principal da aplicação.
- **Cinza claro:** fundo de áreas secundárias e campos de formulário.
- **Cinza médio:** bordas, divisores e textos secundários.
- **Verde:** feedback positivo, sucesso ou validação.
- **Vermelho:** mensagens de erro e validações inválidas.

### Objetivo da paleta

- Garantir alto contraste e legibilidade.
- Facilitar o uso por usuários com baixa familiaridade digital.
- Seguir boas práticas de acessibilidade.
- Diferenciar claramente ações principais, secundárias, sucesso e erro.

---

## Tipografia

A tipografia foi escolhida para garantir legibilidade e clareza em diferentes dispositivos.

### Fonte principal

- Fonte sugerida: **Inter**, **Roboto** ou **Poppins**.
- Estilo moderno, limpo e de fácil leitura.

### Aplicação

- **Título de página:** fonte maior, peso alto e cor azul escuro.
- **Títulos de seção:** peso médio, com destaque visual sem exagero.
- **Rótulos de campos:** tamanho confortável, cor neutra e boa legibilidade.
- **Corpo de texto:** tamanho padrão, espaçamento confortável e cor cinza escuro.
- **Botões:** texto em negrito e alto contraste com o fundo.
- **Mensagens de validação:** texto curto, direto e próximo ao campo relacionado.

---

## Iconografia

O sistema utiliza ícones simples e intuitivos para melhorar a experiência do usuário.

### Padrão de ícones

- Estilo minimalista.
- Linha simples ou preenchimento leve.
- Fácil reconhecimento visual.
- Acompanhados de texto quando a ação puder gerar dúvida.

### Ícones utilizados

- **Editar:** editar informações.
- **Excluir:** remover item.
- **Voltar:** navegação entre etapas.
- **Upload:** envio de imagem.
- **Confirmar:** ação concluída ou válida.
- **Localização:** endereço.
- **Telefone:** contato.
- **Email:** contato e login.
- **Cadeado:** senha e autenticação.
- **Usuário:** perfil ou cadastro.
- **Download:** baixar currículo em PDF.

### Função dos ícones

- Reduzir dependência de texto longo.
- Tornar ações mais rápidas e intuitivas.
- Melhorar a leitura visual da interface.
- Reforçar estados e ações importantes.

---

## Componentes Padrão

O sistema utiliza componentes reutilizáveis para manter consistência visual.

### Botão Primário

- Cor: azul principal.
- Texto branco.
- Bordas arredondadas.
- Uso: ações principais como começar, entrar, cadastrar, salvar, avançar e baixar PDF.

### Botão Secundário

- Fundo claro ou transparente.
- Borda sutil.
- Uso: ações secundárias como voltar, editar e alternar entre modos.

### Inputs

- Borda cinza clara.
- Cantos arredondados.
- Espaçamento interno confortável.
- Feedback visual ao focar.
- Mensagem de erro próxima ao campo quando houver validação inválida.

### Formulário de Login/Cadastro

- Campos mínimos: nome, e-mail e senha no cadastro; e-mail e senha no login.
- Alternância clara entre "Entrar" e "Criar conta".
- Validação de campos obrigatórios.
- Senha com campo protegido.
- Mensagens simples, como "Informe um e-mail válido" ou "Preencha sua senha".
- Persistência local dos dados de acesso quando necessária, respeitando a restrição de ausência de backend.

### Cards

- Utilizados em:
  - Experiência;
  - Educação.
- Fundo branco.
- Sombra leve.
- Borda sutil.
- Ações de editar e excluir visíveis.

### Tags

- Utilizadas em Habilidades.
- Estilo de chips.
- Fundo cinza claro ou azul suave.
- Texto curto e direto.

### Upload de Imagem

- Área tracejada.
- Ícone central.
- Instruções simples.
- Botão de envio.
- Opção de pular etapa.

### Preview do Currículo

- Exibido em tempo real.
- Layout fixo e organizado.
- Representação fiel do PDF final.
- Botão de download disponível na etapa final.

---

## Estilos CSS

Os estilos CSS seguem padrões consistentes para toda a aplicação.

### Diretrizes principais

- Uso de **Flexbox** e **Grid** para layout.
- Border-radius moderado em elementos interativos.
- Sombras suaves para destacar blocos funcionais.
- Espaçamento amplo entre elementos.
- Cores consistentes com a paleta definida.
- Media queries para adaptação em mobile.
- Estados de foco visíveis para acessibilidade.

### Exemplos de padrões

- Botões:
  - `border-radius: 8px`;
  - `padding: 10px 16px`.

- Inputs:
  - `border: 1px solid #ccc`;
  - `border-radius: 6px`.

- Cards:
  - `box-shadow` suave;
  - `padding` interno.

- Layout:
  - `display: flex` ou `display: grid`;
  - responsividade com `media queries`.

---

## Considerações Finais

O template do **e-LABORE** foi projetado com foco em:

- simplicidade;
- clareza;
- acessibilidade;
- responsividade;
- experiência guiada;
- login/cadastro simples;
- geração de currículo em PDF.

Todas as decisões de design foram tomadas para garantir que qualquer usuário, independentemente do nível de conhecimento técnico, consiga criar um currículo profissional de forma rápida e eficiente.
