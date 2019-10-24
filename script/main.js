
$(document).ready(function() {
  $('#youtube_video').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });
});

//Get the button
var mybutton = document.getElementById("myBtn");
var stat_already_display = false;

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $('#myBtn').fadeIn(200);
  } else {
    $('#myBtn').fadeOut(200);
  }

  var hT = $('#stat_section').offset().top,
      hH = $('#stat_section').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH) && stat_already_display === false){
      stat_already_display = true;
      display_stat();
  }
  else if(stat_already_display === true && wS < (hT+hH-wH)){
    stat_already_display = false;
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('body,html').animate({
        scrollTop : 0
    }, 500);
}

function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function display_stat(){
  animateValue("chiffre_affaire", 0, 354, 2000);
  animateValue("resultat", 0, 19, 2000);
  animateValue("experience", 0, 30, 2000);
}

var layer = $("#main");
var intel = $("#intel");
var nvidia = $("#nvidia");

layer.mousemove(function(e){
  var value_x = (e.pageX * -1/15);
  var value_y = (e.pageY * -1/20);

  intel.css({
    "transform":"translate3d(" + value_x + "px, " + value_y + "px,0)"
  });

  nvidia.css({
    "transform":"translate3d(" + value_x + "px, " + value_y + "px,0)"
  });
});
