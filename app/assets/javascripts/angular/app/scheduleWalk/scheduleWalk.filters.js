(function () {
  angular
  .module('app.scheduleWalk')
  .filter('dogAge', dogAge);

  function dogAge () {
    return function (age) {
      var years;
      age > 1 ? years = age + ' years' : years = age + ' year';
      return years;
    }
  }
})();
