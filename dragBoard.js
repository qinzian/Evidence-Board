var initMx;
var initMy;
var currMx;
var currMy;

function setMousePos(){
  //initMx;
}

$(function() {
  $('#board').mousemove(function(e) {
		currMx = e.offsetX;
		currMy = e.offsetY;
  });
  $('#board').mousedown(function(e){
    $('#debug').html('reached');
  });
});

var bg = new Picture("pics/bg.png",0,0);

function checkBoundaries(){
  //$('#board'). TODO
}

function updateObjs(){
  var coll;
  var handlers = [lh,ph,nh];

  for (var i = 0; i < 3; i++) {
    coll = handlers[i].getCollection();

    for (var i = 0; i < coll.length; i++) {
      updateObj(coll[i]);
    }
  }
}

function updateObj(obj){
  obj.update();
}

function dragBoard(){
  checkBoundaries();
  //updateObjs();
  updateObj(bg); // just update board for now
}

$('#debug').html('begun');
