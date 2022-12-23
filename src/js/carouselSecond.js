let slideIndex = 1;
showSlidesSecond(slideIndex);

let prev = document.querySelector ('.prev');
let next = document.querySelector ('.next');

next.addEventListener ("click", function () {
  showSlidesSecond(slideIndex += 1);
  makeTimer();//перестворюємо інтервал, якщо відбувається клік по стрілці
});

prev.addEventListener ("click", function () {
  showSlidesSecond(slideIndex -= 1);
  makeTimer();//перестворюємо інтервал, якщо відбувається клік по стрілці
});

function currentSlide(n) {
  showSlidesSecond(slideIndex = n);
}
 
function showSlidesSecond(n) {
    let slides = document. querySelectorAll(".gallery__item-2");
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
      showSlidesSecond(slideIndex);
    },5000);
  }