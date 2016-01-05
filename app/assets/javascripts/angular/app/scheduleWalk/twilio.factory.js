(function() {
  angular
  .module('app.scheduleWalk')
  .factory('TwilioFactory', TwilioFactory);

  TwilioFactory.$inject = ['$resource'];

  function TwilioFactory ($resource) {
    return $resource('/notifications/:type', {type: '@type'});
  }
})();
