$ ->
  # reflexive layout based on em's
  (($el, scale) ->
    win = $(window)
    # simplified version of fittext.js
    resize = ->
      $el.css 'font-size', win.width()/scale
    resize()
    win.on 'resize', resize
  ) $("body"), 63.0
  banner = $("#banner")
  controls = $(".controls", banner)
  controls.on "click", ".next", ->
    articles = $("article", banner)
    articles.hide 'slow', ->
      toEnd = $(articles[0]).remove()
      banner.append(toEnd);
      articles.show 'slow'
  controls.on "click", ".prev", ->
    articles = $("article", banner)
    articles.hide 'slow', ->
      toFront = $(articles[articles.length-1]).remove()
      $(articles[0]).before(toFront)
      articles.show 'slow'
    