
function IHCtrler($scope, SharedService, $compile){
	$scope.noteC = 0;
  $scope.picC  = 0;

  $scope.genLine = function (obj1,obj2,x,y){
		return;
  }

  $scope.genNote = function(x,y){
		//log('generating note');

    var id = "note" + $scope.noteC.toString();

    // create visual
    var newElem = strf("<p id = '{}' class = 'boardObj note'  "+
    "ng-click = 'clickedBoardObj({})'  "+
    "ng-dblclick = 'dblclickedBoardObj({})'  "+
    "ondrag  = 'dragBoardObj(this.id)'  "+
    ">{}</p>",[id,"\""+id+"\"","\""+id+"\"",id]);

  	var temp = $compile(newElem)($scope);

    angular.element(document.getElementById("board")).append(temp);

    $("#"+id).css({left:x-40, top:y-40});

    // create obj in memory
    ih.addObj(id);

    $scope.noteC++;
    //log('reached end');/**/
  }

  $scope.genPic = function(x,y){
		log("generating pic");
		$scope.picC++;
  }

	$scope.data = SharedService;

	$scope.selectedObjIds = {};

	$scope.clickedBoardObj = function(id){ // toggles between select and deselect of boardObj
		log('clicked board obj: '+id.toString());
	  // check if the click event is caused by dragging
	  if (ih.getObj(id).getDrag() == true){
	    ih.getObj(id).setDrag(false);
	    return;
	  }

	  // click event not from dragging => normal clicking
	  if ($scope.selectedObjIds.hasOwnProperty(id)){
	    delete $scope.selectedObjIds[id];
	  } else {
	    $scope.selectedObjIds[id] = undefined; // we are only using the obj to store the keys
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

	$scope.pressedKey = function(e){
		log("inIM: "+inIM+"<br>focused on board:"+ $scope.data.focusedOnBoard);
	  if(!inIM && $scope.data.focusedOnBoard){ // don't check keypress if user is in imView
	    var obj1;

	    if (String.fromCharCode(e.keyCode) == "x"){ // delete selectedObjIds
				//log("pressed x");
	      for (var id in $scope.selectedObjIds) {
	        // this obj should also be rm from other's cxns
	        obj1 = ih.getObj(id);
	        for (var cxnId in obj1.getCxns()){
	          ih.getObj(cxnId).rmCxn(id);
	        }

	        ih.rmObj(id); // rm the corresponding obj from memory
	        $("#"+id).remove(); // rm the corresponding
	      }

	    } else if (String.fromCharCode(e.keyCode) == "c"){
	      //log("pressed c");
	      for (var id1 in $scope.selectedObjIds) {
	        $("#"+id1.toString()).toggleClass("selected"); // deselect the objs

	        obj1 = ih.getObj(id1);

	        for (var id2 in $scope.selectedObjIds){

	          if (!(id2.toString() == id1.toString())){
	            obj1.addCxn(id2);
	          }
	        }
	      }
	      //log("connected all the selected objs");
	    }
	    $scope.clearSelection();
			$scope.focusedOnBoard = false;
	  }/**/
	}

	$scope.clearSelection = function(){
	  for (var id in $scope.selectedObjIds) {
	    delete $scope.selectedObjIds[id];
	  }
	}

	$scope.testing = function(a){
		log("test func with arg:"+a);
	}

	$(document).keypress(function(e){$scope.pressedKey(e)});
	log("done IHCtrler init");
}

//log("done loading IHCtrler");
