(function () {
  angular
  .module('app.scheduleWalk')
  .controller('WalkController', WalkController);

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
      vm.dog = DogFactory.get({id: vm.dogID});
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
        $('#walkerCfm').attr('disabled', 'disabled');
        $('#dogReturn').attr('disabled', 'disabled');
      } else if ( apt.walkerConfirm ) {
        for ( var i = 0; i < 2; i++ ) {
          $(headers[i]).attr('class', 'text-default');
        }
        $('#walkerCfm').attr('disabled', 'disabled');
      } else if ( apt.ownerRequested ) {
        $('#step1').attr('class', 'text-default');
      } else {
        console.log('error!');
      }
    }
    vm.walkerConfirm = function() {
      vm.walk.walkerConfirm = true;
      AppointmentFactory.update({id: walkID}, vm.walk).$promise.then(function() {
        console.log('yes');
      })
        $('#walkerCfm').attr('disabled', 'disabled');
    };
    vm.dogReturned = function() {
        vm.walk.dogReturnedConfirm = true;
        AppointmentFactory.update({id: walkID}, vm.walk).$promise.then(function() {
          console.log('yes');
        })
      $('#dogReturn').attr('disabled', 'disabled');
    };
    vm.paymentSubmit = function() {
        vm.walk.paymentSubmitted = true;
        AppointmentFactory.update({id: walkID}, vm.walk).$promise.then(function(data) {
          console.log('yes!', data);
        });
      $('#pays').attr('disabled', 'disabled');
    };
  }
})();
