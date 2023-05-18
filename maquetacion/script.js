// ------Contador desde 0------
$(".impacto-numero").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate({
        Counter: $(this).text()
      }, {
        duration: 1000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
  });
  
  
  var angle = 0;
  
  function galleryspin(sign) {
    spinner = document.querySelector("#spinner");
    if (!sign) {
      angle = angle + 45;
    } else {
      angle = angle - 45;
    }
    spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
  }
  
  // ------Slider------
  
  const slider = document.querySelector('.slider');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const slideWidth = slider.querySelector('.slide').clientWidth;
  
  nextBtn.addEventListener('click', () => {
    slider.style.transform = `translateX(-${slideWidth}px)`;
    slider.style.transition = 'transform 1s ease-in-out';
  
    setTimeout(() => {
      slider.style.transition = 'none';
      slider.appendChild(slider.firstElementChild);
      slider.style.transform = 'translateX(0)';
    }, 500);
  });
  
  prevBtn.addEventListener('click', () => {
    slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${slideWidth}px)`;
  
    setTimeout(() => {
      slider.style.transition = 'transform 1s ease-in-out';
      slider.style.transform = 'translateX(0)';
    }, 50);
  });
  
  // Auto avance cada 3 segundos
  setInterval(() => {
    nextBtn.click();
  }, 3000);
  
  // ------Boton volver arriba------
  var toTopButton = document.getElementById('toTopButton');
  
  window.addEventListener('scroll', toggleToTopButton);
  
  function toggleToTopButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      toTopButton.style.display = 'block';
    } else {
      toTopButton.style.display = 'none';
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  // ------Menú Hamburguesa------
  
  var menu = document.querySelector('.hamburger');
  
  
  function toggleMenu (event) {
    this.classList.toggle('is-active');
    document.querySelector( ".links" ).classList.toggle("is_active");
    event.preventDefault();
  }
  
  menu.addEventListener('click', toggleMenu, false);
  
  
  // ------Buscador------
  
  function toggleSearch() {
    const searchInput = document.getElementById('input');
    searchInput.classList.toggle('active');
  }
  
  
  
  
  
  