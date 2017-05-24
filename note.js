function Note(x,y) {
  BoardObj.call(this, "note",x,y);
}
Note.prototype = Object.create(BoardObj.prototype);
Note.prototype.constructor = Note;
