(function () {
  angular
  .module('app.scheduleWalk')
  .controller('WalkController', WalkController);

  WalkController.$inject = ['$routeParams', 'AppointmentFactory', 'UserFactory', 'DogFactory', 'AddPicFactory', '$http'];

  function WalkController ($routeParams, AppointmentFactory, UserFactory, DogFactory, AddPicFactory, $http) {
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
      // first will always be active to get to the site
      $('#step1').attr('class', 'text-default');
      var headers = ['#step2', '#step3', '#step4', '#step5',];
      // if the walk is canceled, diabled all progress steps
      if (apt.walkerConfirm === false) {
        headers.forEach(function (step) {
          $(step).attr('class', 'text-canceled');
        });
      $('#step6').attr('class', 'text-canceled');  
      $('#pays').attr('disabled', 'disabled');
      $('#walkerCfm').attr('disabled', 'disabled');
      $('#dogReturn').attr('disabled', 'disabled');
      $('#walkerDny').attr('disabled', 'disabled');
      // if the payment is processed, all other steps are done
      } else if ( apt.paymentSubmitted ) {
        $('#pays').attr('disabled', 'disabled');
        $('#walkerCfm').attr('disabled', 'disabled');
        $('#dogReturn').attr('disabled', 'disabled');
        $('#walkerDny').attr('disabled', 'disabled');
        headers.forEach(function (step) {
          $(step).attr('class', 'text-default');
        });
      } else if ( apt.dogReturnedConfirm ) {
        $('#walkerCfm').attr('disabled', 'disabled');
        $('#dogReturn').attr('disabled', 'disabled');
        $('#walkerDny').attr('disabled', 'disabled');
        headers.forEach(function(step) {
          $(step).attr('class', 'text-default');
        });
      } else if ( apt.walkerConfirm ) {
        $(headers[0]).attr('class', 'text-default');
        $('#walkerCfm').attr('disabled', 'disabled');
        $('#walkerDny').attr('disabled', 'disabled');
      } else {
        console.log('error!');
      }
    }

    // if the walker confirms the appointment, send the text to owner
    vm.walkerConfirm = function() {
      vm.walk.walkerConfirm = true;
      AppointmentFactory.update({id: walkID}, vm.walk).$promise.then(function() {
        console.log('yes');
      });
      vm.sendConfirmWalk(walkID);
      $('#step2').attr('class', 'text-default');
      $('#walkerCfm').attr('disabled', 'disabled');
      $('#walkerDny').attr('disabled', 'disabled');
    };

    // if the walker denys the walk, send the text to the owner
    vm.walkerDeny = function () {
      vm.walk.walkerConfirm = false;
      AppointmentFactory.update({id: walkID}, vm.walk).$promise.then(function() {
        console.log('yes');
      });
      vm.sendDenyWalk(walkID);
      headers.forEach(function(step) {
        $(step).attr('class', 'text-canceled');
      });
      $('#walkerCfm').attr('disabled', 'disabled');
      $('#dogReturn').attr('disabled', 'disabled');
      $('#pays').attr('disabled', 'disabled');
    };

    // when the dog is returned
    vm.dogReturned = function() {
      if (vm.walk.walkerConfirm == false) {
        $('#dogReturned').attr('class', 'btn-danger').text('Walk not confirmed');
      }
        vm.walk.dogReturnedConfirm = true;
        AppointmentFactory.update({id: walkID}, vm.walk).$promise.then(function() {
          console.log('yes');
        });
      $('#step3').attr('class', 'text-default');
      $('#step4').attr('class', 'text-default');
      $('#dogReturn').attr('disabled', 'disabled');
    };

    // payment
    vm.paymentSubmit = function() {
      if (!vm.walk.dogReturnedConfirm == false) {
        $('#pays').attr('class', 'btn-danger').text('Dog not returned');
      }
        vm.walk.paymentSubmitted = true;
        AppointmentFactory.update({id: walkID}, vm.walk).$promise.then(function(data) {
          console.log('yes!', data);
        });
        $('#step5').attr('class', 'text-default');
      $('#pays').attr('disabled', 'disabled');
    };

    // functions to send text messages
    vm.sendConfirmWalk = function (id) {
      var params = 'id=' + id;
      $http.post('notifications/notify', params).then(function(res) {
        console.log('success, ', res);
      });
    };
    vm.sendDenyWalk = function (id) {
      var params = 'id=' + id;
      $http.post('notifications/deny', params).then(function(res) {
        console.log('success, ', res);
      });
    };
  }
})();
