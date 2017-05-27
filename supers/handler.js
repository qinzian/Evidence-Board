$('#debug').html('Loading handler.js');

function Handler(t){
  this.type = t;
  this.collection = [];

  this.getType = function(){
    return this.type;
  }

  this.getCollection = function(){
    return this.collection;
  }

  this.addItem = function(t){
    this.collection.push(t);
  }

  this.rmItem = function(t){
    this.collection.rmItem(t);
  }

}


loadedScripts.push('h');
