$(document).ready(function(){
  $( function() {
    $( "#pz1" ).draggable();
    $( ".pz1" ).droppable({
      drop: function( event, ui ) {
        $( ".pz1" )
          .removeClass( "none" );
        $("#pz1")
          .addClass("none");
      }
    });
  } );
})
