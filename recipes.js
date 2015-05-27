var app = angular.module('recipe-directives', []);

app.directive('descriptions', function() {
  return {
    restrict: 'E',
    templateUrl: "descriptions.html"
  }
});

app.directive('ingredients', function() {
  return {
    restrict: 'E',
    templateUrl: "ingredients.html"
  }
});

app.directive('reviews', function() {
  return {
    restrict: 'E',
    templateUrl: "reviews.html"
  }
})

app.directive('recipePanel', function(){
  return {
    restrict: 'E',
    templateUrl: 'recipe-panel.html',
    controller: function(){
      this.tab = 1;

      this.selectTab = function(setTab) {
        this.tab = setTab;
      };

      this.isSelected = function(checkTab) {
        return this.tab === checkTab;
      };
    },
    controllerAs: 'panel'
  };
});
