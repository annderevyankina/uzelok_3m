$(document).ready(function(){
	// $(".poloski").click(function(){
	// 	$(this).addClass("op");
	// });
	$(function () {
	let count = 0;
	$('.poloski').click(function () {
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
