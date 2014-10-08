// Foundation 5 Activate! 
$(document).foundation();


// On page load, do this
$(document).ready(function(){
  
  // Your Scripts

  $('article').readmore({
  speed: 175,
  maxHeight: 510,
  moreLink: '<a href="#">Read more..</a>',
  lessLink: '<a href="#">Read less..</a>'
});

});
