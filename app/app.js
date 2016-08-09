'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ngRoute',
        'templates-main',
        'ui.bootstrap',
        'ui-notification',
        'localService',
        'achievementService',
        'restangular'
    ])
    .config(['$locationProvider', 'RestangularProvider', function ($locationProvider, RestangularProvider) {
        $locationProvider.hashPrefix('!');

        RestangularProvider.setBaseUrl('https://www.mrchen.pub/');
    }]);
