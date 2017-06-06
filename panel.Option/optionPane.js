$("#debug").html("started loading optionPane");


function OptionCtrler($scope){
	$scope.resultsDict = [1];

	$scope.updateResultsDict = function(){

		$scope.resultsDict.push('e');
		//$("#debug").html();
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

$("#debug").html("loaded optionPane");
