$(document).ready(function() {
  $("section.new-tweet form").on("submit", function(event) {
    var element = this;
    onSubmit(event, element);
  });
  // Submit tweet by pressing ctrl/cmd+enter
  $("section.new-tweet form").keydown(function (e) {
      if ((e.metaKey || e.ctrlKey) && e.keyCode == 13) {
      var element = this;
      onSubmit(e, element);
      return false;
    }
  });
});

function onSubmit(event, element) {
  event.preventDefault();
  // Tweet validation - error msgs if user submits empty tweet or tweet over 140 characters
  if ($(element).find("textarea").val() === "") {
      alert("Cannot submit empty field.");
    }
    else if ($(element).find("textarea").val().length > 140) {
      alert("Text exceeds character limit (140).");
    }
    else {
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: $(element).serialize(),
        success: function(data) {
          $("#tweetsContainer").prepend(createTweetElement(data.tweet));
          //clears the text area after user submits new tweet
          $("section.new-tweet form").find("textarea").val("");
          //brings character counter back to 140 after user submits tweet
          $("section.new-tweet form").find("span.counter").text(140);
        }
      });
    };
};

