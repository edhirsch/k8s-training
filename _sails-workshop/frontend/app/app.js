var app = angular.module('workshop', ['ngRoute']);
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
  .otherwise({redirectTo: '/'});
});