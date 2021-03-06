(function () {
  angular
  .module('app.dogs')
  .config(ConfigDogs)

  ConfigDogs.$inject = ['$routeProvider'];

  function ConfigDogs($routeProvider) {
    $routeProvider
    .when('/dogs', {
      templateUrl: '/partials/dogs/index.html',
      controller: 'DogsController',
      controllerAs: 'vm'
    })
    .when('/dogs/:id', {
      templateUrl: '/partials/dogs/show.html',
      controller: 'DogShowController',
      controllerAs: 'vm'
    })
  }
})();
