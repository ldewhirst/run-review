(function() {
  function AddRaceCtrl ($scope, Races) {

    $scope.races = Races.races;

    $scope.addNewRace = function() {
      if (!$scope.name || $scope.name === '') { return; }
      Races.create({
        name: $scope.name,
        distance: $scope.distance,
        location: $scope.location
      });
      $scope.name = '';
      $scope.distance = '';
      $scope.location = '';
    };
  };

  angular
    .module('runReview')
    .controller('AddRaceCtrl', ['$scope', 'Races', AddRaceCtrl]);

})();
