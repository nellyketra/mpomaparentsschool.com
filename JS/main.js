document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById('menu-list');
    const toggle = document.getElementById('menu-toggle');
    const close = document.getElementById('menu-close');
    const navLinks = document.querySelectorAll('.nav__link');

    // Open menu
    toggle?.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevents bubbling
        console.log('Menu toggled open');
        menu.classList.add('show-menu');
        document.body.classList.add('menu-open');
    });

    // Close menu
    close?.addEventListener('click', function (e) {
        e.stopPropagation();
        console.log('Close button clicked');
        menu.classList.remove('show-menu');
        document.body.classList.remove('menu-open');
    });

    // Close menu on nav link click
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.stopPropagation();
            console.log('Nav link clicked');
            menu.classList.remove('show-menu');
            document.body.classList.remove('menu-open');
        });
    });
});

/*--------SWIPER SERVICES----*/
const swiper = new Swiper('.services__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 40,

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

/*--show scroll up---*/
const scrollUp =() =>{
   const scrollUp = document.getElementById('scroll-up'); // ✅ Correct method name
  if (window.scrollY >= 350) {
    scrollUp.classList.add('show-scroll'); // ✅ Use correct variable
  } else {
    scrollUp.classList.remove('show-scroll');
  }
};
window.addEventListener('scroll', scrollUp);

/*---- SCROLL SECTIONS ACTIVE LINK----*/
const sections = document.querySelectorAll('section[id]');

const scrollActive =() =>{
    const scrollDown =window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
           
        const sectionLink = document.querySelector('.nav__link[href*="' + sectionId + '"]');

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionLink?.classList.add('active-link'); // safe check in case it's null
    } else {
      sectionLink?.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll',scrollActive)

/*==============SCROLL REVEAL ANIMATION ============*/
const sr =ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 2500,
  delay: 400,
  //resett: true, // animation repeat
})
sr.reveal('.home__content, .services__data, .services__swiper, .footer__container')
sr.reveal('.home__images', {origin:'bottom', delay:1000})
sr.reveal('.about__imgs', {origin:'left'})
sr.reveal('.about__data', {origin:'right'})
sr.reveal('.projects__card', {interval: 100})
