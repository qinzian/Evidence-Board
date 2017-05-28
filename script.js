var board = new BoardBG('board');
$('#board').dblclick(function(){
  
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
