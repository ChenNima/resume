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

            var keys = [];
            var secretKeys= ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "b", "a"];

            $scope.secret = function(ev){
                keys.push(ev.key);
                if(keys.length>12){
                    keys.splice(0,1);
                }
                if(_.isEqual(keys,secretKeys)){
                    achievementService.contra();
                }
            }
        }
    ]);