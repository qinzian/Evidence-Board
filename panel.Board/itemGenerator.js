//log("started loading ig");

function ItemGenerator(){
  
  this.genLine = function(id1,id2,lineId){
    // creating obj in memory
    lh.addObj(lineId);
    lh.updateNoteToLines(id1,id2,lineId);
  }

  this.genNote = function(noteId){
    // create obj in memory
    nh.addObj(noteId);
    lh.updateNoteToLines(noteId,noteId); // does the init for the note to lines obj
  }

  this.drawLines = function(noteId){
    var lineIdsToDraw = lh.getLinesForNote(noteId);

    for (var i = 0; i < lineIdsToDraw.length; i++){ // draw and bring out the cxn Lines
      lh.getObj(lineIdsToDraw[i]).updateDraw();
      this.bringForward(lineIdsToDraw[i]);
    } // loop ends

    var noteCxns = nh.getObj(noteId).getCxns();
    for (var i = 0; i < noteCxns.length; i++){ // bring out the cxn notes
      this.bringForward(noteCxns[i]);
    }
    this.bringForward(noteId);  // bring out the note it self

    log("done drawLines()");
  }

  this.bringForward = function(id){
    $("#"+id.toString()).addClass("located");
  }

  this.returnForwardedNotes = function(){
    $(".note.located").removeClass("located");
  }

  this.hideAllLines = function(){
    $(".line.located").addClass("hidden");
    $(".line.located").removeClass("located");
  }
}

var ig = new ItemGenerator();
