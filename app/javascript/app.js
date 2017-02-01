var myApp = angular.module('demo', [
  'ngPhotoswipe'
]);


myApp.controller('PhotoSwipeCtrl', function ($scope) {
  $scope.title = "PhotoSwipe Demo";

  //Photoswipe Options
  $scope.opts = { index: 0 };
  $scope.showGallery = function (i) {
    if (angular.isDefined(i)) {
      $scope.opts.index = i;
    }
    $scope.open = true;
  };
  $scope.closeGallery = function () {
    $scope.open = false;
  };
  $scope.slides = [
    {
      "src": "http://jsguthrie.com/images/portfolio/graphic-design/wraps/large/01-bp.png",
      "thumbUrl": "http://jsguthrie.com/images/portfolio/graphic-design/wraps/01-bp.png",
      "title": "BP",
      "alt": "BP ATM Wrap",
      "w": 240,
      "h": 636
    },
    {
      "src": "http://jsguthrie.com/images/portfolio/graphic-design/wraps/large/02-acs.png",
      "thumbUrl": "http://jsguthrie.com/images/portfolio/graphic-design/wraps/02-acs.png",
      "title": "American Cancer Society",
      "alt": "American Cancer Society ATM Wrap",
      "w": 240,
      "h": 636
    },
    {
      "src": "http://jsguthrie.com/images/portfolio/graphic-design/wraps/large/03-gc.png",
      "thumbUrl": "http://jsguthrie.com/images/portfolio/graphic-design/wraps/03-gc.png",
      "title": "Golden Corral",
      "alt": "Golden Corral ATM Wrap",
      "w": 240,
      "h": 636
    },
    {
      "src": "http://jsguthrie.com/images/portfolio/graphic-design/wraps/large/04-hd.png",
      "thumbUrl": "http://jsguthrie.com/images/portfolio/graphic-design/wraps/04-hd.png",
      "title": "Harley Davidson",
      "alt": "Harley Davidson ATM Wrap",
      "w": 240,
      "h": 636
    },
    {
      "src": "http://jsguthrie.com/images/portfolio/graphic-design/wraps/large/05-ps.png",
      "thumbUrl": "http://jsguthrie.com/images/portfolio/graphic-design/wraps/05-ps.png",
      "title": "PetSmart",
      "alt": "PetSmart ATM Wrap",
      "w": 240,
      "h": 636
    },
    {
      "src": "http://jsguthrie.com/images/portfolio/graphic-design/wraps/large/06-rt.png",
      "thumbUrl": "http://jsguthrie.com/images/portfolio/graphic-design/wraps/06-rt.png",
      "title": "Ruby Tuesday",
      "alt": "Ruby Tuesday ATM Wrap",
      "w": 240,
      "h": 636
    },
    {
      "src": "http://jsguthrie.com/images/portfolio/graphic-design/wraps/large/07-sb.png",
      "thumbUrl": "http://jsguthrie.com/images/portfolio/graphic-design/wraps/07-sb.png",
      "title": "Starbucks",
      "alt": "Starbucks ATM Wrap",
      "w": 240,
      "h": 636
    },
    {
      "src": "http://jsguthrie.com/images/portfolio/graphic-design/wraps/large/08-wwc.png",
      "thumbUrl": "http://jsguthrie.com/images/portfolio/graphic-design/wraps/08-wwc.png",
      "title": "Wild Wing Cafe",
      "alt": "Wild Wing Cafe ATM Wrap",
      "w": 240,
      "h": 636
    }
  ]
});
