function Events($http) {
   return {
      search(params) {
         return $http({
            method: 'GET',
            url: 'http://localhost:3000/events',
            params: params
         });
      },
      create(data) {
         return $http({
            method: 'POST',
            url: 'http://localhost:3000/events',
            data: data
         })
      }
   }
}

Events.$inject = ['$http']

export default angular.module('events.services', [])
   .service('Events', Events)