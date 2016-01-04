(function() {
  angular
  .module('app.scheduleWalk')
  .controller('ScheduleWalkController', ScheduleWalkController);

  ScheduleWalkController.$inject = ['$routeParams', 'UserFactory', 'DogFactory', 'AppointmentFactory'];

  function ScheduleWalkController($routeParams, UserFactory, DogFactory, AppointmentFactory) {
    var vm = this;
    // hide the main page
    $('#landingPage').hide();

    // object that resembles appointment DB
    vm.walk = {
      owner_id: '',
      dog_id: '',
      walker_id: '',
      meet_at: '',
      created_at: new Date(),
      amountPayment: 10.00,
      walk_dateTime: ''
    }
    //Get the current User
    vm.ownersPics = [];
    UserFactory.get({id: $routeParams.user_id}, function(user) {
      vm.user = user;
      vm.walk.owner_id = vm.user.id;
      vm.walk.meet_at= vm.user.streetAddress;
    })
    // get the walker
    UserFactory.get({id: $routeParams.walker_id}, function(walker) {
      vm.walker = walker;
      vm.walk.walker_id = vm.walker.id;
    })
    //get the dog
    DogFactory.query(function(dogs) {
      dogs.forEach(function(dog) {
        if(dog.user_id === $routeParams.user_id) {
          vm.dog = dog;
          vm.walk.dog_id = dog.id;
        }
      })
    })
    vm.ownerConfirm = function() {
      $('#ownerCfm').attr('disabled', 'disabled');
      if (vm.when === 'now') {
        vm.walk.walk_dateTime = vm.walk.created_at;
      } else if (vm.when === 'later') {
        vm.walk.walk_dateTime = vm.walk.walk_dateTime.toDateString() + ' ' + vm.walk.walk_dateTime.toLocaleTimeString();
        console.log(vm.walk.walk_dateTime);
        console.log(typeof vm.walk.walk_dateTime)
      }
      vm.newWalk = new AppointmentFactory;
      vm.newWalk = vm.walk;
      vm.newWalk.ownerRequested = true;
      console.log(vm.newWalk)
      AppointmentFactory.save({id: vm.newWalk.id}, vm.newWalk).$promise.then(function(data) {
        console.log('data is: ', data);
        vm.currentWalk = data.id;
        vm.sendRequestWalk(vm.currentWalk);
      })
    }
    // function that send a post request that trigger twilio text messages
    vm.sendRequestWalk = function (id) {
      var params = 'id=' + id;
      $http.post('/notifications/notify', params).then(function(res) {
        console.log('success, ', res);
      })
    }
  }
})();
