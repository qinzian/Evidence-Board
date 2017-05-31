$("#debug").html("started loading im");
function ItemMenu(){
  this.displayMenu = function(id){
    $("#imZone").toggle();
    $("#imTitle").html("info on Obj:" +id.toString());
  }
}

var im = new ItemMenu();
$("#debug").html("loaded im");
