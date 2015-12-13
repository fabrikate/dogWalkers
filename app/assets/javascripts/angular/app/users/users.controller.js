(function () {

  angular
  .module('app.users')
  .controller('UsersController', UsersController);

  UsersController.$inject = ['$routeParams'];

  function UsersController($routeParams) {
    var vm = this;
    $('#landingPage').hide();
  }

})();
