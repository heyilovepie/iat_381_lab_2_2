var myapp = angular.module('myapp', []);

myapp.controller('MyController', function ($scope) {
  $scope.phones = [
    { name: 'Nexus 5', description: 'Something' },
    { name: 'Nexus 6', description: 'Something' },
    { name: 'OnePlus One', description: 'Something' },
    { name: 'iPhone 5', description: 'Something' },
    { name: 'iPhone 6', description: 'Something' }
  ];

  $scope.myCatName = "Splash";
});