(function() {
  function Races($http) {
      var o = {
        races : []
      };

      o.getAll = function() {
        return $http.get('/races').success(function(data){
          angular.copy(data, o.races);
        })
      }

      o.create = function(race) {
        return $http.post('/races', race).success(function(data){
          o.races.push(data);
        });
      };

      o.get = function(id) {
        return $http.get('/races/' + id).then(function(res){
          return res.data;
        });
      };
    };
  
  angular
    .module('runReview')
    .factory('Races', ['$http', Races]);
})();