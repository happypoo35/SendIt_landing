const body = document.querySelector("body");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const menuModule = document.getElementById("menuModule");
const callModule = document.getElementById("callModule");
const buttons = document.querySelectorAll("#moduleBtn");
const closeBtn = document.getElementById("closeBtn");
const forms = document.querySelectorAll("form");
const testimonialsContainer = document.querySelector(".testimonials");
const testimonialSlide = document.querySelectorAll(".testimonial");
const guaranteesContainer = document.querySelector(".guarantees");
const guaranteeSlide = document.querySelectorAll(".guarantee");
const accordion = document.querySelectorAll(".accordion-item");
const brandsContainer = document.querySelector(".brands");
const brands = document.querySelector(".brands-container");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  menuModule.classList.toggle("active");
  body.classList.toggle("active");
});

menuModule.addEventListener("click", (e) => {
  if (e.target.id === "link" || e.target.tagName === "BUTTON") {
    hamburgerBtn.classList.remove("active");
    menuModule.classList.remove("active");
    body.classList.remove("active");
  }
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    callModule.classList.add("active");
    body.classList.add("active");
    body.classList.add("backdrop");
  });
});

window.addEventListener("click", (e) => {
  if (e.target.tagName === "BODY" || e.target === closeBtn) {
    callModule.classList.remove("active");
    body.classList.remove("active");
    body.classList.remove("backdrop");
  }
});

window.onresize = () => {
  if (window.innerWidth >= 580) {
    guaranteeSlide.forEach((slide) => {
      slide.style.transform = "";
    });
  }
  if (window.innerWidth >= 768) {
    hamburgerBtn.classList.remove("active");
    menuModule.classList.remove("active");
  }
};

testimonialsContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    testimonialSlide.forEach((el) => {
      el.classList.toggle("active");
    });
  }
});

let percent = 0;
let rem = 0;

guaranteesContainer.addEventListener("click", (e) => {
  if (e.target.classList[1] === "left") {
    percent += 100;
    rem--;

    if (percent > 0) {
      percent = -200;
      rem = 2;
    }
  }

  if (e.target.classList[1] === "right") {
    percent -= 100;
    rem++;

    if (percent < -200) {
      percent = 0;
      rem = 0;
    }
  }
  guaranteeSlide.forEach((slide) => {
    slide.style.transform = `translateX(calc(${percent}% - ${rem}rem))`;
  });
});

accordion.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

brandsContainer.addEventListener("click", (e) => {
  if (e.target.classList[1] === "left") {
    brands.style.justifyContent = "flex-start";
  }
  if (e.target.classList[1] === "right") {
    brands.style.justifyContent = "flex-end";
  }
});
