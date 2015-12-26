(function () {
  angular
  .module('app.users')
  .controller('OwnersController', OwnersController);

  OwnersController.$inject = ['$routeParams' ,'UserFactory', 'DogFactory', '$http', 'AddPicFactory'];

  function OwnersController ($routeParams, UserFactory, DogFactory, $http, AddPicFactory) {
    $('#landingPage').hide();
    var vm = this;
    var ID = $routeParams.user_id;
    photoInterval = 3000;
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
        }
      })
    })
    vm.usersPic = [];
    vm.dogsPic = [];
    AddPicFactory.query(function (data) {
      data.forEach(function (pic) {
        if (pic.user_id && parseInt(ID) === pic.user_id) {
          vm.usersPic.push( pic );
          console.log('users ', vm.usersPic)
        }
        if (pic.dog_id && vm.usersDog.id === pic.dog_id) {
          vm.dogsPic.push( pic );
          console.log('dogs ', vm.dogsPic)
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
