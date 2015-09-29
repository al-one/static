# 抢票神代码

---

```
javascript:(function(an56_net){$('#date_range').on('click','li',function(){$(this).addClass('sdm-select-date').siblings('li').removeClass('sdm-select-date');}).find('li.sel').addClass('sdm-select-date');an56_net(an56_net);if(window.Notification && Notification.permission != 'granted') Notification.requestPermission();})(function(an56_net){if($('#tip:contains("恭喜")').is(':visible')){var ntf = false,tip = '有票了！';if(window.Notification) ntf = new Notification('12306',{body:tip});alert(tip);return ntf;}else{$('#qd_closeDefaultWarningWindowDialog_id').click();$('input#auto_query:enabled').click();$('#date_range li.sdm-select-date').click();return setTimeout(function(){ an56_net(an56_net); },2000);}});
```

---

1. 复制上面的代码
2. 新增一个浏览器书签，将代码粘贴到书签的网址中
3. 打开12306[车票预订](https://kyfw.12306.cn/otn/leftTicket/init)页面
4. 输入车站及日期信息，勾选“开启自动查询”
5. 点击刚才新增的浏览器书签