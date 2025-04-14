document.addEventListener("DOMContentLoaded", function () {
  new Splide("#my-splide", {
    type: "slide",
    perPage: 3,
    perMove: 1,
    focus: "center",
    pagination: false,
    gap: "1rem",
  }).mount();
});
