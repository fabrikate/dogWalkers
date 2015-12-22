(function () {
  angular
  .module('app.users')
  .controller('OwnersController', OwnersController);

  OwnersController.$inject = ['$routeParams' ,'UserFactory', 'DogFactory', '$http'];

  function OwnersController ($routeParams, UserFactory, DogFactory, $http) {
    $('#landingPage').hide();
    var vm = this;
    var ID = $routeParams.user_id;

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
    // function that send a post request that trigger twilio text messages
    vm.sendConfirmWalk = function () {
      $http.post('/notifications/confirm', 'foo=bar').then(function(res) {
        console.log('success, ', res);
      })
    }
    vm.sendDenyWalk = function () {
      $http.post('notifications/deny', 'foo=bar').then(function(res) {
        console.log('success, ', res);
      })
    }
  }
})();
