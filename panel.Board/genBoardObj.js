function BoardObj(t,id){
  //$('#debug').html('in BoardObj');
  this.type = t;
  this.id = id;
  this.val;
  this.cxns = {};
  this.sf = $("#"+id.toString());

   // the rect of the obj
  this.left;
  this.top;
  this.w = parseInt(this.sf.css('width').substring(0,this.sf.css('width').length-2));
  this.h = parseInt(this.sf.css('height').substring(0,this.sf.css('height').length-2));
  this.right;
  this.bot;

  this.getId = function(){
    return this.id;
  }

  this.getCxns = function(){
    return this.cxns;
  }

  this.addCxn = function(id){
    return this.cxns[id] = $("#"+id.toString());
  }

  this.rmCxn = function(id){
    delete this.cxns[id];
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
    this.top = parseInt(this.sf.css('top').substring(0,this.sf.css('top').length-2));
    this.left = parseInt(this.sf.css('left').substring(0,this.sf.css('left').length-2));
    this.right = this.left + this.w;
    this.bot = this.top +  this.h;
  }
  this.updateRect();

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

  this.toString = function(){
    return strf('{} at ({},{}), "{}"',[this.type,this.x,this.y,this.val]);
  }

  this.equals = function(other){ // obj with same type
    if (this.type == other.getType()){
      return this.id == other.getId();
    }
    return false;
  }
}

loadedScripts.push('obj');
