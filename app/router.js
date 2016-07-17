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
        .when('/information', {
            templateUrl: 'js/controllers/info/info.html',
            controller: 'InfoCtrl'
        })

        .when('/education', {
            templateUrl: 'js/controllers/edu/edu.html',
            controller: 'EduCtrl'
        })
        .otherwise({redirectTo: '/welcome'});
}]);