$(function(){
  'use strict';
  var i = 0;
  var arrLength = $('#mainvisual-wrap ul li').length;
  var fadeTime = 5000;
  $('#mainvisual-wrap ul li').hide();


  var mainvisualCarousel = function() {
    $('#mainvisual-wrap ul li').eq(i).fadeIn( fadeTime );
    $('#mainvisual-wrap ul li').eq(i - 1).fadeOut( fadeTime );

    $('#mainvisual-wrap ul li').eq(i).children('img').addClass('smaller-mv');
    $('#mainvisual-wrap ul li').eq(i - 1).children('img').removeClass('smaller-mv');

    console.log(i);
    i += 1;

    if(i > arrLength - 1 ) i = 0;

    setTimeout(mainvisualCarousel , fadeTime );
  }
  mainvisualCarousel();

});
