$("#debug").html("started loading optionPane");

var EBapp = angular.module("Evidence-Board",[]);

function OptionCtrler($scope){
	$scope.updateResultsDict = function(){
		$scope.resultsDict = ih.getDict();
	}

	$("#debug").html("in ctrler");
}

EBapp.controller("OptionCtrler", OptionCtrler);




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
