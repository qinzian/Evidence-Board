function Note(x,y) {
  BoardObj.call(this, "note",x,y);


  this.update = function(){ // TODO works with the draw function

  }
}
Note.prototype = Object.create(BoardObj.prototype);
Note.prototype.constructor = Note;
