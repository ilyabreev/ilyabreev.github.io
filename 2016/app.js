var newYearApp = angular.module('newYearApp', ['ngRoute']);

newYearApp.config(function($routeProvider) {
    var pages = [ 
        'bb7ad48dc82a49588e7c34239fdeb8a8', // календарь
        '654067e916584fb2bb3a091299b80315', // шар
        'aba7a7eb4d15476f8c4c592069597411', // 
        'b93482d68e3e4355aa9fc845aaabc9e8',
        '1f5c757a61da444f9a5f47bbab11c5f7',
        '1ec0a6051d0d4c03954fb3a57fb1ab3c',
        '91fa7ba44b0b4a44b7889b862ea6cac0',
        '5b9bdd73b1c341c7ab952bfe569ae4a3',
        '2bc0346ef50f40a681c98becf2f2b060',
        'b7911693d6cf467e8173d24045948aef'
    ];
    $routeProvider.when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    });

    for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        var path = 'pages/' + page + '.html';
        $routeProvider.when('/' + path, {
            templateUrl : path,
            controller: 'mainController'
        });
    }
});

newYearApp.controller('mainController', function($scope) {
  $scope.answered = false;
  $scope.change = function() {
    var target = "E2C2100332C8FC3F3E92BFE535383C95".toLowerCase();
    $scope.source = md5($scope.answer.trim().toLowerCase());
    $scope.answered = $scope.source == target;
  };
});