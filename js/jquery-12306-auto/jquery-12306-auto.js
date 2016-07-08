/*
 * jquery-12306-auto By Alone
 */

//javascript:(function(an56_net){$('#date_range').on('click','li',function(){$(this).addClass('sdm-select-date').siblings('li').removeClass('sdm-select-date');}).find('li.sel').addClass('sdm-select-date');an56_net(an56_net);if(window.Notification && Notification.permission != 'granted') Notification.requestPermission();})(function(an56_net){if($('#tip:contains("恭喜")').is(':visible')){var ntf = false,tip = '有票了！';if(window.Notification) ntf = new Notification('12306',{body:tip});alert(tip);return ntf;}else{$('#qd_closeDefaultWarningWindowDialog_id').click();$('input#auto_query:enabled').click();$('#date_range li.sdm-select-date').click();return setTimeout(function(){ an56_net(an56_net); },2000);}});

(function(an56_net)
{
  $('#date_range')
  .on('click','li',function()
  {
    $(this).addClass('sdm-select-date').siblings('li').removeClass('sdm-select-date');
  })
  .find('li.sel').addClass('sdm-select-date');
  an56_net(an56_net);
  if(window.Notification && Notification.permission != 'granted') Notification.requestPermission();
})
(function(an56_net)
{
  if($('#tip:contains("恭喜")').is(':visible'))
  {
    var ntf = false,
        tip = '有票了！';
    if(window.Notification) ntf = new Notification('12306',{body:tip});
    alert(tip);
    return ntf;
  }
  else
  {
    $('#qd_closeDefaultWarningWindowDialog_id').click();
    $('input#auto_query:enabled').click();
    $('#date_range li.sdm-select-date').click();
    return setTimeout(function(){ an56_net(an56_net); },2000);
  }
});