function boardObj(t){
  this.type = t;
  this.val;

  this.getType = function(){
    return this.type;
  }

  this.getV = function(){
    return this.val;
  }

  this.setV = function(t){
    this.val = t;
  }

  this.enlarge = function(){

  }

  this.normalize = function(){

  }
}
