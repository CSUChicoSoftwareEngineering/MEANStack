var TheControllers = angular.module('TheControllers', []);

TheControllers.controller('RecipeController', ['$scope', '$http', function($scope, $http) {
 $scope.query_result = [
  { 
    name: "steak"
  },
  { 
    name: "eggs"
  },
  {
    name: "buttermilk"
  },
  {
    name: "flour"
  },
  {
    name:"vegetable oil"
  },
  {
    name:"garlic"
  },
  {
    name:"cognac"
  },
  {
    name:"cumin seed"
  },
  {
    name:"pizza"
  }
]
$scope.chosen_ingredients=[]
$scope.recipes=[]

$scope.switchAndDisplay = function(name, container, index){
    container.splice(index,1);
     $scope.chosen_ingredients.push(name);
     $scope.recipes.length = 0;
     $scope.displayRecipes();
}
$scope.remove = function(container, index){
    container.splice(index,1);
    //remove all recipes because we have no ingredients chosen or we have removen an ingredient and we need to empty the recipe array to render a new recipe array later
   if($scope.chosen_ingredients.length == 0 || container != $scope.recipes) 
     $scope.recipes.length = 0;

   //if we arent removing a recipe, display the new recipe list
   if (container != $scope.recipes) { 
     $scope.displayRecipes();
   }
}
$scope.removeAll = function(container){
    var index = 0;
    container.forEach(function(element){
      container.splice(index,1);
    });
}
$scope.displayRecipes = function() {
  //if there are chosen ingredients present, execute the api call
  if ($scope.chosen_ingredients.length) {
      var http = 'http://api.yummly.com/v1/api/recipes?_app_id=885488fb&_app_key=453ae9fd4d29a72598c6368d9734d3fa'
      $scope.chosen_ingredients.forEach(function(element){
        http += '&allowedIngredient[]='+element.name
      });
      $http.get(http, {'dataType': 'jsonp'})
        .success(function(data) {
          data.matches.forEach(function(recipe){
            $scope.recipes.push({name:recipe.recipeName});
        });
          console.log(data);
      })
      .error(function(data) {
        console.log('Error');
      });
    }
  }
}]);

TheControllers.controller('LandingController', ['$scope', function($scope) {
  $scope.name = "Tester";
  $scope.testFunction = function() {
    $scope.greeting = "Hello " + $scope.name;
  }
}]);

TheControllers.controller('AboutController', ['$scope', function($scope, $http) {
  $scope.names=["Name 1, Name 2, Name3"];
}]);