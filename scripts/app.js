'use strict';

/**
 * @ngdoc overview
 * @name laicffApp
 * @description
 * # laicffApp
 *
 * Main module of the application.
 */
angular
  .module('laicffApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'duScroll',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/submit_overviews', {
        templateUrl: 'views/submit_overviews.html',
        controller: 'SubmitOverviewsCtrl',
        controllerAs: 'submit_overviews'
      })
      .when('/submit_guidelines', {
        templateUrl: 'views/submit_guidelines.html'
      })
      .when('/judges', {
        templateUrl: 'views/judges.html',
        controller: 'JudgesCtrl',
        controllerAs: 'judges'
      })
      .when('/volunteering', {
        templateUrl: 'views/volunteering.html'
      })
      .when('/individual_giving', {
        templateUrl: 'views/individual_giving.html'
      })
      .when('/corporate_support', {
        templateUrl: 'views/corporate_support.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/theteam', {
        templateUrl: 'views/theteam.html'
      })
      .when('/contact_us', {
        templateUrl: 'views/contact_us.html'
      })
      .when('/album', {
        templateUrl: 'views/album.html',
        controller: 'AlbumCtrl',
        controllerAs: 'album'
      })
      .when('/gallery/:id', {
          templateUrl: 'views/album-detail.html',
          controller: 'AlbumDetailCtrl'
      })
      .when('/project/jaya', {
          templateUrl: 'views/project/jaya.html',
          controller: 'WinnerCtrl'
      })
      .when('/project/free-party', {
          templateUrl: 'views/project/free-party.html',
          controller: 'WinnerCtrl'
      })
      .when('/project/sebastian', {
          templateUrl: 'views/project/sebastian.html',
          controller: 'WinnerCtrl'
      })
      .when('/project/roubado', {
          templateUrl: 'views/project/roubado.html',
          controller: 'WinnerCtrl'
      })
      .when('/project/not-a-word-about-your-mother', {
          templateUrl: 'views/project/nwam.html',
          controller: 'WinnerCtrl'
      })
      .when('/project/the-good-old-days', {
          templateUrl: 'views/project/tgod.html',
          controller: 'WinnerCtrl'
      })
      .when('/project/side-roads', {
          templateUrl: 'views/project/side-roads.html',
          controller: 'WinnerCtrl'
      })
      .when('/project/samuel-colt', {
          templateUrl: 'views/project/samuel-colt.html',
          controller: 'WinnerCtrl'
      })
      .when('/winners', {
          templateUrl: 'views/winners.html'
      })
      .when('/2016selection', {
          templateUrl: 'views/2016selection.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
