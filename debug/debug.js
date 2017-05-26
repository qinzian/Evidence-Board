function toggleDebugP(){
	$('#debugInfo').children().toggle();
}
//toggleDebugP(); // hide debugZone on load/**/


$(function(){
	$('.zone').mousemove(function(event){
		$('#mousePos').html(strf('({},{})',[event.offsetX,event.offsetY]));
	});
	
});

$('#debug').html('debug done loading');
