function Events($http) {
	return {
		search(params) {
	      return this.$http({
	         method: 'GET',
	         url: 'http://localhost:3000/events',
	         params: params
	      });
	   }
	}
}

Events.$inject = ['$http']

export default angular.module('events.services', [])
	.service('Events', Events)