(function () {
  angular
  .module('app.users')
  .filter('telephone', telephone);

  function telephone() {
    return function(phone) {
      var first = phone.slice(0,3);
      var middle = phone.slice(3, 6);
      var end = phone.slice(6, 10);
      var tel = '(' + first + ')' + middle + '-' + end;
      if (phone) {
        return tel;
      }
    }
  }
})();
