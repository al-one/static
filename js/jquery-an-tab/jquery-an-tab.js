/*
 * jquery-an-tab By Alone
 */
window['jQuery'] && window['jQuery'](function($)
{
  (function(fun)
  {
    $.fn.anTab = function()
    {
      $(this).each(fun);
    }
    $('.an-tab').anTab();
  })
  (function()
  {
    var tab = $(this),
        cls = 'on hover active',
        thd = tab.find('.an-tab-hd'),
        tbd = tab.find('.an-tab-bd'),
        eve = $.trim(tab.attr('data-tab-event')) || 'click',//mouseenter
        ani = $.trim(tab.attr('data-tab-animate')) || 'fadeIn',
        atm = parseInt(tab.attr('data-tab-animate-time')) || 200;
    thd[$.fn.on ? 'on' : 'live'](eve,function()
    {
      var idx = thd.index(this);
      thd.removeClass(cls);
      $(this).addClass(cls);
      tbd.hide().eq(idx).stop(true,true)[ani](atm);
    })
    .eq(0).trigger(eve);
  });
});