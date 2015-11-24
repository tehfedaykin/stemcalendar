'use strict'

export default function appConfig($stateProvider) {

	$stateProvider
		.state('index', {
			url: '/',
			template: require('./app/home/views/home.html')
		});
}

appConfig.$inject = ['$stateProvider']