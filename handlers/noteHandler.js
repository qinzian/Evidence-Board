NoteHandler = function(){
  Handler.call(this);

  this.titleToId = {}; // dict of title : ids
  this.titles = [];

  this.getTitles = function(){
    return this.titles;
  }

  this.getTitlesDict = function(){
    return this.titleToId;
  }

  this.updateObjTitle = function(id,newTitle){
    var currId;
    for(var t in this.titleToId){
      currId = this.titleToId[t];
      if(currId == id){
        this.titles.replace(t,newTitle); // (oldTitle,newTitle)
        delete this.titleToId[t];
        this.titleToId[newTitle] = id;
        return;
      }
    }
  }

  this.addObj = function(id){
    if (this.idToObj.hasOwnProperty(id)){
      log("obj with id: '"+id+"' already exists, cannot add");
    } else {
      this.idToObj[id] = new Note(id); // pairs id of visual to the corresponding obj in memory
      this.titleToId[id] = id; // starting titles are same as id
      this.titles.push(id);
      //log("added a note with id:"+id);
    }
  }

  this.deleteNote = function(noteId){
    // this obj should also be rm from other's cxns
    var noteObj = this.idToObj[noteId];
    for (var cxnId in noteObj.getCxns()){
      this.idToObj[cxnId].rmCxn(noteId);
    }
    log("done cxn");

    // the lines associated with this note should also be rm
    var lineIds = lh.getLinesForNote(noteId);
    var lineId;
    lh.rmNoteEntry(noteId);

    log("done lines");
    this.rmObj(noteId); // rm the corresponding obj from memory

    $("#"+noteId).remove(); // rm the corresponding element
  }

  this.rmObj = function(id){
    if (this.idToObj.hasOwnProperty(id)){
      var t = this.idToObj[id].getTitle();

      // update all three lists / collections
      this.titles.remove(t);
      delete this.titleToId[t];
      delete this.idToObj[id];
    } else {
      log("nh.rmObj(): cannot rm note with id: '"+id+"' b/c DNE");
    }
  }

  this.toString = function(){
    var tmp;
    var i = 0;
    for (var title in this.titleToId) {
      tmp += title+", ";
      i++;
    }
    return strf("IH: {} objs, titles: {}",[i,tmp]);
  }
}

NoteHandler.prototype = Object.create(Handler.prototype);
NoteHandler.prototype.constructor = NoteHandler;

var nh = new NoteHandler();
