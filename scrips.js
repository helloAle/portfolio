// Função para suavizar a rolagem até a seção desejada
function smoothScroll(target) {
    const targetSection = document.querySelector(target);
  
    // Verificar se o elemento foi encontrado
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
  
  // Seletor do link "Sobre"
  const scrollLink = document.querySelector('a[href="#about"]');
  
  // Adicionar evento de clique ao link "Sobre"
  scrollLink.addEventListener('click', (event) => {
    event.preventDefault();
  
    // Chamar a função de rolagem suave para a seção "Sobre"
    smoothScroll('#about');
  });
  