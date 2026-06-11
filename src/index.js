// 1. LÓGICA DO CARROSSEL (Isolada para não quebrar)
(function() {
  const depoimentos = [
    {
      nome: "Mariana Silva",
      avaliacao: "★★★★★",
      texto: "O Elabore facilitou demais a criação do meu currículo. Interface intuitiva e rápida!"
    },
    {
      nome: "Rodrigo Santos",
      avaliacao: "★★★★☆",
      texto: "Muito bom! Consegui organizar minhas experiências de forma bem profissional em minutos."
    },
    {
      nome: "Beatriz Oliveira",
      avaliacao: "★★★★★",
      texto: "Excelente plataforma. O design dos modelos salvou minha apresentação para a vaga de estágio."
    }
  ];

  let indiceAtual = 0;

  window.addEventListener("DOMContentLoaded", () => {
    const cardDepoimento = document.getElementById("card-depoimento");
    const btnAnterior = document.getElementById("btn-anterior");
    const btnProximo = document.getElementById("btn-proximo");

    function mostrarDepoimento(index) {
      if (!cardDepoimento) return;
      const d = depoimentos[index];
      cardDepoimento.innerHTML = `
        <div class="estrelas" style="color: #f59e0b !important;">${d.avaliacao}</div>
        <p class="texto-depoimento" style="color: #000000 !important; font-weight: bold;">"${d.texto}"</p>
        <h4 class="nome-usuario" style="color: #000000 !important;">- ${d.nome}</h4>
      `;
    }

    if (cardDepoimento && btnAnterior && btnProximo) {
      btnProximo.onclick = function() {
        indiceAtual = (indiceAtual + 1) % depoimentos.length;
        mostrarDepoimento(indiceAtual);
      };

      btnAnterior.onclick = function() {
        indiceAtual = (indiceAtual - 1 + depoimentos.length) % depoimentos.length;
        mostrarDepoimento(indiceAtual);
      };
      
      // Inicializa o primeiro item controlado pelo JS
      mostrarDepoimento(indiceAtual);
    }
  });
})();

// 2. LÓGICA DE VERIFICAÇÃO DO USUÁRIO (Fica no final para segurança)
window.addEventListener("DOMContentLoaded", () => {
  try {
    const usuarioLogado = localStorage.getItem("usuarioNome");
    const btnPrincipal = document.getElementById("btn-principal");

    if (usuarioLogado && btnPrincipal) {
      btnPrincipal.textContent = `Continuar como ${usuarioLogado}`;
      btnPrincipal.setAttribute("href", "minibio.html"); 
    }
  } catch (erro) {
    console.log("Erro no localStorage:", erro);
  }
});
