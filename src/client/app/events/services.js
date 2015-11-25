function Events($http) {
   return {
      search(params) {
         return $http({
            method: 'GET',
            url: 'http://localhost:3000/api/events',
            params: params
         });
      },
      /**
      * @name create
      * @desc Creates a new event
      * @param {Object}
         {
           "startdate": "12/06/2015 17:00",
           "enddate": "12/06/2015 19:30",
           "geolocation": "point(-94.62746, 39.11405)",
           "venue": "Waterford",
           "description": "We gunn hack some stuff",
           "organizer": "Jennifer",
           "tags": "JavaScript"
         }
      * @returns {Object}
      */
      create(data) {
         console.log(data)
         return $http({
            method: 'POST',
            url: 'http://localhost:3000/api/events',
            data: data
         })
      }
   }
}

Events.$inject = ['$http']

export default angular.module('events.services', [])
   .service('Events', Events)