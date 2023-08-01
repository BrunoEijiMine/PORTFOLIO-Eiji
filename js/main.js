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
    // Seleciona todos os elementos com a classe "bar" e os armazena em uma variável chamada "bar"
    let bar = document.querySelectorAll('.bar');

    // Função de animação para cada barra de progresso
    function animateProgressBar(progress, value) {
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
    }

    // Adiciona um event listener para o evento de scroll apenas uma vez
    function scrollHandler() {
        // Remove o event listener para que a função não seja chamada novamente no scroll
        window.removeEventListener('scroll', scrollHandler);

        // Inicializa a animação para cada barra de progresso
        bar.forEach((progress) => {
            let value = progress.getAttribute('data-value');
            progress.style.width = `${value}%`;
            animateProgressBar(progress, value);
        });
    }

    window.addEventListener('scroll', scrollHandler);
}

// Chame a função progressAnimation quando desejar executar o código
progressAnimation();


var swiper = new Swiper(".team-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },

      
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

