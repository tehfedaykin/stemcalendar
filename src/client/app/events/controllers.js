'use strict';


export default function EventsCtrl(Events) {
	let ev = this;
	Events.search().then(function (response) {
		ev.events = response.data;
	}).catch(() => {

	})
}

EventsCtrl.$inject = ['Events']

export default angular.module('events.controllers', [])
	.controller('EventsCtrl', EventsCtrl)