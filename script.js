var myapp = angular.module("myapp", []);

myapp.controller("MyController", function ($scope) {
  $scope.text = "klnlknlk lkjlkj kljlkjjjjjj";

  $scope.words = new Array();

  $scope.beers = [
  new Beer("first beer", "The first brewery", 9.0,
    ["ale", "pale ale"]),
  new Beer("second beer", "The second brewery", 8.2,
    ["ale", "brown ale"]),
  new Beer("third beer", "The third brewery", 9.5,
    ["ale", "pale ale", "strong pale ale"]),
  new Beer("fourth beer", "The fourth brewery", 5.0,
    ["lagers", "germal lager"])
  ];

  function Beer(name, brewery, percentage, categories)
  {
    this.name = name;
    this.brewery = brewery;
    this.percentage = percentage;
    this.categories = categories;

    function isInCategory(type){
    var isTrue = false;
    for ( var i = 0; i < categories.length; i++){
        var cat = categories[i];
        if(cat === type) isTrue = true;
    }
    if(type == "") isTrue = true;
    return isTrue;
  }
  }
});
