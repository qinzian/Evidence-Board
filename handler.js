function handler(t,x,y){
  this.type = t;
  this.collection = [];
  this.x = x;
  this.y = y;

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
    var index = this.collection.indexOf(t);

    if (index !== -1){
      this.collection.splice(index,1);
    }
  }

  this.setPos = funciton(x,y){ // this way we can use this to set only x or y
    if (typeof x == 'number'){
      this.x = x;
    } else if (typeof y == 'number'){
      this.y = y;
    }
  }

  this.getPos = function(){
    return [this.x,this.y]
  }

  this.update = function(){

  }
}
