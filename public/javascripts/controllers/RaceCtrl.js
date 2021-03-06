(function() {
  function RaceCtrl ($stateParams, $scope, Races, race) {
    $scope.race = race;
    // console.log($stateParams);
    //
    // $scope.race = Races.get($stateParams.race);
    // console.log($scope.race);

    $scope.addReview = function(){
      if($scope.body === '') {return;}
      Races.addReview(race, {
        body: $scope.body,
        runner: 'user',
        rating: $scope.rating
      }).success(function(review){
        $scope.race.reviews.push(review);
      });
      $scope.body = '';
      $scope.runner = '';
      $scope.rating = '';
    };

  };


  angular
    .module('runReview')
    .controller('RaceCtrl', ['$stateParams', '$scope', 'Races', 'race', RaceCtrl]);

})();
