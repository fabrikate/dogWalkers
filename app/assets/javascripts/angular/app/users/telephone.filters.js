(function () {
  angular
  .module('app.users')
  .filter('telephone', telephone);

  function telephone() {
    return function(phone) {
      if (phone) {
      var tel = '(' + phone.slice(0,3) + ')' + phone.slice(3, 6) + '-' + phone.slice(6, 10);
        return tel;
      }
    }
  }
})();
