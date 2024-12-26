const testimonialsItemns = document.getElementById('testimonials__itemns');
const testimonialsBlock = document.getElementById('testimonials__itemns');
const testimonialsInput = document.getElementById('testimonials__input');
const itemnsWidth = parseInt(getComputedStyle(testimonialsBlock).width)

console.log(itemnsWidth);

function moveSlaider () {
  testimonialsItemns.style.transform = `translateX(-${testimonialsInput.value * 238}px)`
};

testimonialsInput.addEventListener('input', moveSlaider);



