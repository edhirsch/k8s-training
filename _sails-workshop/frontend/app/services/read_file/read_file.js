(function () {
    angular.module('workshop')
        .service('readFileService', readFileService);
    readFileService.$inject = [];
    function readFileService() {
        this.read = function (fileName, load_handler) {
            const file = document.getElementById(fileName).files[0];
            if (file !== undefined)
                parse_file_info(file, load_handler);
        }

        function parse_file_info(file, load_handler) {
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onloadend = event => load_handler(event);
        }
    }
}());