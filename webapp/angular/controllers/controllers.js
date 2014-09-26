var TheControllers = angular.module('TheControllers', []);

TheControllers.controller('RecipeController', ['$scope', '$http', function($scope, $http) {
 $scope.query_result = [
  {
    name:"Pizza",
  },
  {
    name:"Bacon",
  },
  {
    name:"Beef",
  },
  {
    name:"Broccili",
  },
  {
    name:"Pork",
  },
  {
    name:"Pizza",
  },
  {
    name:"Bacon",
  },
  {
    name:"Beef",
  },
  {
    name:"Broccili",
  },
  {
    name:"Pork",
  }
]

// $scope.chosen_ingredients=[]
$scope.chosen_ingredients=[
  {
    name:"Cake"
  }
]
$scope.recipes=[
  {
    name:"Roast Beef Sandwhich"
  }
]

$scope.removeIngredientAndAdd = function(name, container, index){
    container.splice(index,1);
    // $scope.push($scope.chosen_ingredients[index]);
    // console.log("asdasd");
     $scope.chosen_ingredients.push(name);
     // console.log($scope.chosen_ingredients);
     // console.log("Asdasd");
}
$scope.removeIngredient = function(container, index){
    container.splice(index,1);
}
//app id 885488fb
//app key 453ae9fd4d29a72598c6368d9734d3fa
//need to use factory http://tylermcginnis.com/angularjs-factory-vs-service-vs-provider/
//stack overflow answer to api yummly call http://stackoverflow.com/questions/13464619/how-do-i-interpret-json-if-jquery-thinks-it-is-receiving-a-jsonp-request
$scope.displayRecipes = function() {
    $http.get('http://api.yummly.com/v1/api/recipe/Avocado-cream-pasta-sauce-recipe-306039?_app_id=885488fb&_app_key=453ae9fd4d29a72598c6368d9734d3fa'
    //   , {
    //   'name' : $scope.formName, 
    //   'author' : $scope.formAuthor, 
    //   'quote' : $scope.formQuote
    // })
    )
    .success(function(data) {
      // $scope.quotes = data;
      // $scope.formAuthor = ''; // clear the form so our user is ready to enter another
      // $scope.formName = ''; // clear the form so our user is ready to enter another
      // $scope.formQuote = ''; // clear the form so our user is ready to enter another
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
  }
//   ;
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
