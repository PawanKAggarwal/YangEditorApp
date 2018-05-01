'use strict';
angular.module('YangEditor')

.controller('NameCalculatorController', ['$scope','CalculateNumericForStringService', function($scope,CalculateNumericForStringService) {
		//.controller('NameCalculatorController', ['$scope', function($scope) {
			
			 $scope.name = "";
	 $scope.totalValue = 0;
		 $scope.displayNumeric = function(){
			 
			//var totalNameValue =calculateNumericForString($scope.name);
			var totalNameValue = CalculateNumericForStringService.calculateNumericForString($scope.name);
			$scope.totalValue = totalNameValue;
			//$scope.dish =  CalculateNumericForStringService.getDish(2);
			CalculateNumericForStringService.getDish(2)
			.then(
				function(response) {
					$scope.dish = response.data;
				}
			);
			
		 };
	
	function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
    } 
	 
			
	}]);
		