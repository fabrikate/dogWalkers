(function() {
  angular
  .module('app.users')
  .factory('ScheduleFactory', ScheduleFactory);

  function ScheduleFactory() {
    function Details (name, location, time, is_confirmed) {
      this.name = name;
      this.location = location;
      this.time = time;
      this.is_confirmed = false;
    }
    return Details; 
  }

})();
