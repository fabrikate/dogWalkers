(function () {
  angular
  .module('app.dogs')
  .controller('DogsController', DogsController);

  DogsController.$inject = ['DogFactory', '$routeParams'];

  function DogsController(DogFactory, $routeParams) {
    $('#landingPage').hide();
    var vm = this;
    // get Dog information for the index page
    vm.Dogs = DogFactory.query(function(data) {
    })
  }
})();
