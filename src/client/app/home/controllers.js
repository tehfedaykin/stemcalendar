'use strict';

function CalendarCtrl(Events, $scope) {
   let cv = this;
   cv.calendarView = 'month';
   cv.calendarDay = new Date();
   
   Events.search().then(function (response) {
      cv.events = response.data;
      cv.events = [{
         title: 'CoderDojo', // The title of the event
         type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
         startsAt: new Date(2015,10,25, 9), // A javascript date object for when the event starts
         endsAt: new Date(2015,10,25, 12), // Optional - a javascript date object for when the event ends
         editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
         deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
         draggable: true, //Allow an event to be dragged and dropped
         resizable: true, //Allow an event to be resizable
         incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
         recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
         cssClass: 'a-css-class-name' //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
         }
      ];
   }).catch(() => {

   })
   
}

CalendarCtrl.$inject = ['Events', '$scope']

export default angular.module('calendar.controllers', ['mwl.calendar'])
   .controller('CalendarCtrl', CalendarCtrl);