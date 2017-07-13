/*

var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "<script>$('body').remove();</script>"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];



*/




function renderTweets(tweetsArr) {
    tweetsArr.reverse();
    for (var tweet of tweetsArr) {
      $("#tweetsContainer").append(createTweetElement(tweet));
    };
  };


function createTweetElement(tweetData) {
    var $tweet = $("<article>").addClass("tweet");
    var $header = $("<header>").addClass("clear-fix");
    $tweet.append($header);
    var $avatar = $("<img>", {src: tweetData.user.avatars.small});
    $header.append($avatar);
    var $name = $("<h2>").text(tweetData.user.name);
    $header.append($name);
    var $handle = $("<span>").text(tweetData.user.handle);
    $header.append($handle);
    var $content = $("<section>").text(tweetData.content.text);
    $tweet.append($content);
    var $footer = $("<footer>");
    $tweet.append($footer);
    var $footerPara = $("<p>");
    $footer.append($footerPara);
    var $icons = $("<span>").attr("id", "icons").html("&#x2691;  &#x267A;  &hearts;"); //IS THIS RIGHT??
    $footerPara.append($icons);
    var s = new Date(tweetData.created_at).toISOString();
    var $created_at = $("<span>").addClass("timeago").text($.timeago(s)); //HOW TO MAKE IT DAYS SINCE.."4 DAYS AGO"
    $footerPara.append($created_at);

    return $tweet;
};


  function loadTweets() {
    console.log("hola");
  $.ajax({
    url: '/tweets',
    type: 'GET',
    success: function(data) {
      renderTweets(data);
    }
  });
  }



$(document).ready(function() {


  loadTweets();
});







