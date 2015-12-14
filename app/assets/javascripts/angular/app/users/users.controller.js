(function () {

  angular
  .module('app.users')
  .controller('UsersController', UsersController);

  UsersController.$inject = ['$routeParams', 'UserFactory'];

  function UsersController($routeParams, UserFactory) {
    // hide the main page
    $('#landingPage').hide();
    var vm = this;
    // get users from the db
    var Users = UserFactory.query(function (data) {
      vm.user = data["0"]
    })

    // object for user input
    vm.walkerAvailability = {}
    vm.walkerAvailability.SunSta = '';
    vm.walkerAvailability.SunSto = '';
    vm.walkerAvailability.MonSta = '';
    vm.walkerAvailability.MonSto = '';
    vm.walkerAvailability.TueSta = '';
    vm.walkerAvailability.TueSto = '';
    vm.walkerAvailability.WedSta = '';
    vm.walkerAvailability.WedSto = '';
    vm.walkerAvailability.ThuSta = '';
    vm.walkerAvailability.ThuSto = '';
    vm.walkerAvailability.FriSta = '';
    vm.walkerAvailability.FriSto = '';
    vm.walkerAvailability.SatSta = '';
    vm.walkerAvailability.SatSto = '';

    vm.userInfo = {
      locationStreet: '',
      locationCitySA: '',
      locationZip: '',
      email: '',
      userType: ''
    }

    vm.dogInfo = {
      name: '',
      age: '',
      weight: '',
      aggression: '',
      confidence: '',
      pictureUrl: '',
      user_id: $routeParams
    }
    // update the user to the database
    vm.updateUser = function () {
      vm.userInfo.userType === 'owner' ? vm.user.dog_owner = true : vm.user.dog_walker = true;
      console.log(vm.user);
      console.log(vm.userInfo)
      vm.updatedUser = new UserFactory();
      UserFactory.save(vm.updatedUser).$promise.then(function(data) {
        console.log(data);
      })
    }
  }
  // TODO: open up what params are permitted.

})();
