function Line(id) {
  BoardObj.call(this, "line",id);
  
  this.orientation = 0; // angle of rotation from vertical in degrees
  this.p1 = {x:0,y:0};
  this.p2 = {x:0,y:0};

  this.updatePt1 = function(p1){
    this.p1 = p1;
  }
  this.updatePt2 = function(p2){
    this.p2 = p2;
  }
  this.absDistance = function(p1,p2){
    return 50;
    //return Math.ceil(((p2.x-p1.x)**2 + (p2.y-p1.y)**2)**0.5);
  }

  this.updateDraw = function(){
    //log(strf("({},{}),({},{})",[this.p1.x,this.p1.y,this.p2.x,this.p2.y]));
    // set length of line
    this.sf.css("height",this.absDistance(this.p1,this.p2).toString()+"px");

    // set mid pt
    var midPt = {y:(this.p1.y+this.p2.y)/2, x:(this.p1.x+this.p2.x)/2};
    this.sf.css("top",(midPt.y+this.sf.css("height")/2)+"px");
    this.sf.css("left",midPt.x+"px");

    var tmpRad = Math.acos(2*(midPt.x-this.p2.x)/this.h); // returns angle in rads
    if (this.p2.y >= midPt.y){
      this.orientation = 90+ radToDeg(tmpRad);
    } else {
      this.orientation = 90- radToDeg(tmpRad);
    }
    this.sf.rotate(this.orientation);
  }/**/
}
Line.prototype = Object.create(BoardObj.prototype);
Line.prototype.constructor = Line;
