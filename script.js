let slides = document.querySelectorAll(".slider_slide");
let prevBtn = document.querySelector(".slider_btn-prev");
let nextBtn = document.querySelector(".slider_btn-next");
let indicators = document.querySelectorAll(".slider_indicator");

let navToggler = document.querySelector("#sidebar-icon");
let sidebar = document.querySelector(".sidebar");

let sliderIndex = 0;

prevBtn.addEventListener("click", () => {
  removeActive(sliderIndex);
  sliderIndex == 0 ? (sliderIndex = 4) : (sliderIndex -= 1);
  addActive(sliderIndex);
});

nextBtn.addEventListener("click", () => {
  removeActive(sliderIndex);
  sliderIndex == 4 ? (sliderIndex = 0) : (sliderIndex += 1);
  addActive(sliderIndex);
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    removeActive(sliderIndex);
    sliderIndex = index;
    addActive(sliderIndex);
  });
});

let removeActive = (index) => {
  indicators[index].classList.remove("slider_indicator-active");
  slides[index].classList.remove("slider_slide-active");
};

let addActive = (index) => {
  indicators[index].classList.add("slider_indicator-active");
  slides[index].classList.add("slider_slide-active");
};

navToggler.addEventListener("click", () => {
  sidebar.style.transform == "translateX(-100%)"
    ? (sidebar.style.transform = "translateX(0%)")
    : (sidebar.style.transform = "translateX(-100%)");
});
