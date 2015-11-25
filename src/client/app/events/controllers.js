'use strict';
import moment from 'moment'

function EventsCtrl(Events) {
   let ev = this;
   Events.search().then(function (response) {
      console.log(response)
      ev.events = response.data;
   }).catch(() => {

   })
}

EventsCtrl.$inject = ['Events']

function CreateEventCtrl(Events) {
   let ev = this;
   ev.newEvent = {};

   ev.createEvent = function() {
      let newEvent = ev.newEvent;
      newEvent.starttime = moment(ev.startDate).format('MM/DD/YYYY') + ' ' + moment(ev.startTime).format('h:mm');
      newEvent.endtime = moment(ev.endDate).format('MM/DD/YYYY') + ' ' + moment(ev.endTime).format('h:mm');
      console.log(newEvent)
      Events.create(newEvent).then((response) => {
         console.log(response)
      })
   }

}

CreateEventCtrl.$inject = ['Events']

export default angular.module('events.controllers', [])
   .controller('EventsCtrl', EventsCtrl)
   .controller('CreateEventCtrl', CreateEventCtrl);