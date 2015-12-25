(function () {
  angular
  .module('app.users')
  .controller('UsersController', UsersController);

  UsersController.$inject = ['$routeParams', 'UserFactory', 'DogFactory', '$http'];

  function UsersController($routeParams, UserFactory, DogFactory, $http) {
    // hide the main page
    $('#landingPage').hide();
    var vm = this;
    var spot;
    // get users from the db, assign them to an object to display in dogWalker Search
    var Users = UserFactory.query(function (data) {
      vm.allWalkers = [];
      data.forEach(function(item){
        vm.dogWalkers = {
          id: item.id,
          name: item.name,
          profileURL: item.profileURL,
          streetAddress: item.streetAddress,
          zipCode: item.zipCode,
          email: item.email,
          rating: '',
          dog_walker: item.dog_walker,
          dogWalkerRating: item.dogWalkerRating,
          // additionalPics: item.additionalPics
        }
        // push all users to a dog walker array that will be displayed if they are a dog walker
        vm.allWalkers.push(angular.copy(vm.dogWalkers));
        vm.dogWalkers = {
          id: '',
          name: '',
          profileURL: '',
          streetAddress: '',
          zipCode: '',
          email: '',
          rating: '',
          dog_walker: '',
          dogWalkerRating: 0,
          // additionalPics: []
        }
        vm.user.additionalPics.push(angular.copy(vm.addPic))
        // display user information only when the $routeParams and user id match
        if (parseInt($routeParams.user_id) === item.id) {
          spot = item;
          vm.user = data[data.indexOf(spot)]
          console.log('vm.user is: ', vm.user);
        }
      })
    })
    // query dog database to update / create dog
    DogFactory.query(function (data) {
      data.forEach(function (dog) {
        if ($routeParams.user_id === dog.user_id) {
          vm.dogInfo = {
            id: dog.id,
            name: dog.name,
            age: dog.age,
            weight: dog.weight,
            aggression: dog.aggression,
            confidence: dog.confidence,
            pictureURL: dog.pictureURL,
            user_id: dog.user_id,
            additionalPics: dog.additiionalPics
          }
        }
      })

    })
    // update the user to the database
    // information pushed to the database needs to mirror the database structure
    vm.updateUser = function () {
      vm.userType === 'owner' ? vm.user.dog_owner = true : vm.user.dog_walker = true;
      UserFactory.update({id: vm.user.id }, vm.user).$promise.then(function(data) {
          console.log('yes! ', data);
        })
      DogFactory.update({id: vm.dogInfo.id}, vm.dogInfo).$promise.then(function(data) {
        console.log('yes dogs! ', data);
      })
    }
    // send post request asking for appointment
    vm.sendWalkRequest = function () {
      $http.post('/notifications/notify', 'foo=bar').then(function(res) {
        console.log('success, ', res);
      })
    }
  }

})();
