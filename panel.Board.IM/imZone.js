//$("#cxnNote100").draggable();

function imRmCxn(dbID,currObjId){
  log(strf("rm cxn with: {} and {}",[dbID,currObjId]));

  im.rmCxn(subString(dbID,2),currObjId); // convert the dbId to corresponding cxnId
}

function imCheckoutObj(oldID,newID){
  //log(strf("{} --cxn-->: {}",[oldID,newID]));
  im.checkoutObj(oldID,subString(newID,3));
}

function imExitButton(doSave){
  im.exitIM(doSave);
}
