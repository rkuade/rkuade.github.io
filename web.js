window.onload = function() {
  var i = $("h3");
  var offsets = [];
  for (var j = 0; j < i.length; j++) {
    offsets.push(i.eq(j).offset().top);
  }
  console.log(offsets);

  $(window).on("scroll", function() {
    var highlight;
    for (var k = 0; k < i.length; k++) {
      if ($(this).scrollTop() < offsets[k]) {
        highlight = (k-1 < 0) ? 0 : k-1;
        break;
      }
    }
    for (var k = 0; k < i.length; k++) {
      $(".navbar li a").eq(k).css("color", "blue");
    }
    $(".navbar li a").eq(highlight).css("color", "dodgerblue");
  });
}