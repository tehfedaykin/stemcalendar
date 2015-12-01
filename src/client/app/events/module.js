'use strict';

import angular from 'angular';

import './controllers.js';
import './services.js';

function eventRoutes($stateProvider) {
   $stateProvider
      .state('events', {
         url: '/events',
         controller: 'EventsCtrl as ev',
         template: require('./views/events.html')
      })
      .state('createEvent', {
         url: '/create-event',
         controller: 'CreateEventCtrl as ev',
         template: require('./views/create-event.html')
      })
      .state('event', {
         url: '/event/:id',
         controller: 'EventCtrl as ev',
         template: require('./views/event.html')
      });
}

eventRoutes.$inject = ['$stateProvider']

export default angular.module('events', ['events.controllers', 'events.services'])
   .config(eventRoutes)
   .name;

