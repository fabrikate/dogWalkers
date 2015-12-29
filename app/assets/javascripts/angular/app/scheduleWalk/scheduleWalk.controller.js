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
      amountPayment: 10.00
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
    //update them
    vm.ownerConfirm = function() {
      vm.newWalk = new AppointmentFactory;
      vm.newWalk = vm.walk;
      AppointmentFactory.save(vm.newWalk).$promise.then(function(data) {
        console.log('data is: ', data);
        vm.currentWalk = data.id;
        console.log(vm.currentWalk)
      })
    }
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
      }
    }
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
    }
  }
})();
