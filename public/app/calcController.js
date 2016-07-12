
angular.module('equityCalc')

.controller('calcController', function($scope) {
  $scope.roi = 0;

  $scope.calcRoe = function() {
    $scope.roi = ($scope.netIncome * 12) / ($scope.capRate * 0.01);
  };

});