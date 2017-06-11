//log("started loading optionPane");


function OptionCtrler($scope, SharedService){
	$scope.data = SharedService;

	$scope.resultsList = $scope.data.getIH().getTitles();
	$scope.titleToId = $scope.data.getIH().getTitlesDict();
	//$scope.resultsList = [1,2,3,'#',4,5,6,7,'d'];

	$scope.focusBoard = function(b){
		$scope.data.focusedOnBoard = b;
		//log("focusedOnBoard: "+b);

		//log($scope.resultsList["note1"]);
	}/**/

	$scope.clickedResult = function(e){
		log("clicked: "+e.target.id.toString());

		var clickedObj = ih.getObj(e.target.id.toString());
		var pos = {x:clickedObj.getX(),y:clickedObj.getY()};

		// shift the whole board so that the obj will be in view
		$scope.boardCentreAt(pos);
	}

	$scope.boardCentreAt = function(pos){
		log("x: "+pos.x +" <br> y: "+pos.y);
	}
}


var showing = true;

function toggleOptionsP(){
	if(showing){
		$("#optionView").animate({
			opacity:0
		},400)
		setTimeout(function(){$("#optionView").toggle()},400);
	} else {
		$("#optionView").animate({
			opacity:1
		},400)
		$("#optionView").toggle();
	}

	showing = !showing;
}

//log("loaded optionPane");
