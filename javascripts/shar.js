$(document).ready(function(){
	$(".grid-item4").click(function(){
		$(".n1, .n5, .n19, .n42").css({
			top: function(index, value) {
				return parseFloat (value) -25;
			}
		});
    $(".n1, .n5, .n19, .n42").css({
			left: function(index, value) {
				return parseFloat (value) -25;
			}
		});
	});
  $(".grid-item4").click(function(){
		$(".n2, .n13, .n56, .n4").css({
			top: function(index, value) {
				return parseFloat (value) -25;
			}
		});
    $(".n2, .n13, .n56, .n4").css({
			left: function(index, value) {
				return parseFloat (value) +25;
			}
		});
	});
  $(".grid-item4").click(function(){
    $(".n22, .n10, .n39, .n44, .n6").css({
      top: function(index, value) {
        return parseFloat (value) -20;
      }
    });
    $(".n22, .n10, .n39, .n44, .n6").css({
      left: function(index, value) {
        return parseFloat (value) -20;
      }
    });
  });
  $(".grid-item4").click(function(){
    $(".n7, .n15, .n23, .n24, .n21").css({
      top: function(index, value) {
        return parseFloat (value) -20;
      }
    });
    $(".n7, .n15, .n23, .n24, .n21").css({
      left: function(index, value) {
        return parseFloat (value) +20;
      }
    });
  });
  $(".grid-item4").click(function(){
    $(".n51, .n11, .n45, .n38").css({
      top: function(index, value) {
        return parseFloat (value) -15;
      }
    });
    $(".n51, .n11, .n45, .n38").css({
      left: function(index, value) {
        return parseFloat (value) +15;
      }
    });
  });
  $(".grid-item4").click(function(){
    $(".n3, .n20, .n40, .n49, .n8").css({
      top: function(index, value) {
        return parseFloat (value) -15;
      }
    });
    $(".n3, .n20, .n40, .n49, .n8").css({
      left: function(index, value) {
        return parseFloat (value) -15;
      }
    });
  });
  $(".grid-item4").click(function(){
    $(".n9, .n18, .n16, .n43, .n16, .n33, .n12, .n41, .n37").css({
      top: function(index, value) {
        return parseFloat (value) -10;
      }
    });
    $(".n9, .n18, .n16, .n43, .n16, .n33, .n12, .n41, .n37").css({
      left: function(index, value) {
        return parseFloat (value) -10;
      }
    });
  });
  $(".grid-item4").click(function(){
    $(".n14, .n25, .n29, .n28, .n26, .n46, .n32, .n55, .n37").css({
      top: function(index, value) {
        return parseFloat (value) -10;
      }
    });
    $(".n14, .n25, .n29, .n28, .n26, .n46, .n32, .n55, .n37").css({
      left: function(index, value) {
        return parseFloat (value) +10;
      }
    });
  });
  $(".grid-item4").click(function(){
    $(".n36, .n50, .n48, .n52, .n47, .n17, .n34, .n31, .n57").css({
      top: function(index, value) {
        return parseFloat (value) -5;
      }
    });
    $(".n36, .n50, .n48, .n52, .n47, .n17, .n34, .n31, .n57").css({
      left: function(index, value) {
        return parseFloat (value) -5;
      }
    });
  });
  $(".grid-item4").click(function(){
    $(".n53, .n54, .n35, .n30, .n27").css({
      top: function(index, value) {
        return parseFloat (value) -5;
      }
    });
    $(".n53, .n54, .n35, .n30, .n27").css({
      left: function(index, value) {
        return parseFloat (value) +5;
      }
    });
  });
});
