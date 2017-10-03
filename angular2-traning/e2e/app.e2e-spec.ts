import { Angular2TraningPage } from './app.po';

describe('angular2-traning App', function() {
  let page: Angular2TraningPage;

  beforeEach(() => {
    page = new Angular2TraningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
