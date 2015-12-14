(function() {
  angular
  .module('app.dog_walkers')
  .controller('DogWalkersController', DogWalkersController)

  DogWalkersController.$inject = ['UserFactory']

  function DogWalkersController(UserFactory) {
    $('#landingPage').hide();
    var vm = this;
  }
})();
