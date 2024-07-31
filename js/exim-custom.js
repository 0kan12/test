$('.carousel').carousel({
interval: 3000
});

$(document).ready(function() {
$("#owl-demo").owlCarousel({
autoPlay: 3000,
items : 2,
itemsDesktop : [1199,2],
itemsDesktopSmall : [979,2]
});
});

  $(".nextx").click(function(){
    owl.trigger('owl.next');
  })
  $(".prevx").click(function(){
    owl.trigger('owl.prev');
  })

$(document).ready(function(){
$(".group1").colorbox({rel:'group1'});
});

jQuery(document).ready( function() {
jQuery("#formID").validationEngine();
});

    
