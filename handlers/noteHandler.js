NoteHandler = function(){
  Handler.call(this,"note");

  this.deleteNote = function(noteId){
    // this obj should also be rm from other's cxns
    var noteObj = this.idToObj[noteId];
    for (var cxnId in noteObj.getCxns()){
      this.idToObj[cxnId].rmCxn(noteId);
    }
    log("done cxn");

    // the lines associated with this note should also be rm
    var lineIds = lh.getLines(noteId);
    var lineId;

    lh.rmNoteEntry(noteId);

    //log("done lines");
    this.rmNote(noteId); // rm the corresponding obj from memory
    $("#"+noteId).remove(); // rm the corresponding element
  }

  this.rmNote = function(id){
    if (this.idToObj.hasOwnProperty(id)){
      var t = this.idToObj[id].getTitle();

      rmFromArr(this.titles,t);
      delete this.titleToId[t];
      this.rmObj(id);
    } else {
      log("nh.rmNote(): cannot rm note with id: '"+id+"' b/c DNE");
    }
  }
}

NoteHandler.prototype = Object.create(Handler.prototype);
NoteHandler.prototype.constructor = NoteHandler;

var ih = new NoteHandler();
