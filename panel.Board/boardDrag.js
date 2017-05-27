var parentId = 'boardView';
var currId = 'board';
var draggingBoard = false;

// dimentions of the view
var viewW = parseInt($('#boardView').css('width').substring(0,$('#boardView').css('width').length-2));
var viewH = parseInt($('#boardView').css('height').substring(0,$('#boardView').css('height').length-2));

$('#board').draggable();

function dragBoard(){
  draggingBoard = true;
}

function mouseLeftBoard(){
  if (draggingBoard){
    checkBoundaries();
  }
}



function checkBoundaries(){
  var top = parseInt($('#board').css('top').substring(0,$('#board').css('top').length-2));
  var left = parseInt($('#board').css('left').substring(0,$('#board').css('left').length-2));
  var width = parseInt($('#board').css('width').substring(0,$('#board').css('width').length-2));
  var height = parseInt($('#board').css('height').substring(0,$('#board').css('height').length-2));

  var spacing = 0.2;

  $('#debug').html(strf('t={},l={},w={},h={}',[top,left,width,height]));

  // check for combo boundary breakers

  if (top > viewH*spacing && left > viewW*spacing){ // \
    $('#board').animate({
      top: (viewH*spacing).toString()+"px",
      left: (viewW*spacing).toString()+"px"
    },500);
  } else if (top > viewH*spacing && left+width < viewW*(1-spacing)){// /
    $('#board').animate({
      top: (viewH*spacing).toString()+"px",
      left: (viewW*(1-spacing) - width).toString()+"px"
    },500);
  } else if (top + height < viewH*(1-spacing) && left > viewW*spacing){ // /
    $('#board').animate({
      top: (viewH*(1-spacing) - height).toString()+"px",
      left: (viewW*spacing).toString()+"px"
    },500);
  } else if (top + height < viewH*(1-spacing) && left+width < viewW*(1-spacing)){// \
    $('#board').animate({
      top: (viewH*(1-spacing) - height).toString()+"px",
      left: (viewW*(1-spacing) - width).toString()+"px"
    },500);

    //check individual boundary breakers
  } else if (top > viewH*spacing){
    $('#board').animate({
      top: (viewH*spacing).toString()+"px",
    },500);
  } else if (top + height < viewH*(1-spacing)){
    $('#board').animate({
      top: (viewH*(1-spacing) - height).toString()+"px",
    },500);
  } else if (left > viewW*spacing){
    $('#board').animate({
      left: (viewW*spacing).toString()+"px",
    },500);
  } else if (left + width < viewH*(1-spacing)){
    $('#board').animate({
      left: (viewW*(1-spacing) - width).toString()+"px",
    },500);
  }

}

loadedScripts.push('boardDrag');
