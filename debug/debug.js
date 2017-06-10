function toggleDebugP(){
	$("#debugInfo").children().toggle();
}
//toggleDebugP(); // hide debugZone on load/**/

function test(){
	$("#objInfo").html(ih.getDict().keys.toString());
	//log("lala");
}

$(function(){
	$(".zone").mousemove(function(event){
		$("#mousePos").html(strf("({},{})",[event.offsetX,event.offsetY]));
	});

});
