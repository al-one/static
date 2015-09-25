/*
 * jquery-an-cover By Alone
 */
window['jQuery'] && window['jQuery'](function($)
{
  (function(fun)
  {
    $.fn.anCover = function()
    {
      $(this).each(fun);
    }
    $('img.an-cover').anCover();
  })
  (function()
  {
    var img = $(this),
        src = img.attr('src'),
        _im = new Image(),
        tim = 500;
    _im.src = src;
    function cover()
    {
      var box = img.parent().css('overflow','hidden'),
          _bf = box.css('float'),
          _bw = box.css('float','left').width(),
          _bh = box.height(),
          _iw = _im.width,
          _ih = _im.height;
      _iw / _ih <= _bw / _bh
      ? (function()
      {
        img.width(_bw).height('auto').css('max-height','none');
        var mgt = _bh - img.height();
        mgt = mgt > 0 ? 0 : mgt / 2;
        img.animate({marginTop:mgt},tim);
      })()
      : (function()
      {
        box.css('text-align','center');
        img.width('auto').height(_bh).css('max-width','none');
        var mgl = _bw - img.width();
        mgl = mgl > 0 ? 0 : mgl / 2;
        img.animate({marginLeft:mgl},tim);
      })();
      box.css('float',_bf);
    }
    if(_im.complete) cover();
    else _im.onload = cover;
  });
});