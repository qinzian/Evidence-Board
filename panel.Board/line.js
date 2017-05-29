function Line(x1,y1,x2,y2) {
  BoardObj.call(this, "line");

  this.p1 = {x1,y1};
  this.p2 = {x2,y2};
}
Line.prototype = Object.create(BoardObj.prototype);
Line.prototype.constructor = Line;

loadedScripts.push('l');
