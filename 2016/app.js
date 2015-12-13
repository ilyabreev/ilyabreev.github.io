var newYearApp = angular.module('newYearApp', ['ngRoute']);

newYearApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        });
});

newYearApp.controller('mainController', function($scope) {
  $scope.answered = false;
  $scope.change = function() {
    var target = "E2C2100332C8FC3F3E92BFE535383C95".toLowerCase();
    $scope.source = md5($scope.answer.trim().toLowerCase());
    $scope.answered = $scope.source == target;
  };
});