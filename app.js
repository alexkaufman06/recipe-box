(function(){
  // Above is a closure in which we wrap our javascript out of good habit

  // Below is a module which is where we write pieces of our application as
  // well as define dependencies [].
  var app = angular.module('virtualCookbook', []);

  // Below is a controller which is how we help get data on to the page.  We
  // can also define our app's behavior by defining functions and values.
  app.controller('CookbookController', function() {
    this.recipes = recipes;
  });

  // Hard coded variable for seed data.  Eventually this should be moved to an
  // actual database.
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
