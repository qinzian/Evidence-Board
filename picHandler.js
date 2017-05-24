PicHandler = function(){
  Handler.call(this,"pic");
}

PicHandler.prototype = Object.create(BoardObj.prototype);
PicHandler.prototype.constructor = PicHandler;
