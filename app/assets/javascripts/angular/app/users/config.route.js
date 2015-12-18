(function () {
  angular
  .module('app.users')
  .config(ConfigUsers);

  ConfigUsers.$inject = ['$routeProvider'];

  function ConfigUsers($routeProvider) {
    $routeProvider
    .when('/users/:user_id/edit', {
      templateUrl: '/partials/users/edit.html',
      controller: 'UsersController',
      controllerAs: 'vm'
    })
    .when('/dogWalkers', {
      templateUrl: '/partials/users/index.html',
      controller: 'UsersController',
      controllerAs: 'vm'
    })
    .when('/dogWalkers/:user_id/schedule', {
      templateUrl: '/partials/users/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'vm'
    })
  }
})();
