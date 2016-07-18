/**
 * Created by yichen on 7/15/16.
 */
angular.module('myApp')
    .controller('SkillCtrl',[
        '$scope',
        'achievementService',
        function($scope,achievementService){
            achievementService.readPage(4);
            achievementService.quickRead(4);

            $scope.frount = {
                'Angular.js': '熟练',
                'Bootstrap':'熟练'
            };

            $scope.back = {
                'node.js': '熟练',
                'SpringMVC':'掌握',
                'Ruby':'了解'
            };
            $scope.app = {
                'Android': '掌握',
                'ionic':'熟练'
            };
            $scope.server = {
                'Nginx': '掌握',
                'shell/bash':'掌握',
                'jenkins':'掌握'
            };
            $scope.other = {
                'Github':'熟练',
                'Photoshop': '熟练',
                '敏捷开发':'掌握',
                '英语':'CET6'
            }
        }
    ]);