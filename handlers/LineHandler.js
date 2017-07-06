LineHandler = function(){
  Handler.call(this,"line");

  this.noteToLines = {};

  this.addObj = function(id){
    if (this.idToObj.hasOwnProperty(id)){
      log("lh.addObj(): obj with id: '"+id+"' already exists, cannot add");
    } else {
      this.idToObj[id] = new Line(id);
    }
  }

  this.updateNoteToLines = function(id1,id2,lineId){
    if (!this.noteToLines.hasOwnProperty(id1)){
      this.noteToLines[id1] = [];
    }
    if (!this.noteToLines.hasOwnProperty(id2)){
      this.noteToLines[id2] = [];
    }

    if (lineId == "default"){
      return;
    }

    if (!this.noteToLines[id1].contains(lineId)){
      this.noteToLines[id1].push(lineId);
    }
    if (!this.noteToLines[id2].contains(lineId)){
      this.noteToLines[id2].push(lineId);
    }
  }

  this.updateLineCxn = function(id1,id2,lineId){
    //log(objToString(this.idToObj));
    this.idToObj[lineId].addCxn(id1);
    this.idToObj[lineId].addCxn(id2);
  }

  this.lineExists = function(id1,id2){
    for (var lineId in this.idToObj){
      var line = this.idToObj[lineId];
      if (line.getCxns().hasOwnProperty(id1) && line.getCxns().hasOwnProperty(id2)){
        return true;
      }
    }
    return false;
  }

  this.getLines = function(noteId){
    return this.noteToLines[noteId];
  }

  this.rmNote = function(noteId){ // delete lines appearing in both noteId entry and other entries
    if (this.noteToLines.hasOwnProperty(noteId)){
      var cxnsToDelete = this.noteToLines[noteId];

      var noteCxnIds = ih.getObj(noteId).getCxns(); // all other entries

      for (var noteCxnId in noteCxnIds){// deleting all cxnLines appearing in the other entries
        for (var i = 0; i < cxnsToDelete.length; i++) {
          this.rmCxn(noteCxnId,cxnsToDelete[i]);
        } // loop through all cxnLines to delete

      } // loop through all notes in cxn to noteId

      delete this.noteToLines[noteId];// delete all lines in entry: noteId

    } else {
      log("lh.rmNote(): cannot rm note with id: '"+id+"' b/c DNE");
    }
  }

  this.rmLine = function(lineId){
    this.rmObj(lineId);
  }

  this.rmCxn = function(noteId,lineId){
    if (this.noteToLines.hasOwnProperty(noteId)){
      if (this.noteToLines[noteId].contains(lineId)){
        rmFromArr(this.noteToLines[noteId],lineId);
      } else {
        log("lh.rmCxn(): specified line with id: '"+lineId+"' DNE");
      }
    } else {
      log("lh.rmCxn(): specified note with id: '"+noteId+"' DNE");
    }
  }
}

LineHandler.prototype = Object.create(Handler.prototype);
LineHandler.prototype.constructor = LineHandler;

var lh = new LineHandler();
