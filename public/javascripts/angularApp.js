(function() {
  function config($stateProvider, $locationProvider) {

    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/templates/home.html',
        controller: 'MainCtrl'
      })

      .state('addRace', {
        url: '/addRace',
        templateUrl: '/templates/addRace.html',
        controller: 'AddRaceCtrl'
      })

      .state('raceIndex', {
        url: '/raceIndex',
        templateUrl: '/templates/raceIndex.html',
        controller: 'BrowseCtrl',
        resolve: {
          racePromise: ['Races', function(races){
            return races.getRaces();
          }]
        }
      })

      .state('races', {
        url: '/races/:race',
        templateUrl: '/templates/races.html',
        controller: 'RaceCtrl',
        resolve: {
          race: ['$stateParams', 'Races', function($stateParams, races) {
            console.log($stateParams.race);
            return races.get($stateParams.race);
          }]
        }
      })

    .state('signin', {
      url: '/signin',
      templateUrl:'/login.html',
      controller: 'AuthCtrl',
//      onEnter: ['$state', 'auth', function($state, auth){
//        if(auth.isLoggedIn()){
//          $state.go('home');
//        }
//      }]
    })

    .state('register', {
      url: '/register',
      templateUrl: '/register.html',
      controller: 'AuthCtrl',
//      onEnter: ['state', 'auth', function($state, auth){
//        if(auth.isLoggedIn()) {
//          $state.go('home');
//        }
//      }]
    });

//    $urlRouterProvider.otherwise('home');
  };

  angular
    .module('runReview', ['ui.router', 'ui.bootstrap'])
    .config(config);
})();
