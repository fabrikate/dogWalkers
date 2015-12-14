(function () {
  angular
  .module('app.dog_walkers')
  .config(ConfigDogWalkers)

  ConfigDogWalkers.$inject = ['$routeProvider']

  function ConfigDogWalkers ($routeProvider) {
    $routeProvider
    .when('/dog_walkers', {
      templateUrl: '/partials/dog_walkers/index.html',
      controller: 'DogWalkersController',
      controllerAs: 'vm'
    })
    .when('/dog_walkers/:id', {
      templateUrl: '/partials/dog_walkers/show.html',
      controller: 'DogWalkersController',
      controllerAs: 'vm'
    })
  }
})();
