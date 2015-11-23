'use strict'

export default function appConfig($stateProvider, $locationProvider) {

	//$locationProvider.html5Mode(true);

	$stateProvider
		.state('index', {
			url: '/',
			template: require('./app/home/views/home.html')
		});
}

appConfig.$inject = ['$stateProvider', '$locationProvider']