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
                户籍:'上海市徐汇区',
                出生年月:'1991.10.18'
            };

            $scope.contact = {
                手机:'18918561263',
                邮箱:'fennu637@sina.com',
                固话:'64230616'
            }
        }
    ]);