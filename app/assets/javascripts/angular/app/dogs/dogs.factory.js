(function () {
  angular
  .module('app.dogs')
  .factory('DogFactory', DogFactory);

  DogFactory.$inject = ['$resource'];

  function DogFactory ($resource) {
    return $resource('/api/dogs/:id', {id: '@id'}, {
      update: {
        method: 'PUT'
      }
    });
  }
})();
