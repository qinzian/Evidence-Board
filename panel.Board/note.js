function Note(id,x,y) {
  BoardObj.call(this, "note",x,y);

  $('#'+id).draggable();

  this.update = function(){ // TODO works with the draw function

  }
}
Note.prototype = Object.create(BoardObj.prototype);
Note.prototype.constructor = Note;

loadedScripts.push('n');
