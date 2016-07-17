'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
    'ui.bootstrap'
]).
config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('!');
}]);
