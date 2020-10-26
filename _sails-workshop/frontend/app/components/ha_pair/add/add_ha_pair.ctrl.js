(function () {
    angular
        .module('workshop')
        .controller('AddHAPairCtrl', AddHAPairCtrl);

    AddHAPairCtrl.$inject = ['$scope', 'HAPairService', 'readFileService']
    function AddHAPairCtrl($scope, HAPairService, readFileService) {
        $scope.message = "";

        $scope.upload_device_info = function () {
            readFileService.read("device_info", load_handler);
        }

        function load_handler(event) {
            if (event.target.readyState === FileReader.DONE) {
                try {
                    let ha_pairs = JSON.parse(event.target.result);
                    upload_ha_pairs(ha_pairs);
                } catch (SyntaxError) {
                    $scope.$apply(() => { $scope.message = "Invalid JSON file"; });
                }
            }
        }

        function upload_ha_pairs(ha_pairs) {
            for (let key in ha_pairs) {
                let ha_pair = build_ha_pair(key, ha_pairs);
                add_ha_pair(ha_pair);
            }
            $scope.message = "Upload successful";
        }

        function build_ha_pair(key, ha_pairs) {
            let ha_pair = {
                ha: key,
                primary: ha_pairs[key].primary,
                secondary: ha_pairs[key].secondary,
                name: ha_pairs[key].name,
                type: ha_pairs[key].type,
                pid: ha_pairs[key].id
            }
            return ha_pair;
        }

        function add_ha_pair(ha_pair) {
            HAPairService.add_ha_pair(ha_pair).then(response => {
                console.log("Created HA Pair:", response);
            });
        }
    }
}());
