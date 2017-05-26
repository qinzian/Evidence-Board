function Picture(id,src,x,y) {
  BoardObj.call(this,"pic",id,x,y);

  this.src = src;


  this.update = function(dx,dy){
    
  }
}
Picture.prototype = Object.create(BoardObj.prototype);
Picture.prototype.constructor = Picture;
