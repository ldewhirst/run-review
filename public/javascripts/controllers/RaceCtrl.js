(function() {
  function RaceCtrl ($stateParams, $scope, Races, race) {
    $scope.race = race;
    // console.log($stateParams);
    //
    // $scope.race = Races.get($stateParams.race);
    // console.log($scope.race);

    $scope.addReview = function(){
      if($scope.body === '') {return;}
      $scope.race.reviews.push({
        body: $scope.body,
        runner: 'user',
        rating: 0
      });
      $scope.body = '';
    };
  };


  angular
    .module('runReview')
    .controller('RaceCtrl', ['$stateParams', '$scope', 'Races', 'race', RaceCtrl]);

})();
