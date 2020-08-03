(function () {
    angular
        .module('workshop')
        .controller('MonitorCtrl', MonitorCtrl);

    MonitorCtrl.$inject = ['$scope', '$http']
    function MonitorCtrl($scope, $http) {
        $scope.message =  "This is monitor page."

    }
} ());
