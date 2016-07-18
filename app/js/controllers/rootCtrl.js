/**
 * Created by CYF on 16/7/18.
 */
angular.module('myApp')
    .controller('RootCtrl',[
        '$scope',
        'achievementService',
        function($scope,achievementService){
            achievementService.hello();
            achievementService.stay();
        }
    ]);