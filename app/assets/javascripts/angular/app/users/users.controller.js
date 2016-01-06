(function () {
  angular
  .module('app.users')
  .controller('UsersController', UsersController);

  UsersController.$inject = ['$routeParams', 'UserFactory', 'DogFactory', '$http', 'AddPicFactory'];

  function UsersController($routeParams, UserFactory, DogFactory, $http, AddPicFactory) {
    // hide the main page
    $('#landingPage').hide();
    var vm = this;
    var spot;
    vm.current_user = $routeParams.user_id
    // get users from the db, assign them to an object to display in dogWalker Search
    var Users = UserFactory.query(function (data) {
      vm.allWalkers = [];
      data.forEach(function(item){
        if (item.dog_walker && !item.doNotDisturb) {
          vm.dogWalkers = {
            id: item.id,
            name: item.name,
            profileURL: item.profileURL,
            streetAddress: item.streetAddress,
            zipCode: item.zipCode,
            email: item.email,
            rating: '',
            dog_walker: item.dog_walker,
            dogWalkerRating: item.dogWalkerRating
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
            dogWalkerRating: 0
          }
        }
        // display user information only when the $routeParams and user id match
        if (parseInt($routeParams.user_id) === item.id) {
          spot = item;
          vm.user = data[data.indexOf(spot)]
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
            user_id: dog.user_id
          }
        }
      })

    })
    // update the user to the database
    vm.updateUser = function () {
      vm.userType === 'owner' ? vm.user.dog_owner = true : vm.user.dog_walker = true;
      vm.doNotDisturb === 'true' ? vm.user.doNotDisturb = true : vm.user.doNotDisturb = false;
      UserFactory.update({id: vm.user.id }, vm.user).$promise.then(function(data) {
          console.log('yes! ', data);
        });
      if (vm.dogInfo.id) {
        DogFactory.update({id: vm.dogInfo.id}, vm.dogInfo).$promise.then(function(data) {
        });
      } else {
        console.log('routep: ', $routeParams)
        vm.newDog = new DogFactory();
        vm.newDog = vm.dogInfo;
        vm.newDog.user_id = vm.user.id;
        vm.newDog.$save();
      }
      if (vm.addPic) {
        vm.newPic = new AddPicFactory();
        vm.newPic.user_id = vm.user.id;
        vm.newPic.additionalURL = vm.addPic;
        AddPicFactory.save(vm.newPic, function() {
          console.log('yes? ', vm.newPic);
        })
      }
    }
  }

})();
