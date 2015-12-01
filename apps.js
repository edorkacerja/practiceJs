var main = function() {
  $('.droptoggle').click(function() {
    $('.dropdown-menu').toggle();
  });

  $('.arrow-next').click(function(){
    var activeSlide = $('.active-slide');
    var nextSlide = activeSlide.next();
    var activeDot = $('.active-dot');
    var nextDot = activeDot.next();

    if(nextSlide.length === 0 ){
        alert('sdfs');
        nextSlide = $('.slide').first();
        nextDot = $('.dot').first();
    }


    activeSlide.fadeOut(400).removeClass('active-slide');
    nextSlide.fadeIn(800).addClass('active-slide');



    activeDot.removeClass('active-dot');
    nextDot.addClass('active-dot');

    
  });

  $('.arrow-prev').click(function(){
    var activeSlide2 = $('.active-slide');
    var previousSlide = activeSlide2.prev();
    var activeDot = $('.active-dot');
    var prevDot = activeDot.prev();

    if(previousSlide.length === 0 ){
        alert('sdfs');
        previousSlide = $('.slide').last();
        prevDot = $('.dot').last();
    }

    activeSlide2.fadeOut(400).removeClass('active-slide');
    previousSlide.fadeIn(800).addClass('active-slide');



    

    activeDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });




}

$(document).ready(main);