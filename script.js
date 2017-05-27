var board = new BoardBG('board',0,0);
$('#objInfo').html(board.getId());

var draggingBoard = false;


function dragBoard(){
  draggingBoard = true;
}

function mouseLeftBoard(){
  if (draggingBoard){
    //board.checkBoundaries();
  }
  //$('#debug').html('reached final');
}/**/
