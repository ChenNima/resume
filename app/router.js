/**
 * Created by yichen on 7/15/16.
 */
angular.module('myApp').
    config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: 'welcome'
        })
        .when('/welcome', {
            templateUrl: 'js/controllers/home.html',
            controller: 'HomeCtrl'
        })
        .otherwise({redirectTo: '/welcome'});
}]);