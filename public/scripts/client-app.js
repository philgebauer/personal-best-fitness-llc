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
      controller: 'contactController',
      controllerAs: 'contact'
    })
    .otherwise({
      redirectTo: '/homepage'
    });//End route

}]);//End config;
