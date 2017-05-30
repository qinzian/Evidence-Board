$('#debug').html('Loading handler.js');

function Handler(){
  this.dict = {}; // where the boardObjs are stored, in id to obj pairs

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

var ih = new Handler();

loadedScripts.push('h');
