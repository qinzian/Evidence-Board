var showing = true;

function toggleOptionsP(){
	if(showing){
		$('#optionView').animate({
			opacity:0
		},400)
		setTimeout(function(){$('#optionView').toggle()},400);
	} else {
		$('#optionView').animate({
			opacity:1
		},400)
		$('#optionView').toggle();
	}

	showing = !showing;
}

/*
var board = angular.module('EvidenceBoard',[]);

board.controller('OptionCtrler',function($scope){
	$scope.load_img1 = function(){ //blicked button
		$('#debug').html('loading img1');
    $scope.img1src = $scope.img1Name;
		$scope.debug = 'clicked "load_img1" button';
	};

	$scope.load_img2 = function(){ //blicked button
		$('#debug').html('loading img2');
    $scope.img2src = $scope.img2Name;
		$scope.debug = 'clicked "load_img2" button';
	};

	$scope.compare = function(){ //clicked button
		$('#debug').html('loading compare');
    compareImg('img1','img2',function(result){
			$scope.output = result;
		});
		$scope.debug = 'clicked "compare" button';
	};
});/**/

loadedScripts.push('optionPane');