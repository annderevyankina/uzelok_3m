$(document).ready(function(){
  $(function() {
    $( "#pz1" ).draggable();
    $( ".pz1" ).droppable({
      accept: "#pz1",
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( ".pz1" )
          .removeClass( "op" );
        $("#pz1")
          .addClass("none");
      }
    });
  });
  $(function() {
    $( "#pz2" ).draggable();
    $( ".pz2" ).droppable({
      accept: "#pz2",
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( ".pz2" )
          .removeClass( "op" );
        $("#pz2")
          .addClass("none");
      }
    });
  });
  $(function() {
    $( "#pz3" ).draggable();
    $( ".pz3" ).droppable({
      accept: "#pz3",
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( ".pz3" )
          .removeClass( "op" );
        $("#pz3")
          .addClass("none");
      }
    });
  });
  $(function() {
    $( "#pz4" ).draggable();
    $( ".pz4" ).droppable({
      accept: "#pz4",
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( ".pz4" )
          .removeClass( "op" );
        $("#pz4")
          .addClass("none");
      }
    });
  });
  $(function() {
    $( "#pz5" ).draggable();
    $( ".pz5" ).droppable({
      accept: "#pz5",
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( ".pz5" )
          .removeClass( "op" );
        $("#pz5")
          .addClass("none");
      }
    });
  });
  $(function() {
    $( "#pz6" ).draggable();
    $( ".pz6" ).droppable({
      accept: "#pz6",
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( ".pz6" )
          .removeClass( "op" );
        $("#pz6")
          .addClass("none");
      }
    });
  });
});
