# Testes

Neste projeto são considerados dois tipos de testes:

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
| CT05 - Enviar ou pular foto | 1. Acessar `foto.html`. 2. Enviar imagem ou clicar em pular. | RF-003 | Usuário segue para detalhes pessoais sem bloqueio. | Arquivo de imagem ou nenhum |
| CT06 - Preencher detalhes pessoais | 1. Informar cargo, nome, e-mail, telefone e endereço. 2. Clicar em salvar e avançar. | RF-004, RF-009 | Dados aparecem na prévia do currículo e são salvos localmente. | Dados pessoais válidos |
| CT07 - Preencher mini-bio | 1. Informar resumo profissional. 2. Clicar em salvar e avançar. | RF-005, RF-009 | Mini-bio aparece na prévia e é salva no navegador. | Texto curto de apresentação |
| CT08 - Gerenciar experiências | 1. Acessar `experiencias.html`. 2. Adicionar experiência. 3. Editar registro. 4. Excluir registro. | RF-006, RF-009 | Lista de experiências é atualizada corretamente e refletida na prévia. | Cargo, empresa, período e descrição |
| CT09 - Gerenciar educação | 1. Acessar `educacao.html`. 2. Adicionar formação. 3. Editar registro. 4. Excluir registro. | RF-007, RF-009 | Lista de educação é atualizada corretamente e refletida na prévia. | Curso, instituição e período |
| CT10 - Adicionar habilidades | 1. Acessar `habilidades.html`. 2. Inserir habilidades nas categorias. 3. Conferir tags ou lista exibida. | RF-008, RF-009 | Habilidades aparecem no currículo e são salvas localmente. | Lista de competências |
| CT11 - Visualizar currículo | 1. Acessar `preview.html`. 2. Conferir dados preenchidos. | RF-009 | Currículo completo é exibido para revisão. | Dados preenchidos no fluxo |
| CT12 - Baixar PDF | 1. Acessar `preview.html`. 2. Clicar em "Baixar Currículo em PDF". | RF-010 | Arquivo PDF é gerado para download. | Currículo preenchido |
| CT13 - Responsividade | 1. Abrir aplicação em larguras de 320px, tablet e desktop. 2. Navegar pelo fluxo. | RNF-001 | Layout se adapta sem sobreposição ou perda de conteúdo. | Diferentes tamanhos de tela |

## Registro dos Testes de Software

O registro abaixo documenta a validação funcional do protótipo atual e indica evidências que podem ser reproduzidas pela equipe durante a apresentação ou revisão do projeto.

| Caso de Teste | Requisito Associado | Evidência | Resultado |
| --- | --- | --- | --- |
| CT01 - Acessar landing page | RF-001 | `src/index.html` contém a tela inicial e direcionamento para o fluxo. | Atendido |
| CT02 - Criar cadastro | RF-002, RNF-004, RNF-005 | `src/login.html` e `src/telas2a4.js` registram usuários em `localStorage` na chave `usuariosElabore`. | Atendido |
| CT03 - Fazer login | RF-002 | `src/telas2a4.js` valida e-mail/senha salvos e redireciona o usuário para o fluxo. | Atendido |
| CT04 - Validar campos de login | RF-002, RNF-002, RNF-003 | O script exibe mensagens como "Email/nome já existente!" e "Senha/nome/email incorretos!". | Atendido |
| CT05 - Enviar ou pular foto | RF-003 | `src/foto.html` permite upload ou avanço sem foto. A imagem enviada é salva em `curriculo.foto`. | Atendido |
| CT06 - Preencher detalhes pessoais | RF-004, RF-009 | `src/detalhes.html` atualiza a prévia e salva nome, título, telefone, e-mail e cidade. | Atendido |
| CT07 - Preencher mini-bio | RF-005, RF-009 | `src/minibio.html` atualiza a prévia e grava o campo `bio` no objeto `curriculo`. | Atendido |
| CT08 - Gerenciar experiências | RF-006, RF-009 | `src/experiencias.html` e `src/experiencias.js` criam, editam, removem e exibem registros de experiência. | Atendido |
| CT09 - Gerenciar educação | RF-007, RF-009 | `src/educacao.html` e `src/educacao.js` criam, editam, removem e exibem formações. | Atendido |
| CT10 - Adicionar habilidades | RF-008, RF-009 | `src/habilidades.html` e `src/habilidades.js` adicionam tags por categoria e atualizam a prévia. | Atendido |
| CT11 - Visualizar currículo | RF-009 | `src/preview.html` e `src/preview.js` exibem a versão final do currículo. | Atendido |
| CT12 - Baixar PDF | RF-010 | `src/preview.html` utiliza `html2pdf.js` para gerar o arquivo `Curriculo_Profissional.pdf`. | Atendido |
| CT13 - Responsividade | RNF-001 | `css2a4.css`, `builder.css` e `preview.css` possuem regras responsivas para telas menores. | Atendido com observação de revisão visual em dispositivos reais |

## Avaliação dos Testes de Software

A validação documental indica que os principais requisitos funcionais estão cobertos por telas e scripts do protótipo. O fluxo de cadastro, preenchimento do currículo, persistência local, pré-visualização e download em PDF possui artefatos implementados.

As principais correções já consideradas no projeto foram:

- padronização da navegação por etapas;
- uso de `localStorage` para usuários, currículo e etapa liberada;
- mensagens de validação para login/cadastro;
- uso de exemplos brasileiros nos dados do currículo;
- ajuste visual da prévia do currículo nas etapas finais;
- uso da foto salva no currículo também na prévia final e no PDF.

Limitações conhecidas:

- o login/cadastro é local e não possui segurança de backend, pois o escopo do projeto é front-end;
- a geração de PDF depende da biblioteca client-side `html2pdf.js`;
- a responsividade deve ser conferida visualmente em navegadores e dispositivos diferentes antes da entrega final.

## Testes de Unidade Automatizados

O projeto ainda não possui suíte automatizada de testes, mas as seguintes funções podem ser testadas em uma evolução futura:

- validação de e-mail;
- formatação de telefone;
- persistência local de usuário;
- persistência do currículo;
- adição e remoção de experiências;
- adição e remoção de educação;
- adição e remoção de habilidades;
- montagem dos dados usados na prévia e no PDF.

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

O quadro abaixo registra a aplicação dos cenários sobre personas representativas do projeto. Ele serve como base para execução com usuários reais e evita que a documentação fique com campos em aberto.

| Cenário | Usuário representado | Taxa de sucesso esperada | Satisfação subjetiva esperada | Tempo estimado para conclusão | Observações |
| --- | --- | --- | --- | --- | --- |
| 1 | Carlos Henrique, 38 anos, baixa familiaridade digital | Alta, se a chamada inicial e o cadastro forem compreendidos | Boa | 3 a 5 minutos | O fluxo linear e os botões principais devem reduzir dúvidas no início. |
| 2 | Mariana Santos, 19 anos, sem foto profissional | Alta | Boa | 1 a 2 minutos | A opção de pular foto evita bloqueio e mantém a usuária no fluxo. |
| 3 | Mariana Santos, jovem em busca do primeiro emprego | Média a alta | Boa | 8 a 12 minutos | As sugestões de mini-bio e campos simples ajudam a preencher mesmo sem experiência formal. |
| 4 | Ana Paula Ribeiro, 44 anos, em recolocação | Média a alta | Boa | 5 a 8 minutos | Cards de experiência com editar/excluir facilitam correções. |
| 5 | Usuário final revisando currículo | Alta | Boa | 2 a 4 minutos | A prévia final e o botão de PDF tornam a conclusão objetiva. |

## Avaliação dos Testes de Usabilidade

A análise dos cenários indica que o e-LABORE atende ao objetivo de guiar o usuário em etapas curtas e previsíveis. A navegação por páginas, os botões de voltar/avançar e a prévia do currículo ajudam o usuário a entender o progresso do preenchimento.

Pontos positivos esperados:

- o login/cadastro possui poucos campos e mensagens claras;
- a etapa de foto é opcional;
- os formulários dividem o currículo em partes compreensíveis;
- a prévia em tempo real reduz insegurança sobre o resultado;
- o download em PDF aparece como ação final clara.

Pontos de atenção para validação com usuários reais:

- conferir se usuários com baixa familiaridade digital entendem a diferença entre login e cadastro;
- verificar se os campos de experiência e educação são claros para quem possui trajetória informal;
- testar o fluxo em celular, especialmente nas etapas com formulários maiores;
- observar se o usuário percebe que os dados são salvos no navegador;
- confirmar se o arquivo PDF gerado atende à expectativa visual do usuário.
