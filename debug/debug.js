function toggleDebugP(){
	$("#debugInfo").children().toggle();
}
toggleDebugP(); // hide debugZone on load/**/

function test(){
	alert("debug test func");
}

$(function(){
	$(".zone").mousemove(function(event){
		$("#mousePos").html(strf("({},{})",[event.offsetX,event.offsetY]));
	});

});
