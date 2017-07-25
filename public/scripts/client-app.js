var app = angular.module('app', ['ngRoute', 'firebase', 'truncate']);


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
    .when('/thanks', {
      templateUrl: '../public/views/thanks.html',
      controller: 'ThanksController',
      controllerAs: 'thanks'
    })
    .when('/admin', {
      templateUrl: '../public/views/admin.html',
      controller: 'AdminController',
      controllerAs: 'admin'
    })
    .when('/bootcamp', {
      templateUrl: '../public/views/bootcamp.html',
      controller: 'BootcampController',
      controllerAs: 'bootcamp'
    })
    .when('/bootcampPics', {
      templateUrl: '../public/views/bootcampPics.html',
      controller: 'BootcamppicsController',
      controllerAs: 'bootcamppics'
    })
    .otherwise({
      redirectTo: '/homepage'
    });//End route

}]);//End config;
