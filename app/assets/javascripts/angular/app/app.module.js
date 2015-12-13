(function () {
  angular
  .module('app', [
    'ngRoute',
    'ngResource',
    'app.users'
    // 'app.dogs',
    // 'app.dog_walkers'
  ])
  .config(configModule);

  configModule.$inject = ['$routeProvider'];

  function configModule ($routeProvider) {
    $routeProvider
    .otherwise({redirectTo: '/'});

    // $locationProvider.html5Mode(true);
  };
})();
