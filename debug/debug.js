function toggleDebugP(){
	$("#debugInfo").children().toggle();
}
//toggleDebugP(); // hide debugZone on load/**/

function test(){
	logObj(objToString(lh.noteToLines));
	log(objToString(lh.getDict()));
}

$(function(){
	$(".zone").mousemove(function(event){
		$("#mousePos").html(strf("({},{})",[event.offsetX,event.offsetY]));
	});

});
