(function() {
  
  function MainCtrl($scope) {
        
    $scope.addRace = function() {
      if (!$scope.name || $scope.name === '') { return; }
      $scope.races.push({
        name: $scope.name, 
        distance: $scope.distance, 
        rating: $scope.rating
      });
      $scope.name = '';
      $scope.distance = '';
      $scope.rating = '';
    };
  }
  
  angular
    .module('runReview')
    .controller('MainCtrl', ['$scope', MainCtrl]);
  
})();