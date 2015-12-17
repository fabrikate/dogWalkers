(function () {
  angular
  .module('app.users')
  .controller('UsersController', UsersController);

  UsersController.$inject = ['$routeParams', 'UserFactory'];

  function UsersController($routeParams, UserFactory) {
    // hide the main page
    $('#landingPage').hide();
    var vm = this;
    var spot;
    // get users from the db, assign them to an object to display in dogWalker Search
    var Users = UserFactory.query(function (data) {
      console.log(data);
      vm.allWalkers = [];
      data.forEach(function(item){
        vm.dogWalkers = {
          id: item.id,
          name: item.name,
          profileURL: item.profileURL,
          zipCode: item.location,
          email: item.email,
          rating: '',
          dog_walker: item.dog_walker,
          dogWalkerRating: item.dogWalkerRating
        }
        vm.allWalkers.push(angular.copy(vm.dogWalkers));
        vm.dogWalkers = {
          id: '',
          name: '',
          profileURL: '',
          zipCode: '',
          email: '',
          rating: '',
          dog_walker: '',
          dogWalkerRating: 0
        }
        // display user information only when the $routeParams and user id match
        parseInt($routeParams.user_id) === item.id ? spot = item : console.log('');
        vm.user = data[data.indexOf(spot)]
      })
    })
    vm.dogWalkers = {
      name: '',
      zipCode: '',
      email: '',
      rating: '',
      dog_walker: ''
    }
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
