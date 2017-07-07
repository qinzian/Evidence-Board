function Handler(){
  this.idToObj = {}; // dict of id : obj

  this.getDict = function(){
    return this.idToObj;
  }

  this.getObj = function(id){
    if (this.idToObj.hasOwnProperty(id)){
      return this.idToObj[id];
    }
    log("ih cannot find obj with id:"+id.toString());
  }

  this.addObj = function(id){
    log("Handler.addObj() should be overriden");
  }

  this.rmObj = function(id){
    log("Handler.rmObj() should be overriden");
  }

  this.toString = function(){
    var tmp;
    for (var id in this.idToObj) {
      tmp += id+", ";
    }
    return strf("IH: {} objs, ids: {}",[this.idToObj.length,tmp]);
  }
  //log("done ih init");
}
