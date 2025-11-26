const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav_list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active'); // abre e fecha menu
});

document.getElementById("reservaForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const pessoas = document.getElementById("pessoas").value;
    const data = document.getElementById("data").value;
    const obs = document.getElementById("obs").value;

    const numero = "5513997886470"; // coloque o número do WhatsApp

    const msg = 
`Oii, eu gostaria de fazer uma reserva.

Nome: ${nome}
Telefone: ${telefone}
Quantidade de pessoas: ${pessoas}
Data: ${data}
Observações: ${obs ? obs : "Nenhuma"}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");
});

// Carrossel Diversão
// Seleciona todos os carrosseis diversão
document.addEventListener('DOMContentLoaded', () => {

  // ===== Carrossel principal (hero) =====
  const heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    autoplay: {
      delay: 500000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    effect: 'fade',
    fadeEffect: { crossFade: true },
  });

  // ===== Carrosséis da diversão (3 independentes) =====
  // Seleciona todos os carrosseis diversão
document.querySelectorAll('.diversao-swiper').forEach((carrossel) => {
    const swiper = new Swiper(carrossel, {
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 13000,
            disableOnInteraction: false,
        },
        pagination: {
            el: carrossel.querySelector('.diversao-pagination'),
            clickable: true,
        },
        navigation: {
            nextEl: carrossel.querySelector('.diversao-next'),
            prevEl: carrossel.querySelector('.diversao-prev'),
        },
        on: {
            init: function () {
                playActiveVideo(this);
            },
            slideChange: function () {
                playActiveVideo(this);
            }
        }
    });

    function playActiveVideo(swiperInstance) {
        // pausa todos os vídeos
        swiperInstance.slides.forEach(slide => {
            const vid = slide.querySelector('video');
            if (vid) {
                vid.pause();
                vid.currentTime = 0; // opcional
            }
        });

        // toca apenas o vídeo do slide ativo
        const activeVideo = swiperInstance.slides[swiperInstance.activeIndex].querySelector('video');
        if (activeVideo) {
            setTimeout(() => {
            activeVideo.play().catch(() => {
                console.log('Autoplay bloqueado pelo navegador');
            });
        }, 50); // pequeno delay ajuda em alguns navegadores
    }
}
});

const cardapioSwiper = new Swiper(".cardapio-carousel.swiper", {
    slidesPerView: 1.2,
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".cardapio-next",
        prevEl: ".cardapio-prev",
    },
});
});

const track = document.querySelector('.carousel-track');
let speed = 1; // pixels por frame
let position = 0;

function animate() {
  position -= speed;
  // se o final da track tiver passado, reset
  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }
  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

// duplicar conteúdo para loop contínuo
track.innerHTML += track.innerHTML;

animate();

