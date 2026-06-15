// Executa o código assim que a página carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    renderizarPreviewCompleto();
    configurarBotaoPDF();
});

/* -------------------------------------------------------
   lerDados()
   Lê os dados da chave unificada do seu grupo
------------------------------------------------------- */
function lerDados() {
    var salvo = localStorage.getItem("curriculo");
    if (salvo) {
        return JSON.parse(salvo);
    }
    // Retorna vazio se não achar nada (evita quebrar o código)
    return { habilidades: {}, experiencias: [], educacao: [] };
}

/* -------------------------------------------------------
   renderizarPreviewCompleto()
   Puxa a lógica idêntica do grupo, mas renderiza na folha cheia
------------------------------------------------------- */
function renderizarPreviewCompleto() {
    var dados = lerDados();
    var preview = document.getElementById("preview-cv");
    var hab = dados.habilidades || {};

    /* Experiências (Usa estruturas de repetição - Critério H4b) */
    var expHtml = "";
    if (dados.experiencias) {
        dados.experiencias.forEach(function(exp) {
            expHtml +=
                '<div class="cv-item">'
              + '<div class="cv-item-titulo">' + escaparHtml(exp.cargo) + ', ' + escaparHtml(exp.empresa) + '</div>'
              + '<div class="cv-item-meta">' + escaparHtml(exp.inicio) + ' &ndash; ' + escaparHtml(exp.fim) + '</div>'
              + '</div>';
        });
    }

    /* Educação */
    var eduHtml = "";
    if (dados.educacao) {
        dados.educacao.forEach(function(edu) {
            eduHtml +=
                '<div class="cv-item">'
              + '<div class="cv-item-titulo">' + escaparHtml(edu.curso) + '</div>'
              + '<div class="cv-item-meta">' + escaparHtml(edu.instituicao || "") + (edu.ano ? " (" + escaparHtml(edu.ano) + ")" : "") + '</div>'
              + '</div>';
        });
    }

    /* Habilidades por categoria */
    var habHtml =
        '<div class="cv-hab-titulo">Ind&uacute;stria:</div>'
      + '<div class="cv-hab-lista">' + escaparHtml((hab.industria || []).join(", ")) + '</div>'
      + '<div class="cv-hab-titulo">Ferramentas:</div>'
      + '<div class="cv-hab-lista">' + escaparHtml((hab.ferramentas || []).join(", ")) + '</div>'
      + '<div class="cv-hab-titulo">Outras:</div>'
      + '<div class="cv-hab-lista">' + escaparHtml((hab.outras || []).join(", ")) + '</div>';

    // Montagem do HTML seguindo à risca a estrutura definida pelo seu grupo
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
      + '<div class="cv-rodape">'
      + '<div class="cv-col">'
      + '<div class="cv-sec-titulo">Educação</div>'
      + (eduHtml || '<span style="font-size:10px;color:#ccc;">Nenhuma formação.</span>')
      + '</div>'
      + '<div class="cv-col">'
      + '<div class="cv-sec-titulo ativo">Habilidades</div>'
      + habHtml
      + '</div>'
      + '</div>';
}

/* -------------------------------------------------------
   escaparHtml(texto)
------------------------------------------------------- */
function escaparHtml(texto) {
    return String(texto)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

/* -------------------------------------------------------
   CONFIGURAÇÃO DO DOWNLOAD DO PDF (API html2pdf)
------------------------------------------------------- */
function configurarBotaoPDF() {
    const botao = document.getElementById("btn-pdf");
    
    botao.addEventListener("click", () => {
        // Seleciona a div que simula a folha A4 para virar o PDF
        const alvo = document.getElementById("curriculo-conteudo");
        
        // Configurações finas do PDF para encaixe perfeito em folha de papel
        const opcoes = {
            margin:       12,
            filename:     'Curriculo_Profissional.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true }, // Mantém os textos nítidos
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        // Dispara o download automatizado client-side
        html2pdf().set(opcoes).from(alvo).save();
    });
}