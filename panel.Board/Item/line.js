function Line(id) {
  //log("line constructor");
  BoardObj.call(this, "line",id);
  //log("done call to parent obj");

  this.orientation = 0; // angle of rotation from vertical in degrees
  this.p1 = {x:0,y:0};
  this.p2 = {x:0,y:0};

  this.updatePt1 = function(p1){
    this.p1 = p1;
  }
  this.updatePt2 = function(p2){
    this.p2 = p2;
  }

  this.getPt1str = function(){
    return strf("x: {}<br>y: {}",[this.p1.x,this.p1.y]);
  }

  this.getPt2str = function(){
    return strf("x: {}<br>y: {}",[this.p2.x,this.p2.y]);
  }

  this.addCxn = function(id){
    log("Line.addCxn()");
    if (!this.cxns.hasOwnProperty(id)){
      this.cxns[id] = $("#"+id.toString());
    } else {
      log("the cxn to be added to "+this.id+" already exists: "+id);
    }
  }

  this.absDistance = function(p1,p2){
    //return 50;
    return Math.ceil(Math.sqrt(
      Math.pow(this.p1.x-this.p2.x,2) + Math.pow(this.p1.y-this.p2.y,2)));
  }

  this.updateDraw = function(){
    $("#objInfo").html(strf("({},{}),({},{})",[this.p1.x,this.p1.y,this.p2.x,this.p2.y]));
    // set length of line

    this.h = this.absDistance(this.p1,this.p2);
    this.sf.css("height",this.h.toString()+"px");

    // set mid pt
    var midPt = {y:(this.p1.y+this.p2.y)/2, x:(this.p1.x+this.p2.x)/2};

    this.sf.css("left",midPt.x-this.w/2+"px");

    this.sf.css("top",midPt.y+"px");
    this.sf.css("top",midPt.y-this.h/2+"px");

    var tmpRad = Math.acos((this.p2.x-midPt.x)/(this.h/2)); // returns angle in rads
    //log("tmpRad in deg: "+radToDeg(tmpRad));
    if (this.p2.y >= midPt.y){ // pt 2 (the right side) falls below the mid pt
      this.orientation = 90+ radToDeg(tmpRad);
    } else {
      this.orientation = 90- radToDeg(tmpRad);
    }
    //this.sf.rotate({angle:0,animateTo:this.orientation,duration:10000});
    this.sf.rotate(this.orientation);
    //log("ended with orientation:"+this.orientation);/**/
  }
  //log("done line init");
}
Line.prototype = Object.create(BoardObj.prototype);
Line.prototype.constructor = Line;
