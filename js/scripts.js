var callback = function(){
  $('.item-skills').each(function(){
    newWidth = $(this).parent().width() * $(this).data('percent');
    $(this).width(0);
    var percent = 100 - $(this).data('percent')    
    $(this).animate({
        width: $(this).parent().width(),
    }, 1000);

    $(this).css("background", "linear-gradient(90deg, #2AA6C8 "+ (100-percent).toString()+"%, #9CE3F6 0%)")
  });
  $('.icons-red').each(function(){
    height = $(this).height();
    $(this).animate({
        height: 14,
    }, 2000);
  });
};


$(document).ready(callback);

var resize;
window.onresize = function() {
  clearTimeout(resize);
  resize = setTimeout(function(){
    callback();
  }, 100);
};