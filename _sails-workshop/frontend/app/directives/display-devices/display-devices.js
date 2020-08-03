(function () {
    'use strict';

    angular
        .module ('workshop')
        .directive ('displayDevices', displayDevicesDirective);


    /** @ngInject */
    function displayDevicesDirective($http) {
        function displayDevicesCtrl(){
            var vm = this;

            vm.deleteDevice = function (id) {
                $http.delete(`/api/device/${id}`).then(() => {
                  vm.devicesData = vm.devicesData.filter((device) => device.id !== id);
                });
            };
        }

        function link(){
        }

        return {
            bindToController: true,
            controller: displayDevicesCtrl,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            templateUrl: '/directives/display-devices/display-devices.html',
            scope: {
                devicesData: '=',
            },
        }
    }
} ());