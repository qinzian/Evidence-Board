//$("#cxnNote100").draggable();

function imRmCxn(dbID,currObjId){
  $("#debug").html(strf("rm cxn with: {} and {}",[dbID,currObjId]));

  im.rmCxn(dbID.substring(2),currObjId); // convert the dbId to corresponding cxnId
}

function imCheckoutObj(oldID,newID){
  $("#debug").html(strf("{} --cxn-->: {}",[oldID,newID]));
  im.checkoutObj(oldID,newID);
}

function imExitButton(doSave){
  im.exitIM(doSave);
}
