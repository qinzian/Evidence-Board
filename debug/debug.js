function toggleDebugP(){
	$("#debugInfo").children().toggle();
}
//toggleDebugP(); // hide debugZone on load/**/

var angle = 0;
function test(){
	var tmp1 = $("#debugInput1").val().split(" ");
	var p1 = {x:parseInt(tmp1[0]),y:parseInt(tmp1[1])};

	var tmp2 = $("#debugInput2").val().split(" ");
	var p2 = {x:parseInt(tmp2[0]),y:parseInt(tmp2[1])};
	/*/ creating visual component of line
	var newElem = "<img id = 'lines' class = 'line' src = 'pics/line.png'>";
	$("#board").append(newElem);
	log("added new line elem to #board");*/
	//-------------------------orienting-the-visual-line-properly-------------
	var lineObj = new Line("lines");
	log("added obj in memory");

	lineObj.updatePt1(p1);
	lineObj.updatePt2(p2);
	//$("#objInfo").html(lineObj.getPt1str()+"<br>"+lineObj.getPt2str());
	lineObj.updateDraw();

}

$(function(){
	$(".zone").mousemove(function(event){
		$("#mousePos").html(strf("({},{})",[event.offsetX,event.offsetY]));
	});

});
