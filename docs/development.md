# Programação de Funcionalidades

Este documento descreve a implementação prevista para o e-LABORE, relacionando os requisitos funcionais e não funcionais aos artefatos de front-end que serão criados.

O sistema será desenvolvido como uma aplicação web estática em **HTML, CSS e JavaScript**, sem módulo de backend. Quando houver necessidade de manter dados durante o uso, como informações de login local ou currículo em edição, a aplicação poderá utilizar recursos do navegador, como `localStorage`.

## Requisitos Atendidos

### Requisitos Funcionais

| ID | Descrição do Requisito | Responsável | Artefato Previsto |
| --- | --- | --- | --- |
| RF-001 | A aplicação deve apresentar uma landing page com a proposta do e-LABORE e chamada para iniciar o currículo. | João Vitor | `index.html` |
| RF-002 | A aplicação deve permitir login e cadastro simples do usuário antes do início do preenchimento do currículo. | Felipe Mendes | `login.html` |
| RF-003 | A aplicação deve permitir envio de foto do usuário, com opção de pular essa etapa. | Felipe Mendes | `foto.html` |
| RF-004 | A aplicação deve permitir o preenchimento de dados pessoais e de contato. | Felipe Mendes | `detalhes.html` |
| RF-005 | A aplicação deve permitir o preenchimento de mini-bio ou resumo profissional. | Arthur Andre | `minibio.html` |
| RF-006 | A aplicação deve permitir cadastro, edição e remoção de experiências profissionais. | Arthur Andre | `experiencia.html` |
| RF-007 | A aplicação deve permitir cadastro, edição e remoção de formações acadêmicas ou cursos. | Arthur Andre | `educacao.html` |
| RF-008 | A aplicação deve permitir cadastro de habilidades e competências. | Darwin Luan | `habilidades.html` |
| RF-009 | A aplicação deve exibir pré-visualização do currículo durante o preenchimento. | Darwin Luan | componente de preview |
| RF-010 | A aplicação deve permitir geração e download do currículo em PDF. | Darwin Luan | `preview.html` / script de PDF |
| RF-001 | A aplicação deve apresentar uma landing page com a proposta do e-LABORE e chamada para iniciar o currículo. | João Vitor Rodrigues Oliveira| `index.html` |
| RF-002 | A aplicação deve permitir login e cadastro simples do usuário antes do início do preenchimento do currículo. | Felipe Davila Mendes| `login.html` |
| RF-003 | A aplicação deve permitir envio de foto do usuário, com opção de pular essa etapa. | Felipe Davila Mendes| `foto.html` |
| RF-004 | A aplicação deve permitir o preenchimento de dados pessoais e de contato. | Felipe Davila Mendes| `detalhes.html` |
| RF-005 | A aplicação deve permitir o preenchimento de mini-bio ou resumo profissional. | Felipe Davila Mendes| `minibio.html` |
| RF-006 | A aplicação deve permitir cadastro, edição e remoção de experiências profissionais. | Arthur André Mariano Souza| `experiencia.html` |
| RF-007 | A aplicação deve permitir cadastro, edição e remoção de formações acadêmicas ou cursos. | Arthur André Mariano Souza| `educacao.html` |
| RF-008 | A aplicação deve permitir cadastro de habilidades e competências. | Arthur André Mariano Souza| `habilidades.html` |
| RF-009 | A aplicação deve exibir pré-visualização do currículo durante o preenchimento. | João Vitor | componente de preview |
| RF-010 | A aplicação deve permitir geração e download do currículo em PDF. | João Vitor | `preview.html` / script de PDF |

### Requisitos Não Funcionais

| ID | Descrição do Requisito | Estratégia de Implementação |
| --- | --- | --- |
| RNF-001 | A aplicação deve ser responsiva para celular, tablet e desktop. | CSS responsivo com media queries e layout mobile-first. |
| RNF-002 | A aplicação deve utilizar linguagem simples e elementos visuais claros. | Textos objetivos, labels visíveis, botões consistentes e etapas curtas. |
| RNF-003 | A interface deve apresentar bom contraste, legibilidade e navegação acessível. | Paleta com contraste adequado, foco visível e semântica HTML. |
| RNF-004 | A aplicação deve funcionar como projeto estático, sem módulo de backend. | Implementação apenas com arquivos estáticos e lógica client-side. |
| RNF-005 | Dados necessários ao fluxo devem ser tratados no navegador quando houver persistência. | Uso de `localStorage` para dados temporários ou locais. |
| RNF-006 | O carregamento das páginas deve ser leve e adequado a conexões móveis. | Assets otimizados, CSS enxuto e JavaScript modular. |

## Estruturas de Dados

### Usuário Local

| Nome | Tipo | Descrição | Exemplo |
| :---: | --- | --- | --- |
| id | Texto | Identificador local do usuário | `usuario-001` |
| nome | Texto | Nome informado no cadastro | `Mariana Santos` |
| email | Texto | E-mail usado para login | `mariana@email.com` |
| senha | Texto | Senha armazenada localmente apenas para fins acadêmicos do protótipo | `123456` |

### Currículo

| Nome | Tipo | Descrição | Exemplo |
| :---: | --- | --- | --- |
| foto | Texto | Caminho ou base64 da imagem enviada | `foto-usuario.png` |
| cargo | Texto | Cargo pretendido | `Auxiliar Administrativo` |
| nome | Texto | Nome completo | `Carlos Henrique Silva` |
| email | Texto | E-mail de contato | `carlos@email.com` |
| telefone | Texto | Telefone de contato | `(31) 99999-9999` |
| endereco | Texto | Cidade, bairro ou endereço resumido | `Belo Horizonte - MG` |
| miniBio | Texto | Resumo profissional | `Profissional organizado, com experiência em atendimento.` |
| experiencias | Lista | Experiências profissionais cadastradas | `[{ cargo, empresa, periodo, descricao }]` |
| educacao | Lista | Formações e cursos cadastrados | `[{ curso, instituicao, periodo }]` |
| habilidades | Lista | Competências do usuário | `["Atendimento", "Organização"]` |

## Páginas Previstas

- `index.html`: landing page.
- `login.html`: login/cadastro.
- `foto.html`: envio ou pulo de foto.
- `detalhes.html`: dados pessoais e contato.
- `minibio.html`: resumo profissional.
- `experiencia.html`: experiências profissionais.
- `educacao.html`: formação acadêmica.
- `habilidades.html`: competências.
- `preview.html`: prévia final e download em PDF.

## Instruções de Acesso e Verificação

Após a implementação, o projeto poderá ser executado abrindo o arquivo `src/index.html` no navegador ou usando uma extensão de servidor local, como Live Server.

Para verificar o fluxo principal:

1. Acessar a landing page.
2. Clicar para começar o currículo.
3. Criar uma conta ou fazer login.
4. Enviar ou pular foto.
5. Preencher detalhes, mini-bio, experiência, educação e habilidades.
6. Conferir a prévia.
7. Baixar o currículo em PDF.
