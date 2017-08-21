(function() {
  'use strict';

  angular
    .module('gulpDemo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/modules/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).state('uigrid', {
        url: '/uigrid',
        templateUrl: 'app/modules/uigrid/uigrid.html',
        controller: 'UigridController',
        controllerAs: 'uigrid'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
