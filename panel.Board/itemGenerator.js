function ItemGenerator(){
  this.visible = false;
  this.noteC = 0;
  this.picC  = 0;
  this.id;

  this.genLine = function (obj1,obj2,x,y){

  }

  this.genNote = function(x,y){
    //$('#debug').html(strf('double clicked @ ({},{})',[x,y]));

    this.id = "note" + this.noteC.toString();
    var newElem = strf("<p id = '{}' class = 'boardObj'>"+
    "this is {}</p>",[this.id,this.id]);
    // create visual
    $("#bg").after(newElem);

    $("#"+this.id).css({left:x-40, top:y-40});

    // create obj in memory
    nh.addItem(new Note(this.id));

    this.noteC++;
    //$('#debug').html('reached end');
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
