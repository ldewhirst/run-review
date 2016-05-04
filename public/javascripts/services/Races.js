(function() {
  function Races($http) {
      var o = {
        races : []
      };

      o.getRaces = function() {
        return $http.get('/raceindex').success(function(data){
          angular.copy(data, o.races);
        })
      };

      o.create = function(race) {
        return $http.post('/addrace', race).success(function(data){
          o.races.push(data);
        });
      };

      o.get = function(id) {
        return $http.get('/races/' + id).then(function(res){
          return res.data;
        });
      };

      o.addReview = function(id, review) {
      return $http.post('/races/' + id + '/reviews', review);
    };

    return o;

  };

  angular
    .module('runReview')
    .factory('Races', ['$http', Races]);
})();
