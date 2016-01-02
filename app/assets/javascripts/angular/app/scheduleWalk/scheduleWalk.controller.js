(function() {
  angular
  .module('app.scheduleWalk')
  .controller('ScheduleWalkController', ScheduleWalkController);

  ScheduleWalkController.$inject = ['$routeParams', 'UserFactory', 'DogFactory', 'AppointmentFactory'];

  function ScheduleWalkController($routeParams, UserFactory, DogFactory, AppointmentFactory) {
    var vm = this;
    // hide the main page
    $('#landingPage').hide();
    //TODO: hide the buttons if they aren't needed.
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
    // if (vm.walk.walk_dateTime) {
    //   vm.walk.walk_dateTime = vm.walk.walk_dateTime.toDateString() + ' ' + vm.walk.walk_dateTime.toLocaleTimeString();
    // }
    // vm.when === 'now' ? vm.newWalk.walk_dateTime = new Date() : console.log('later');
    //update them
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
      AppointmentFactory.update({id: vm.newWalk.id}, vm.newWalk).$promise.then(function(data) {
        console.log('data is: ', data);
        vm.currentWalk = data.id;
      })
      $('#ownerCfm').hide();
    }
    //button the walker presses when the walker confirms the appointment
    vm.walkerConfirm = function() {
      if (!vm.currentWalk) {
        $('#walkerCfm').attr('class', 'btn btn-danger').text('Walk not completed by owner');
      } else {
        AppointmentFactory.query(function(details) {
          details.forEach(function(apt) {
            if (apt.id === vm.currentWalk) {
              apt.walkerConfirm = true;
              AppointmentFactory.update({id: apt.id}, apt).$promise.then(function(data) {
                console.log('yes? ', data);
              })
            }
          })
        })
        $('#walkerCfm').attr('disabled', 'disabled');
      }
    }
    // walker presses the button when the dog is returned
    vm.dogReturned = function() {
      if (!vm.currentWalk) {
        $('#dogReturn').attr('class', 'btn btn-danger').text('Walk not completed by walker');
      } else {
        AppointmentFactory.query(function(details) {
          details.forEach(function(apt) {
            if (apt.id === vm.currentWalk) {
              apt.dogReturnedConfirm = true;
              AppointmentFactory.update({id: apt.id}, apt).$promise.then(function(data) {
                console.log('yes? ', data);
              })
            }
          })
        })
      }
      $('#dogReturn').attr('disabled', 'disabled');
    }
  }
})();
