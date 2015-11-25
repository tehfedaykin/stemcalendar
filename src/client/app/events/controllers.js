'use strict';
import moment from 'moment'

function EventsCtrl(Events) {
   let ev = this;
   Events.search().then(function (response) {
      ev.events = response.data;
      console.log(ev.events);
   }).catch(() => {

   })
}

EventsCtrl.$inject = ['Events']

function CreateEventCtrl(Events, $scope) {
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
      newEvent.starttime = moment(ev.startDate).format('MM/DD/YYYY') + ' ' + moment(ev.startTime).format('h:mm');
      newEvent.endtime = moment(ev.endDate).format('MM/DD/YYYY') + ' ' + moment(ev.endTime).format('h:mm');
      Events.create(newEvent).then((response) => {
         console.log(response)
      })
   }

}

CreateEventCtrl.$inject = ['Events', '$scope'];

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