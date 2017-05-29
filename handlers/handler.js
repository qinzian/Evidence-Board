$('#debug').html('Loading handler.js');

function Handler(t){
  this.type = t;
  this.dict = {}; // where the boardObjs are stored, in id to obj pairs

  this.getType = function(){
    return this.type;
  }

  this.getDict = function(){
    return this.dict;
  }

  this.addItem = function(t){
    this.dict[t.getId()] = t;
  }

  this.rmItem = function(t){
    $("#debug").html(t);
    delete this.dict[t];
  }

  this.toString = function(){
    var returnStr = "";
    for (var itemID in this.dict) {
      returnStr += itemID + " , ";
    }
    return returnStr;
  }
}


loadedScripts.push('h');
