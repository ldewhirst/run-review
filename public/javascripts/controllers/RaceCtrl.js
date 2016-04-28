(function() {
  function RaceCtrl ($scope, Races) {
        
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