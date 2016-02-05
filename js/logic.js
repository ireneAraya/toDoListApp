angular.module('todoList', ['ngRoute','todoList.controllers'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'views/taskList.html',
    })
    .when('/description', {
        templateUrl: 'views/taskDescription.html'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);