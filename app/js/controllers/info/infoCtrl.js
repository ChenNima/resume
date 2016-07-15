/**
 * Created by yichen on 7/15/16.
 */
angular.module('myApp')
    .controller('InfoCtrl',[
        '$scope',
        function($scope){
            $scope.baseInfo = {
                姓名:'陈逸斐',
                性别:'男',
                籍贯:'江苏',
                家庭地址:'上海市徐汇区'
            }

        }
    ]);