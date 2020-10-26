(function () {
    angular.module('workshop')
        .service('HAPairService', HAPairService);
    HAPairService.$inject = ['$http'];
    function HAPairService($http) {
        this.add_ha_pair = function (ha_pair) {
            return $http.post('/api/hapair', ha_pair);
        };
        this.get_ha_pairs = function () {
            return $http.get('/api/hapair');
        };
    }
}());