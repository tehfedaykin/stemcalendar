'use strict'

export default function appConfig($stateProvider, $locationProvider, $urlRouterProvider) {
   $locationProvider.html5Mode(true);

   $urlRouterProvider.otherwise('/home');
   $stateProvider
      .state('home', {
         url: '/home',
         controller: 'CalendarCtrl as cv',
         template: require('./app/home/views/calendar.html')
      });
}

appConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider']