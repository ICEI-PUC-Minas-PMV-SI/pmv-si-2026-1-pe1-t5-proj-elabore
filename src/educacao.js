/* -------------------------------------------------------
   DADOS PADRÃO
------------------------------------------------------- */
var dadosPadrao = {
    nome: "Maksud Alam",
    titulo: "Designer de Produto Sénior",
    cidade: "Daca, Bangladesh",
    telefone: "+880 123 456 7890",
    email: "maksud@musemind.agency",
    bio: "Sou Designer de Produto Sénior na Musemind, criando experiências significativas para clientes.",
    experiencias: [
        {
            id: 1,
            cargo: "Designer de Produto Sénior",
            empresa: "Musemind Agency",
            local: "Daca, Bangladesh",
            inicio: "02/2021",
            fim: "Presente",
            atividades: ["Desenhei soluções visuais de alta fidelidade."]
        }
    ],
    educacao: [
        {
            id: 1,
            curso: "BFA Design Industrial",
            instituicao: "Instituto Rhode Island",
            local: "Providence, RI",
            ano: "2013",
            destaques: ["Top 3% da classe GPA"]
        },
        {
            id: 2,
            curso: "Destaque SAT",
            instituicao: "Estado de Ohio",
            local: "",
            ano: "2016",
            destaques: ["Top 3% da classe GPA"]
        }
    ],
    habilidades: { industria: [], ferramentas: [], outras: [] }
};


/* -------------------------------------------------------
   lerDados()
   Lê os dados do localStorage. Se estiver vazio,
   retorna uma cópia dos dados padrão.
------------------------------------------------------- */
function lerDados() {
    var salvo = localStorage.getItem("curriculo");
    if (salvo) {
        return JSON.parse(salvo);
    }
    return JSON.parse(JSON.stringify(dadosPadrao));
}


/* -------------------------------------------------------
   salvarDados(dados)
   Grava os dados no localStorage.
------------------------------------------------------- */
function salvarDados(dados) {
    localStorage.setItem("curriculo", JSON.stringify(dados));
}


/* -------------------------------------------------------
   renderizarLista()
   Lê as formações salvas e exibe cada uma
   como um card. Também atualiza o preview.
------------------------------------------------------- */
function renderizarLista() {
    var dados = lerDados();
    var container = document.getElementById("lista-educacao");

    container.innerHTML = "";

    dados.educacao.forEach(function(edu) {

        /* Monta a linha de metadados ignorando campos vazios */
        var partes = [];
        if (edu.instituicao) partes.push(edu.instituicao);
        if (edu.local) partes.push(edu.local);
        if (edu.ano) partes.push(edu.ano);
        var metaTxt = partes.join(" &bull; ");

        /* Monta os itens de destaque */
        var destaquesHtml = "";
        edu.destaques.forEach(function(d) {
            destaquesHtml += "<li>" + escaparHtml(d) + "</li>";
        });

        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML =
            '<div class="card-acoes">'
          + '<button class="btn-icone" title="Editar" onclick="abrirModalEdicao(' + edu.id + ')">'
          + iconeLapis()
          + '</button>'
          + '<button class="btn-icone deletar" title="Excluir" onclick="excluirFormacao(' + edu.id + ')">'
          + iconeLixo()
          + '</button>'
          + '</div>'
          + '<div class="card-titulo">' + escaparHtml(edu.curso) + '</div>'
          + '<div class="card-meta">' + metaTxt + '</div>'
          + '<ul class="card-bullets">' + destaquesHtml + '</ul>';

        container.appendChild(card);
    });

    renderizarPreview();
}


/* -------------------------------------------------------
   renderizarPreview()
   Monta o mini-currículo com os dados salvos
   e destaca visualmente a seção de Educação.
------------------------------------------------------- */
function renderizarPreview() {
    var dados = lerDados();
    var preview = document.getElementById("preview-cv");
    var fotoSrc = escaparHtml(dados.foto || "https://i.pravatar.cc/80?img=11");

    /* Monta as experiências (resumidas) */
    var expHtml = "";
    dados.experiencias.forEach(function(exp) {
        expHtml +=
            '<div class="cv-item">'
          + '<div class="cv-item-titulo">' + escaparHtml(exp.cargo) + ', ' + escaparHtml(exp.empresa) + '</div>'
          + '<div class="cv-item-meta">' + escaparHtml(exp.inicio) + ' &ndash; ' + escaparHtml(exp.fim) + '</div>'
          + '</div>';
    });

    /* Monta a educação — esta é a seção ativa nesta página */
    var eduHtml = "";
    dados.educacao.forEach(function(edu) {
        var dHtml = "";
        if (edu.destaques.length > 0) {
            dHtml = "<li>" + escaparHtml(edu.destaques[0]) + "</li>";
        }
        eduHtml +=
            '<div class="cv-item">'
          + '<div class="cv-item-titulo">' + escaparHtml(edu.curso) + (edu.ano ? " &mdash; " + escaparHtml(edu.ano) : "") + '</div>'
          + '<div class="cv-item-meta">' + escaparHtml(edu.instituicao || "") + '</div>'
          + '<ul>' + dHtml + '</ul>'
          + '</div>';
    });

    if (eduHtml === "") {
        eduHtml = '<span class="cv-empty">Nenhuma formação cadastrada.</span>';
    }

    preview.innerHTML =
        '<div class="cv-header">'
      + '<img class="cv-foto" src="' + fotoSrc + '" alt="Foto">'
      + '<div>'
      + '<div class="cv-nome">' + escaparHtml(dados.nome || "Seu Nome") + '</div>'
      + '<div class="cv-cargo-txt">' + escaparHtml(dados.titulo || "Seu Cargo") + '</div>'
      + '</div>'
      + '<div class="cv-contato">'
      + escaparHtml(dados.cidade || "") + '<br>'
      + escaparHtml(dados.telefone || "") + '<br>'
      + escaparHtml(dados.email || "")
      + '</div>'
      + '</div>'
      + '<div class="cv-secao">'
      + '<div class="cv-label-col"><div class="cv-label">SOBRE</div></div>'
      + '<div class="cv-corpo"><div class="cv-bio">' + escaparHtml(dados.bio || "") + '</div></div>'
      + '</div>'
      + (expHtml !== ""
          ? '<div class="cv-secao">'
          + '<div class="cv-label-col"><div class="cv-label">EXP.</div></div>'
          + '<div class="cv-corpo">'
          + '<div class="cv-sec-titulo">Experiência</div>'
          + expHtml
          + '</div>'
          + '</div>'
          : "")
      + '<div class="cv-secao">'
      + '<div class="cv-label-col"><div class="cv-label">EDU.</div></div>'
      + '<div class="cv-corpo">'
      + '<div class="cv-sec-titulo ativo">Educação</div>'
      + eduHtml
      + '</div>'
      + '</div>';
}


/* -------------------------------------------------------
   Variável de controle do modal.
------------------------------------------------------- */
var idEmEdicao = null;


/* -------------------------------------------------------
   abrirModal()
   Abre o modal com campos em branco para
   adicionar uma nova formação.
------------------------------------------------------- */
function abrirModal() {
    idEmEdicao = null;
    document.getElementById("modal-titulo").textContent = "Adicionar Educação";
    document.getElementById("campo-curso").value = "";
    document.getElementById("campo-instituicao").value = "";
    document.getElementById("campo-local").value = "";
    document.getElementById("campo-ano").value = "";
    document.getElementById("campo-destaques").value = "";
    document.getElementById("modal-fundo").classList.add("aberto");
    document.getElementById("campo-curso").focus();
}


/* -------------------------------------------------------
   abrirModalEdicao(id)
   Abre o modal já preenchido com os dados
   da formação cujo ID foi passado.
------------------------------------------------------- */
function abrirModalEdicao(id) {
    var dados = lerDados();
    var edu = dados.educacao.find(function(e) { return e.id === id; });
    if (!edu) return;

    idEmEdicao = id;
    document.getElementById("modal-titulo").textContent = "Editar Educação";
    document.getElementById("campo-curso").value = edu.curso;
    document.getElementById("campo-instituicao").value = edu.instituicao || "";
    document.getElementById("campo-local").value = edu.local || "";
    document.getElementById("campo-ano").value = edu.ano || "";
    document.getElementById("campo-destaques").value = edu.destaques.join("\n");
    document.getElementById("modal-fundo").classList.add("aberto");
    document.getElementById("campo-curso").focus();
}


/* -------------------------------------------------------
   fecharModal()
   Fecha o modal.
------------------------------------------------------- */
function fecharModal() {
    document.getElementById("modal-fundo").classList.remove("aberto");
    idEmEdicao = null;
}


/* -------------------------------------------------------
   fecharAoClicarFora(evento)
   Fecha o modal ao clicar no fundo escuro.
------------------------------------------------------- */
function fecharAoClicarFora(evento) {
    if (evento.target === document.getElementById("modal-fundo")) {
        fecharModal();
    }
}


/* -------------------------------------------------------
   salvarFormacao()
   Lê os campos do modal e salva a formação
   (nova ou editada) no localStorage.
------------------------------------------------------- */
function salvarFormacao() {
    var curso = document.getElementById("campo-curso").value.trim();
    var instituicao = document.getElementById("campo-instituicao").value.trim();
    var local = document.getElementById("campo-local").value.trim();
    var ano = document.getElementById("campo-ano").value.trim();
    var textoD = document.getElementById("campo-destaques").value.trim();

    if (!curso) {
        alert("Preencha o nome do curso ou formação.");
        return;
    }

    /* Cada linha do textarea vira um destaque */
    var destaques = textoD
        .split("\n")
        .map(function(linha) { return linha.trim(); })
        .filter(function(linha) { return linha !== ""; });

    var dados = lerDados();

    if (idEmEdicao !== null) {
        var indice = dados.educacao.findIndex(function(e) { return e.id === idEmEdicao; });
        if (indice !== -1) {
            dados.educacao[indice] = {
                id: idEmEdicao, curso: curso, instituicao: instituicao,
                local: local, ano: ano, destaques: destaques
            };
        }
    } else {
        dados.educacao.push({
            id: Date.now(), curso: curso, instituicao: instituicao,
            local: local, ano: ano, destaques: destaques
        });
    }

    salvarDados(dados);
    fecharModal();
    renderizarLista();
}


/* -------------------------------------------------------
   excluirFormacao(id)
   Remove a formação com o ID informado.
------------------------------------------------------- */
function excluirFormacao(id) {
    if (!confirm("Deseja remover esta formação?")) return;
    var dados = lerDados();
    dados.educacao = dados.educacao.filter(function(e) { return e.id !== id; });
    salvarDados(dados);
    renderizarLista();
}


/* -------------------------------------------------------
   escaparHtml(texto)
   Evita que caracteres HTML especiais quebrem a página.
------------------------------------------------------- */
function escaparHtml(texto) {
    return String(texto)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function iconeLapis() {
    return '<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">'
         + '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>'
         + '<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'
         + '</svg>';
}

function iconeLixo() {
    return '<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">'
         + '<polyline points="3 6 5 6 21 6"/>'
         + '<path d="M19 6l-1 14H6L5 6"/>'
         + '<path d="M10 11v6M14 11v6"/>'
         + '<path d="M9 6V4h6v2"/>'
         + '</svg>';
}


/* -------------------------------------------------------
   INICIALIZAÇÃO
------------------------------------------------------- */
if (!localStorage.getItem("curriculo")) {
    salvarDados(JSON.parse(JSON.stringify(dadosPadrao)));
}

renderizarLista();
