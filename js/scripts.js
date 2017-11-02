$(document).ready(function(){
 $("#carouselExampleControls").carousel({interval: 500});
 $("#carousel-button").click(function(){
   if($("#carousel-button").children("span").hasClass("fa-pause")){
   $("#carouselExampleControls").carousel('pause');
   $("#carousel-button").children("span").removeClass("fa-pause")
   $("#carousel-button").children("span").addClass("fa-play")
   }
   else {
     $("#carouselExampleControls").carousel('cycle');
     $("#carousel-button").children("span").removeClass("fa-play")
     $("#carousel-button").children("span").addClass("fa-pause")
   }
 })
});



$(document).ready(function(){
 $('[data-toggle="tooltip"]').tooltip();
})
