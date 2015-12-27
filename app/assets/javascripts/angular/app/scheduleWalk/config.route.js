(function() {
  angular
  .module('app.scheduleWalk')
  .config(scheduleWalkConfig);

  scheduleWalkConfig.$inject=['$routeProvider'];

  function scheduleWalkConfig($routeProvider) {
    $routeProvider
    .when('/scheduleWalk/:user_id/new', {
      templateUrl: '/partials/scheduleWalk/new.html',
      controller: 'ScheduleWalkController',
      controllerAs: 'vm'
    })
    .when('/scheduleWalk/:owner_id/:walker_id', {
      templateUrl: '/partials/scheduleWalk/proposed.html',
      controller: 'ScheduleWalkController',
      controllerAs: 'vm'
    })
  }
})();
