function BoardObj(t,id,x,y){
  this.type = t;
  this.id = id;
  this.val;
  this.x = x; // the top left coordinate of the obj
  this.y = y;
  this.w;
  this.h;
  this.cxns;

  this.setZ = function(){ // sets the z-index of this object

  }

  this.getid = function(){
    return this.id;
  }

  this.getCxns = function(){
    return this.cxns;
  }

  this.addCxn = function(t){
    return this.cxns.push(t);
  }

  this.rmCxn = function(t){
    this.cxns.rmItem(t);
  }

  this.setPos = funciton(x,y){ // this way we can use this to set only x or y
    if (typeof x == 'number'){
      this.x = x;
    } else if (typeof y == 'number'){
      this.y = y;
    }
  }

  this.getX = function(){
    return this.x;
  }

  this.getY = function(){
    return this.y;
  }

  this.setSize = funciton(w,h){
    if (typeof w == 'number'){
      this.w = w;
    } else if (typeof h == 'number'){
      this.h = h;
    }
  }

  this.getSize = function(){
    return {this.w,this.h};
  }

  this.getType = function(){
    return this.type;
  }

  this.getV = function(){
    return this.val;
  }

  this.setV = function(t){
    this.val = t;
  }

  this.toString = function(){
    return strf('{} at ({},{}), "{}"',[this.type,this.x,this.y,this.val]);
  }

  this.equals = function(other){
    if (this.type == other.getType()){
      return this.val == other.getV();
    }
    return false;
  }
}
