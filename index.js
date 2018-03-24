var $ = require("jquery");
var _ = require("lodash");

var list = [ "tom", "braxton", "whitney", "tanner" ];

function addlist(){
 var newItem = $("#newItem").val();
 list.push(newItem);
 printList();
 $("#newItem").val("");
}

function message(){
	console.log("This is a message");
	alert("This is a message");
}

function printList(){
	var ourlist = $("#nameList");
	ourlist.html("");
	_(list).forEach(function(el){
	 ourlist.append("<li>" + el + "</li>");
	});
}

$(document).ready(printList);

window.list = list;
window.addlist = addlist;
window.printList = printList;
