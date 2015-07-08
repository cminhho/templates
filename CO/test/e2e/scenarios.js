/**
 * Created by hmchung2 on 5/14/15.
 */
describe('ClearOne App', function() {

  it('should redirect index.html to index.html#/clearone', function() {
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
      expect(url.split('#')[1]).toBe('/clearone');
    });
  });


  describe('Phone list view', function() {

    beforeEach(function() {
      browser.get('app/home');
    });


    it('should filter the phone list as a user types into the search box', function() {

      var deviceList = element.all(by.repeater('data in datas'));
      var query = element(by.model('query'));

      expect(deviceList.count()).toBe(20);

      query.sendKeys('nexus');
      expect(deviceList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(deviceList.count()).toBe(8);
    });

  });

});