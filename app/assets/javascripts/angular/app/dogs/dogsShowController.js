(function () {
  angular
  .module('app.dogs')
  .controller('DogShowController', DogShowController)

  DogShowController.$inject = ['DogFactory', '$routeParams', 'UserFactory'];

  function DogShowController(DogFactory, $routeParams, UserFactory) {
    $('#landingPage').hide();
    var vm = this;
    var ID;

    vm.dog = DogFactory.get({id: $routeParams.id}, function(data) {
      ID = parseInt(vm.dog.user_id)
      vm.user = UserFactory.query(function(info) {
        info.forEach(function(user){
          if (user.id === ID) {
            vm.dogUser = user;
          }
        })
        console.log(vm.dogUser);
      })
    })

  }
})();
