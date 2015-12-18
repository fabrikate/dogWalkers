(function () {
  angular
  .module('app.users')
  .controller('DashboardController', DashboardController)

  DashboardController.$inject = ['UserFactory', '$routeParams'];

  function DashboardController (UserFactory, $routeParams) {
    var vm = this;
    console.log($routeParams);

  }
})();
