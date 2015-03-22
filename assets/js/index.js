$(document).ready(function() {

  $('a[href^=http]:not([rel=internal])').attr('target', '_blank');

  var $postContent = $(".postPage");
  $postContent.fitVids();
});
