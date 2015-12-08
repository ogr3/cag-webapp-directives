'use strict';
angular.module('controllers').controller('Example6Ctrl', ['$scope', '$state', function ($scope, $state) {

    $scope.hideBackButton = false;

    $scope.nextStep = function () {
        $state.go('example1');
    };

    $scope.prevStep = function () {
        $state.go('example3');
    };

    $scope.noDisplay = function () {
        return true;
    };
}
]);