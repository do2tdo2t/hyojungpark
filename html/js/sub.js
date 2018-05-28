var slideIndex = 1;
showSlides(slideIndex,1);
showMiniSlides(slideIndex,1);
showSlides(slideIndex,2);
showMiniSlides(slideIndex,2);
showSlides(slideIndex,3);
showMiniSlides(slideIndex,3);

// Next/previous controls
function plusSlides(n,m) {
  showSlides(slideIndex += n,m);
  showMiniSlides(slideIndex,m);
}

// Thumbnail image controls
function currentSlide(n,m) {
  showSlides(slideIndex = n,m);
  showMiniSlides(slideIndex,m);
}

function showSlides(n,m) {
  var i;
  var container = document.getElementById("container"+m);
  var slides =container.getElementsByClassName("mySlides");
  var dots = container.getElementsByClassName("demo");
 // var captionText = document.getElementById("caption");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  //captionText.innerHTML = dots[slideIndex-1].alt;
}

function showMiniSlides(n,m){
  console.log("in showMiniSlides");
  var container = document.getElementById("container"+m);
  var miniSlides = container.getElementsByClassName("column");
  var dots = container.getElementsByClassName("demo");

  if (n > dots.length) {n = 1}
  if (n < 1) {n = dots.length}

  for (i = 0; i < dots.length ; i++) {
    miniSlides[i].style.display = "none";
  }
  
  var size = 6;
  if(n <= 20 ){
    size = 6;
  }else{
    size = dots.length - n;
  }

  for(i = 0 ; i <size ; i ++){
    miniSlides[n+i-1].style.display = "block";
  }

  
}