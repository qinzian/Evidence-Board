LineHandler = function(){
  Handler.call(this,"line");
}

LineHandler.prototype = Object.create(Handler.prototype);
LineHandler.prototype.constructor = LineHandler;

var lh = new LineHandler();

loadedScripts.push('lh');
