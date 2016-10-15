angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.init = function () {
    Links.getAll().then(function(links) {
      $scope.data.links = links;
      console.log('links ', $scope.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  $scope.init();
});





