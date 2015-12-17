(function () {
  angular
  .module('app.dog_walkers')
  .factory('DogWalkerFactory', DogWalkerFactory);

  DogWalkerFactory.$inject = ['$resource'];

  function DogWalkerFactory($resource) {
    return $resource('/api/dog_walkers/:id', {id: '@id'}, {
      update: {
        method: 'PUT'
      }
    });
  };
})();
