/**
 * Created by CYF on 16/7/18.
 */
angular.module('myApp')
    .controller('HiddenCtrl',[
        '$scope',
        'achievementService',
        '$location',
        function($scope,achievementService,$location){
            achievementService.hired();
            $location.path('/');
        }
    ]);