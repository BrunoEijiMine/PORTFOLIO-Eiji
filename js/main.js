/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Valida se a constante existe */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Valida se a constante existe */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVER MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // Quando clicamos em cada nav__link, removemos a classe show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*============================ PROGRESS-BAR ==================================*/
function progressAnimation() {
    // Adiciona um event listener para o evento de scroll
    window.addEventListener('scroll', function () {
        // Obtém a posição vertical atual da janela
        var scrollPosition = window.scrollY;

        // Obtém a posição vertical da seção desejada
        var section = document.getElementById('scrollProgressBar');
        var sectionPosition = section.getBoundingClientRect().top;

        // Obtém a altura da janela
        var windowHeight = window.innerHeight;

        // Verifica se a posição vertical da seção está visível na janela
        if (sectionPosition <= windowHeight) {
            // Seleciona todos os elementos com a classe "bar" e os armazena em uma variável chamada "bar"
            let bar = document.querySelectorAll('.bar');

            // Itera sobre cada elemento na variável "bar"
            bar.forEach((progress) => {
                // Obtém o valor da porcentagem do atributo "data-value" do elemento atual
                let value = progress.getAttribute('data-value');

                // Define a largura da barra de progresso com base no valor da porcentagem
                progress.style.width = `${value}%`;

                // Inicializa uma variável de contagem com o valor zero
                let count = 0;

                // Configura uma animação que incrementa a contagem e atualiza o texto da porcentagem a cada 15 milissegundos
                let progressAnimation = setInterval(() => {
                    // Incrementa a contagem em 1
                    count++;

                    // Define o valor do atributo "data-text" com a contagem atual seguida do símbolo de porcentagem
                    progress.setAttribute('data-text', `${count}%`);

                    // Verifica se a contagem atual é maior ou igual à porcentagem final
                    if (count >= value) {
                        // Se sim, interrompe a animação
                        clearInterval(progressAnimation);
                    }
                }, 15);
            });
        }
    });
}

// Chame a função progressAnimation quando desejar executar o código
progressAnimation();
