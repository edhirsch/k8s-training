(function () {
  angular.module("workshop").controller("ViewDevicesCtrl", ViewDevicesCtrl);

  ViewDevicesCtrl.$inject = ["$scope", "$http"];
  function ViewDevicesCtrl($scope, $http) {
    $scope.devices = [];

    $scope.busy = $http.get("/api/device").then((response) => {
      $scope.devices = response.data;
    });

  }
})();
