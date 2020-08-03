(function () {
    angular
        .module('workshop')
        .controller('UpgradeCtrl', UpgradeCtrl);

    UpgradeCtrl.$inject = ['$scope', '$http']
    function UpgradeCtrl($scope, $http) {
        $scope.message =  "This is upgrade page."

    }
} ());
