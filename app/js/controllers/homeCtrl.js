/**
 * Created by yichen on 7/15/16.
 */
angular.module('myApp')
    .controller('HomeCtrl',[
        '$scope',
        'achievementService',
        'Restangular',
        function($scope,achievementService,Restangular){
            achievementService.readPage(1);
            achievementService.quickRead(1);

            $scope.likeCount = 0;
            $scope. dislikeCount = 0;

            $scope.rate = function(){
                if($scope.likeCount==0&&$scope.dislikeCount==0){
                    return 50;
                }else {
                    return ($scope.likeCount/($scope.dislikeCount+$scope.likeCount))*100;
                }
            };

            $scope.like = function(){
                achievementService.like();
                $scope.likeCount++;
                Restangular.one('/like').get()
            };

            $scope.dislike = function(){
                achievementService.dislike();
                $scope.dislikeCount++;
                Restangular.one('/dislike').get()
            };

            Restangular.one('/get-rate').get().then(function(data){
                $scope.likeCount = data.like;
                $scope. dislikeCount = data.dislike;
            })
        }
    ]);