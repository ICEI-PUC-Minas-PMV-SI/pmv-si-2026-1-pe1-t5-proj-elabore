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
            local: "",
            ano: "2013",
            destaques: ["Top 3% da classe GPA"]
        }
    ],
    habilidades: {
        industria: ["Design de Produto", "Interface de Usuário", "Experiência do Usuário", "Saas", "Ui/UX Design", "Prototipação", "Aplicação Mobile", "Agil", "User Flow"],
        ferramentas: ["Figma", "Sketch", "Protopie", "Framer", "Invision", "Abstract", "Zeplin"],
        outras: ["HTML", "CSS3", "jQuery"]
    }
};


/* -------------------------------------------------------
   lerDados()
   Lê os dados do localStorage.
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
   renderizarCategoria(categoria)
   Recria as tags visuais de uma categoria
   dentro da sua .tags-area correspondente.
   Parâmetro: "industria", "ferramentas" ou "outras".
------------------------------------------------------- */
function renderizarCategoria(categoria) {
    var dados = lerDados();
    var lista = dados.habilidades[categoria] || [];
    var area = document.getElementById("area-" + categoria);
    var input = document.getElementById("input-" + categoria);

    /* Remove as tags antigas mantendo o input no lugar */
    var tagsAntigas = area.querySelectorAll(".tag");
    tagsAntigas.forEach(function(tag) { tag.remove(); });

    /* Cria uma tag visual para cada habilidade salva */
    lista.forEach(function(habilidade) {
        var tag = document.createElement("span");
        tag.className = "tag";

        /* O botão × chama removerHabilidade com o nome exato da habilidade */
        tag.innerHTML =
            escaparHtml(habilidade)
          + '<button class="tag-remover" title="Remover" onclick="removerHabilidade(\'' + categoria + '\', ' + JSON.stringify(habilidade) + ')">&times;</button>';

        /* Insere a tag antes do input (o input fica sempre ao final) */
        area.insertBefore(tag, input);
    });
}


/* -------------------------------------------------------
   renderizarTodas()
   Renderiza as três categorias de uma vez
   e atualiza o preview do currículo.
------------------------------------------------------- */
function renderizarTodas() {
    renderizarCategoria("industria");
    renderizarCategoria("ferramentas");
    renderizarCategoria("outras");
    renderizarPreview();
}


/* -------------------------------------------------------
   adicionarHabilidade(categoria, valor)
   Adiciona uma nova habilidade à categoria
   informada e salva no localStorage.
------------------------------------------------------- */
function adicionarHabilidade(categoria, valor) {
    valor = valor.trim();
    if (valor === "") return;

    var dados = lerDados();
    var lista = dados.habilidades[categoria] || [];

    /* Checa duplicatas ignorando diferença de maiúsculas */
    var jaExiste = lista.some(function(h) {
        return h.toLowerCase() === valor.toLowerCase();
    });

    if (!jaExiste) {
        lista.push(valor);
        dados.habilidades[categoria] = lista;
        salvarDados(dados);
    }

    /* Limpa o campo de texto após adicionar */
    document.getElementById("input-" + categoria).value = "";
    renderizarTodas();
}


/* -------------------------------------------------------
   removerHabilidade(categoria, valor)
   Remove a habilidade com o valor exato informado.
------------------------------------------------------- */
function removerHabilidade(categoria, valor) {
    var dados = lerDados();
    dados.habilidades[categoria] = (dados.habilidades[categoria] || []).filter(function(h) {
        return h !== valor;
    });
    salvarDados(dados);
    renderizarTodas();
}


/* -------------------------------------------------------
   aoApertarTecla(evento, categoria)
   Detecta teclas no input de cada categoria:
   — Enter ou vírgula → adiciona a habilidade digitada
   — Backspace com campo vazio → remove a última tag
------------------------------------------------------- */
function aoApertarTecla(evento, categoria) {
    var input = evento.target;

    if (evento.key === "Enter" || evento.key === ",") {
        evento.preventDefault();
        /* Remove a vírgula caso faça parte do valor digitado */
        adicionarHabilidade(categoria, input.value.replace(/,$/, ""));
    }

    if (evento.key === "Backspace" && input.value === "") {
        var dados = lerDados();
        var lista = dados.habilidades[categoria] || [];
        if (lista.length > 0) {
            /* Remove o último item da lista */
            lista.pop();
            dados.habilidades[categoria] = lista;
            salvarDados(dados);
            renderizarTodas();
        }
    }
}


/* -------------------------------------------------------
   focarInput(id)
   Coloca o foco no input da categoria clicada.
   Chamado quando o usuário clica na .tags-area.
------------------------------------------------------- */
function focarInput(id) {
    document.getElementById(id).focus();
}


/* -------------------------------------------------------
   renderizarPreview()
   Monta o mini-currículo e destaca a seção
   de Habilidades (que está sendo editada agora).
------------------------------------------------------- */
function renderizarPreview() {
    var dados = lerDados();
    var preview = document.getElementById("preview-cv");
    var hab = dados.habilidades;

    /* Experiências resumidas */
    var expHtml = "";
    dados.experiencias.forEach(function(exp) {
        expHtml +=
            '<div class="cv-item">'
          + '<div class="cv-item-titulo">' + escaparHtml(exp.cargo) + ', ' + escaparHtml(exp.empresa) + '</div>'
          + '<div class="cv-item-meta">' + escaparHtml(exp.inicio) + ' &ndash; ' + escaparHtml(exp.fim) + '</div>'
          + '</div>';
    });

    /* Educação resumida */
    var eduHtml = "";
    dados.educacao.forEach(function(edu) {
        eduHtml +=
            '<div class="cv-item">'
          + '<div class="cv-item-titulo">' + escaparHtml(edu.curso) + '</div>'
          + '<div class="cv-item-meta">' + escaparHtml(edu.instituicao || "") + (edu.ano ? " (" + escaparHtml(edu.ano) + ")" : "") + '</div>'
          + '</div>';
    });

    /* Habilidades por categoria */
    var habHtml =
        '<div class="cv-hab-titulo">Ind&uacute;stria:</div>'
      + '<div class="cv-hab-lista">' + escaparHtml((hab.industria || []).slice(0, 6).join(", ")) + '</div>'
      + '<div class="cv-hab-titulo">Ferramentas:</div>'
      + '<div class="cv-hab-lista">' + escaparHtml((hab.ferramentas || []).slice(0, 5).join(", ")) + '</div>'
      + '<div class="cv-hab-titulo">Outras:</div>'
      + '<div class="cv-hab-lista">' + escaparHtml((hab.outras || []).join(", ")) + '</div>';

    preview.innerHTML =
        '<div class="cv-header">'
      + '<img class="cv-foto" src="https://i.pravatar.cc/80?img=11" alt="Foto">'
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
      /* Rodapé: Educação à esquerda e Habilidades à direita (ativa) */
      + '<div class="cv-rodape">'
      + '<div class="cv-col">'
      + '<div class="cv-sec-titulo">Educação</div>'
      + (eduHtml || '<span style="font-size:6px;color:#ccc;">Nenhuma formação.</span>')
      + '</div>'
      + '<div class="cv-col">'
      + '<div class="cv-sec-titulo ativo">Habilidades</div>'
      + habHtml
      + '</div>'
      + '</div>';
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


/* -------------------------------------------------------
   INICIALIZAÇÃO
------------------------------------------------------- */
if (!localStorage.getItem("curriculo")) {
    salvarDados(JSON.parse(JSON.stringify(dadosPadrao)));
}

renderizarTodas();
