"use strict";
//var str=data.stockCodes[0].stockCode;
if (typeof(localStorage.stockCode) == "undefined" || localStorage.stockCode == "") {
    $("#codesInfo").prepend("no code,add first");
} else {
    console.log(localStorage.stockCode);
    var url = "http://hq.sinajs.cn/list=" + localStorage.stockCode;
    console.log(url);
    $("head").append('<script src=\"' + url + '\"></scr'+'ipt>');
     // var html = '<div>html</div><script>url<\/script>';
    // $('#cont').html(html);
}

