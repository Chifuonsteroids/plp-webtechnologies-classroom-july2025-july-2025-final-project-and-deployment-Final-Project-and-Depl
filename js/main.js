// Testimonial slider
const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

document.querySelector(".testimonial-next").addEventListener("click", () => {
  testimonials[index].classList.remove("active");
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add("active");
});

document.querySelector(".testimonial-prev").addEventListener("click", () => {
  testimonials[index].classList.remove("active");
  index = (index - 1 + testimonials.length) % testimonials.length;
  testimonials[index].classList.add("active");
});
