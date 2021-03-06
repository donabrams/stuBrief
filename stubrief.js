// Generated by CoffeeScript 1.3.3
(function() {

  $(function() {
    var banner, controls;
    (function($el, scale) {
      var resize, win;
      win = $(window);
      resize = function() {
        return $el.css('font-size', win.width() / scale);
      };
      resize();
      return win.on('resize', resize);
    })($("body"), 63.0);
    banner = $("#banner");
    controls = $(".controls", banner);
    controls.on("click", ".next", function() {
      var articles;
      articles = $("article", banner);
      return articles.hide('slow', function() {
        var toEnd;
        toEnd = $(articles[0]).remove();
        banner.append(toEnd);
        return articles.show('slow');
      });
    });
    return controls.on("click", ".prev", function() {
      var articles;
      articles = $("article", banner);
      return articles.hide('slow', function() {
        var toFront;
        toFront = $(articles[articles.length - 1]).remove();
        $(articles[0]).before(toFront);
        return articles.show('slow');
      });
    });
  });

}).call(this);
