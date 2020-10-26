var app = angular.module('workshop', ['ngRoute', 'datatables']);
app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : '/components/home/home.tmpl.html',
    controller  : 'HomeCtrl'
  })
  .when('/login', {
    templateUrl : '/components/login/login.tmpl.html',
    controller : 'LoginCtrl',
  })
  .when('/add_device', {
    templateUrl : '/components/device/add/add_device.tmpl.html',
    controller : 'AddDeviceCtrl',
  })
  .when('/devices', {
    templateUrl : '/components/device/view/view_devices.tmpl.html',
    controller : 'ViewDevicesCtrl',
  })
  .when('/monitor', {
    templateUrl : '/components/monitor/monitor.tmpl.html',
    controller : 'MonitorCtrl',
  })
  .when('/upgrade', {
    templateUrl : '/components/upgrade/upgrade.tmpl.html',
    controller : 'UpgradeCtrl',
  })
  .when('/add_ha_pair', {
    templateUrl : '/components/ha_pair/add/add_ha_pair.tmpl.html',
    controller : 'AddHAPairCtrl',
  })
  .when('/view_ha_pairs', {
    templateUrl : '/components/ha_pair/view/view_ha_pairs.tmpl.html',
    controller : 'ViewHAPairsCtrl',
  })
  .otherwise({redirectTo: '/'});
});