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
          console.log(res.data);
          return res.data;
        });
      };

      o.addReview = function(race, review) {
        return $http.post('/races/' + race._id + '/reviews', review);
      };

    return o;

  };

  angular
    .module('runReview')
    .factory('Races', ['$http', Races]);
})();
