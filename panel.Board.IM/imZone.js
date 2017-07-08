function imRmCxn(dbID){
  im.rmCxn(subString(dbID,2)); // convert the dbId to corresponding noteId
}

function imCheckoutNewObj(cxnID){
  im.checkoutNewObj(subString(cxnID,3)); // convert the cxnId to corresponding noteId
}

function exitIm(doSave){
  im.exitIM(doSave);
}

function imBackButton(){
  im.checkoutPreviousObj();
}

function imForwardButton(){
  im.checkoutNextObj();
}

$(document).keyup(function(e) {
  if (inIM){
    if (e.keyCode == 27) { // escape key maps to keycode `27`
      exitIm(false);
    }
  }
});
