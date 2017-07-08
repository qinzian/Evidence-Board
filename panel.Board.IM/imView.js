//log("started loading im");
var inIM = false;

function ItemMenu(){
  this.currObj;
  this.currObjId;
  this.txt = $("#imTxtContainer");
  this.title=$("#imTitle");
  this.cxns= $("#imCxnView");
  this.dbs= $("#imDBView");
  this.zone=$("#imZone");

  this.beforeB = $("#imBackButton");
  this.forwardB = $("#imForwardButton");
  this.before;
  this.after;

  this.enterIM = function(id){ // loads info based on obj's info
    this.before.length = 0; // clears both lists
    this.after.length = 0;

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

  this.setupCurrObj = function(currObjId){
    this.currObj = nh.getObj(currObjId);
    this.currObjId = currObjId;

    // load title
    //log("loading title for objID:"+id+"<br> title: "+this.currObj.getTitle());
    this.title.text(this.currObj.getTitle());

    // load value stored in obj
    this.txt.text(this.currObj.getV());

    // load cxns table
    var tmp = "";
    for (var cxnObjID in this.currObj.getCxns()) {
      newDB = strf("<li id = \"db{}\" class = \"dbs\" onclick='imRmCxn(this.id)'>X </li>",
                    [cxnObjID.toString()] );


      tmp = nh.getObj(cxnObjID).getTitle().split("\n");
      if (tmp.length > 1){
        tmp = tmp[0] + "  ..."; // this keeps the display of each cxns' title to single line
      }


      newCxn= strf("<li id = \"cxn{}\" class = \"cxns\" onclick='imCheckoutNewObj(this.id)'>{}</li>",
                    [cxnObjID.toString(),tmp]);

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

  this.rmCxn = function(targetObjId){
    // removes both obj from each other's cxn list
    this.currObj.rmCxn(targetObjId);
    nh.getObj(targetObjId).rmCxn(this.currObjId);

    // removes lines from both notes
    lh.rmLineBetweenNotes(targetObjId,this.currObjId);

    // rm the display of cxn on the imView
    $("#cxn"+targetObjId).remove();
    $("#db"+targetObjId).remove();
  }

  this.checkoutObj = function(nextNoteID,typeOfChange){
    if (typeOfChange == "forward new"){
      this.after.length = 0; // new path, so clear this.after list

      this.before.push(this.currObjId);
    } else if (typeOfChange == "forward old"){
      this.after.pop();
      this.before.push(this.currObjId);
    } else if (typeOfChange == "backward"){
      this.before.pop();
      this.after.push(this.currObjId);
    } else {
      alert("IM.checkoutObj(): none of the above typeOfChanges");
      return; // if none of the above, then shouldn't continue
    }

    // the boolean arg determines whether the last obj viewed will save its changes
    this.clearCurrObj(true);
    //log("done clearing");
    this.setupCurrObj(nextNoteID);
    //log("done setup new obj"+newID);
  }

  this.checkoutNewObj = function(nextNoteId){
    this.checkoutObj(nextNoteId,"forward new");
  }

  this.checkoutNextObj = function(){
    this.checkoutObj(this.after.get(-1),"forward old");
    alert(this.before.toString()+"\n"+this.after.toString());
  }

  this.checkoutPreviousObj = function(){
    this.checkoutObj(this.before.get(-1),"backward"); // func(nextID,typeOfChange)
    alert(this.before.toString()+"\n"+this.after.toString());
  }
}

var im = new ItemMenu();
//log("loaded im");
