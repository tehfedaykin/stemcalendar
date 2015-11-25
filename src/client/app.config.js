'use strict'

export default function appConfig($stateProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$stateProvider
		.state('app', {
			url: '/',
			abstract: true,
			template: require('./app/home/views/home.html')
		})
		.state('app.calendar', {
			url: 'calendar',
			controller: 'CalendarCtrl as cv',
			template: require('./app/home/views/calendar.html')
		});
}

appConfig.$inject = ['$stateProvider', '$locationProvider']