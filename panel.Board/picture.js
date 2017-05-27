//$('#debug').html('Loading picture.js');

function Picture(id) {
  $('#debug').html('in Picture');
  BoardObj.call(this,"picture",id);
  //$('#debug').html('here in Picture');

  $('#'+id).draggable();
  this.src;

  this.setSrc = function(s){
    this.src = s;
  }
}
Picture.prototype = Object.create(BoardObj.prototype);
Picture.prototype.constructor = Picture;




function BoardBG(id,x,y) {
  $('#debug').html('in BoardBG');
  Picture.call(this,id,x,y);
  //$('#debug').html('reached here');

  this.parentId = 'boardView';

  // dimentions of the view
  this.viewW = parseInt($('#'+this.parentId).css('width').substring(0,$('#'+this.parentId).css('width').length-2));
  this.viewH = parseInt($('#'+this.parentId).css('height').substring(0,$('#'+this.parentId).css('height').length-2));

  this.checkBoundaries = function(){
    var spacing = 0.2;

    $('#debug').html(strf('t={},l={},w={},h={}',[top,left,width,height]));

    // check for combo boundary breakers

    if (top > viewH*spacing && left > viewW*spacing){ // \
      $('#'+this.id).animate({
        top: (viewH*spacing).toString()+"px",
        left: (viewW*spacing).toString()+"px"
      },500);
    } else if (top > viewH*spacing && left+width < viewW*(1-spacing)){// /
      $('#'+this.id).animate({
        top: (viewH*spacing).toString()+"px",
        left: (viewW*(1-spacing) - width).toString()+"px"
      },500);
    } else if (top + height < viewH*(1-spacing) && left > viewW*spacing){ // /
      $('#'+this.id).animate({
        top: (viewH*(1-spacing) - height).toString()+"px",
        left: (viewW*spacing).toString()+"px"
      },500);
    } else if (top + height < viewH*(1-spacing) && left+width < viewW*(1-spacing)){// \
      $('#'+this.id).animate({
        top: (viewH*(1-spacing) - height).toString()+"px",
        left: (viewW*(1-spacing) - width).toString()+"px"
      },500);

      //check individual boundary breakers
    } else if (top > viewH*spacing){
      $('#'+this.id).animate({
        top: (viewH*spacing).toString()+"px",
      },500);
    } else if (top + height < viewH*(1-spacing)){
      $('#'+this.id).animate({
        top: (viewH*(1-spacing) - height).toString()+"px",
      },500);
    } else if (left > viewW*spacing){
      $('#'+this.id).animate({
        left: (viewW*spacing).toString()+"px",
      },500);
    } else if (left + width < viewH*(1-spacing)){
      $('#'+this.id).animate({
        left: (viewW*(1-spacing) - width).toString()+"px",
      },500);
    }

  }
}
BoardBG.prototype = Object.create(Picture.prototype);
BoardBG.prototype.constructor = BoardBG;


loadedScripts.push('p');
