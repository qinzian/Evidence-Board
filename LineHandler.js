LineHandler = function(){
  Handler.call(this,"line");
}

LineHandler.prototype = Object.create(BoardObj.prototype);
LineHandler.prototype.constructor = LineHandler;
