//log("started loading im");
var inIM = false;

function ItemMenu(){
  this.currObj;
  this.txt = $("#imTxtContainer");
  this.title=$("#imTitle");
  this.cxns= $("#imCxnView");
  this.dbs= $("#imDBView");
  this.zone=$("#imZone");

  this.enterIM = function(id){ // loads info based on obj's info
    this.setupCurrObj(id);
    // make im appear
    this.zone.toggleClass("hidden");

    inIM = true;
  }

  this.exitIM = function(doSave){ // resets the imView to init state
    this.clearCurrObj(doSave);

    this.zone.toggleClass("hidden");
    inIM = false;
  }

  this.checkoutObj = function(oldID,newID){

    log("begun");

    // the boolean arg determines whether the last obj viewed will save its changes
    this.clearCurrObj(true);
    log("done clearing");
    this.setupCurrObj(newID);
    log("done setup new obj"+newID);
  }

  this.setupCurrObj = function(currObjId){
    this.currObj = ih.getObj(currObjId);

    // load title
    //log("loading title for objID:"+id+"<br> title: "+this.currObj.getTitle());
    this.title.text(this.currObj.getTitle());

    // load value stored in obj
    this.txt.text(this.currObj.getV());

    // load cxns
    for (var cxnObjID in this.currObj.getCxns()) {
      newDB = strf("<li id = \"db{}\" class = \"dbs\" onclick='imRmCxn(this.id,\"{}\")'>X </li>",
                    [cxnObjID.toString(),currObjId.toString()]);

      newCxn= strf("<li id = \"cxn{}\" class = \"cxns\" onclick='imCheckoutObj(\"{}\",this.id)'>{}</li>",
                    [cxnObjID.toString(),currObjId.toString(),ih.getObj(cxnObjID).getTitle()]);

      // update the display of cxns
      this.dbs.append(newDB);
      this.cxns.append(newCxn);
    }
  }

  this.clearCurrObj = function(doSave){
    $(".cxns").remove();
    $(".dbs").remove();

    //log(doSave.toString());
    if (doSave){
      this.currObj.setV(this.txt.text());
      this.currObj.setTitle(this.title.text());
    }
  }

  this.rmCxn = function(targetObjId,currObjId){
    // removes both obj from each other's cxn list
    this.currObj.rmCxn(targetObjId);
    ih.getObj(targetObjId).rmCxn(currObjId);

    // removes lines from both notes
    this.currObj.rmCxn(targetObjId);
    ih.getObj(targetObjId).rmCxn(currObjId);

    // rm the display of cxn on the imView
    $("#cxn"+targetObjId).remove();
    $("#db"+targetObjId).remove();

    /*
    var tmp = "";
  	for (var id in this.currObj.getCxns()) {
  		tmp+=id+", "
  	}
  	$("#objInfo").html(tmp); /**/
  }
}

var im = new ItemMenu();
//log("loaded im");
