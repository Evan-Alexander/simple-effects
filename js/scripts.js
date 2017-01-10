$(document).ready(function() {
  $(".clickable").click(function() {
    $("#dolphin-showing").toggle();
    $("#dolphin-hidden").slideToggle();
  });

  $("button#green").click(function() {
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").addClass("yellow-background");
  });


});
