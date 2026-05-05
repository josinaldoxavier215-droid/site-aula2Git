console.log("Funcionando ✅");

document.addEventListener("DOMContentLoaded", () => {

  window.toggleMenu = function () {
    const menu = document.getElementById("nav-links");
    if (menu) {
      menu.classList.toggle("open");
    }
  };

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("nav-links");
      if (menu) {
        menu.classList.remove("open");
      }
    });
  });

  document.querySelectorAll(".btn-comprar").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Produto adicionado ao carrinho 🛒");
    });
  });

  document.querySelectorAll(".btn-agendar").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Agendamento iniciado 🐾");
    });
  });

});