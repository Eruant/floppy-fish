/**
 * home module
 **/

require('angular/angular');
require('angular-route/angular-route');

exports.init = function () {

  angular.module('flappyFish').config(function ($routeProvider) {
    console.log('init config', $routeProvider);
    $routeProvider.when('/', {
      controller: 'homeController',
      templateUrl: './modules/home/home.html'
    });
  });

  angular.module('flappyFish').controller('homeController', function ($scope) {
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
