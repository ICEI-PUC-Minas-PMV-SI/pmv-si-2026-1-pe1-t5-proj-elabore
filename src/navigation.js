const pages = [
  "index.html",
  "login.html",
  "foto.html",
  "detalhes.html",
  "minibio.html",
  "experiencias.html",
  "educacao.html",
  "habilidades.html",
  "preview.html",
  "download.html",
];

function currentPageName() {
  const page = window.location.pathname.split("/").pop();
  return page || "index.html";
}

function createArrow(href, label, content, disabled = false) {
  const link = document.createElement("a");
  link.className = `arrow-link${disabled ? " disabled" : ""}`;
  link.href = disabled ? "#" : href;
  link.setAttribute("aria-label", label);
  link.innerHTML = content;
  return link;
}

function setupNavigationArrows() {
  const mount = document.querySelector("[data-nav-arrows]");

  if (!mount) {
    return;
  }

  const index = pages.indexOf(currentPageName());
  const previous = index > 0 ? pages[index - 1] : null;
  const next = index >= 0 && index < pages.length - 1 ? pages[index + 1] : null;

  mount.append(
    createArrow(previous || "#", "Tela anterior", "&larr;", !previous),
    createArrow(next || "#", "Próxima tela", "&rarr;", !next)
  );
}

function setupDevelopmentButtons() {
  document.querySelectorAll("[data-dev-button]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Em desenvolvimento!!");
    });
  });
}

function setupAuthTabs() {
  const tabs = document.querySelectorAll("[data-auth-tab]");
  const nameField = document.querySelector("[data-name-field]");
  const helper = document.querySelector("[data-auth-helper]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");

      const isSignup = tab.dataset.authTab === "signup";
      if (nameField) {
        nameField.hidden = !isSignup;
      }
      if (helper) {
        helper.textContent = isSignup
          ? "Já tem conta? Volte para entrar"
          : "Ainda não tem conta? Crie seu cadastro";
      }
    });
  });
}

function setupPhotoInput() {
  const input = document.querySelector("[data-photo-input]");
  const fileName = document.querySelector("[data-photo-name]");

  if (!input || !fileName) {
    return;
  }

  input.addEventListener("change", () => {
    fileName.textContent = input.files.length
      ? input.files[0].name
      : "PNG, JPG ou GIF (max. 300x300px)";
  });
}

setupNavigationArrows();
setupDevelopmentButtons();
setupAuthTabs();
setupPhotoInput();
