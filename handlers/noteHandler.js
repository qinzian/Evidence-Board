NoteHandler = function(){
  Handler.call(this,"note");
}

NoteHandler.prototype = Object.create(Handler.prototype);
NoteHandler.prototype.constructor = NoteHandler;

var nh = new NoteHandler();

loadedScripts.push('nh');
