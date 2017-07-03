LineHandler = function(){
  Handler.call(this,"line");

  this.addObj = function(id){
    log("lineh.addObj()");
    if (this.idToObj.hasOwnProperty(id)){
      log("obj with id: "+id+" already exists, cannot add");
    } else {
      log("else block");
      var tmp = new Line("line100");
      log("reached");
      this.idToObj[id] = tmp;
      //log("added a line with id:"+id);
    }
  }
}

LineHandler.prototype = Object.create(Handler.prototype);
LineHandler.prototype.constructor = LineHandler;

var lh = new LineHandler();

loadedScripts.push('lh');
