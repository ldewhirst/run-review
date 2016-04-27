(function() {
  function config($stateProvider, $locationProvider) {
    
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false  
    });
    
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/templates/landing.html',
        controller: 'MainCtrl',
        resolve: {
          racePromise: ['races', function(races){
            return races.getAll();
          }]
        }
      })
    
      .state('addRace', {
        url: '/addRace',
        templateUrl: '/templates/addRace.html',
        controller: 'RaceCtrl'
      })
    
      .state('raceIndex', {
        url: '/raceIndex',
        templateUrl: '/templates/raceIndex.html'
      })
    
      .state('races', {
        url: '/races/{id}',
        templateUrl: '/races.html',
        controller: 'RaceCtrl',
        resolve: {
          race: ['$stateParams', 'races', function($stateParams, races) {
            return races.get($stateParams.id);
          }]
        }
      });
    
    $urlRouterProvider.otherwise('home');
  };

  angular
    .module('runReview', ['ui.router'])
    .config(config);
})();