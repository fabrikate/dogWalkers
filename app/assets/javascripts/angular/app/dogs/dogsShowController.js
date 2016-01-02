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
      })
    })
    vm.upVote = function (type) {
      var btn = '.' + type;
      $(btn).attr('disabled', 'disabled');
      vm.dog[type] = (Number(vm.dog[type]) + 0.5 + Number(vm.dog[type])) /2;
      DogFactory.update({id: $routeParams.id}, vm.dog).$promise.then(function (data) {
        console.log(data)
      })
    }
    vm.downVote = function (type) {
      var btn = '.' + type;
      $(btn).attr('disabled', 'disabled');
      vm.dog[type] = (Number(vm.dog[type]) - 0.5 + Number(vm.dog[type])) /2;
      DogFactory.update({id: $routeParams.id}, vm.dog).$promise.then(function (data) {
        console.log(data)
      })
    }
  }
})();
