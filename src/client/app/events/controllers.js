'use strict';


export default function EventsCtrl() {
	let ev = this;

	Events.search().then(function (response) {
		console.log(response)
	})
}

EventsCtrl.$inject = []

export default angular.module('events.controllers', [])
	.controllers('EventsCtrl', EventsCtrl)