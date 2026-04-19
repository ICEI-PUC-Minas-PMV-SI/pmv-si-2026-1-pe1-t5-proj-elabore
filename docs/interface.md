# Projeto de Interface

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

O projeto **e-LABORE** foi concebido para permitir que qualquer usuário monte um currículo profissional de forma simples, guiada e responsiva, mesmo sem experiência prévia com editores de texto. A interface foi estruturada para atender principalmente pessoas em situação de desemprego, informalidade, busca do primeiro emprego ou transição de carreira, conforme definido na <a href="context.md">Context do Projeto</a>.

A proposta da plataforma é reduzir a carga cognitiva do usuário com um fluxo dividido em etapas curtas, linguagem simples, visualização prévia em tempo real e possibilidade de geração do currículo final em PDF sem necessidade de cadastro. Dessa forma, as interfaces foram elaboradas para atender diretamente os seguintes pontos do projeto:

- **RF-01**: formulário estruturado por seções;
- **RF-02**: geração automática do currículo em PDF;
- **RF-03**: orientações contextuais e preenchimento guiado;
- **RF-04**: visualização prévia antes do download;
- **RNF-01**: responsividade para celular, tablet e desktop;
- **RNF-02**: acessibilidade e legibilidade;
- **RNF-03**: interface leve, objetiva e sem excesso de complexidade.

## User Flow

![User Flow do e-LABORE](img/userflow-elabore.png)

O fluxo de usuário do **e-LABORE** foi planejado para ser direto, linear e intuitivo. O usuário inicia na **landing page**, onde entende rapidamente a proposta da plataforma e pode optar por começar a criação do currículo. Em seguida, entra no processo guiado de montagem do documento.

O fluxo principal segue a seguinte lógica:

1. **Landing page**: apresenta a proposta de valor da plataforma e os botões de ação principais;
2. **Envio de foto**: etapa opcional, permitindo enviar ou pular;
3. **Seus Detalhes**: preenchimento das informações pessoais e profissionais básicas;
4. **Mini-Bio**: inserção de um resumo profissional;
5. **Experiência**: cadastro das experiências de trabalho;
6. **Educação**: preenchimento da formação acadêmica;
7. **Habilidades**: inserção das competências do usuário;
8. **Pré-visualização final**: acompanhamento visual contínuo do currículo montado;
9. **Download do PDF**: geração e exportação do currículo final.

Esse fluxo atende principalmente às histórias de usuário relacionadas ao preenchimento simplificado, uso por celular, apoio ao primeiro emprego e valorização de experiências profissionais informais. A presença de um preview ao lado do formulário ajuda o usuário a compreender imediatamente o impacto das informações inseridas, reduzindo insegurança e retrabalho.

> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)

## Wireframes

Os wireframes e telas do **e-LABORE** foram desenhados para manter consistência visual, navegação previsível e preenchimento progressivo. O sistema utiliza uma barra superior de etapas para indicar o progresso do usuário e uma área de visualização do currículo em tempo real, o que reforça o senso de avanço e facilita revisões.

A seguir, são apresentadas as principais interfaces da plataforma e sua relação com os requisitos do projeto.

---

### 1. Landing Page

A tela inicial tem como objetivo apresentar a solução de forma clara e rápida. O título principal comunica o benefício central da ferramenta, enquanto os botões de ação conduzem o usuário para o início do processo ou para a visualização de modelos.

![Landing Page](img/tela-landing.png)

Nesta tela, são atendidos principalmente os seguintes pontos:

- apresentação clara da proposta da plataforma;
- entrada simples no fluxo principal;
- comunicação objetiva voltada a usuários com pouca familiaridade digital;
- incentivo ao uso sem exigir cadastro ou conhecimento técnico.

**Requisitos relacionados:** RF-02, RNF-01, RNF-02.

---

### 2. Envio de Foto

A segunda interface permite que o usuário envie uma foto profissional para compor o currículo. Como nem todos terão uma imagem disponível, existe a opção de pular essa etapa, evitando bloqueios no fluxo.

![Tela de Envio de Foto](img/tela-foto.png)

Essa tela foi pensada para:

- reduzir atrito na experiência;
- permitir personalização sem tornar a foto obrigatória;
- manter o fluxo acessível para usuários com poucos recursos;
- orientar visualmente o processo de upload.

**Requisitos relacionados:** RF-01, RNF-01, RNF-02.

---

### 3. Seus Detalhes

A etapa de detalhes pessoais funciona como base do currículo. Nela, o usuário informa cargo desejado, nome, sobrenome, e-mail, telefone e endereço. A organização em campos simples reduz a dificuldade de preenchimento.

![Tela Seus Detalhes](img/tela-detalhes.png)

Esta interface atende especialmente:

- coleta estruturada das informações principais do currículo;
- organização do formulário em seções;
- preenchimento guiado e legível;
- visualização simultânea do resultado no documento.

**Requisitos relacionados:** RF-01, RF-04, RNF-01, RNF-02.

---

### 4. Mini-Bio

A tela de mini-bio permite ao usuário escrever um resumo profissional curto. Essa etapa é importante para valorizar o perfil de quem já possui experiência, está em transição de carreira ou busca o primeiro emprego.

![Tela Mini-Bio](img/tela-minibio.png)

A escolha por uma área de texto maior e com editor visual ajuda o usuário a estruturar melhor sua apresentação. A visualização ao lado mostra como o texto aparecerá no currículo final.

**Requisitos relacionados:** RF-01, RF-03, RF-04, RNF-01.

---

### 5. Experiência

Na tela de experiência, o sistema exibe os registros já cadastrados em formato de cards, com opções de edição e exclusão. Também existe um botão para adicionar novas experiências.

![Tela Experiência](img/tela-experiencia.png)

Essa interface foi elaborada para:

- permitir múltiplos registros profissionais;
- facilitar atualização e correção das informações;
- acomodar experiências formais e informais;
- tornar o histórico profissional mais visível e organizado.

Essa etapa é especialmente importante para atender usuários que precisam valorizar trajetórias profissionais fora da carteira assinada.

**Requisitos relacionados:** RF-01, RF-04, RNF-01.

---

### 6. Educação

A tela de educação segue o mesmo padrão da etapa anterior, garantindo consistência visual e facilidade de uso. O usuário pode cadastrar instituições, cursos, anos e destaques acadêmicos.

![Tela Educação](img/tela-educacao.png)

Ela contribui para:

- organização da formação acadêmica;
- inclusão de dados relevantes mesmo para usuários com pouca experiência profissional;
- consistência no padrão de cadastro e edição;
- compreensão mais fácil do fluxo por repetição visual.

**Requisitos relacionados:** RF-01, RF-04, RNF-01, RNF-02.

---

### 7. Habilidades

Na etapa de habilidades, o usuário pode destacar competências organizadas em grupos, como conhecimentos de indústria, ferramentas e outras skills. O uso de tags torna a visualização mais simples e objetiva.

![Tela Habilidades](img/tela-habilidades.png)

Essa tela foi pensada para:

- facilitar a leitura das competências no currículo;
- permitir destaque rápido de conhecimentos importantes;
- apoiar usuários com pouca experiência formal, valorizando habilidades práticas;
- estruturar informações de forma visualmente clara.

**Requisitos relacionados:** RF-01, RF-04, RNF-01.

---

### 8. Pré-visualização do Currículo

A visualização do currículo aparece ao longo do fluxo, mas ganha maior relevância nas etapas finais, quando o documento já está mais completo. Ela permite revisão geral antes da exportação.

![Prévia do Currículo](img/tela-preview-final.png)

Essa funcionalidade é central no projeto, pois:

- aumenta a confiança do usuário no resultado;
- reduz erros antes da geração do PDF;
- facilita ajustes de conteúdo;
- aproxima a experiência de um editor profissional sem exigir conhecimento técnico.

**Requisitos relacionados:** RF-04, RF-02, RNF-01, RNF-02.

---

## Considerações sobre a Interface

A interface do **e-LABORE** foi desenvolvida com foco em simplicidade, orientação progressiva e previsibilidade. As principais decisões de design observadas nas telas são:

- **divisão do formulário em etapas curtas**, reduzindo sobrecarga cognitiva;
- **barra de progresso superior**, mostrando claramente em que etapa o usuário está;
- **preview em tempo real**, reforçando a utilidade do preenchimento;
- **botões de navegação consistentes**, com ações de voltar e avançar;
- **uso de linguagem acessível**, importante para o público-alvo;
- **estrutura responsiva**, permitindo uso confortável em diferentes tamanhos de tela;
- **layout limpo e legível**, importante para acessibilidade e compreensão.

Essas escolhas reforçam os objetivos do projeto ao tornar a criação de currículos mais democrática, especialmente para usuários que dependem exclusivamente do celular ou que possuem pouca familiaridade com ferramentas tradicionais de edição.

> **Links Úteis**:
> - [Protótipos vs Wireframes](https://www.nngroup.com/videos/prototypes-vs-wireframes-ux-projects/)
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [Axure](https://www.axure.com/edu) (Licença Educacional)
> - [InvisionApp](https://www.invisionapp.com/) (Licença Educacional)
