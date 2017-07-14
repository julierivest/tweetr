$(document).ready(function() {
  $("section.new-tweet form").on("submit", function(event) {
    var element = this;
    onSubmit(event, element);
  });


  $("section.new-tweet form").keydown(function (e) {
    //if (e.which == 13 && ) {
      if ((e.metaKey || e.ctrlKey) && e.keyCode == 13) {
        //HOW TO DO CMD+ENTER
      var element = this;
      onSubmit(e, element);
      return false;
    }
  });
});



function onSubmit(event, element) {
  event.preventDefault();
  if ($(element).find("textarea").val() === "") {
      alert("Cannot submit empty field.");
      //$.flash("Cannot submit empty field.");
    }
    else if ($(element).find("textarea").val().length > 140) {
      alert("Text exceeds character limit (140).");
      //$.flash("Text exceeds character limit (140)");
    }
    else {
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: $(element).serialize(),
        success: function(data) {
          //createTweetElement(data.tweet) NO
          $("#tweetsContainer").prepend(createTweetElement(data.tweet));
          //clears the text area after user submits new tweet
          $("section.new-tweet form").find("textarea").val("");
          //brings character counter back to 140 after user submits tweet
          $("section.new-tweet form").find("span.counter").text(140);

        }
      });
    }

}


/* MAKE SUBMIT W ENTER KEY?
$("section.new-tweet form").keypress(function (e) {
  if (e.which == 13) {
    $('form#login').submit();
    return false;    //<---- Add this line
  }
});

*/