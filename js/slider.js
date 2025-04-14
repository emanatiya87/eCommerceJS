document.addEventListener("DOMContentLoaded", function () {
  new Splide("#my-splide", {
    type: "slide",
    perPage: 3,
    perMove: 1,
    focus: "center",
    pagination: false,
    gap: "1rem",
    breakpoints: {
      768: {
        perPage: 1,
        gap: "1rem",
      },
    },
  }).mount();
  new Splide("#my-splide-2", {
    perPage: 3,
    perMove: 1,
    focus: "center",
    pagination: false,
    gap: "1rem",
    breakpoints: {
      768: {
        perPage: 1,
        gap: "1rem",
      },
    },
  }).mount();
});
