/**
 * Created by yichen on 7/15/16.
 */
angular.module('myApp')
    .controller('HomeCtrl',[
        '$scope',
        'achievementService',
        function($scope,achievementService){
            achievementService.readPage(1);
            achievementService.quickRead(1);

            $scope.like = function(){
                achievementService.like();
            };

            $scope.dislike = function(){
                achievementService.dislike();
            }
        }
    ]);