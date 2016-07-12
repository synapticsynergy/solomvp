
angular.module('equityCalc')

.controller('calcController', function($scope) {
  $scope.roi = 0;

  $scope.isPositive = function() {
    if ($scope.roi > 0) {
      return true;
    }
    else {
      return false;
    }
  };

  $scope.calcRoe = function() {
    $scope.roi = ($scope.netIncome * 12) / ($scope.capRate * 0.01);
  };

});