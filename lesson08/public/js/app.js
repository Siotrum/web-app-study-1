angular.module('app',['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template : '<h1>Mainpage</h1>',
        controller  : 'mainPage'
      })
      .when('/equipment', {
        template : '<h1>Eqquipment page</h1>',
        controller  : 'mainPage'
      })
  })
  .controller('mainPage', function ($scope) {

  });
