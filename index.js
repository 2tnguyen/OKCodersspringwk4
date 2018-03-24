var $ = require("jquery");
var _ = require("lodash");

var list = ["tom", "braxton", "whitney", "tanner" ];

function message(){
	console.log("This is a message");
	alert("This is a message");
}

$(document).ready(function(){
	$("p").html("<div>Another Message</div>");
});

window.message = message;
