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

  configModule.$inject = ['$httpProvider'];

  function configModule ($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] =
    $('meta[name=csrf-token]').attr('content')
  };
})();
