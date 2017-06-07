function ItemGenerator(){
  this.visible = false;
  this.noteC = 0;
  this.picC  = 0;
  this.id;

  this.genLine = function (obj1,obj2,x,y){

  }

  this.genNote = function(x,y){
    //log(strf('double clicked @ ({},{})',[x,y]));

    this.id = "note" + this.noteC.toString();

    // create visual
    var newElem = strf("<p id = '{}' class = 'boardObj note'"+
    "onclick = 'clickedBoardObj(this.id)'"+
    "ondrag  = 'dragBoardObj(this.id)'"+
    ">this is {}</p>",[this.id,this.id]);

    $("#board").prepend(newElem);

    $("#"+this.id).css({left:x-40, top:y-40});

    $("#"+this.id).dblclick(function(){
      log("doubleclicked "+this.id);
      im.enterIM(this.id);
      //log("lala");
    });

    // create obj in memory
    ih.addObj(new Note(this.id));

    this.noteC++;
    //log('reached end');
  }

  this.genPic = function(x,y){

  }

}

var ig = new ItemGenerator();


//log("loaded ig");
