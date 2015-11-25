'use strict'

export default function appConfig($stateProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$stateProvider
		.state('app', {
			url: '/',
			template: require('./app/home/views/home.html')
		});
}

appConfig.$inject = ['$stateProvider', '$locationProvider']