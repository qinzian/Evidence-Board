function Camera(){
  this.inView = [];
  this.outView= [];


}

// TODO add following functions into the class above
function updateObjs(){
  // this is called when the board moves and all board obj must also move to remain relatively still
  var coll;
  var handlers = [lh,ph,nh];

  for (var i = 0; i < 3; i++) {
    coll = handlers[i].getCollection();

    for (var i = 0; i < coll.length; i++) {
      updateObj(coll[i]);
    }
  }
}

function updateObj(obj){
    
}
