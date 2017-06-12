var board = new BoardBG('board');

var draggingBoard = false;


function dragBoard(){
  draggingBoard = true;
}

function mouseLeftBoard(){
  if (draggingBoard){
    board.updateRect();
    board.checkBoundaries();
    draggingBoard = false;
  }
  //log('reached final');
}/**/

function dragBoardObj(id){
  ih.getObj(id).setDrag(true);
}
