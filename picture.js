function Picture(src,x,y) {
  BoardObj.call(this, "pic",x,y);

  this.src = src;
}
Picture.prototype = Object.create(BoardObj.prototype);
Picture.prototype.constructor = Picture;
