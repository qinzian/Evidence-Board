function BoardObj(t,id){
  //log("in BoardObj");
  this.type = t;
  this.id = id;
  this.val = "";
  this.cxns = {};
  this.sf = $("#"+id.toString());
  this.title = id.toString(); // all title has default value

   // the rect of the obj
  this.left;
  this.top;
  this.w = parseInt(this.sf.css("width").substring(0,this.sf.css("width").length-2));
  this.h = parseInt(this.sf.css("height").substring(0,this.sf.css("height").length-2));
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
    } else {
      log("the cxn to be added already exists: "+id);
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
    this.top = parseInt(this.sf.css("top").substring(0,this.sf.css("top").length-2));
    this.left = parseInt(this.sf.css("left").substring(0,this.sf.css("left").length-2));
    this.right = this.left + this.w;
    this.bot = this.top +  this.h;
    //log("done updating");
  }
  this.updateRect(); // update the attr right after the obj is created

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
    return strf("{} at ({},{}), \"{}\"",[this.id,this.left,this.top,this.val]);
  }

  this.equals = function(other){ // obj with same type
    if (this.type == other.getType()){
      return this.id == other.getId();
    }
    return false;
  }
}
