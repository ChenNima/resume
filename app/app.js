'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
    'ui.bootstrap',
  'ui-notification',
    'localService',
    'achievementService'
])
    .config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('!');

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
