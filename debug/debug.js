function toggleDebugP(){
	$("#debugInfo").children().toggle();
}
//toggleDebugP(); // hide debugZone on load/**/

function test(){
	var tmp = "";
	var obj = ih.getObj("note0").getCxns();
	for (var id in obj) {
		tmp+=id+", "
	}
	$("#objInfo").html(tmp);
	$("#debug").html("lala");
}

$(function(){
	$(".zone").mousemove(function(event){
		$("#mousePos").html(strf("({},{})",[event.offsetX,event.offsetY]));
	});

});
