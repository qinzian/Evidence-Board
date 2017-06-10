function Handler(){
  this.dict = {}; // where the boardObjs are stored, in id to obj pairs
  this.dict.keys = [];

  this.getDict = function(){
    return this.dict;
  }

  this.getObj = function(id){
    if (this.dict.hasOwnProperty(id)){
      return this.dict[id];
    }
    log("ih cannot find obj for id:"+id.toString());
  }

  this.addObj = function(id){
    if (this.dict.hasOwnProperty(id)){
      log("obj with id: "+id+" already exists, cannot add");
    } else {
      this.dict.keys.push(id);
      this.dict[id] = new Note(id); // pairs id of visual to the corresponding obj in memory
    }
  }

  this.rmObj = function(id){
    if (this.dict.hasOwnProperty(id)){
      //rmFromArr(this.dict.keys,id);
      delete this.dict[id];
      rmFromArr(this.dict.keys,id);
    } else {
      log("obj with id: "+id+" DNE cannot rm");
    }
  }

  this.toString = function(){
    return strf("IH: {} objs, id: {}",[this.dict.length,this.getKeys()]);
  }
}

var ih = new Handler();
