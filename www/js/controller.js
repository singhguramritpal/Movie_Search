
//controller for the tab-dash.html

app.controller('DashCtrl', function($scope, $http) {

	$scope.search = {
   		movie:""
   	}

   $scope.searchMovie = function(){

   	var name = $scope.search.movie;
   	
    $http.get("http://www.omdbapi.com/?s="+name+"&type=movie")
    .then(function(response){ 
      $scope.chats = response.data.Search;
    });
   
   }

});


app.controller('ChatDetailCtrl', function($scope, $http, $stateParams) {

  $http.get("http://www.omdbapi.com/?i="+$stateParams.imbdID+"&plot=full")
    .then(function(response){
      $scope.chat = response.data;
    });

});
