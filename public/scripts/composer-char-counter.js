$(document).ready(function() {
  const MAX = 140;
  $(".new-tweet textarea").on("keyup", function () {
    var $counterEl = $(this).parents().children(".counter");
    var characs = $(this).val().length;
    var charsLeft = MAX - characs;
    $counterEl.text(charsLeft);
    if (charsLeft < 0) {
      $counterEl.addClass("counterRed");
    }
    else {
      $counterEl.removeClass("counterRed");
    }
  });
});


//MAKE SHORTER--TAKE OUT VARS!! ESP COUNTEREL