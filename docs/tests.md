# Testes

Neste projeto serão realizados dois tipos de testes:

- **Teste de Software**, com abordagem de caixa preta, para verificar a conformidade do sistema com os requisitos funcionais e não funcionais.
- **Teste de Usabilidade**, para avaliar a qualidade da experiência de uso por pessoas com perfil semelhante ao público-alvo.

A documentação dos testes é dividida nas seguintes seções:

- [Plano de Testes de Software](#plano-de-testes-de-software)
- [Registro dos Testes de Software](#registro-dos-testes-de-software)
- [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
- [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
- [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
- [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

## Plano de Testes de Software

Os casos de teste abaixo cobrem o fluxo principal do e-LABORE, desde a landing page até o download do currículo.

| Caso de Teste | Procedimento | Requisitos associados | Resultado esperado | Dados de entrada |
| --- | --- | --- | --- | --- |
| CT01 - Acessar landing page | 1. Abrir `index.html`. 2. Conferir proposta do sistema. 3. Clicar em "Começar". | RF-001 | Usuário é direcionado para login/cadastro. | Nenhum |
| CT02 - Criar cadastro | 1. Acessar `login.html`. 2. Selecionar cadastro. 3. Informar nome, e-mail e senha. 4. Clicar em "Criar conta". | RF-002, RNF-004, RNF-005 | Conta local é criada e usuário segue para envio de foto. | Nome, e-mail válido e senha |
| CT03 - Fazer login | 1. Acessar `login.html`. 2. Informar e-mail e senha previamente cadastrados. 3. Clicar em "Entrar". | RF-002 | Usuário acessa o fluxo de criação do currículo. | E-mail e senha válidos |
| CT04 - Validar campos de login | 1. Acessar `login.html`. 2. Tentar entrar sem preencher dados obrigatórios. | RF-002, RNF-002, RNF-003 | Sistema exibe mensagem clara de validação. | Campos vazios ou e-mail inválido |
| CT05 - Enviar ou pular foto | 1. Acessar a etapa de foto. 2. Enviar imagem ou clicar em pular. | RF-003 | Usuário segue para detalhes pessoais sem bloqueio. | Arquivo de imagem ou nenhum |
| CT06 - Preencher detalhes pessoais | 1. Informar cargo, nome, e-mail, telefone e endereço. 2. Clicar em salvar e avançar. | RF-004, RF-009 | Dados aparecem na prévia do currículo. | Dados pessoais válidos |
| CT07 - Preencher mini-bio | 1. Informar resumo profissional. 2. Clicar em salvar e avançar. | RF-005, RF-009 | Mini-bio aparece na prévia. | Texto curto de apresentação |
| CT08 - Gerenciar experiências | 1. Adicionar experiência. 2. Editar registro. 3. Excluir registro. | RF-006, RF-009 | Lista de experiências é atualizada corretamente. | Cargo, empresa, período e descrição |
| CT09 - Gerenciar educação | 1. Adicionar formação. 2. Editar registro. 3. Excluir registro. | RF-007, RF-009 | Lista de educação é atualizada corretamente. | Curso, instituição e período |
| CT10 - Adicionar habilidades | 1. Inserir habilidades. 2. Conferir tags ou lista exibida. | RF-008, RF-009 | Habilidades aparecem no currículo. | Lista de competências |
| CT11 - Visualizar currículo | 1. Acessar prévia final. 2. Conferir dados preenchidos. | RF-009 | Currículo completo é exibido para revisão. | Dados preenchidos no fluxo |
| CT12 - Baixar PDF | 1. Acessar prévia final. 2. Clicar em "Baixar PDF". | RF-010 | Arquivo PDF é gerado para download. | Currículo preenchido |
| CT13 - Responsividade | 1. Abrir aplicação em larguras de 320px, tablet e desktop. 2. Navegar pelo fluxo. | RNF-001 | Layout se adapta sem sobreposição ou perda de conteúdo. | Diferentes tamanhos de tela |

## Registro dos Testes de Software

Esta seção deverá ser preenchida após a implementação. Para cada caso de teste executado, registrar evidência em vídeo, imagem ou descrição do resultado.

| Caso de Teste | Requisito Associado | Evidência | Resultado |
| --- | --- | --- | --- |
| CT01 - Acessar landing page | RF-001 | A preencher | A preencher |
| CT02 - Criar cadastro | RF-002 | A preencher | A preencher |
| CT03 - Fazer login | RF-002 | A preencher | A preencher |
| CT12 - Baixar PDF | RF-010 | A preencher | A preencher |

## Avaliação dos Testes de Software

Esta seção deverá ser preenchida após a execução dos testes. A avaliação deve destacar falhas encontradas, correções realizadas, limitações conhecidas e melhorias planejadas para as próximas iterações.

## Testes de Unidade Automatizados

Caso o grupo deseje aprofundar a validação, poderão ser criados testes automatizados para funções JavaScript, como:

- validação de e-mail;
- persistência local de usuário;
- persistência do currículo;
- adição e remoção de experiências;
- adição e remoção de educação;
- geração dos dados usados no PDF.

# Testes de Usabilidade

O objetivo dos testes de usabilidade é avaliar se pessoas do público-alvo conseguem compreender e executar o fluxo principal da aplicação com autonomia.

Foram definidos cenários relacionados às histórias de usuário e às principais tarefas do sistema. Os participantes devem representar perfis como: pessoa buscando recolocação, jovem em busca do primeiro emprego e usuário com baixa familiaridade digital.

## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
| --- | --- |
| 1 | Você precisa criar um currículo pelo celular. Acesse a plataforma, crie uma conta e inicie o preenchimento. |
| 2 | Você não possui uma foto profissional disponível. Pule a etapa de foto e continue preenchendo seu currículo. |
| 3 | Você está buscando seu primeiro emprego. Preencha seus dados, uma mini-bio, formação e habilidades. |
| 4 | Você já trabalhou anteriormente. Cadastre uma experiência profissional e confira se ela aparece na prévia. |
| 5 | Revise o currículo final e baixe o PDF. |

## Registro dos Testes de Usabilidade

Esta seção deverá ser preenchida após os testes com usuários.

| Cenário | Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão | Observações |
| --- | --- | --- | --- | --- | --- |
| 1 | A preencher | A preencher | A preencher | A preencher | A preencher |
| 2 | A preencher | A preencher | A preencher | A preencher | A preencher |
| 3 | A preencher | A preencher | A preencher | A preencher | A preencher |
| 4 | A preencher | A preencher | A preencher | A preencher | A preencher |
| 5 | A preencher | A preencher | A preencher | A preencher | A preencher |

## Avaliação dos Testes de Usabilidade

Esta seção deverá ser preenchida após a realização dos testes. A avaliação deve observar:

- se o login/cadastro foi compreendido;
- se o usuário conseguiu avançar pelas etapas;
- se os textos dos campos foram claros;
- se a prévia ajudou na compreensão do currículo;
- se houve dificuldade no download do PDF;
- se o layout funcionou bem em celular.
