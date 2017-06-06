function Note(id) {
  DraggableItem.call(this, "note",id);
}
Note.prototype = Object.create(DraggableItem.prototype);
Note.prototype.constructor = Note;

$("#debug").html("done loading note.js");
