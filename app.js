(function(){
  var app = angular.module('recipe-box', []);

  app.controller('RecipeController', function() {
    this.recipes = recipes;
  });

  var recipes = [{
    name: 'Soup',
    description: 'A light soup with lots of flavor',
    ingredients: [
      "Chicken Stock",
      "Rosemary",
      "White Beans"
    ],
    reviews: [{
      stars: 5,
      body: "Tasty meal that you can store in mason jars",
      author: "alex@gmail.com",
      createdOn: 1432229390407
    }],
    image: "http://1.bp.blogspot.com/-fySnQSbbqM0/Tnp9cuNKlFI/AAAAAAAAA5M/BdA6jRsC8Go/s1600/DSC_2565.JPG"
  }];
})();
