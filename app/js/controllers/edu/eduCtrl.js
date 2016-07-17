/**
 * Created by Fan on 2016/7/17.
 */
angular.module('myApp')
    .controller('EduCtrl',[
        '$scope',
        function($scope){
            $scope.ostengar = {
                时间:'2014.11-2015.8',
                职位:'实习开发工程师',
                主要工作:'Android开发，JAVA后台开发',
                主要技术:'Android native,SpringMVC'
            };

            $scope.cb = {
                时间:'2016.4-',
                职位:'实习Web开发工程师',
                主要工作:'内部管理系统的前端/后端开发',
                主要技术:'Angular.js,Ruby on rails,node.js'
            }
        }
    ]);