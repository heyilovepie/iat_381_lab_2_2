var myapp = angular.module('myapp', []);

myapp.controller('MyController', function ($scope) {
  $scope.sounds = [
    { name: 'Light', description: 'http://www.freesound.org/people/hanstimm/sounds/9164/' },
    { name: 'Machine', description: 'http://www.freesound.org/people/harri/sounds/9207/' },
    { name: 'Glass', description: 'http://www.freesound.org/people/harri/sounds/9209/' },
    { name: 'Machine', description: 'http://www.freesound.org/people/UATaudio/sounds/31155/' },
    { name: 'Squeek', description: 'http://www.freesound.org/people/johnnypanic/sounds/34567/' },
    { name: 'Glass', description: 'http://www.freesound.org/people/juskiddink/sounds/62055/' },
    { name: 'Machine', description: 'http://www.freesound.org/people/suoitnop/sounds/66262/' },
    { name: 'Light', description: 'http://www.freesound.org/people/JoelAudio/sounds/77691/' },
    { name: 'Machine', description: 'http://www.freesound.org/people/Robinhood76/sounds/103635/' },
    { name: 'Door', description: 'http://www.freesound.org/people/joedeshon/sounds/117416/' }
  ];
});