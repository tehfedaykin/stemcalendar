'use strict';
import _ from 'lodash'

function CalendarCtrl(Events, $state) {
   let cv = this;
   cv.calendarView = 'month';
   cv.calendarDay = new Date();
   
   Events.search().then(function (response) {
      //cv.events = response.data;
      cv.events = _.map(response.data, function(event) {
         return {
            title: event.name,
            id: event.id,
            type: 'info',
            startsAt: new Date(event.startdate),
            endsAt: new Date(event.enddate),
            editable: false, 
            deletable: false, 
            draggable: false, 
            resizable: true, 
            incrementsBadgeTotal: true, 
            recursOn: 'year', 
            cssClass: 'a-css-class-name' 
         }
      })
   }).catch(() => {

   })

   cv.clicked = function(event) {
      $state.go('event', {id: event.id});
   }
   
}

CalendarCtrl.$inject = ['Events', '$state']

export default angular.module('calendar.controllers', ['mwl.calendar'])
   .controller('CalendarCtrl', CalendarCtrl);