/**
 * Created by CYF on 16/7/18.
 */
angular.module('myApp')
    .controller('RootCtrl',[
        '$scope',
        'achievementService',
        function($scope,achievementService){
            console.log('成就系统好玩吗?');
            achievementService.hello();
            achievementService.stay();
        }
    ]);