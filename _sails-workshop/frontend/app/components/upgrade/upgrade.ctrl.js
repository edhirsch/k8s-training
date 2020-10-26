(function () {
    angular
        .module('workshop')
        .controller('UpgradeCtrl', UpgradeCtrl);

    UpgradeCtrl.$inject = ['$scope', 'HAPairService', 'readFileService', 'UpgradeService']
    function UpgradeCtrl($scope, HAPairService, readFileService, UpgradeService) {
        $scope.get_ha_pairs =
            HAPairService.get_ha_pairs().then(result => {
                $scope.ha_pairs = result.data;
            });

        $scope.logs = [];
        io.socket.on('upgrade', function (response) {
            if (response.verb === 'upgrade') {
                $scope.logs.push(response.lastLogMessage);
                console.log(response.lastLogMessage);
                $scope.$apply();
            }
        });

        let selectedHAPairs = [];
        $scope.select = function (id, selected) {
            const haPair = JSON.parse(document.getElementById(id).value);
            if (selected) {
                selectedHAPairs.push(haPair);
            }
            else {
                const index = selectedHAPairs.indexOf(haPair);
                selectedHAPairs.splice(index, 1);
            }
        };

        $scope.upgrade = function () {
            UpgradeService.generate_device_info(selectedHAPairs).then(response => {
                console.log(response);
            });
            UpgradeService.generate_base_device($scope.device).then(response => {
                console.log(response);
            });
            for (let index = 0; index < selectedHAPairs.length; index++) {
                let id = selectedHAPairs[index].id;
                io.socket.get(`/upgrade/${id}`);
            }
        };

        $scope.open_dialog = function () {
            const dialog = angular.element("#modalDialog");
            const background = angular.element("#startUpgrade");
            const nav = angular.element("#mainNav");
            if (dialog) {
                dialog.fadeIn();
                background.addClass('blur');
                nav.addClass('blur');
            }
        };

        $scope.close_dialog = function () {
            const dialog = angular.element("#modalDialog");
            const background = angular.element("#startUpgrade");
            const nav = angular.element("#mainNav");
            if (dialog) {
                dialog.fadeOut();
                background.removeClass('blur');
                nav.removeClass('blur');
            }
        };

        $scope.upload_device_info = function () {
            readFileService.read("base_device", load_handler);
        };


        function load_handler(event) {
            if (event.target.readyState === FileReader.DONE) {
                let device_info = JSON.parse(event.target.result);
                $scope.$apply(() => {
                    $scope.device = build_device(device_info);
                });
            }
        }

        function build_device(device_info) {
            return {
                username: device_info.username,
                password: device_info.password,
                port: device_info.port,
                imageName: device_info.image_name,
                imageHash: device_info.image_hash,
                timeout: device_info.timeout,
                remoteServer: device_info.remote_server,
                remoteUsername: device_info.remote_username,
                remotePassword: device_info.remote_password,
                remotePath: device_info.remote_path,
                packageDownloadURL: device_info.package_download_url,
                downloadTimeout: device_info.download_timeout
            };
        }
    }
}());
