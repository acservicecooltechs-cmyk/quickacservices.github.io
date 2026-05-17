// WEBSITE LOADED

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// SMOOTH SCROLL

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
  ".card, .service-box, .hero h1, .hero p, .btn"
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach((el) => {
    const revealTop = el.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ACTIVE NAVBAR LINK

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active-link");
    }
  });
});

// FLOATING WHATSAPP BUTTON ANIMATION

const whatsappBtn = document.querySelector(".floating-whatsapp");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    whatsappBtn.classList.add("show-whatsapp");
  } else {
    whatsappBtn.classList.remove("show-whatsapp");
  }

});

// HERO TEXT ANIMATION

const heroTitle = document.querySelector(".hero h1");

let text = heroTitle.innerHTML;

heroTitle.innerHTML = "";

let i = 0;

function typeWriter() {

  if (i < text.length) {
    heroTitle.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }

}

typeWriter();

// IMAGE HOVER EFFECT

const images = document.querySelectorAll("img");

images.forEach((img) => {

  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.03)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });

});

// BACK TO TOP BUTTON

const backTop = document.createElement("button");

backTop.innerHTML = "↑";

backTop.classList.add("back-to-top");

document.body.appendChild(backTop);

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {
    backTop.classList.add("show-top");
  } else {
    backTop.classList.remove("show-top");
  }

});

backTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

console.log("Enhanced Quick AC Services Website Loaded");
