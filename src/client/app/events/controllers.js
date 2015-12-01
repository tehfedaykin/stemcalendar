'use strict';
import moment from 'moment'

function EventsCtrl(Events) {
   let ev = this;
   Events.search().then(function (response) {
      ev.events = response.data;
   }).catch(() => {

   })
}

EventsCtrl.$inject = ['Events']

function CreateEventCtrl(Events, $scope, $state) {
   let ev = this;
   ev.newEvent = {};

   $scope.$watch('ev.startDate', function (newValue) {
      if (newValue) {
         ev.endDate = newValue;
      } 
   });

   $scope.$watch('ev.startTime', function (newValue) {
      if (newValue) {
         ev.endTime = newValue;
      } 
   });

   ev.createEvent = function() {
      let newEvent = ev.newEvent;
      newEvent.startdate = new Date(ev.startDate.getFullYear(), ev.startDate.getMonth(), ev.startDate.getDate(), 
         ev.startTime.getHours(), ev.startTime.getMinutes(), ev.startTime.getSeconds());
      newEvent.enddate = new Date(ev.endDate.getFullYear(), ev.endDate.getMonth(), ev.endDate.getDate(), 
         ev.endTime.getHours(), ev.endTime.getMinutes(), ev.endTime.getSeconds());
      Events.create(newEvent).then((response) => {
         $state.go('events');
      })
   }

}

CreateEventCtrl.$inject = ['Events', '$scope', '$state'];

function EventCtrl(Events, $stateParams) {
   let ev = this;
   Events.search({id: $stateParams.id}).then((response) => {
      ev.event = response.data[0];
      console.log(ev.event);
   })
}

EventCtrl.$inject = ['Events', '$stateParams'];

export default angular.module('events.controllers', [])
   .controller('EventsCtrl', EventsCtrl)
   .controller('CreateEventCtrl', CreateEventCtrl)
   .controller('EventCtrl', EventCtrl);