(function () {
    angular.module('workshop')
        .service('UpgradeService', UpgradeService);
    UpgradeService.$inject = ['$http'];
    function UpgradeService($http) {
        this.generate_device_info = function (ha_pairs) {
            return $http.post('/api/upgrade/device-info', ha_pairs);
        };
        this.generate_base_device = function (info) {
            return $http.post('/api/upgrade/base-device', info);
        };
    }
}());