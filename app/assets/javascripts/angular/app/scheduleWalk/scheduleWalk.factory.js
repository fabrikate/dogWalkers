(function() {
  angular
  .module('app.scheduleWalk')
  .factory('AppointmentFactory', AppointmentFactory);

  AppointmentFactory.$inject = ['$resource'];

  function AppointmentFactory($resource) {
    return $resource('/api/appointments/:id', {id: '@id'}, {
      'update': {
        method: 'PUT'
      }
    });
  }
})();
