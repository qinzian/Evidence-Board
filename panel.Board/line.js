function Line(x1,y1,x2,y2) {
  BoardObj.call(this, "line",x1,y1);

  this.p1 = {x1,y1};
  this.p2 = {x2,y2};

  this.update = function(){ // TODO works with the draw function

  }
}
Line.prototype = Object.create(BoardObj.prototype);
Line.prototype.constructor = Line;

loadedScripts.push('l');
