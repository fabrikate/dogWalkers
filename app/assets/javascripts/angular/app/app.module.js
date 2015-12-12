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

  configModule.$inject = ['$httpProvider', '$routeProvider', '$locationProvider'];

  function configModule ($httpProvider, $routeProvider, $locationProvider) {
    $routeProvider
    .otherwise({redirectTo: '/'});
    
    $locationProvider.html5Mode(true);

    $httpProvider.defaultsheaders.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  };
})()
