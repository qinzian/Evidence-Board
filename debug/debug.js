function toggleDebugP(){
	$("#debugInfo").children().toggle();
}
//toggleDebugP(); // hide debugZone on load/**/

function test(){
	$("#objInfo").html(ih.toString());
}

$(function(){
	$(".zone").mousemove(function(event){
		$("#mousePos").html(strf("({},{})",[event.offsetX,event.offsetY]));
	});

});

loadedScripts.push('debug');

$('#debug').html(strf('script({}):<br>{}<br>loaded({}):<br>{}',[scripts.length,scripts,loadedScripts.length,loadedScripts]));
