/**
 * Floppy Fish
 *
 * This is the file to kick off everything
 **/

require('angular/angular');
require('angular-route/angular-route');

var app = angular.module('flappyFish', ['ngRoute']);

console.log(app);

app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    controller: 'homeController',
    templateUrl: './modules/home/home.html'
  }).otherwise({
    redirectTo: '/404'
  });
  console.log('finished config');
});

app.controller('homeController', function ($scope) {
  console.log('main controller');
  $scope.title = 'A title';
});
