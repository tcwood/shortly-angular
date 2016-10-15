angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
  
  $scope.link = {};

  
  $scope.addLink = function(url) {
    Links.addOne({url: url});
    $location.path('/links');
  };

  $scope.isDisabled = true;

  $scope.test = 'test';

  $scope.checkUrl = function(url) {
    if (url.match(rValidUrl)) {
      $scope.test = 'valid url ';
      $scope.isDisabled = false;
      // addLink();
      // return false;

    } else {
      $scope.test = 'not valid url';
      $scope.isDisabled = true;
      // return true;
    }
  };
});
