(function () {

  angular
  .module('app.dogs')
  .controller('DogsController', DogsController);

  DogsController.$inject = ['$routeParams', 'DogFactory'];

  function DogsController () {
    $('#landigPage').hide();
    var vm = this;

    var Dogs = DogFactory.query(function (data) {
      vm.dogs = data;
      console.log(vm.dogs)
    })
  }
})();
