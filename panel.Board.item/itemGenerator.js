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

    // create visual
    var newElem = strf("<p id = '{}' class = 'boardObj note'"+
    "onclick = 'clickedBoardObj(this.id)'"+
    "ondrag  = 'dragBoardObj(this.id)'"+
    ">this is {}</p>",[this.id,this.id]);

    $("#bg").after(newElem);

    $("#"+this.id).css({left:x-40, top:y-40});

    $("#"+this.id).dblclick(function(){
      //$("#debug").html("doubleclicked "+this.id);
      im.enterIM(this.id);
      //$("#debug").html("lala");
    });

    // create obj in memory
    ih.addObj(new Note(this.id));

    this.noteC++;
    //$('#debug').html('reached end');
  }

  this.genPic = function(x,y){

  }

}

var ig = new ItemGenerator();


//$("#debug").html("loaded ig");
