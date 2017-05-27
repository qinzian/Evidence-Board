$('#debug').html('begun');
var board = new BoardBG('board');
$('#debug').html('reached');

$('#objInfo').html(board.getId());

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
