(function() {
    angular
      .module('workshop')
      .controller('HomeCtrl', HomeCtrl)
  
    HomeCtrl.$inject = ['$scope', '$http']
    function HomeCtrl($scope, $http) {
      $scope.message =  "This is home page."
    }
  
  })();
