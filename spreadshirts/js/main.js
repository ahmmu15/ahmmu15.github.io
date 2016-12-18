$(document).ready(function() {


 // best selling carousel
  $("#best_selling").owlCarousel({
 
      autoPlay: false,
 
      items : 4,
      // itemsDesktop : [1199,3],
      itemsDesktop : [991,3],
      itemsDesktopSmall : [880,2],
      itemsMobile : [590,1]
 
  });


  $(document).ready(function() {
 
  var owl = $("#best_selling");
 
  owl.owlCarousel();
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
 
});


  // cutomer saying carousel
  $("#cutomer_saying").owlCarousel({
 
      autoPlay: 5000, //Set AutoPlay to 5 seconds
 
      singleItem: true,
      transitionStyle : "fadeUp"
 
  });



 
});
