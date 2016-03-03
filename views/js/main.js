window.onload = function(){
  // animate css impeades on the side nav for some odd reason, so remove classes
  setTimeout(function(){
    $('nav').removeClass('animated');
    $('nav').removeClass('flipInX');
  } , 1000);
}
