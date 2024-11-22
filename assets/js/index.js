const carousel = document.querySelector(".carousel-container");
const contactButton = document.querySelector(".contact-button");
const modal = document.getElementById("contactModal");
const closeModalButton = document.getElementById("closeModal");

let isDragging = false;
let startX, scrollLeft;

carousel.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
  carousel.style.cursor = "grabbing";
});

["mouseup", "mouseleave"].forEach((e) =>
  carousel.addEventListener(e, () => {
    isDragging = false;
    carousel.style.cursor = "grab";
  })
);

carousel.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 3;
  carousel.scrollLeft = scrollLeft - walk;
});

contactButton.addEventListener("click", () => (modal.style.display = "flex"));

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
