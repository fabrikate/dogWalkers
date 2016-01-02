(function() {
  angular
  .module('app.users')
  .controller('WalkerController', WalkerController)

  WalkerController.$inject = ['$routeParams', 'UserFactory', 'AddPicFactory', 'AppointmentFactory'];

  function WalkerController ($routeParams, UserFactory, AddPicFactory, AppointmentFactory) {
    var vm = this;
    // hide the landing page
    $('#landingPage').hide();
    vm.pictures = [];
    vm.walks = [];
    var ID = parseInt($routeParams.user_id);

    //get the dog Walker information
    UserFactory.get({id: ID}, function(data) {
      vm.pictures.push(data.profileURL);
      vm.walker = data;
    })
    //get additional pictures of the walker
    AddPicFactory.query(function(pictures) {
      pictures.forEach(function(pic) {
        if (pic.user_id === ID) {
          vm.pictures.push(pic.additionalURL)
        }
      })
    })
    //get the walk history of the walker
    AppointmentFactory.query(function(data) {
      data.forEach(function(walk) {
        if (walk.walker_id === ID) {
          vm.walks.push(walk);
        }
      })
    })
    vm.upVote = function () {
      $('#upVote').attr('disabled', 'disabled');
      vm.walker.dogWalkerRating = vm.walker.dogWalkerRating + 0.5 / 2;
      if (vm.walker.dogWalkerRating > 5) {
        vm.walker.dogWalkerRating = 5;
      }
      UserFactory.update({id: ID}, vm.walker).$promise.then(function (data) {
        console.log(data);
      })
    }
    vm.downVote = function () {
      $('#downVote').attr('disabled', 'disabled');
      vm.walker.dogWalkerRating = vm.walker.dogWalkerRating - 0.5 / 2;
      if (vm.walker.dogWalkerRating < 0) {
        vm.walker.dogWalkerRating = 0.1;
      }
      UserFactory.update({id: ID}, vm.walker).$promise.then(function (data) {
        console.log(data);
      })
    }
  }
})();
