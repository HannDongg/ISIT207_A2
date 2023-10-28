let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text',{delay:100, origin: "left"})
sr.reveal('.form-container form',{delay:500, origin: "left"})
sr.reveal('.heading',{delay:500, origin: "left"})
sr.reveal('.ride-container .box',{delay:300, origin: "left"})
sr.reveal('.services-container .box',{delay:300, origin: "top"})
sr.reveal('.about-container .box',{delay:300, origin: "left"})
sr.reveal('.about-container .text',{delay:300, origin: "left"})
sr.reveal('.reviews-container .box',{delay:300, origin: "left"})
sr.reveal('.newsletter .box',{delay:300, origin: "bottom"})





const header = document.querySelector("header");
let lastScrollTop = 0;
let ticking = false;

// Function to handle scroll event
function handleScroll() {
  lastScrollTop = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      if (lastScrollTop > 50) {
        header.classList.add("hidden-header");
      } else {
        header.classList.remove("hidden-header");
      }
      ticking = false;
    });

    ticking = true;
  }
}

// Add event listener for scroll event
window.addEventListener("scroll", handleScroll);