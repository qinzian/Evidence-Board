function IHCtrler($scope, SharedService, $compile){
	$scope.noteC = 0;
	$scope.lineC = 0;

	$scope.genLine = function(id1,id2){
		//log("called genLine()");
		ig.genLine(id1,id2,$scope.lineC);
		$scope.lineC++;
		//log("finished genLine()");
	}

	$scope.genNote = function(x,y){
		log("called genNote");
		var id = "note" + $scope.noteC.toString();

    // create visual
    var newElem = strf("<p id = '{}' class = 'note'  "+
    "ng-click = 'clickedBoardObj({})'  "+
    "ng-dblclick = 'dblclickedBoardObj({})'  "+
		"ng-mousedown = 'mousedownObj()'  "+
    "ondrag  = 'dragBoardObj(this.id)'  "+
    ">{}</p>",[id,"\""+id+"\"","\""+id+"\"",id]);

    var temp = $compile(newElem)($scope);

    angular.element(document.getElementById("board")).append(temp);

    $("#"+id).css({left:x-40, top:y-80});

		ig.genNote(id);

		$scope.noteC++;
	}

	$scope.data = SharedService;

	$scope.selectedObjIds = [];

	$scope.mousedownObj = function(){
		ig.hideAllLines();
	}

	$scope.clickedBoardObj = function(id){ // toggles between select and deselect of boardObj
		log(id+"is dragging:"+ih.getObj(id).getDrag());
		ih.getObj(id).updateRect();

		logObj(ih.getObj(id));

	  // check if the click event is caused by dragging
	  if (ih.getObj(id).getDrag() == true){
	    ih.getObj(id).setDrag(false);
	    return;
	  }

	  // click event not from dragging => normal clicking
	  if ($scope.selectedObjIds.contains(id)){ // id already selected
	    rmFromArr($scope.selectedObjIds,id);
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

	$scope.clickedLine = function(lineId){
		//TODO do stuff;
	}

	$scope.pressedKey = function(e){
		//log("inIM: "+inIM+"<br>focused on board:"+ $scope.data.focusedOnBoard);
	  if(!inIM && $scope.data.focusedOnBoard){ // don't check keypress if user is in imView
	    var obj1;

	    if (String.fromCharCode(e.keyCode) == "x"){ // delete selectedObjIds
				//log("pressed x");
	      for (var i = 0; i < $scope.selectedObjIds.length; i++){
					ih.deleteNote($scope.selectedObjIds[i]);
	      }
				$scope.clearSelection(false);

	    } else if (String.fromCharCode(e.keyCode) == "c"){
	      //log("pressed c");
	      for (var i1 = 0; i1 < $scope.selectedObjIds.length; i1++) {
					var id1 = $scope.selectedObjIds[i1];

	        obj1 = ih.getObj(id1);
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
