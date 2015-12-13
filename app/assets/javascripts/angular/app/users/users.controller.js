(function () {

  angular
  .module('app.users')
  .controller('UsersController', UsersController);

  UsersController.$inject = ['$routeParams', 'UserFactory'];

  function UsersController($routeParams, UserFactory) {
    $('#landingPage').hide();
    var vm = this;

    var Users = UserFactory.query(function (data) {
      vm.users = data["0"]
    })

    vm.updateUser = function () {}

  }

})();
