function ItemGenerator(){
  this.visible = false;

  this.genLine = function (obj1,obj2,x,y){

  }

  this.genNote = function(x,y){

  }

  this.genPic = function(x,y){

  }

  this.toggleIG = function(){
    $('#igContainer').toggle();
  }

}

var ig = new ItemGenerator();
//ig.toggleIG();

loadedScripts.push('itemGen');
