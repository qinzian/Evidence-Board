function Line(x1,y1,x2,y2) {
  BoardObj.call(this, "line");

  this.p1 = {x:x1,y:y1};
  this.p2 = {x:x2,y:y2};
}
Line.prototype = Object.create(BoardObj.prototype);
Line.prototype.constructor = Line;

loadedScripts.push('l');
