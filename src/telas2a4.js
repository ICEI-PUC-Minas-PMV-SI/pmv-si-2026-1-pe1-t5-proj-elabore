(function () {
  const CURRICULO_KEY = "curriculo";
  const USUARIOS_KEY = "usuariosElabore";
  const ETAPA_KEY = "curriculoEtapaLiberada";
  const ETAPAS = [
    "detalhes.html",
    "minibio.html",
    "experiencias.html",
    "educacao.html",
    "habilidades.html",
    "preview.html",
  ];

  const curriculoPadrao = {
    nome: "Ana Paula Santos",
    titulo: "Analista de Marketing Digital",
    cidade: "Belo Horizonte, MG",
    telefone: "(31) 99876-5432",
    email: "ana.santos@email.com",
    bio: "Trabalho com marketing digital, organização de campanhas e acompanhamento de resultados para melhorar a comunicação com clientes.",
    foto: "",
    experiencias: [],
    educacao: [],
    habilidades: {
      industria: [],
      ferramentas: [],
      outras: [],
    },
  };

  const exemploAntigo = {
    nome: "Maksud Alam",
    titulo: "Designer de Produto Senior",
    cidade: "Daca, Bangladesh",
    telefone: "+880 123 456 7890",
    email: "maksud@musemind.agency",
  };

  function parseJson(valor, fallback) {
    try {
      return valor ? JSON.parse(valor) : fallback;
    } catch (erro) {
      return fallback;
    }
  }

  function lerCurriculo() {
    const salvo = parseJson(localStorage.getItem(CURRICULO_KEY), {});
    const dados = {
      ...curriculoPadrao,
      ...salvo,
      experiencias: Array.isArray(salvo.experiencias) ? salvo.experiencias : [],
      educacao: Array.isArray(salvo.educacao) ? salvo.educacao : [],
      habilidades: {
        ...curriculoPadrao.habilidades,
        ...(salvo.habilidades || {}),
      },
    };

    if (dados.nome === exemploAntigo.nome || dados.cidade === exemploAntigo.cidade || dados.telefone === exemploAntigo.telefone || dados.email === exemploAntigo.email) {
      if (dados.nome === exemploAntigo.nome) dados.nome = curriculoPadrao.nome;
      if (dados.titulo === exemploAntigo.titulo) dados.titulo = curriculoPadrao.titulo;
      if (dados.cidade === exemploAntigo.cidade) dados.cidade = curriculoPadrao.cidade;
      if (dados.telefone === exemploAntigo.telefone) dados.telefone = curriculoPadrao.telefone;
      if (dados.email === exemploAntigo.email) dados.email = curriculoPadrao.email;
      dados.bio = curriculoPadrao.bio;
    }

    return dados;
  }

  function salvarCurriculo(dados) {
    localStorage.setItem(CURRICULO_KEY, JSON.stringify(dados));
  }

  function lerUsuarios() {
    const usuarios = parseJson(localStorage.getItem(USUARIOS_KEY), []);
    return Array.isArray(usuarios) ? usuarios : [];
  }

  function salvarUsuarios(usuarios) {
    localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios));
  }

  function paginaAtual() {
    return window.location.pathname.split("/").pop() || "index.html";
  }

  function indiceEtapa(pagina) {
    return ETAPAS.indexOf(pagina);
  }

  function etapaLiberada() {
    const atual = indiceEtapa(paginaAtual());
    const salva = Number(localStorage.getItem(ETAPA_KEY));
    const etapaSalva = Number.isFinite(salva) ? salva : 0;

    return Math.max(etapaSalva, atual >= 0 ? atual : 0);
  }

  function liberarEtapa(pagina) {
    const indice = indiceEtapa(pagina);
    if (indice < 0) return;

    localStorage.setItem(ETAPA_KEY, String(Math.max(etapaLiberada(), indice)));
  }

  function setupStepbarProgress() {
    const links = document.querySelectorAll(".stepbar a");
    if (!links.length) return;

    const atual = indiceEtapa(paginaAtual());
    const liberada = etapaLiberada();
    localStorage.setItem(ETAPA_KEY, String(liberada));

    links.forEach((link) => {
      const href = link.getAttribute("href") || "";
      const indice = indiceEtapa(href);

      link.classList.remove("active", "completed", "locked");
      link.removeAttribute("aria-current");
      link.removeAttribute("aria-disabled");

      if (indice === atual) {
        link.classList.add("active");
        link.setAttribute("aria-current", "step");
      }

      if (indice >= 0 && indice < liberada && indice !== atual) {
        link.classList.add("completed");
      }

      if (indice > liberada) {
        link.classList.add("locked");
        link.setAttribute("aria-disabled", "true");
        link.addEventListener("click", (event) => event.preventDefault());
      }
    });
  }

  function escaparHtml(texto) {
    return String(texto || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function iniciais(nome) {
    const partes = String(nome || "Seu Nome")
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    return partes
      .slice(0, 2)
      .map((parte) => parte.charAt(0).toUpperCase())
      .join("") || "SN";
  }

  function separarNome(nome) {
    const partes = String(nome || "").trim().split(/\s+/).filter(Boolean);
    return {
      primeiro: partes.shift() || "",
      sobrenome: partes.join(" "),
    };
  }

  function nomePeloEmail(email) {
    const base = String(email || "").split("@")[0].replace(/[._-]+/g, " ").trim();
    return base || "Usuario";
  }

  function normalizarTexto(texto) {
    return String(texto || "").trim().toLowerCase();
  }

  function somenteNumeros(valor) {
    return String(valor || "").replace(/\D/g, "").slice(0, 11);
  }

  function formatarTelefone(valor) {
    const numeros = somenteNumeros(valor);

    if (numeros.length <= 2) {
      return numeros ? `(${numeros}` : "";
    }

    if (numeros.length <= 6) {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    }

    if (numeros.length <= 10) {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`;
    }

    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
  }

  function setupLogin() {
    const form = document.querySelector("[data-auth-form]");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const abaAtiva = document.querySelector("[data-auth-tab].active");
      const modoCadastro = abaAtiva && abaAtiva.dataset.authTab === "signup";
      const nomeDigitado = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value.trim();

      if (!email || !senha) {
        alert("Preencha e-mail e senha para continuar.");
        return;
      }

      if (modoCadastro && !nomeDigitado) {
        alert("Preencha seu nome para criar a conta.");
        return;
      }

      const usuarios = lerUsuarios();
      const indiceUsuario = usuarios.findIndex((usuario) => normalizarTexto(usuario.email) === normalizarTexto(email));
      const usuarioSalvo = indiceUsuario >= 0 ? usuarios[indiceUsuario] : null;

      if (modoCadastro) {
        const nomeExistente = usuarios.some((usuario) => normalizarTexto(usuario.nome) === normalizarTexto(nomeDigitado));
        const emailExistente = usuarios.some((usuario) => normalizarTexto(usuario.email) === normalizarTexto(email));

        if (nomeExistente || emailExistente) {
          alert("Email/nome já existente!");
          return;
        }
      } else if (!usuarioSalvo || usuarioSalvo.senha !== senha) {
        alert("Senha/nome/email incorretos!");
        return;
      }

      const nome = modoCadastro ? nomeDigitado : usuarioSalvo.nome || nomePeloEmail(email);

      const usuarioAtual = { nome, email, senha };
      if (modoCadastro) {
        usuarios.push(usuarioAtual);
      }

      salvarUsuarios(usuarios);
      localStorage.setItem("usuarioNome", nome);
      localStorage.setItem("usuarioEmail", email);

      const curriculo = lerCurriculo();
      if (curriculo.nome === curriculoPadrao.nome || curriculo.nome === exemploAntigo.nome) {
        curriculo.nome = nome;
      }
      curriculo.email = email;
      salvarCurriculo(curriculo);
      liberarEtapa("detalhes.html");

      window.location.href = "foto.html";
    });
  }

  function mostrarPreviewFoto(src) {
    const preview = document.querySelector("[data-photo-preview]");
    if (!preview || !src) return;

    preview.hidden = false;
    preview.innerHTML = `<img src="${src}" alt="Previa da foto selecionada">`;
  }

  function setupFoto() {
    const input = document.querySelector("[data-photo-input]");
    const botao = document.querySelector("[data-photo-submit]");
    if (!input || !botao) return;

    const curriculo = lerCurriculo();
    if (curriculo.foto) {
      mostrarPreviewFoto(curriculo.foto);
    }

    input.addEventListener("change", () => {
      const arquivo = input.files[0];
      if (!arquivo) return;

      mostrarPreviewFoto(URL.createObjectURL(arquivo));
    });

    botao.addEventListener("click", () => {
      const arquivo = input.files[0];

      if (!arquivo) {
        if (lerCurriculo().foto) {
          window.location.href = "detalhes.html";
          return;
        }

        alert("Selecione uma foto ou pule esta etapa.");
        return;
      }

      if (!arquivo.type.match(/^image\/(png|jpeg|gif)$/)) {
        alert("Envie uma imagem PNG, JPG ou GIF.");
        return;
      }

      const leitor = new FileReader();
      leitor.onload = () => {
        const dados = lerCurriculo();
        dados.foto = leitor.result;
        salvarCurriculo(dados);
        liberarEtapa("detalhes.html");
        window.location.href = "detalhes.html";
      };
      leitor.readAsDataURL(arquivo);
    });
  }

  function atualizarFotoElemento(elemento, dados) {
    if (!elemento) return;

    if (dados.foto) {
      elemento.innerHTML = `<img src="${dados.foto}" alt="">`;
    } else {
      elemento.textContent = iniciais(dados.nome);
    }
  }

  function preencherDetalhes() {
    const dados = lerCurriculo();
    const nome = separarNome(dados.nome);
    const campos = {
      cargo: document.getElementById("cargo"),
      primeiroNome: document.getElementById("primeiro-nome"),
      sobrenome: document.getElementById("sobrenome"),
      email: document.getElementById("email"),
      telefone: document.getElementById("telefone"),
      endereco: document.getElementById("endereco"),
    };

    if (campos.cargo) {
      const existeOpcao = Array.from(campos.cargo.options).some((opcao) => opcao.value === dados.titulo);
      if (dados.titulo && !existeOpcao) {
        campos.cargo.add(new Option(dados.titulo, dados.titulo));
      }
      campos.cargo.value = dados.titulo;
    }

    if (campos.primeiroNome) campos.primeiroNome.value = nome.primeiro;
    if (campos.sobrenome) campos.sobrenome.value = nome.sobrenome;
    if (campos.email) campos.email.value = dados.email || localStorage.getItem("usuarioEmail") || "";
    if (campos.telefone) campos.telefone.value = dados.telefone || "";
    if (campos.endereco) campos.endereco.value = dados.cidade || "";
  }

  function dadosDoFormularioDetalhes() {
    const primeiroNome = document.getElementById("primeiro-nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();

    return {
      titulo: document.getElementById("cargo").value.trim(),
      nome: [primeiroNome, sobrenome].filter(Boolean).join(" "),
      email: document.getElementById("email").value.trim(),
      telefone: formatarTelefone(document.getElementById("telefone").value),
      cidade: document.getElementById("endereco").value.trim(),
    };
  }

  function renderizarPreviewDetalhes() {
    const dados = {
      ...lerCurriculo(),
      ...dadosDoFormularioDetalhes(),
    };

    const contato = [dados.cidade, dados.telefone, dados.email]
      .filter(Boolean)
      .map(escaparHtml)
      .join("<br>");

    const nome = dados.nome || "Seu Nome";
    const nomePreview = document.querySelector("[data-resume-name]");
    const cargoPreview = document.querySelector("[data-resume-role]");
    const contatoPreview = document.querySelector("[data-resume-contact]");

    if (nomePreview) nomePreview.textContent = nome.toUpperCase();
    if (cargoPreview) cargoPreview.textContent = dados.titulo || "Seu cargo";
    if (contatoPreview) contatoPreview.innerHTML = contato;

    atualizarFotoElemento(document.querySelector("[data-details-avatar]"), dados);
    atualizarFotoElemento(document.querySelector("[data-resume-photo]"), dados);
  }

  function setupDetalhes() {
    const form = document.querySelector("[data-details-form]");
    if (!form) return;

    preencherDetalhes();
    const telefone = document.getElementById("telefone");
    if (telefone) {
      telefone.value = formatarTelefone(telefone.value);
      telefone.addEventListener("input", () => {
        telefone.value = formatarTelefone(telefone.value);
      });
    }
    renderizarPreviewDetalhes();

    form.querySelectorAll("input, select").forEach((campo) => {
      campo.addEventListener("input", renderizarPreviewDetalhes);
      campo.addEventListener("change", renderizarPreviewDetalhes);
    });

    const botaoFoto = document.querySelector("[data-avatar-edit]");
    if (botaoFoto) {
      botaoFoto.addEventListener("click", () => {
        window.location.href = "foto.html";
      });
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const dadosFormulario = dadosDoFormularioDetalhes();
      if (!dadosFormulario.nome || !dadosFormulario.email || somenteNumeros(dadosFormulario.telefone).length < 10) {
        alert("Preencha nome, e-mail e telefone completo.");
        return;
      }

      const dados = {
        ...lerCurriculo(),
        ...dadosFormulario,
      };

      salvarCurriculo(dados);
      localStorage.setItem("usuarioNome", dados.nome);
      localStorage.setItem("usuarioEmail", dados.email);
      liberarEtapa("minibio.html");
      window.location.href = "minibio.html";
    });
  }

  function atualizarContadorMiniBio(input) {
    const contador = document.querySelector("[data-bio-count]");
    if (!contador || !input) return;

    contador.textContent = `${input.value.length}/${input.maxLength || 700} caracteres`;
  }

  function renderizarPreviewMiniBio() {
    const input = document.querySelector("[data-minibio-input]");
    const dados = {
      ...lerCurriculo(),
      bio: input ? input.value : lerCurriculo().bio,
    };

    const contato = [dados.cidade, dados.telefone, dados.email]
      .filter(Boolean)
      .map(escaparHtml)
      .join("<br>");

    const nomePreview = document.querySelector("[data-minibio-name]");
    const cargoPreview = document.querySelector("[data-minibio-role]");
    const contatoPreview = document.querySelector("[data-minibio-contact]");
    const bioPreview = document.querySelector("[data-minibio-preview]");

    if (nomePreview) nomePreview.textContent = (dados.nome || "Seu Nome").toUpperCase();
    if (cargoPreview) cargoPreview.textContent = dados.titulo || "Seu cargo";
    if (contatoPreview) contatoPreview.innerHTML = contato;
    if (bioPreview) bioPreview.textContent = dados.bio || "Seu resumo profissional aparecerá aqui.";

    atualizarFotoElemento(document.querySelector("[data-minibio-photo]"), dados);
    atualizarContadorMiniBio(input);
  }

  function salvarMiniBioAtual() {
    const input = document.querySelector("[data-minibio-input]");
    if (!input) return;

    const dados = lerCurriculo();
    dados.bio = input.value.trim();
    salvarCurriculo(dados);

    const status = document.querySelector("[data-bio-status]");
    if (status) {
      status.textContent = "Salvo no navegador";
    }
  }

  function setupMiniBio() {
    const form = document.querySelector("[data-minibio-form]");
    const input = document.querySelector("[data-minibio-input]");
    if (!form || !input) return;

    const dados = lerCurriculo();
    input.value = dados.bio || curriculoPadrao.bio;
    renderizarPreviewMiniBio();

    input.addEventListener("input", () => {
      salvarMiniBioAtual();
      renderizarPreviewMiniBio();
    });

    document.querySelectorAll("[data-bio-example]").forEach((botao) => {
      botao.addEventListener("click", () => {
        input.value = botao.dataset.bioExample || "";
        salvarMiniBioAtual();
        renderizarPreviewMiniBio();
        input.focus();
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!input.value.trim()) {
        alert("Preencha a mini-bio para continuar.");
        input.focus();
        return;
      }

      salvarMiniBioAtual();
      liberarEtapa("experiencias.html");
      window.location.href = "experiencias.html";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupLogin();
    setupFoto();
    setupDetalhes();
    setupMiniBio();
    setupStepbarProgress();
  });
})();
