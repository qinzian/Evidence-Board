$('#bg').dblclick(function(event){ // creates a note obj in both back and front end around the cursor pos
  //$('#debug').html('doubleclicked');
  ig.genNote(event.offsetX,event.offsetY);
});

var selectedObjIds = {};
var str = "";

function clickedBoardObj(id){ // toggles between select and deselect of boardObj

  // check if the click event is caused by dragging
  if (ih.getObj(id).getDrag() == true){
    ih.getObj(id).setDrag(false);


  } else if (selectedObjIds.hasOwnProperty(id)){ // clicke event not from dragging
    delete selectedObjIds[id];
  } else {
    selectedObjIds[id] = undefined; // we are only using the obj to store the keys
  }
  $("#"+id.toString()).toggleClass("selected");
}

function dragBoardObj(id){
  ih.getObj(id).setDrag(true);
}

$(document).keypress(function(e){
  if (String.fromCharCode(e.keyCode) == "x"){
    for (var id in selectedObjIds) {
      ih.rmObj(id); // rm the corresponding obj from memory
      $("#"+id).remove(); // rm the corresponding obj from front end
      delete selectedObjIds[id];
    }
  }
});
