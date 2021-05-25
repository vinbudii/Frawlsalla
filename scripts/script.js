$(document).ready(function(){
  var firstImg = $('#1');
  var lastImg = $('#3')
  $('.next').on('click', function(){
    var i = 0;
    var currentImg = $('.active');
    var nextImg = currentImg.next();
    
    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
    else{
      currentImg.removeClass('active').css('z-index', -10);
      firstImg.addClass('active').css('z-index', 10);
    }
  console.log('next clicked');
  });

  $('.prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
    else{
      currentImg.removeClass('active').css('z-index', -10);
      lastImg.addClass('active').css('z-index', 10);
    }
  console.log('prev clicked');
  });
});


