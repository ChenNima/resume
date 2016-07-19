/**
 * Created by CYF on 16/7/18.
 */
angular.module('achievementService', [])
    .factory('achievementService',
        ['localService',
            'Notification',
            function (localService,Notification) {

        var achievement = localService.getObject('achievement');

                var pageArray = [];
                var quickReadArray = [];

                var like = 0;
                var dislike = 0;

                var achieve = function(achieve){
                    Notification.success({message: achieve, title: '成就解锁'});
                    localService.setObject('achievement',achievement);
                    check();
                };

                var check = function(){
                    if(!achievement.all){
                        var i =0;
                        for(var index in achievement){
                            i++;
                        }
                        if(i==13){
                            achievement.all=true;
                            Notification.success({message: '强迫症', title: '成就解锁'});
                            localService.setObject('achievement',achievement);
                        }
                    }
                };

                var timer;
                var longTimer = null;
                var timerFlag = false;

        return {
            get :function(){
                return achievement;
            },
            hello : function(){
                if(!achievement.hello){
                    achievement.hello = true;
                    achieve('Hello World!');
                }else if(!achievement.again){
                    achievement.again = true;
                    achieve('又见面了');
                }
            },

            readPage : function(page){
                if(achievement.readPage){
                    return;
                }
                if(!_.contains(pageArray,page)){
                    pageArray.push(page);
                    if(pageArray.length===4){
                        achievement.readPage = true;
                        achieve('详细了解');
                    }
                }
            },

            quickRead : function(page){
                if(achievement.quickRead){
                    return;
                }
                if(!timerFlag){
                    timerFlag = true;
                    quickReadArray = [];
                    timer = setTimeout(function(){
                        quickReadArray = [];
                        timerFlag = null;
                    },5000);
                    return;
                }
                if(!_.contains(quickReadArray,page)){
                    quickReadArray.push(page);
                    if(quickReadArray.length===4){
                        achievement.quickRead = true;
                        achieve('快速阅读');
                    }
                }
            },
            code:function(){
                if(!achievement.code){
                    achievement.code = true;
                    achieve('Talk is cheap');
                }
            },
            steam:function(){
                if(!achievement.steam){
                    achievement.steam = true;
                    achieve('蒸汽动力');
                }
            },
            like:function(){
                if(!achievement.like){
                    achievement.like = true;
                    achieve('点赞');
                }else if(!achievement.likeTen){
                    like++;
                    if(like==10){
                        achievement.likeTen = true;
                        achieve('点赞狂魔');
                    }
                }
            },
            dislike:function(){
                if(!achievement.dislike){
                    achievement.dislike = true;
                    achieve('还不够好');
                }else if(!achievement.dislikeTen){
                    dislike++;
                    if(dislike==10){
                        achievement.dislikeTen = true;
                        achieve('逊爆了!');
                    }
                }
            },
            stay:function(){
                if(!achievement.stay&&!longTimer){
                    longTimer = setTimeout(function(){
                        achievement.stay = true;
                        achieve('流连忘返');
                    },10*60*1000)
                }
            },
            hired:function(){
                if(!achievement.hired){
                    achievement.hired = true;
                    achieve('Hired!');
                }
            },
            contra:function(){
                if(!achievement.contra){
                    achievement.contra = true;
                    achieve('魂斗罗');
                }
            }

        }
    }]);
