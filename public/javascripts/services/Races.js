(function() {
  function Races($http) {
      var o = {
        races : []
      };

      o.getAll = function() {
        return $http.get('/raceindex').success(function(data){
          angular.copy(data, o.races);
        })
      }

      o.create = function(race) {
        return $http.post('/races', race, {
          headers: {Authorization: 'Bearer '+auth.getToken()}
        }).success(function(data){
          o.races.push(data);
        });
      };

      o.get = function(id) {
        return $http.get('/races/' + id).then(function(res){
          return res.data;
        });
      };
    
    o.addReview = function(id, review) {
      return $http.post('/races/' + id + '/reviews', review, {
        headers: {Authorization: 'Bearer '+auth.getToken()}
      });
    };
    
    return o;
    
    
  };
  
  angular
    .module('runReview')
    .factory('Races', ['$http', Races]);
})();