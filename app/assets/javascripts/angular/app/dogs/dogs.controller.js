(function () {
  angular
  .module('app.dogs')
  .controller('DogsController', DogsController);

  DogsController.$inject = ['DogFactory'];

  function DogsController(DogFactory) {
    $('#landingPage').hide();
    var vm = this;
  }
})();
