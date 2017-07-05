LineHandler = function(){
  Handler.call(this,"line");

  this.noteToLines = {};

  this.addObj = function(id){
    //log("lineh.addObj()");
    if (this.idToObj.hasOwnProperty(id)){
      log("obj with id: "+id+" already exists, cannot add");
    } else {
      this.idToObj[id] = new Line(id);
      //log("added a line with id:"+id);
    }
  }

  this.updateNoteToLines = function(id1,id2,lineId){
    if (!this.noteToLines.hasOwnProperty(id1)){
      this.noteToLines[id1] = [];
    }
    if (!this.noteToLines.hasOwnProperty(id2)){
      this.noteToLines[id2] = [];
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
    this.idToObj[lineId].addCxn(id1);
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
}

LineHandler.prototype = Object.create(Handler.prototype);
LineHandler.prototype.constructor = LineHandler;

var lh = new LineHandler();

loadedScripts.push('lh');
