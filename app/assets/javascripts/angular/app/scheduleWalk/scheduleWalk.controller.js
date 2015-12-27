(function() {
  angular
  .module('app.scheduleWalk')
  .controller('ScheduleWalkController', ScheduleWalkController);

  ScheduleWalkController.$inject = ['$routeParams', 'UserFactory', 'DogFactory'];

  function ScheduleWalkController($routeParams, UserFactory, DogFactory) {
    var vm = this;
  }
})();
