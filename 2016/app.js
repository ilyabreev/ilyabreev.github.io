var newYearApp = angular.module('newYearApp', ['ngRoute']);

newYearApp.config(function($routeProvider) {
    var pages = [ 
        '654067e916584fb2bb3a091299b80315', // шар
        'b7911693d6cf467e8173d24045948aef', // головоломка с цепочкой внутри рюкзака
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