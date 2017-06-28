function ItemGenerator(){

  this.genLine = function (id1,id2,lineId){
    return;
  }

  this.genNote = function(noteId){
    // create obj in memory
    ih.addObj(noteId);
  }
}

var ig = new ItemGenerator();
