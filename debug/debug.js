function toggleDebugP(){
	$("#debugInfo").children().toggle();
}
//toggleDebugP(); // hide debugZone on load/**/

var angle = 0;
function test(){
	var tmp1 = $("#debugInput1").val().split(" ");
	var p1 = {x:tmp1[0],y:tmp1[1]};

	var tmp2 = $("#debugInput2").val().split(" ");
	var p2 = {x:tmp2[0],y:tmp2[1]};
	//log(tmp2[1]);
	log(strf("({},{})<br>({},{})",[p1.x,p1.y,p2.x,p2.y]));
	// creating visual component of line
	var lineId = "line100";
	var newElem = strf("<img id = \"{}\" class = \"line\" src = \"pics/line.png\">",
										[lineId]);
	$("#board").prepend(newElem);
	//-------------------------orienting-the-visual-line-properly-------------
	var lineObj = new Line(lineId);
	lineObj.updatePt1(p1);
	lineObj.updatePt2(p2);
	lineObj.updateDraw();
}

$(function(){
	$(".zone").mousemove(function(event){
		$("#mousePos").html(strf("({},{})",[event.offsetX,event.offsetY]));
	});

});
