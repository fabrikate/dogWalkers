(function () {
  angular
  .module('app.users')
  .config(ConfigUsers);

  ConfigUsers.$inject = ['$routeProvider'];

  function ConfigUsers($routeProvider) {
    $routeProvider
    .when('/user/:user_id/edit', {
      templateUrl: '/partials/users/edit.html',
      controller: 'UsersController',
      controllerAs: 'vm'
    })
  }
})()
