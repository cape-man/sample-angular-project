(function() {
  'use strict';

  angular
    .module('gulpDemo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state, MainService, $sce) {
    var vm = this;
    vm.mainSvc = MainService;
    vm.message = "http://www.koalastothemax.com/";
    vm.getPageDetails = function() {
      vm.mainSvc.getPageDetails().success(function(data) {
        vm.pageDetails = data;
      });
    };

    vm.setMessage = function(message) {
      vm.message = "";
      vm.message = message;
    };

    vm.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    };

    vm.init = function() {
      vm.getPageDetails();
    };

    vm.init();
  }
})();
