(function(){

  var app = angular.module('virtualCookbook', ['recipe-directives']);

  app.controller('CookbookController', function() {
    this.recipes = recipes;
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(recipe) {
      this.review.createdOn = Date.now();
      recipe.reviews.push(this.review);
      this.review = {};
    };
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  var recipes = [{
    name: 'Soup',
    price: 15,
    description: 'A heafty soup packed with flavor.  Chicken is initially cooked in olive oil after being seasoned with salt, pepper, and fresh rosemary.  Chicken is then added to pot of potatoes and vegetables.',
    ingredients: [
      "Chicken Stock",
      "Rosemary",
      "White Beans"
    ],
    reviews: [
      {
      stars: 5,
      body: "Tasty meal that you can store in mason jars.",
      author: "alex@gmail.com",
      createdOn: 1432229390407
      },
      {
      stars: 4,
      body: "Delicious though I prefer to add a little more spice.",
      author: "joe@gmail.com",
      createdOn: 1432406711718
      }
    ],
    image: "http://1.bp.blogspot.com/-fySnQSbbqM0/Tnp9cuNKlFI/AAAAAAAAA5M/BdA6jRsC8Go/s1600/DSC_2565.JPG"
    },
    {
     name: 'Chili',
     price: 16,
     description: 'A hearty chili that is perfect for any occasion.  This chili features a variety of beans and can be topped with cheddar cheese, fresh onions, and crackers.',
     ingredients: [
       "Beef",
       "White Beans",
       "Kidney Beans",
       "Garlic",
       "Onion"
     ],
     reviews: [{
       stars: 5,
       body: "Delicious chili straight from Momma's recipe",
       author: "alex@gmail.com",
       createdOn: 1432320624109
     }],
     image: "http://www.seriouseats.com/images/20120126-vegan-chili-1.jpg"
  }];
})();
