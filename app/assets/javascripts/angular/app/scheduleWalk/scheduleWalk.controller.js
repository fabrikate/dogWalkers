(function() {
  angular
  .module('app.scheduleWalk')
  .controller('ScheduleWalkController', ScheduleWalkController);

  ScheduleWalkController.$inject = ['$routeParams', 'UserFactory', 'DogFactory', 'AppointmentFactory'];

  function ScheduleWalkController($routeParams, UserFactory, DogFactory, AppointmentFactory) {
    var vm = this;
    // hide the main page
    $('#landingPage').hide();
    //Get the current User
    vm.ownersPics = [];
    UserFactory.get({id: $routeParams.user_id}, function(user) {
      vm.user = user;
    })
    UserFactory.get({id: $routeParams.walker_id}, function(walker) {
      vm.walker = walker;
    })

    DogFactory.query(function(dogs) {
      dogs.forEach(function(dog) {
        if(dog.user_id === $routeParams.user_id) {
          vm.dog = dog;
        }
      })
    })

    AppointmentFactory.query(function(data) {
      console.log(data);
    })
  }
})();
