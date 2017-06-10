//log("started loading optionPane");


function OptionCtrler($scope, SharedService){
	$scope.data = SharedService;

	$scope.resultsList = $scope.data.getIH().getDict().keys;
	//$scope.resultsList = [1,2,3,'#',4,5,6,7,'d'];

	$scope.focusBoard = function(b){
		$scope.data.focusedOnBoard = b;
		log("focusedOnBoard: "+b);
	}/**/
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
