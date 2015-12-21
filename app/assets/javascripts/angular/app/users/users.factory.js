(function () {
  angular
  .module('app.users')
  .factory('UserFactory', UserFactory);

  UserFactory.$inject = ['$resource'];

  function UserFactory($resource) {
    return $resource('/api/users/:id', {id: '@id'}, {
      'update': {
        method: 'PUT'
      }
    });
  };
})();
