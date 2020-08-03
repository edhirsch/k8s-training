(function() {
    angular
      .module('workshop')
      .controller('LoginCtrl', LoginCtrl)
  
    function LoginCtrl($rootScope, $scope) {
      $scope.message = "Login Screen"
    }
  
    LoginCtrl.$inject = ['$rootScope', '$scope', '$routeParams']
  })();
  