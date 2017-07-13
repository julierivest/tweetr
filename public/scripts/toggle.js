$(document).ready(function() {
  $("button").click (function() {

    $(".new-tweet").slideToggle("slow").find("textarea").focus().scrollTop();
  });
  //blurring after focusing because = the only way to get rid of blue box around button when clicked
  $("button").focus (function() {
    $(this).blur();
  });
});


