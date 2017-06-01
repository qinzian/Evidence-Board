function Handler(){
  this.dict = {}; // where the boardObjs are stored, in id to obj pairs

  this.getDict = function(){
    return this.dict;
  }

  this.getObj = function(id){
    if (this.dict.hasOwnProperty(id)){
      return this.dict[id];
    }
    $("#debug").html("ih cannot find obj for id:"+id.toString());
  }

  this.addObj = function(t){
    this.dict[t.getId()] = t; // pairs id of visual to the corresponding obj in memory
  }

  this.rmObj = function(t){
    $("#debug").html(t);
    delete this.dict[t];
  }

  this.toString = function(){
    var returnStr = "";
    for (var ObjID in this.dict) {
      returnStr += ObjID + " , ";
    }
    return returnStr;
  }
}

var ih = new Handler();
