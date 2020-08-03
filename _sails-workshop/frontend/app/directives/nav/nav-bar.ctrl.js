(function () {
    'use strict';

    angular
        .module ('workshop')
        .directive ('navBar', navBarDirective);


    /** @ngInject */
    function navBarDirective($location) {
        function navBarDirectiveCtrl(){
            var vm = this;
            vm.isActive = function (viewLocation) { 
                return viewLocation === $location.path();
            };
        }

        return {
            bindToController: true,
            controller: navBarDirectiveCtrl,
            controllerAs: 'vm',
            restrict: 'E',
            templateUrl: '/directives/nav/nav-bar.tmpl.html',
            scope: {
            },
        }
    }
} ());