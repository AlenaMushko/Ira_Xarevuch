let slideIndex = 1;
showSlides(slideIndex);

let prev = document.querySelector ('.prev');
let next = document.querySelector ('.next');

next.addEventListener ("click", function () {
  showSlides(slideIndex += 1);
  makeTimer();//перестворюємо інтервал, якщо відбувається клік по стрілці
});

prev.addEventListener ("click", function () {
  showSlides(slideIndex -= 1);
  makeTimer();//перестворюємо інтервал, якщо відбувається клік по стрілці
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
    let slides = document. querySelectorAll(".gallery__item");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
 
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";    
  }
let timer = 0;
 makeTimer(); //створюємо інтервал
 function makeTimer(){
    clearInterval(timer) //чистимо інтервал
    timer = setInterval(function(){
      slideIndex++;
      showSlides(slideIndex);
    },5000);
  }