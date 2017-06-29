function toggleDebugP(){
	$("#debugInfo").children().toggle();
}
//toggleDebugP(); // hide debugZone on load/**/

var angle = 0;
function test(){
	angle+=10;
	$("#line0").rotate(angle);
	//log("lala");
}

$(function(){
	$(".zone").mousemove(function(event){
		$("#mousePos").html(strf("({},{})",[event.offsetX,event.offsetY]));
	});

});
