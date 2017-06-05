$("#debug").html("started loading im");
var inIM = false;

function ItemMenu(){
  this.currObj;
  this.txt = $("#imTxtContainer");
  this.cxns= $("#imCxnView");
  this.dbs= $("#imDBView");

  this.enterIM = function(id){ // loads info based on obj's info
    this.setupCurrObj(id);

    inIM = true;
  }

  this.exitIM = function(doSave){ // resets the imView to init state
    this.clearCurrObj(doSave);

    $("#imZone").toggleClass("hidden");
    inIM = false;
  }

  this.checkoutObj = function(oldID,newID){

    $("#debug").html("begun");

    //this.clearCurrObj(true);
    //this.setupCurrObj(newID);
  }

  this.setupCurrObj = function(id){

    this.currObj = ih.getObj(id);

    // make im appear
    $("#imZone").toggleClass("hidden");

    // load title
    $("#imTitle").html("info on Obj:" +id.toString());

    // load value stored in obj
    //$("#debug").html("text is length of:"+this.currObj.getV().length);
    this.txt.text(this.currObj.getV());

    // load cxns
    for (var cxnID in this.currObj.getCxns()) {
      newDB = strf("<li id = \"db{}\" class = \"dbs\" onclick='imRmCxn(this.id,\"{}\")'>X </li>",
                    [cxnID.toString(),id.toString()]);

      newCxn= strf("<li id = \"cxn{}\" class = \"cxns\" onclick='imCheckoutObj(this.id,\"{}\")'>{}</li>",
                    [cxnID.toString(),id.toString(),cxnID.toString()]);
      this.dbs.append(newDB);
      this.cxns.append(newCxn);
    }
  }

  this.clearCurrObj = function(doSave){
    $(".cxns").remove();
    $(".dbs").remove();

    //$("#debug").html(doSave.toString());
    if (doSave){
      this.currObj.setV(this.txt.text());
    }
  }

  this.rmCxn = function(targetObjId,currObjId){
    this.currObj.rmCxn(targetObjId);
    //$("#debug").html(cxnId.substring(3));
    ih.getObj(targetObjId).rmCxn(currObjId);
    $("#cxn"+targetObjId).remove();
    $("#db"+targetObjId).remove();

    var tmp = "";
  	for (var id in this.currObj.getCxns()) {
  		tmp+=id+", "
  	}
  	$("#objInfo").html(tmp);
  }
}

var im = new ItemMenu();
$("#debug").html("loaded im");
