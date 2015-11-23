'use strict';

import angular from 'angular';

import './controllers.js';

function eventRoutes($stateProvider) {
   $stateProvider
      .state('events', {
         url: '/events',
         template: require('./app/events/views/events.html')
      })
      .state('createEvent', {
         url: '/events',
         template: require('./app/events/views/create-event.html')
      });
}

eventRoutes.$inject = ['$stateProvider']

export default angular.module('events', ['events.controllers', 'events.services'])
   .config(eventRoutes)
   .name;

