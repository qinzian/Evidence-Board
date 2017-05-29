var board = new BoardBG('board');

$('#bg').dblclick(function(event){
  //$('#debug').html('doubleclicked');
  ig.genNote(event.offsetX,event.offsetY);
});

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
