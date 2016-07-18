/**
 * Created by CYF on 16/7/18.
 */
angular.module('myApp')
.config(['NotificationProvider'
    ,function(NotificationProvider){
    NotificationProvider.setOptions({
        delay: 5000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'top'
    });
}]);