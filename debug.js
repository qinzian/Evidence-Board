function mousedOver(){
	$('#objInfo').html(this.toString());
}

function toggleDebugP(){
	$('#debugInfo').children().toggle();
}
//toggleDebugP(); // hide debugZone on load/**/


$(function() {//keeps track of where the mouse is
    $('.zone').mousemove(function(e) {
        $('#mousePos').html(strf('({},{})',[event.offsetX,event.offsetY]));
    });
});
