PicHandler = function(){
  Handler.call(this,"pic");
}

PicHandler.prototype = Object.create(Handler.prototype);
PicHandler.prototype.constructor = PicHandler;

var ph = new PicHandler();

loadedScripts.push('ph');
