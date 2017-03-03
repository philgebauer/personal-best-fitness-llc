var app = angular.module('app', ['ngRoute', 'firebase']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/homepage', {
      templateUrl: '../public/views/homepage.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/contact', {
      templateUrl: '../public/views/contact.html',
      controller: 'ContactController',
      controllerAs: 'contact'
    })
    .when('/classes', {
      templateUrl: '../public/views/classes.html',
      controller: 'ClassesController',
      controllerAs: 'classes'
    })
    .when('/aboutme', {
      templateUrl: '../public/views/aboutme.html',
      controller: 'AboutmeController',
      controllerAs: 'about'
    })
    .otherwise({
      redirectTo: '/homepage'
    });//End route

}]);//End config;
