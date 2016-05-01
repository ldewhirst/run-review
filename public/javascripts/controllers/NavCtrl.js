(function() {
  function NavCtrl($scope, auth){
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.currentUser = Auth.currentUser;
    $scope.signOut = Auth.signOut;
    
  }
  angular
    .module('runReview')
    .controller('NavCtrl', ['$scope', 'auth', NavCtrl]);
})();