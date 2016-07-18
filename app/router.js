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

        .when('/skill', {
            templateUrl: 'js/controllers/skill/skill.html',
            controller: 'SkillCtrl'
        })
        .when('/achievement', {
            templateUrl: 'js/controllers/achievement/achievement.html',
            controller: 'AchievementCtrl'
        })
        .when('/hired', {
            template: '<div></div>',
            controller: 'HiddenCtrl'
        })
        .otherwise({redirectTo: '/welcome'});
}]);