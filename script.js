var board = new BoardBG('board');

var draggingBoard = false;

function dragBoard(){
  draggingBoard = true;
}

function mouseLeftBoard(){
  if (draggingBoard){
    board.updateRect();
    board.checkBoundaries();
  }
  //$('#debug').html('reached final');
}/**/

$("#board").dblclick(function(event){ // creates a note obj in both back and front end around the cursor pos
  //$('#debug').html('doubleclicked');
  ig.genNote(event.offsetX,event.offsetY);
});

$("#board .boardObj").dblclick(function(e) {
  e.stopPropagation();
});


//angular stuff---------------------------------------------------------------
var EBapp = angular.module("Evidence-Board",[]);
EBapp.controller("OptionCtrler", OptionCtrler);
EBapp.controller("IHCtrler",IHCtrler);
