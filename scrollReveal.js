// Seleciona todos os elementos que terão a animação de aparecer
const elementsToReveal = document.querySelectorAll(".reveal");

// Função que verifica se o elemento está visível na tela
function handleScrollReveal() {
  elementsToReveal.forEach((element) => {
    // Se o topo do elemento estiver a 90% da altura da janela, mostra ele
    if (element.getBoundingClientRect().top < window.innerHeight * 0.8) {
      element.classList.add("show");
    }
  });
}

// Escuta o evento de scroll e chama a função
window.addEventListener("scroll", handleScrollReveal);