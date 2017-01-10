$(document).ready(function() {
  $(".clickable").click(function() {
    $("#dolphin-showing").toggle();
    $("#dolphin-hidden").slideToggle();
  });
});
