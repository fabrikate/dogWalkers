(function () {
  angular
  .module('app.users')
  .controller('OwnersController', OwnersController);

  OwnersController.$inject = ['$routeParams' ,'UserFactory', 'DogFactory', '$http', 'AddPicFactory', 'AppointmentFactory'];

  function OwnersController ($routeParams, UserFactory, DogFactory, $http, AddPicFactory, AppointmentFactory) {
    $('#landingPage').hide();
    var vm = this;
    var ID = $routeParams.user_id;
    vm.usersPic = [];
    vm.dogsPic = [];
    vm.usersWalks = [];

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
          vm.dogsPic.push(vm.usersDog.pictureURL)
        }
      })
    })

    AddPicFactory.query(function (data) {
      data.forEach(function (pic) {
        if (pic.user_id && parseInt(ID) === pic.user_id) {
          vm.usersPic.push( pic );
          vm.user.additionalPics.push(pic.additionalURL);
        }
        if (pic.dog_id && vm.usersDog.id === pic.dog_id) {
          vm.dogsPic.push( pic.additionalURL );

        }
      })
    })
    //create an array only for dates that can be organized
    vm.dates = [];
    //show all past walks that are in progress / complete
    AppointmentFactory.query(function(walks) {
      walks.forEach(function(walk) {
        if (walk.owner_id === parseInt(ID) && walk.walkerConfirm) {
          vm.usersWalks.push(walk);
          vm.dates.push(walk.created_at);
        }
      })
      vm.dates = vm.dates.sort();
    })

  }
})();
