(function () {
  angular
  .module('app.scheduleWalk')
  .controller('WalkController', WalkController)

  WalkController.$inject = [$routeParams, AppointmentFactory];

  function WalkController ($routeParams, AppointmentFactory) {

  }
})();
