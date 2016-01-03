(function() {
  angular
  .module('app.scheduleWalk')
  .config(scheduleWalkConfig);

  scheduleWalkConfig.$inject=['$routeProvider'];

  function scheduleWalkConfig($routeProvider) {
    $routeProvider
    .when('/scheduleWalk/:user_id/:walker_id/new', {
      templateUrl: '/partials/scheduleWalk/new.html',
      controller: 'ScheduleWalkController',
      controllerAs: 'vm'
    })
    .when('/scheduleWalk/:user_id/:walker_id/:walk_id', {
      templateUrl: '/partials/scheduleWalk/proposed.html',
      controller: 'WalkController',
      controllerAs: 'vm'
    })
  }
})();
