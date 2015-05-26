var app = angular.module('recipe-directives', []);

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
