function BoardObj(t,id){
  //log("in BoardObj");
  this.type = t;
  this.id = id;
  this.val = "";
  this.cxns = {}; // id to element obj
  this.sf = $("#"+id.toString());
  this.title = id.toString(); // all title has default value

   // the rect of the obj
  this.left;
  this.top;
  this.w = parseInt(subString(this.sf.css("width"),0,-2));
  this.h = parseInt(subString(this.sf.css("height"),0,-2));

  this.right;
  this.bot;

  this.getId = function(){
    return this.id;
  }

  this.getCxns = function(){
    return this.cxns;
  }

  this.addCxn = function(id){
    if (!this.cxns.hasOwnProperty(id)){
      this.cxns[id] = $("#"+id.toString());
      ih.getObj(id).addCxn(this.id);
    } else {
      log("the cxn to be added to "+this.id+" already exists: "+id);
    }
  }

  this.rmCxn = function(id){
    //log(this.cxns.hasOwnProperty(id));
    if (this.cxns.hasOwnProperty(id)){
      delete this.cxns[id];
      //log(id+" is removed from "+this.id+"s cxns");
    } else {
      log("the cxn to be removed dne: "+id);
    }
  }

  this.setTitle = function(s){
    ih.updateObjTitle(this.id,s); // args: (id, newTitle)

    this.title = s;
    this.sf.html(this.title);
  }

  this.getTitle = function(){
    return this.title;
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
    this.top = parseInt(subString(this.sf.css("top"),0,-2));
    this.left = parseInt(subString(this.sf.css("left"),0,-2));
    this.right = this.left + this.w;
    this.bot = this.top +  this.h;
    //log("done updating");
    //$("#objInfo").html(strf('t={},l={},w={},h={}',[this.top,this.left,this.w,this.h]));
  }
  this.updateRect(); // update the attr right after the obj is created

  this.getRect = function(){
    return {x:this.left, y:this.top,w:this.w,h:this.h};
  }

  this.toString = function(){
    return strf("{} at ({},{}): \"{}\"",[this.id,this.left,this.top,this.type]);
  }

  this.equals = function(other){ // obj with same type
    if (this.type == other.getType()){
      return this.id == other.getId();
    }
    return false;
  }
}
