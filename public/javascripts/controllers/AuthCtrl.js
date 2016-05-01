(function() {
  function AuthCtrl($scope, $state, auth) {
    $scope.user = {};
    
    $scope.signUp = function(){
      auth.signUp($scope.user).error(function(error){
        $scope.error = error;
      }).then(function(){
        $state.go('home');
      });
    };
    
    $scope.signIn = function(){
      auth.signIn($scope.user)/errpr(function(error){
        $scope.error = error;
      }).then(function(){
        $state.go('home');
      });
    };
  }
  
  angular
    .module('runReview')
    .controller('AuthCtrl', ['$scope', '$state', 'auth', AuthCtrl]);
})();