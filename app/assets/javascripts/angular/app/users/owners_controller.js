(function () {
  angular
  .module('app.users')
  .controller('OwnersController', OwnersController);

  OwnersController.$inject = ['$routeParams' ,'UserFactory', 'DogFactory'];

  function OwnersController ($routeParams, UserFactory, DogFactory) {
    $('#landingPage').hide();
    var vm = this;
    var ID = $routeParams.user_id;
    var spot;

    UserFactory.query(function(data) {
      data.forEach(function (item) {
        if (parseInt(ID) === item.id) {
          vm.user = item;
        }
      })
    })

    DogFactory.query(function (data) {
      data.forEach(function (dog) {
        if (ID === dog.user_id) {
          vm.usersDog = dog;
          console.log(vm.usersDog);
        }
      })
    })
  }
})();
