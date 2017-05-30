var selectedObjIds = {};
var str = "";
function clickedBoardObj(id){ // toggles between select and deselect of boardObj
  if (selectedObjIds.hasOwnProperty(id)){
    delete selectedObjIds[id];
  } else {
    selectedObjIds[id] = undefined; // we are only using the obj to store the keys
  }
  $("#"+id.toString()).toggleClass("selected");
}

$(document).keypress(function(e){
  if (String.fromCharCode(e.keyCode) == "x"){
    for (var id in selectedObjIds) {
      ih.rmItem(id);
      $("#"+id).remove();
      delete selectedObjIds[id];
    }
  }
});
