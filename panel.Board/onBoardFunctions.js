var board = new BoardBG('board');


function dragBoard(){
  board.setDrag(true);
}

function mouseLeftBoard(){
  if (board.getDrag()){
    board.updateRect();
    board.checkBoundaries();
    board.setDrag(false);
  }
  //log('reached final');
}/**/

function dragBoardObj(id){
	var obj = nh.getObj(id);
  obj.setDrag(true);
}
