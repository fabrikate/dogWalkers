(function () {
  angular
  .module('app', [
    'ngRoute',
    'ngResource',
    'ui.bootstrap',
    'app.users',
    'app.dogs',
    'app.dog_walkers',
    'app.additional_pics'
  ])
  .config(configModule);

  configModule.$inject = ['$httpProvider'];

  function configModule ($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] =
    $('meta[name=csrf-token]').attr('content')
  };
})();
