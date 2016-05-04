(function() {
  function RaceCtrl ($scope, Races) {

  $scope.races = Races.races;

  $scope.addNewRace = function() {
    if (!$scope.name || $scope.name === '') { return; }
    Races.create({
      name: $scope.name,
      distance: $scope.distance,
      rating: $scope.rating
    });
    $scope.name = '';
    $scope.distance = '';
    $scope.rating = '';
  };

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
    .controller('RaceCtrl', ['$scope', 'Races', RaceCtrl]);

})();
