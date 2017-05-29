function Picture(id) {
  //$('#debug').html('in Picture');
  BoardObj.call(this,"picture",id);
  this.src;

  $('#'+id).draggable();

  this.setSrc = function(s){
    this.src = s;
  }
}
Picture.prototype = Object.create(BoardObj.prototype);
Picture.prototype.constructor = Picture;




function BoardBG(id) {
  //$('#debug').html('in BoardBG');
  Picture.call(this,id);

  this.parentId = 'boardView';
  this.spacing = 0.2;

  // dimentions of the view
  this.viewW = parseInt($('#'+this.parentId).css('width').substring(0,$('#'+this.parentId).css('width').length-2));
  this.viewH = parseInt($('#'+this.parentId).css('height').substring(0,$('#'+this.parentId).css('height').length-2));

  this.checkBoundaries = function(){
    //$('#debug').html(strf('t={},l={},r={},b={}',[this.top,this.left,this.right,this.bot]));

    // check for combo boundary breakers

    if (this.top > this.viewH*this.spacing && this.left > this.viewW*this.spacing){ // \
      $('#'+this.id).animate({
        top: (this.viewH*this.spacing).toString()+"px",
        left: (this.viewW*this.spacing).toString()+"px"
      },500);
    } else if (this.top > this.viewH*this.spacing && this.left+this.w < this.viewW*(1-this.spacing)){// /
      $('#'+this.id).animate({
        top: (this.viewH*this.spacing).toString()+"px",
        left: (this.viewW*(1-this.spacing) - this.w).toString()+"px"
      },500);
    } else if (this.top + this.h < this.viewH*(1-this.spacing) && this.left > this.viewW*this.spacing){ // /
      $('#'+this.id).animate({
        top: (this.viewH*(1-this.spacing) - this.h).toString()+"px",
        left: (this.viewW*this.spacing).toString()+"px"
      },500);
    } else if (this.top + this.h < this.viewH*(1-this.spacing) && this.left+this.w < this.viewW*(1-this.spacing)){// \
      $('#'+this.id).animate({
        top: (this.viewH*(1-this.spacing) - this.h).toString()+"px",
        left: (this.viewW*(1-this.spacing) - this.w).toString()+"px"
      },500);

      //check individual boundary breakers
    } else if (this.top > this.viewH*this.spacing){
      $('#'+this.id).animate({
        top: (this.viewH*this.spacing).toString()+"px",
      },500);
    } else if (this.top + this.h < this.viewH*(1-this.spacing)){
      $('#'+this.id).animate({
        top: (this.viewH*(1-this.spacing) - this.h).toString()+"px",
      },500);
    } else if (this.left > this.viewW*this.spacing){
      $('#'+this.id).animate({
        left: (this.viewW*this.spacing).toString()+"px",
      },500);
    } else if (this.left + this.w < this.viewW*(1-this.spacing)){
      $('#'+this.id).animate({
        left: (this.viewW*(1-this.spacing) - this.w).toString()+"px",
      },500);
    }

  }
  /**/
}
BoardBG.prototype = Object.create(Picture.prototype);
BoardBG.prototype.constructor = BoardBG;


loadedScripts.push('p');
