function IHCtrler($scope, SharedService, $compile){
	$scope.noteC = 0;
	$scope.lineC = 0;

	$scope.genLine = function(id1,id2){
		//log("called genLine()");
		var lineId = "line"+$scope.lineC.toString();

		if (lh.lineExistsBetween(id1,id2)){
			//log("exists");
			return;
		}

		// create visual element
		var newElem = strf("<img id = \"{}\" class = \"line hidden\" "+
											 "src = \"pics/line.png\" "+
											 "ng-dblclick = 'dblclickedLine($event)'" +
											 ">",[lineId]);

	 	var temp = $compile(newElem)($scope);
	 	angular.element(document.getElementById("board")).prepend(temp);// so they are hidden under the notes

		// create obj in memory
		ig.genLine(id1,id2,lineId);
		$scope.lineC++;
	}

	$scope.genNote = function(x,y){
		log("called genNote");
		var id = "note" + $scope.noteC.toString();

    // create visual element
    var newElem = strf("<p id = '{}' class = 'note'  "+
    "ng-click = 'clickedBoardObj({})'  "+
    "ng-dblclick = 'dblclickedBoardObj({})'  "+
		"ng-mousedown = 'mousedownNote()'  "+
    "ondrag  = 'dragBoardObj(this.id)'  "+
    ">{}</p>",[id,"\""+id+"\"","\""+id+"\"",id]);

    var temp = $compile(newElem)($scope);

    angular.element(document.getElementById("board")).append(temp);

    $("#"+id).css({left:x-40, top:y-80});

		// create obj in memory
		ig.genNote(id);
		$scope.noteC++;
	}

	$scope.data = SharedService;

	$scope.selectedObjIds = [];

	$scope.mousedownNote = function(){
		ig.returnForwardedNotes();
		ig.hideAllLines();
	}

	$scope.clickedBoardObj = function(id){ // toggles between select and deselect of boardObj
		//log(id+"is dragging:"+nh.getObj(id).getDrag());
		nh.getObj(id).updateRect();

		//logObj(nh.getObj(id));

	  // check if the click event is caused by dragging
	  if (nh.getObj(id).getDrag() == true){
	    nh.getObj(id).setDrag(false);
	    return;
	  }

	  // click event not from dragging => normal clicking
	  if ($scope.selectedObjIds.contains(id)){ // id already selected
	    $scope.selectedObjIds.remove(id);
	  } else {
	    $scope.selectedObjIds.push(id);
	  }
	  $("#"+id.toString()).toggleClass("selected");/**/

		$scope.data.focusedOnBoard = true;
	}

	$scope.dblclickedBoardObj = function(id){ // creates a note obj in both back and front end around the cursor pos
		//log("doubleclicked "+id.toString());
		im.enterIM(id);
		//log("lala");
	}

	$scope.dblclickedBoard = function(e){ // creates a note obj in both back and front end around the cursor pos
	  //log("doubleclicked board");
	  if (!inIM){ // event.stopPropagation didn't work well, so I'm resorting to this
	    $scope.genNote(e.offsetX,e.offsetY);
	  }/**/
	}

	$scope.dblclickedLine = function(e){
		e.stopPropagation(); // so the board doesn't get the dlb-click event
		var cxnId = lh.getObj(e.target.id).getCxns();
		alert(strf("n1: {}\n\nn2: {}",
							[nh.getObj(cxnId[0]).getTitle(),
							 nh.getObj(cxnId[1]).getTitle()])); // lines have exactly two note cxns
	}

	$scope.pressedKey = function(e){
		//log("inIM: "+inIM+"<br>focused on board:"+ $scope.data.focusedOnBoard);
	  if(!inIM && $scope.data.focusedOnBoard){ // don't check keypress if user is in imView
	    var obj1;

	    if (String.fromCharCode(e.keyCode) == "x"){ // delete selectedObjIds
				//log("pressed x");
	      for (var i = 0; i < $scope.selectedObjIds.length; i++){
					nh.deleteNote($scope.selectedObjIds[i]);
	      }
				$scope.clearSelection(false);

	    } else if (String.fromCharCode(e.keyCode) == "c"){
	      //log("pressed c");
	      for (var i1 = 0; i1 < $scope.selectedObjIds.length; i1++) {
					var id1 = $scope.selectedObjIds[i1];

	        obj1 = nh.getObj(id1);
	        for (var i2 = i1+1; i2 < $scope.selectedObjIds.length; i2++){
						var id2 = $scope.selectedObjIds[i2];
						obj1.addCxn(id2); // add cxn will update cxn in both objs

						$scope.genLine(id1,id2);
	        } // inner for loop
	      } // outter for loop
				$scope.clearSelection(true);

	    } else if (String.fromCharCode(e.keyCode) == "v"){
				//log("pressed v");
				var noteId;
				for (var i = 0; i < $scope.selectedObjIds.length; i++) {
					noteId = $scope.selectedObjIds[i];
					ig.drawLines(noteId);
				}/**/
				$scope.clearSelection(true);
			}
			$scope.focusedOnBoard = false;
	  }/**/
	}

	$scope.clearSelection = function(deselectNote){
		if (deselectNote){
			for (var i = 0; i < $scope.selectedObjIds.length; i++) {
				$("#"+$scope.selectedObjIds[i]).removeClass("selected");
			}
		}
		$scope.selectedObjIds.length = 0;
	}

	$scope.testing = function(a){
		log("test func with arg:"+a);
	}

	$(document).keypress(function(e){$scope.pressedKey(e)});
	//log("done IHCtrler init");
}

//log("done loading IHCtrler");
