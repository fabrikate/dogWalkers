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
      console.log('vm.user is: ', vm.user);
    })
    vm.user = {
      location: vm.locationSt + vm.locationZip,
      name: '',
      dog_owner: '',
      dog_walker: '',
      email: '',
      phoneNum: ''
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
    // information pushed to the database needs to mirror the database structure
    vm.updateUser = function () {
      vm.userType === 'owner' ? vm.user.dog_owner = true : vm.user.dog_walker = true;
      vm.updatedUser = new UserFactory();
      vm.user = vm.updatedUser
      UserFactory.save(vm.updatedUser).$promise.then(function(data) {
        console.log(data);
      })
    }
  }
  // TODO: open up what params are permitted.

})();
