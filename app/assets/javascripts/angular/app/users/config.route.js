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
    .when('/users/:user_id', {
      templateUrl: '/partials/users/ownerProfile.html',
      controller: 'OwnersController',
      controllerAs: 'vm'
    })
    .when('/dogWalkers/:user_id', {
      templateUrl: '/partials/users/index.html',
      controller: 'UsersController',
      controllerAs: 'vm'
    })
    .when('/dogWalkers/:user_id/schedule', {
      templateUrl: '/partials/users/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'vm'
    })
    .when('/dogWalker/profile/:user_id', {
      templateUrl: '/partials/users/dogWalkerProfile.html',
      controller: 'WalkerController',
      controllerAs: 'vm'
    })
  }
})();
