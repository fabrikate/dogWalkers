(function() {
  angular
  .module('app.additional_pics')
  .factory('AddPicFactory', AddPicFactory);

  AddPicFactory.$inject = ['$resource'];

function AddPicFactory($resource) {
  return $resource('/api/additional_pics/:id', {id: '@id'}, {
    'update': {
      method: 'PUT'
    }
  })
}
})();
