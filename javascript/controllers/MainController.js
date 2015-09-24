app.controller('MainController', ['$scope', 'news', function($scope, news) {
        news.success(function(data) {
            $scope.news=data;
        })
}])