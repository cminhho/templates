$(".zoom").click(function() {
  var image = $(this);
  var display = $(".imagedisplay");
  var imageholder = $(".viewimage");
  display.css({
    "display":"table-cell"
  });
  imageholder.html("<img src='"+image.attr('src')+"'/>");
});