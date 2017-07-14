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
    var $icons = $("<span>").attr("id", "icons");
    $footerPara.append($icons);
    var $flagIcon = $("<i>").addClass("fa fa-flag").attr("aria-hidden", "true");
    $icons.append($flagIcon);
    var $RTIcon = $("<i>").addClass("fa fa-retweet").attr("aria-hidden", "true");
    $icons.append($RTIcon);
    var $heartIcon = $("<i>").addClass("fa fa-heart").attr("aria-hidden", "true");
    $icons.append($heartIcon);
    var s = new Date(tweetData.created_at).toISOString();
    var $created_at = $("<span>").addClass("timeago").text($.timeago(s)); //HOW TO MAKE IT DAYS SINCE.."4 DAYS AGO"
    $footerPara.append($created_at);
    return $tweet;
  };





function loadTweets() {
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







