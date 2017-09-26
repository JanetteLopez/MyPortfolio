var myApp = angular.module("myApp", ['ui.router']);

myApp.controller("HomeController", HomeController);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'ngApp/Views/home.html',
            controller: HomeController,
            controllerAs: 'controller'
        })
        .state('aboutMe', {
            url: '/aboutMe',
            templateUrl: 'ngApp/Views/aboutMe.html',
            controller: HomeController,
            controllerAs: 'controller'
        });

         // Handle request for non-existent route
    $urlRouterProvider.otherwise('/notFound');

    // Enable HTML5 navigation
    $locationProvider.html5Mode(true);
});
