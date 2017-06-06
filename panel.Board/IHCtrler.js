
function IHCtrler($scope){
	$scope.resultsDict = [1];

	$scope.updateResultsDict = function(){

		$scope.resultsDict.push('e');
		//$("#debug").html();
	}
}
