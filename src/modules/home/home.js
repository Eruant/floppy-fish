/**
 * home module
 **/

var angular = require('angular/angular'),
    angularRoute = require('angular-route/angular-route');

exports.init = function (app) {

  app.config(function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'homeController',
      templateUrl: './modules/home/home.html'
    });
  });

  app.controller('homeController', function ($scope) {
    console.log('created home controller!');
    $scope.title = 'a title';
  });

  /*
  app.factory('homeFactory', function ($http) {
    return {
      getHome: function () {
        return $http.get('home.json');
      }
    };
  });
  */

};
