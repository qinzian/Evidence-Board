NoteHandler = function(){
  Handler.call(this,"note");
}

NoteHandler.prototype = Object.create(BoardObj.prototype);
NoteHandler.prototype.constructor = NoteHandler;
