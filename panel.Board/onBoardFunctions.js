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
  //log('reached final');
}/**/

function dragBoardObj(id){
  ih.getObj(id).setDrag(true);
}
