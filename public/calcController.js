
angular.module('equityCalc')

.controller('calcController', function($scope) {
  $scope.roi = 5;

  $scope.incrementRoi = function() {
    $scope.roi++;
  }
  console.log('hello', $scope.roi);

  $scope.toUpperCase = function() {
    return  $scope.capRate + 100;
  }

});