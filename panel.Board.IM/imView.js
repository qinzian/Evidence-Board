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

  this.setupCurrObj = function(id){
    this.currObj = ih.getObj(id);

    // load title
    //log("loading title for objID:"+id+"<br> title: "+this.currObj.getTitle());
    this.title.text(this.currObj.getTitle());

    // load value stored in obj
    this.txt.text(this.currObj.getV());

    // load cxns
    for (var cxnID in this.currObj.getCxns()) {
      newDB = strf("<li id = \"db{}\" class = \"dbs\" onclick='imRmCxn(this.id,\"{}\")'>X </li>",
                    [cxnID.toString(),id.toString()]);

      newCxn= strf("<li id = \"cxn{}\" class = \"cxns\" onclick='imCheckoutObj(\"{}\",this.id)'>{}</li>",
                    [cxnID.toString(),id.toString(),cxnID.toString()]);
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
    this.currObj.rmCxn(targetObjId);
    //log(cxnId.substring(3));
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
//log("loaded im");