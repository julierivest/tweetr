$(document).ready(function() {
  const MAX = 140;
  $(".new-tweet textarea").on("keyup", function () {
    var $counterEl = $(this).parents().children(".counter");
    var characs = $(this).val().length;
    var charsLeft = MAX - characs;
    $counterEl.text(charsLeft);
  });
});

//MAKE SHORTER--TAKE OUT VARS!! ESP COUNTEREL