//log("started loading optionPane");


function OptionCtrler($scope, SharedService){
	$scope.data = SharedService;

	$scope.resultsList = $scope.data.getIH().getTitles();
	$scope.titleToId = $scope.data.getIH().getTitlesDict();
	//$scope.resultsList = [1,2,3,'#',4,5,6,7,'d'];

	$scope.focusBoard = function(b){
		$scope.data.focusedOnBoard = b;
		//log("focusedOnBoard: "+b);
	}/**/

	$scope.clickedResult = function(e){
		var id = e.target.id;
		log("clicked: "+id.toString());

		var clickedObj = nh.getObj(id.toString());

		// shift the whole board so that the obj will be in view
		$scope.boardCentreAtObj(clickedObj);

    // this will bring the note up to the front in case it was buried
		if(!$("#"+id).hasClass("located")){
			$scope.data.tempBringForward(id);
		}
	}

	$scope.boardCentreAtObj = function(clickedObj){
		var pos = {x:clickedObj.left,y:clickedObj.top};

		//log("x: "+pos.x +" <br> y: "+pos.y);

		var x_shift = board.viewW/2-pos.x-160;
		var y_shift = board.viewH/2-pos.y-160;
		$("#board").animate({
			top:y_shift+"px",
			left:x_shift+"px"
		},800);/**/
	}
}


var showing = true;

function toggleOptionsP(){
	if(showing){
		$("#optionView").animate({
			opacity:0
		},400);
		setTimeout(function(){$("#optionView").toggle()},400);
	} else {
		$("#optionView").animate({
			opacity:1
		},400);
		$("#optionView").toggle();
	}

	showing = !showing;
}

//log("loaded optionPane");
