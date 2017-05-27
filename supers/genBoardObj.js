$('#debug').html('Loading genBoardObj');

function BoardObj(t,id){
  $('#debug').html('in BoardObj');
  this.type = t;
  this.id = id;
  this.val;
  this.cxns;

   // the rect of the obj
  this.left;
  this.top;
  this.w = parseInt($('#'+this.id).css('width').substring(0,$('#'+this.id).css('width').length-2));
  this.h = parseInt($('#'+this.id).css('height').substring(0,$('#'+this.id).css('height').length-2));
  this.right = this.left + this.w;
  this.bot = this.top + this.h;

  this.setZ = function(){ // sets the z-index of this object
    return;
  }

  this.getId = function(){
    $('#debug').html('getting ID');
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

  this.setPos = function(x,y){ // this way we can use this to set only x or y
    if (typeof x == 'number'){
      this.left = x;
    } else if (typeof y == 'number'){
      this.top = y;
    }
  }

  this.getX = function(){
    return this.left;
  }

  this.getY = function(){
    return this.top;
  }

  this.getW = function(){
    return this.w;
  }
  this.getH = function(){
    return this.h;
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

  this.updateRect = function(){
    this.top = parseInt($('#'+this.id).css('top').substring(0,$('#'+this.id).css('top').length-2));
    this.left = parseInt($('#'+this.id).css('left').substring(0,$('#'+this.id).css('left').length-2));
    this.right = this.left + this.w;
    this.bot = this.top +  this.h;
    $('#debug').html('finished init boardObj');
  }
  this.updateRect();

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

loadedScripts.push('obj');
