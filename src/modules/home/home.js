/**
 * home module
 **/

var angular = require('angular/angular'),
    angularRoute = require('angular-route/angular-route');

exports.init = function (app) {

  console.log('home init');

  app.config(function ($routeProvider) {
    $routeProvider.when('/', {
      redirectTo: '/home'
    });

    console.log('should have re-directed');
    
    /*.when('/home', {
      controller: 'homeController',
      templateUrl: 'modules/home/home.html'
    });*/
  });

  /*
  app.controller('homeController', function ($scope, homeFactory) {
    console.log('created home controller!');
    $scope.title = "HOME PAGE";

    homeFacory.getHome();
  });

  app.factory('homeFactory', function ($http) {
    return {
      getHome: function () {
        return $http.get('home.json');
      }
    };
  });
  */

};
