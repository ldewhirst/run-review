// (function() {
//   function Auth($http, $window) {
//     var auth = {};
//
//     return auth;
//
//     auth.saveToken = function (token){
//       $window.localStorage['run-review-token'] = token;
//     };
//
//     auth.getToken = function (){
//       return $window.localStorage['run-review-token'];
//     };
//
//     auth.isLoggedIn = function(){
//       var token = auth.getToken();
//
//       if(token){
//         var payload = JSON.parse($window.atob(token.split('.')[1]));
//
//         return payload.exp > Date.now() / 1000;
//       } else {
//         return false;
//       }
//     };
//
//     auth.currentUser = function(){
//       if(auth.isLoggedIn()){
//         var token = auth.getToken();
//         var payload = JSON.parse($window.atob(token.split('.')[1]));
//
//         return payload.username;
//       }
//     };
//
//     auth.signUp = function(user){
//       return $http.post('/signup', user).success(function(data){
//         auth.saveToken(data.token);
//       });
//     };
//
//     auth.signIn = function(user){
//       return $http.post('/signin', user).success(function(data){
//         auth.saveToken(data.token);
//       });
//     };
//
//     auth.signOut = function(){
//       $window.localStorage.removeItem('run-review-token');
//     };
//   }
//
//   angular
//     .module('runReview')
//     .factory('Auth', ['$http', '$window', Auth]);
// })();
