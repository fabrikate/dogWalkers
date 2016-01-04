(function () {
  angular
  .module('app.scheduleWalk')
  .controller('WalkController', WalkController)

  WalkController.$inject = ['$routeParams', 'AppointmentFactory', 'UserFactory', 'DogFactory'];

  function WalkController ($routeParams, AppointmentFactory, UserFactory, DogFactory) {
    var vm = this;
    $('#landingPage').hide();
    var userID = $routeParams.user_id;
    var walkerID = $routeParams.walker_id;
    var walkID = $routeParams.walk_id;

    //variables to store walk information
    vm.walk = AppointmentFactory.get({id: walkID}, function () {
      vm.dogID = vm.walk.dog_id;
      vm.dog = DogFactory.get({id: vm.dogID})
      progressBar(vm.walk);
    });
    vm.owner = UserFactory.get({id: userID});
    vm.walker = UserFactory.get({id: walkerID});
    //function to show where the progress is in the walk appointment
    function progressBar(apt) {
      var headers = ['#step1', '#step2', '#step3', '#step4', '#step5'];
      if ( apt.dogReturnedConfirm ) {
        headers.forEach(function(step) {
          $(step).attr('class', 'text-default');
        });
      } else if ( apt.walkerConfirm ) {
        for ( var i = 0; i < 2; i++ ) {
          $(headers[i]).attr('class', 'text-default');
        }
      } else if ( apt.ownerRequested ) {
        $('#step1').attr('class', 'text-default');
      } else {
        console.log('error!');
      }
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
        $('#walkerCfm').attr('disabled', 'disabled');
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
      $('#dogReturn').attr('disabled', 'disabled');
    }
  }
})();
