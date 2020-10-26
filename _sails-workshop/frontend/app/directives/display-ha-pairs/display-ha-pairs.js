(function () {
    'use strict';

    angular
        .module('workshop')
        .directive('displayHaPairs', displayHaPairsDirective);

    /** @ngInject */
    function displayHaPairsDirective(DTOptionsBuilder, DTColumnBuilder) {
        function displayHaPairs() {
            var vm = this;
            vm.dtOptions = DTOptionsBuilder.newOptions()
                .withOption('ajax', {
                    url: '/api/hapair',
                    type: 'GET'
                })
                .withPaginationType('full_numbers')
                .withOption('responsive', true);
            vm.dtColumns = [
                DTColumnBuilder.newColumn('ha').withTitle('HA'),
                DTColumnBuilder.newColumn('name').withTitle('Name'),
                DTColumnBuilder.newColumn('type').withTitle('Type'),
                DTColumnBuilder.newColumn('pid').withTitle('ID'),
                DTColumnBuilder.newColumn('primary').renderWith(function (primary) {
                    return `
                    <table class="table table-bordered row-table">
                        <thead>
                            <tr>
                                <th scope="col">IP</th>
                                <th scope="col">Name</th>
                                <th scope="col">UUID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                ${primary.ip}
                                </td>
                                <td>
                                ${primary.name}
                                </td>
                                <td>
                                ${primary.uuid}
                                </td>
                            </tr>
                    `
                }).withClass('none'),
                DTColumnBuilder.newColumn('secondary').renderWith(function (secondary) {
                    return `
                            <tr>
                                <td>
                                ${secondary.ip}
                                </td>
                                <td>
                                ${secondary.name}
                                </td>
                                <td>
                                ${secondary.uuid}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    `
                }).withClass('none')
            ];
        }

        return {
            bindToController: true,
            controller: displayHaPairs,
            controllerAs: 'showCase',
            restrict: 'E',
            templateUrl: '/directives/display-ha-pairs/display-ha-pairs.html',
        }
    }
}());