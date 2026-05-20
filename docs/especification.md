# Especificações do Projeto

Este documento apresenta a definição do problema e da solução a partir da perspectiva do usuário. A especificação do e-LABORE foi construída com base na contextualização do público-alvo, no fluxo de criação de currículo e nas funcionalidades previstas para a aplicação web.

As técnicas utilizadas nesta etapa foram: definição de personas, elaboração de histórias de usuário, identificação de requisitos funcionais e não funcionais, e registro das restrições técnicas do projeto.

## Personas

### Persona 1: Carlos Henrique

Carlos Henrique tem 38 anos, ensino médio completo e trabalha de forma informal como auxiliar de serviços gerais. Está buscando uma oportunidade com carteira assinada, mas tem dificuldade para organizar suas experiências em um currículo profissional. Acessa a internet pelo celular e não costuma usar editores de texto.

**Necessidades:** criar um currículo simples, claro e bem formatado pelo celular.

**Dores:** insegurança para preencher campos, dificuldade com ferramentas complexas e pouco domínio de formatação.

### Persona 2: Mariana Santos

Mariana Santos tem 19 anos e está procurando o primeiro emprego. Concluiu o ensino médio recentemente, fez cursos livres e participou de atividades voluntárias, mas não sabe como valorizar essas informações em um currículo.

**Necessidades:** receber orientação sobre o que preencher mesmo sem experiência profissional formal.

**Dores:** medo de deixar o currículo vazio e falta de exemplos acessíveis.

### Persona 3: Ana Paula Ribeiro

Ana Paula tem 44 anos, já trabalhou muitos anos no comércio e está tentando se recolocar no mercado. Tem experiência prática, mas não atualiza seu currículo há bastante tempo e não acompanha os modelos atuais.

**Necessidades:** montar um currículo atualizado, objetivo e pronto para envio em PDF.

**Dores:** dificuldade para adaptar experiências antigas a um formato atual e falta de familiaridade com plataformas digitais.

## Histórias de Usuários

Com base nas personas, foram identificadas as seguintes histórias de usuário:

| EU COMO... | QUERO/PRECISO... | PARA... |
| --- | --- | --- |
| Usuário visitante | visualizar a proposta da plataforma na landing page | entender rapidamente se a ferramenta atende minha necessidade |
| Usuário do sistema | criar uma conta ou acessar uma conta existente | iniciar o preenchimento do currículo e manter a continuidade da experiência |
| Usuário com pouca familiaridade digital | seguir um fluxo guiado por etapas | preencher o currículo sem me perder no processo |
| Usuário sem foto profissional | poder pular o envio de foto | continuar criando meu currículo mesmo sem imagem disponível |
| Usuário em busca de emprego | preencher dados pessoais, contato e cargo desejado | montar a base do currículo |
| Jovem em busca do primeiro emprego | preencher uma mini-bio com orientação | apresentar meu perfil mesmo sem experiência formal |
| Profissional com experiência | cadastrar múltiplas experiências profissionais | valorizar minha trajetória de trabalho formal ou informal |
| Usuário em formação | cadastrar escolaridade, cursos e instituições | mostrar minha formação acadêmica ou técnica |
| Usuário com habilidades práticas | destacar competências em formato simples | complementar o currículo com conhecimentos relevantes |
| Usuário revisando o documento | visualizar uma prévia do currículo em tempo real | conferir as informações antes de baixar |
| Usuário final | baixar o currículo em PDF | enviar ou imprimir o documento para processos seletivos |

## Requisitos

As tabelas a seguir apresentam os requisitos funcionais e não funcionais que detalham o escopo da solução.

### Requisitos Funcionais

| ID | Descrição do Requisito | Prioridade |
| --- | --- | --- |
| RF-001 | A aplicação deve apresentar uma landing page com a proposta do e-LABORE e chamada para iniciar o currículo. | ALTA |
| RF-002 | A aplicação deve permitir login e cadastro simples do usuário antes do início do preenchimento do currículo. | ALTA |
| RF-003 | A aplicação deve permitir envio de foto do usuário, com opção de pular essa etapa. | MÉDIA |
| RF-004 | A aplicação deve permitir o preenchimento de dados pessoais e de contato. | ALTA |
| RF-005 | A aplicação deve permitir o preenchimento de mini-bio ou resumo profissional. | ALTA |
| RF-006 | A aplicação deve permitir cadastro, edição e remoção de experiências profissionais. | ALTA |
| RF-007 | A aplicação deve permitir cadastro, edição e remoção de formações acadêmicas ou cursos. | ALTA |
| RF-008 | A aplicação deve permitir cadastro de habilidades e competências. | MÉDIA |
| RF-009 | A aplicação deve exibir pré-visualização do currículo durante o preenchimento. | ALTA |
| RF-010 | A aplicação deve permitir geração e download do currículo em PDF. | ALTA |

### Requisitos Não Funcionais

| ID | Descrição do Requisito | Prioridade |
| --- | --- | --- |
| RNF-001 | A aplicação deve ser responsiva para celular, tablet e desktop. | ALTA |
| RNF-002 | A aplicação deve utilizar linguagem simples e elementos visuais claros para usuários com baixa familiaridade digital. | ALTA |
| RNF-003 | A interface deve apresentar bom contraste, legibilidade e navegação acessível. | ALTA |
| RNF-004 | A aplicação deve funcionar como projeto estático, sem módulo de backend. | ALTA |
| RNF-005 | Dados necessários ao fluxo, como login local e currículo em edição, devem ser tratados no navegador quando houver persistência. | MÉDIA |
| RNF-006 | O carregamento das páginas deve ser leve e adequado a conexões móveis. | MÉDIA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID | Restrição |
| --- | --- |
| 01 | O projeto deverá ser entregue até o final do semestre. |
| 02 | Não pode ser desenvolvido um módulo de backend. |
| 03 | O login/cadastro deve ser implementado apenas no front-end, com persistência local se necessário. |
| 04 | O sistema deve priorizar a criação de currículo em um fluxo simples e guiado, evitando funcionalidades secundárias que aumentem a complexidade. |
| 05 | A interface deve ser projetada primeiro para uso em dispositivos móveis. |
