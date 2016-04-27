(function() {
  
  function MainCtrl($scope, races) {
    $scope.test = "Run Review";
    
    $scope.races = [
      {name: 'race 1', distance: 'marathon', rating: 3},
      {name: 'race 2', distance: 'half marathon', rating: 4},
      {name: 'race 3', distance: '10k', rating: 2},
      {name: 'race 4', distance: '5k', rating: 5},
      {name: 'race 5', distance: 'ultra', rating: 3.5}
    ];
    
    $scope.addRace = function(){
      if(!$scope.name || $scope.name === '') { return; }
      races.create({
        name: $scope.name,
        distance: $scope.distance,
        rating: 0
      });
      $scope.name = '';
      $scope.distance = '';
    };
    
    $scope.races = races.races;
    
  }
  
  angular
    .module('runReview')
    .controller('MainCtrl', ['$scope', '$http', 'races', MainCtrl]);
  
})();