$("#debug").html("started loading im");
var inIM = false;

function ItemMenu(){
  this.currObj;
  this.txt = $("#imTxtContainer");

  this.enterIM = function(id){ // loads info based on obj's info
    this.currObj = ih.getObj(id);

    // make im appear
    $("#imZone").toggleClass("hidden");

    // load title
    $("#imTitle").html("info on Obj:" +id.toString());

    // load value stored in obj
    this.txt.attr("value", this.currObj.getV());

    /*/ load cxns
    $("#imCxnView").after("<p id = 'deleteNote100' class = 'deleteButtons' onclick='rmCxn(this.id)'>X</p>"+
    "<p id ='cxnNote100' class = 'cxns'>Note100</p>");/**/

    inIM = true;
  }

  this.exitIM = function(doSave){ // resets the imView to init state
    $(".cxns").remove();
    $(".deleteButtons").remove();

    if (doSave){
      this.currObj.setV(this.txt.value);
    }

    $("#imZone").toggleClass("hidden");
    inIM = false;
  }
}

var im = new ItemMenu();
$("#debug").html("loaded im");
