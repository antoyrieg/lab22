angular.module("lyricApp", [])
.controller("lyricController", function($scope, $http) {
  $scope.getLyric = function() {
      $http.get("/api/random-lyric").then(function(response) {
        console.log(response.data)
        $scope.lyric=response.data;

          // $scope.lyric = response.data;
          // // [Math.floor(Math.random()*8)];
          // console.log(response.data);
        });
        // $scope.lyric = response.data;
    };
});
