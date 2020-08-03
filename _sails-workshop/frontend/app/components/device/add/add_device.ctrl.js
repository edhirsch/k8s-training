(function () {
    angular
        .module('workshop')
        .controller('AddDeviceCtrl', AddDeviceCtrl);

    AddDeviceCtrl.$inject = ['$scope', '$http']
    function AddDeviceCtrl($scope, $http) {
        $scope.device = {};

        function add_device(){
            $http.post('/api/device', $scope.device).then(response => {
                console.log("Created device: ", response);
            })
        }        
        $scope.add_device = add_device;
    }
} ());
