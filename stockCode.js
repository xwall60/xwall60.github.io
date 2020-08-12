"use strict";

function addCode() {
	var txt = document.getElementById("code").value;
	console.log(txt);
	if (typeof(localStorage.stockCode) == "undefined" || localStorage.stockCode == "") {
		localStorage.stockCode = txt;
	} else {
		console.log(localStorage.stockCode);
		localStorage.stockCode = localStorage.stockCode + "," + txt;
	}
	console.log(localStorage.stockCode);
	location.reload();
}
function clearCodes() {
	localStorage.clear();
	location.reload();
}

function delCode(code) {

	localStorage.stockCode = localStorage.stockCode.replace(code, "");
	console.log(localStorage.stockCode);
	location.reload();
}

window.onload = function () {
	showCodeInfo();
}

function showCodeInfo() {
	//console.log(hq_str_s_sz300251);
	if (typeof(localStorage.stockCode) == "undefined" || localStorage.stockCode == "") {
		$("#codesInfo").prepend("no code,add first");
	} else {
		//var str=data.stockCodes[0].stockCode;
		var stockCodes = localStorage.stockCode.split(",");
		var perUp;
		for (var i = 0; i < stockCodes.length; i++) {
			console.log(stockCodes[i]);
			var stockInfo = eval("hq_str_" + stockCodes[i]);

			console.log(stockInfo);
			//document.write(stockInfo);
			var elements = stockInfo.split(",");
			if ((elements[3] - elements[2]) > 0) {
				var stockcolor = 'red';
			} else if ((elements[3] - elements[2]) < 0) {
				stockcolor = 'green'
			}
			perUp = ((elements[3] - elements[2]) * 100 / elements[2]).toFixed(2);
            /*if (perUp > 0){
			 window.alert(":)")
			}else if(perUp <0){
				window.alert(":(")
			}*/
			var code = "";
			if (i == 0 && i == stockCodes.length - 1) {
				code = stockCodes[i];
			} else if (i == stockCodes.length - 1) {
				code = "," + stockCodes[i];
			} else {
				code = stockCodes[i] + ",";
			}

			//insRow(elements[1],elements[2], elements[3] );

			$("#codesInfo").prepend("<p class=\"codeList\" style='color:" + stockcolor + ";'>" +
				"<button onclick='delCode(\"" + code + "\")'>-</button>" +
				elements[3] + ", " + (elements[3] - elements[2]).toFixed(2) + ", " + perUp + "%" +
				"</p>");
		}
	}
}

$(document).ready(function () {
	$("#SHOW").click(function () {
		location.reload();
	});
	$("#HIDE").click(function () {
		$("p.codeList").hide("slow");
	});
});

function insRow(e1, e2, e3) {
	var x = document.getElementById('codesInfo').insertRow(0);
	var y = x.insertCell(0);
	var z = x.insertCell(1);
	var l = x.insertCell(2);
	y.innerHTML = e1;
	z.innerHTML = e2;
	l.innerHTML = e3;
}
