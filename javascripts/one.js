$(document).ready(function(){
  $(".square").click(function(){
    $(this).addClass("op");
    setTimeout(function(){
      $(".square").removeClass("op");
    }, 5000);
  });
  $(".round").click(function(){
    $(this).addClass("op");
    setTimeout(function(){
      $(".round").removeClass("op");
    }, 5000);
  });
  $(".star").click(function(){
    $(this).addClass("op");
    setTimeout(function(){
      $(".star").removeClass("op");
    }, 5000);
  });

  $(function () {
  let count = 0;
  $('.sun').click(function () {
    count += 1;
    if (count%2) {
      $('#k1').addClass('op');
    }
    else {
      $('#k1').removeClass('op');
    }
  });
  });

  $(function () {
  let count = 0;
  $('.girls').click(function () {
    count += 1;
    if (count%2) {
      $('#k2').addClass('op');
    }
    else {
      $('#k2').removeClass('op');
    }
  });
  });

  $(function () {
  let count = 0;
  $('.alarm').click(function () {
    count += 1;
    if (count%2) {
      $('#k3').addClass('op');
    }
    else {
      $('#k3').removeClass('op');
    }
  });
  });
});
