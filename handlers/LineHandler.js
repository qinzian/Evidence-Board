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

    if (typeof lineId == "undefined"){
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
    this.idToObj[lineId].addCxn(id1);
    this.idToObj[lineId].addCxn(id2);
  }

  this.getCxnLine = function(id1,id2){
    //alert(id1+id2);
    var shorterList = id1;
    if (this.noteToLines[id1].length > this.noteToLines[id2].length){
      shorterList = id2;
    } // loop through shorter list to find common item

    //alert("lh.getCxnLine(): "+this.noteToLines[shorterList]);
    for (var i = 0; i< this.noteToLines[shorterList].length;i++){
      var lineId = this.noteToLines[shorterList][i];
      var lineCxns = this.idToObj[lineId].getCxns();

      if (lineCxns.hasOwnProperty(id1) && lineCxns.hasOwnProperty(id2)){
        return lineId;
      }
    }
    log("There exists no line connecting: "+id1+" and "+id2);
    return -1;
  }

  this.lineExists = function(id1,id2){
    return (typeof this.getCxnLine(id1,id2) == "string");
  }

  this.getLines = function(noteId){
    return this.noteToLines[noteId];
  }

  this.rmNoteEntry = function(deleteNoteId){ // delete lines appearing in both noteId entry and other entries
    if (this.noteToLines.hasOwnProperty(deleteNoteId)){
      var linesToDelete = this.noteToLines[deleteNoteId];

      for (var i = 0; i < linesToDelete.length; i++) {
        var lineId = linesToDelete[i];

        for (var noteId in this.idToObj[lineId].getCxns()){// each line knows 2 notes
          if (noteId !== deleteNoteId){
            this.rmCxnLine(noteId,lineId);
            //alert(noteId+""+lineId);
          }
        }
        this.rmObj(lineId);
      } // loop through all cxnLines to delete

      delete this.noteToLines[deleteNoteId];// delete entire entry: noteId

    } else {
      log("lh.rmNote(): cannot rm note with id: '"+id+"' b/c DNE");
    }
  }

  this.rmCxn = function(n1,n2){
    alert(n1+n2);
    var cxnLine = this.getCxnLine(n1,n2);
    alert("lh.rmCxn():"+cxnLine);
    this.rmCxnLine(n1,cxnLine);
    this.rmCxnLine(n2,cxnLine);

    this.rmObj(cxnLine);
  }

  this.rmCxnLine = function(noteId,lineId){ // only alters the this.noteTolines
    if (this.noteToLines.hasOwnProperty(noteId)){
      if (this.noteToLines[noteId].contains(lineId)){
        rmFromArr(this.noteToLines[noteId],lineId);
      } else {
        log("lh.rmCxn(): specified line with id: '"+lineId+"' DNE");
      }
    } else {
      log("lh.rmCxn(): specified note with id: '"+noteId+"' DNE");
    }
    log("done rmCxnLine()");
  }

}

LineHandler.prototype = Object.create(Handler.prototype);
LineHandler.prototype.constructor = LineHandler;

var lh = new LineHandler();
