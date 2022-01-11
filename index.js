$(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#circularcursor').css({
        left: e.pageX -16,
        top: e.pageY -16
      });
    })
  });

jQuery(document).ready(function() {

  let mouseX = 0, mouseY = 0;
  let xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 32;
    mouseY = e.pageY - 32; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 20);

});