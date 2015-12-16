(function () {
  angular
  .module('app', [
    'ngRoute',
    'ngResource',
    'app.users',
    'app.dogs',
    'app.dog_walkers'
  ])
  .config(configModule);

  configModule.$inject = ['$httpProvider', '$locationProvider'];

  function configModule ($httpProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $httpProvider.defaults.headers.common['X-CSRF-Token'] =
    $('meta[name=csrf-token]').attr('content')
  };
})();
