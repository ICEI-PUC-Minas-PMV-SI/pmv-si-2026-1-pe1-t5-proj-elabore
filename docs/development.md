# Programação de Funcionalidades

Este documento descreve a implementação do e-LABORE, relacionando os requisitos funcionais e não funcionais aos artefatos de front-end do projeto.

O sistema foi desenvolvido como uma aplicação web estática em **HTML, CSS e JavaScript**, sem módulo de backend. A persistência necessária ao fluxo, como dados de login local, currículo em edição e etapa atual do usuário, é feita no navegador por meio de `localStorage`.

## Requisitos Atendidos

### Requisitos Funcionais

| ID | Descrição do Requisito | Responsável | Artefato Implementado |
| --- | --- | --- | --- |
| RF-001 | A aplicação deve apresentar uma landing page com a proposta do e-LABORE e chamada para iniciar o currículo. | João Vitor Rodrigues Oliveira | `index.html`, `index.js`, `styles.css` |
| RF-002 | A aplicação deve permitir login e cadastro simples do usuário antes do início do preenchimento do currículo. | Felipe Davila Mendes | `login.html`, `telas2a4.js`, `css2a4.css` |
| RF-003 | A aplicação deve permitir envio de foto do usuário, com opção de pular essa etapa. | Felipe Davila Mendes | `foto.html`, `telas2a4.js`, `css2a4.css` |
| RF-004 | A aplicação deve permitir o preenchimento de dados pessoais e de contato. | Felipe Davila Mendes | `detalhes.html`, `telas2a4.js`, `css2a4.css` |
| RF-005 | A aplicação deve permitir o preenchimento de mini-bio ou resumo profissional. | Felipe Davila Mendes | `minibio.html`, `telas2a4.js`, `css2a4.css` |
| RF-006 | A aplicação deve permitir cadastro, edição e remoção de experiências profissionais. | Arthur André Mariano Souza | `experiencias.html`, `experiencias.js`, `builder.css` |
| RF-007 | A aplicação deve permitir cadastro, edição e remoção de formações acadêmicas ou cursos. | Arthur André Mariano Souza | `educacao.html`, `educacao.js`, `builder.css` |
| RF-008 | A aplicação deve permitir cadastro de habilidades e competências. | Arthur André Mariano Souza | `habilidades.html`, `habilidades.js`, `builder.css` |
| RF-009 | A aplicação deve exibir pré-visualização do currículo durante o preenchimento. | Equipe | Previews em `detalhes.html`, `minibio.html`, `experiencias.html`, `educacao.html` e `habilidades.html` |
| RF-010 | A aplicação deve permitir geração e download do currículo em PDF. | João Vitor Rodrigues Oliveira | `preview.html`, `preview.js`, `builder.css` |

### Requisitos Não Funcionais

| ID | Descrição do Requisito | Estratégia de Implementação |
| --- | --- | --- |
| RNF-001 | A aplicação deve ser responsiva para celular, tablet e desktop. | CSS responsivo com media queries, layout flexível e adaptação da área de prévia. |
| RNF-002 | A aplicação deve utilizar linguagem simples e elementos visuais claros. | Textos objetivos, labels visíveis, botões consistentes e fluxo dividido em etapas curtas. |
| RNF-003 | A interface deve apresentar bom contraste, legibilidade e navegação acessível. | Paleta azul/branco com contraste adequado, HTML semântico, foco visual nos campos e botões de ação claros. |
| RNF-004 | A aplicação deve funcionar como projeto estático, sem módulo de backend. | Implementação apenas com arquivos estáticos e lógica client-side. |
| RNF-005 | Dados necessários ao fluxo devem ser tratados no navegador quando houver persistência. | Uso de `localStorage` para usuários, currículo, foto e etapa liberada. |
| RNF-006 | O carregamento das páginas deve ser leve e adequado a conexões móveis. | Separação de CSS/JS por telas, uso de recursos locais e ausência de chamadas obrigatórias a backend. |

## Estruturas de Dados

### Chaves de `localStorage`

| Chave | Finalidade |
| --- | --- |
| `usuariosElabore` | Lista local de usuários cadastrados no protótipo. |
| `curriculo` | Objeto principal com os dados preenchidos pelo usuário. |
| `usuarioNome` | Nome do usuário atualmente identificado no fluxo. |
| `usuarioEmail` | E-mail do usuário atualmente identificado no fluxo. |
| `curriculoEtapaLiberada` | Índice da última etapa liberada na navegação do currículo. |

### Usuário Local

Os usuários são armazenados na chave `usuariosElabore` como uma lista de objetos.

| Nome | Tipo | Descrição | Exemplo |
| :---: | --- | --- | --- |
| nome | Texto | Nome informado no cadastro. | `Felipe Davila` |
| email | Texto | E-mail usado no login/cadastro. | `felipe@email.com` |
| senha | Texto | Senha armazenada localmente apenas para fins acadêmicos do protótipo. | `123456` |

### Currículo

O currículo é armazenado na chave `curriculo`.

| Nome | Tipo | Descrição | Exemplo |
| :---: | --- | --- | --- |
| foto | Texto | Imagem enviada pelo usuário em formato base64. | `data:image/png;base64,...` |
| nome | Texto | Nome completo do usuário. | `Felipe Davila BH` |
| titulo | Texto | Cargo pretendido ou título profissional. | `Analista de Marketing Digital` |
| cidade | Texto | Cidade/UF ou endereço resumido. | `Belo Horizonte, MG` |
| telefone | Texto | Telefone de contato formatado. | `(31) 97174-0540` |
| email | Texto | E-mail de contato. | `felipe.davila.bh@gmail.com` |
| bio | Texto | Mini-bio ou resumo profissional. | `Estudante em início de carreira...` |
| experiencias | Lista | Experiências profissionais cadastradas. | `[{ id, cargo, empresa, local, inicio, fim, atividades }]` |
| educacao | Lista | Formações acadêmicas ou cursos cadastrados. | `[{ id, curso, instituicao, local, ano, destaques }]` |
| habilidades | Objeto | Competências separadas por categorias. | `{ industria: [], ferramentas: [], outras: [] }` |

### Experiência

| Nome | Tipo | Descrição |
| --- | --- | --- |
| id | Número | Identificador interno do registro. |
| cargo | Texto | Cargo ou função exercida. |
| empresa | Texto | Nome da empresa ou organização. |
| local | Texto | Cidade/UF da experiência. |
| inicio | Texto | Data inicial no formato `MM/AAAA`. |
| fim | Texto | Data final ou `Presente`. |
| atividades | Lista | Atividades descritas pelo usuário. |

### Educação

| Nome | Tipo | Descrição |
| --- | --- | --- |
| id | Número | Identificador interno do registro. |
| curso | Texto | Curso, formação ou certificação. |
| instituicao | Texto | Instituição de ensino. |
| local | Texto | Cidade/UF da instituição. |
| ano | Texto | Ano de conclusão. |
| destaques | Lista | Observações ou destaques acadêmicos. |

### Habilidades

| Nome | Tipo | Descrição |
| --- | --- | --- |
| industria | Lista | Conhecimentos de indústria ou área de atuação. |
| ferramentas | Lista | Ferramentas, tecnologias e softwares. |
| outras | Lista | Outras competências comportamentais ou técnicas. |

## Páginas Implementadas

- `index.html`: landing page.
- `login.html`: login/cadastro.
- `foto.html`: envio ou pulo de foto.
- `detalhes.html`: dados pessoais e contato.
- `minibio.html`: resumo profissional.
- `experiencias.html`: experiências profissionais.
- `educacao.html`: formação acadêmica.
- `habilidades.html`: competências.
- `preview.html`: prévia final e download em PDF.
- `download.html`: página auxiliar mantida no projeto.

## Instruções de Acesso e Verificação

O projeto pode ser executado abrindo `src/index.html` no navegador ou usando uma extensão de servidor local, como Live Server. No ambiente de desenvolvimento, recomenda-se iniciar o servidor apontando para a pasta do projeto e acessar a primeira tela pelo arquivo `src/index.html`.

Para verificar o fluxo principal:

1. Acessar a landing page em `index.html`.
2. Clicar para começar o currículo.
3. Criar uma conta ou fazer login.
4. Enviar ou pular foto.
5. Preencher detalhes, mini-bio, experiências, educação e habilidades.
6. Conferir a prévia do currículo.
7. Baixar o currículo em PDF pela tela `preview.html`.
