var app = angular.module('app', ['ngRoute', 'firebase']);

app.constant('FIREBASE_URI', 'https://personalbestfitness-76fa4.firebaseio.com');

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
    .when('/admin', {
      templateUrl: '../public/views/admin.html',
      controller: 'AdminController',
      controllerAs: 'admin'
    })
    .otherwise({
      redirectTo: '/homepage'
    });//End route

}]);//End config;
