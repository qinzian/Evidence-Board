function BoardBG(id) {
  //log('in BoardBG');
  DraggableItem.call(this,"bg",id);

  this.parentId = 'boardView';
  this.spacing = 0.2;

  // dimentions of the view
  this.viewW = parseInt(subString($('#'+this.parentId).css('width'),0,-2));
  this.viewH = parseInt(subString($('#'+this.parentId).css('height'),0,-2));

  this.checkBoundaries = function(){
    //log(strf('t={},l={},r={},b={}',[this.top,this.left,this.right,this.bot]));

    // check for combo boundary breakers
    if (this.top > this.viewH*this.spacing && this.left > this.viewW*this.spacing){ // \
      $('#'+this.id).animate({
        top: (this.viewH*this.spacing).toString()+"px",
        left: (this.viewW*this.spacing).toString()+"px"
      },500);//log("changed");
    } else if (this.top > this.viewH*this.spacing && this.left+this.w < this.viewW*(1-this.spacing)){// /
      $('#'+this.id).animate({
        top: (this.viewH*this.spacing).toString()+"px",
        left: (this.viewW*(1-this.spacing) - this.w).toString()+"px"
      },500);//log("changed");
    } else if (this.top + this.h < this.viewH*(1-this.spacing) && this.left > this.viewW*this.spacing){ // /
      $('#'+this.id).animate({
        top: (this.viewH*(1-this.spacing) - this.h).toString()+"px",
        left: (this.viewW*this.spacing).toString()+"px"
      },500);//log("changed");
    } else if (this.top + this.h < this.viewH*(1-this.spacing) && this.left+this.w < this.viewW*(1-this.spacing)){// \
      $('#'+this.id).animate({
        top: (this.viewH*(1-this.spacing) - this.h).toString()+"px",
        left: (this.viewW*(1-this.spacing) - this.w).toString()+"px"
      },500);//log("changed");

      //check individual boundary breakers
    } else if (this.top > this.viewH*this.spacing){
      $('#'+this.id).animate({
        top: (this.viewH*this.spacing).toString()+"px",
      },500);//log("changed");
    } else if (this.top + this.h < this.viewH*(1-this.spacing)){
      $('#'+this.id).animate({
        top: (this.viewH*(1-this.spacing) - this.h).toString()+"px",
      },500);//log("changed");
    } else if (this.left > this.viewW*this.spacing){
      $('#'+this.id).animate({
        left: (this.viewW*this.spacing).toString()+"px",
      },500);//log("changed");
    } else if (this.left + this.w < this.viewW*(1-this.spacing)){
      $('#'+this.id).animate({
        left: (this.viewW*(1-this.spacing) - this.w).toString()+"px",
      },500);//log("changed");
    }

  }
  /**/
}
BoardBG.prototype = Object.create(draggableItem.prototype);
BoardBG.prototype.constructor = BoardBG;
