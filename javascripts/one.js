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
      $(this).addClass('op');
    }
    else {
      $(this).removeClass('op');
    }
  });
  });

  $(function () {
  let count = 0;
  $('.girls').click(function () {
    count += 1;
    if (count%2) {
      $(this).addClass('op');
    }
    else {
      $(this).removeClass('op');
    }
  });
  });

  $(function () {
  let count = 0;
  $('.alarm').click(function () {
    count += 1;
    if (count%2) {
      $(this).addClass('op');
    }
    else {
      $(this).removeClass('op');
    }
  });
  });
});
