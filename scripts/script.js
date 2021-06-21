$(document).ready(function(){
  var firstImg = $('#1');
  var secondImg = $('#2');
  var lastImg = $('#3');
  var firstDot = $('#dot1');
  var secondDot = $('#dot2');
  var thirdDot = $('#dot3');
  $('.next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();
    var currentDot = $('.active');
    var nexttDot = currentDot.next();
    
    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
      currentDot.removeClass('active').css('z-index', -10);
      nexttDot.addClass('active').css('z-index', 10);
    }
    else{
      currentImg.removeClass('active').css('z-index', -10);
      firstImg.addClass('active').css('z-index', 10);
      currentDot.removeClass('active').css('z-index', -10);
      firstDot.addClass('active').css('z-index', 10);
    }
  console.log('next clicked');
  });

  $('.prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();
    var currentDot = $('.active');
    var prevDot = currentDot.prev();

    if(prevImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
      currentDot.removeClass('active').css('z-index', -10);
      prevDot.addClass('active').css('z-index', 10);
    }
    else{
      currentImg.removeClass('active').css('z-index', -10);
      lastImg.addClass('active').css('z-index', 10);
      currentDot.removeClass('active').css('z-index', -10);
      thirdDot.addClass('active').css('z-index', 10);
    }
  console.log('prev clicked');
  });

  $('.dot1').on('click', function(){
    if($('#dot1').hasClass('active')){
      console.log('first dot already active');
    }
    else{
      var currentImg = $('.active');
      var currentDot = $('.active');
      // currentImg.removeClass('active').css('z-index', -10);
      firstImg.addClass('active').css('z-index', 10);
      currentDot.removeClass('active').css('z-index', -10);
      firstDot.addClass('active').css('z-index', 10);
      console.log('first dot clicked');
    }
  });

  $('.dot2').on('click', function(){
    if($('#dot2').hasClass('active')){
      console.log('second dot already active');
    }
    else{
      var currentImg = $('.active');
      var currentDot = $('.active');
      currentImg.removeClass('active').css('z-index', -10);
      secondImg.addClass('active').css('z-index', 10);
      currentDot.removeClass('active').css('z-index', -10);
      secondDot.addClass('active').css('z-index', 10);
      console.log('second dot clicked');
    }
  });

  $('.dot3').on('click', function(){
    if($('#dot3').hasClass('active')){
      console.log('third dot already active');
    }
    else{
      var currentImg = $('.active');
      var currentDot = $('.active');
      currentImg.removeClass('active').css('z-index', -10);
      lastImg.addClass('active').css('z-index', 10);
      currentDot.removeClass('active').css('z-index', -10);
      thirdDot.addClass('active').css('z-index', 10);
      console.log('third dot clicked');
    }
  });

  window.onscroll = function() {stickyHeader()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
});
