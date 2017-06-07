var board = new BoardBG('board');

var draggingBoard = false;

$("#board").dblclick(function(event){ // creates a note obj in both back and front end around the cursor pos
  //log('doubleclicked board');

  if (!inIM){ // event.stopPropagation didn't work well, so I'm resorting to this
    ig.genNote(event.offsetX,event.offsetY);
  }
});

function dragBoard(){
  draggingBoard = true;
}

function mouseLeftBoard(){
  if (draggingBoard){
    board.updateRect();
    board.checkBoundaries();
  }
  //log('reached final');
}/**/

var selectedObjIds = {};
var str = "";

function clickedBoardObj(id){ // toggles between select and deselect of boardObj
  // check if the click event is caused by dragging
  if (ih.getObj(id).getDrag() == true){
    ih.getObj(id).setDrag(false);
    return;
  }

  // click event not from dragging
  if (selectedObjIds.hasOwnProperty(id)){
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
  if(!inIM){ // don't check keypress if user is in imView
    var obj1;

    if (String.fromCharCode(e.keyCode) == "x"){ // delete selectedObjIds
      for (var id in selectedObjIds) {
        // this obj should also be rm from other's cxns
        obj1 = ih.getObj(id);
        for (var cxnId in obj1.getCxns()){
          ih.getObj(cxnId).rmCxn(id);
        }

        ih.rmObj(id); // rm the corresponding obj from memory
        $("#"+id).remove(); // rm the corresponding obj from front end
      }

    } else if (String.fromCharCode(e.keyCode) == "c"){
      log("pressed c");
      for (var id1 in selectedObjIds) {
        $("#"+id1.toString()).toggleClass("selected"); // deselect the objs
        obj1 = ih.getObj(id1);

        for (var id2 in selectedObjIds){

          if (!(id2.toString() == id1.toString())){
            obj1.addCxn(id2);
          }
          //log("reached");
        }
      }
      //log("connected all the selected objs");
    }
    clearSelection();
  }
});

function clearSelection(){
  for (var id in selectedObjIds) {
    delete selectedObjIds[id];
  }
  //log("cleared");
}
