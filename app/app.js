'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
    'ui.bootstrap',
  'ui-notification',
    'localService',
    'achievementService',
    'restangular'
])
    .config(['$locationProvider','RestangularProvider', function($locationProvider,RestangularProvider) {
  $locationProvider.hashPrefix('!');

      RestangularProvider.setBaseUrl('http://www.mrchen.pub/');

  //NotificationProvider.setOptions({
  //  delay: 10000,
  //  startTop: 20,
  //  startRight: 10,
  //  verticalSpacing: 20,
  //  horizontalSpacing: 20,
  //  positionX: 'left',
  //  positionY: 'bottom'
  //});
}]);
