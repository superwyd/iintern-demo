var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");



// ------------scroll smooth
$(document).ready(function(){
  $('ul.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });


  
  // Add smooth scrolling to all links
  $("#contact-btn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(".contact-all-mini").mouseover(function () {
    $(".contact-all-mini img").css("display", "none"); // hide all product images
    $(this).find("img").css("display", "inline-block"); // show current hover image
  });
  $(".contact-all-mini").mouseout(function () {
    $(".contact-all-mini img").css("display", "none"); // hide all product images
  });

  $('#backtop').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
  });
  $('[data-toggle="counter-up"]').counterUp({
    delay: 30,
    time: 3000
  });
});


var options = {
	  useEasing : false,
	  useGrouping : true,
	  separator : ',',
	  decimal : '.',
	  prefix : '',
	  suffix : ''
};

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

