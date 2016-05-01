(function() {
  function BrowseCtrl ($scope, Races) {
    
    $scope.races = Races.races;
  }
  
  angular
    .module('runReview')
    .controller('BrowseCtrl', ['$scope', 'Races', BrowseCtrl]);

})();