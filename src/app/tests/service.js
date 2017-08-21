(function() {
  'use strict';

  describe('service', function() {
    beforeEach(module('gulpDemo'));
    var service;
    var getPageDetailsUrl;
    var mockResponse = {
      title: 'this is a mocked response'
    };

    beforeEach(inject(function(_MainService_, $httpBackend) {
      service = _MainService_;
      getPageDetailsUrl = 'assets/data/pageDetails.json';

      $httpBackend.whenGET(getPageDetailsUrl).respond(mockResponse);
    }));

    it('should have getPageDetails function defined in it', function() {
      expect(service.getPageDetails).toBeDefined();
    });

    it('should have getPageDetails function return the mockResponse',
      function() {
        service.getPageDetails();
      });
  });
})();
