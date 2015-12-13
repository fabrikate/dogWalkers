(function () {

  angular
  .module('app.users')
  .controller('UsersController', UsersController);

  UsersController.$inject = ['$routeParams', 'UserFactory'];

  function UsersController($routeParams, UserFactory) {
    $('#landingPage').hide();
    var vm = this;

    var Users = UserFactory.get({}, function (data) {
      console.log(data);
      vm.User = data;
    })
  }

})();
