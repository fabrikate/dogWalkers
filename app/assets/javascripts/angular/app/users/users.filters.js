(function () {
  angular
  .module('app.users')
  .filter('zip2neighborhood', zip2neighborhood);

  function zip2neighborhood () {
    return function (zip) {
      var neighborhoods = {
        98003 : "Federal Way"  ,
        98005 : "Bellevue" ,
        98033 : "Kirkland" ,
        98037 : "Lynnwood" ,
        98040 : "Mercer Island" ,
        98052 : "Redmond" ,
        98055 : "Renton" ,
        98101 : "Downtown" ,
        98102 : "Capitol Hill" ,
        98103 : "Freemont / Greenlake" ,
        98104 : "International District / Pioneer Square" ,
        98105 : "University District" ,
        98117 : "Ballard" ,
        98107 : "Ballard" ,
        98108 : "Beacon Hill" ,
        98109 : "South Lake Union / Queen Anne" ,
        98110 : "Madrona" ,
        98116 : "West Seattle / Alki Beach" ,
        98118 : "Columbia City" ,
        98121 : "Belltown" ,
        98125 : "Northgate" ,
        98144 : "Mount Baker" ,
        98199 : "Magnolia" ,
        98112 : "Madison Park",
        98115 : "Wedgwood / Roosevelt"
      };
      if (zip) {
        return neighborhoods[zip];
      };
    }
  }
})();
