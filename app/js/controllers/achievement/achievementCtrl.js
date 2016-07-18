/**
 * Created by CYF on 16/7/18.
 */
angular.module('myApp')
    .controller('AchievementCtrl',[
        '$scope',
        'achievementService',
        function($scope,achievementService){

            $scope.achievement = achievementService.get();

            var achieveItem = function(key,title,content){
                this.key = key;
                this.title = title;
                this.content = content
            };

            $scope.achieveItems = [
                new achieveItem('hello','Hello World','printf(\"Hello World\");'),
                new achieveItem('readPage','详细了解','有你感兴趣的内容吗?'),
                new achieveItem('quickRead','快速阅读','你一定有很多简历要看'),
                new achieveItem('code','Talk is cheap','\"Give me the code!\"'),
                new achieveItem('steam','蒸汽动力','喜+1'),
                new achieveItem('again','又见面了','cout<<\"Hello World\"<<endl;'),
                new achieveItem('like','点赞','我就知道你会喜欢'),
                new achieveItem('likeTen','点赞狂魔','鼠标还好吗'),
                new achieveItem('dislike','还不够好','欢迎发邮件提出建议'),
                new achieveItem('dislikeTen','逊爆了!','有那么差吗?'),
                new achieveItem('stay','流连忘返','是我太有魅力还是你忘记关掉页面?'),
                new achieveItem('hired','Hired!','你怎么找到的?'),
                new achieveItem('all','强迫症','希望你玩得开心')
            ];

        }
    ]);