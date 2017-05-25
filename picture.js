function Picture(src,x,y) {
  BoardObj.call(this, "pic",x,y);

  this.src = src;


  this.update = function(){ // TODO works with the draw function

  }
}
Picture.prototype = Object.create(BoardObj.prototype);
Picture.prototype.constructor = Picture;
