$(document).ready(function(){
  $(function() {
    $( "#v3" ).draggable();
    $( ".grid-item5" ).droppable({
      drop: function( event, ui ) {
        $(".v1, .v2")
          .removeClass("none");
        $("#v3")
          .addClass("none");
        $(".v1")
          .css("animation-play-state", "running");
        $(".pod1, .pod2")
          .addClass("none");
      }
    });
  });

});
