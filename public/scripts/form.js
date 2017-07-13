

$(document).ready(function() {
  $("section.new-tweet form").on("submit", function(event) {
    event.preventDefault();

    if ($(this).find("textarea").val() === "") {
      alert("Cannot submit empty field.");
      //$.flash("Cannot submit empty field.");
    }
    else if ($(this).find("textarea").val().length > 140) {
      alert("Text exceeds character limit (140).");
      //$.flash("Text exceeds character limit (140)");
    }
    else {
    $.ajax({
        method: 'POST',
        url: '/tweets',
        data: $(this).serialize(),
        success: function(data) {

          //createTweetElement(data.tweet);
          $("#tweetsContainer").prepend(createTweetElement(data.tweet));
          $("section.new-tweet form").find("textarea").val("");

    }
  });
  }
});
});




