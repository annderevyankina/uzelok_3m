$(document).ready(function(){
  $(".pink").click(function(){
    $(".pink").addClass("op");
    setTimeout(function(){
      $(".pink").removeClass("op");
    }, 5000);
  });

});
