let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let index = 0;

// show slide function
function showSlide(i){
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");
    index = i;
}

// next
document.querySelector(".next").onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
};

// prev
document.querySelector(".prev").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
};

// dots click
dots.forEach((dot, i) => {
    dot.onclick = () => showSlide(i);
});

// auto slide
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 3000);