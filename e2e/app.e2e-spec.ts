import { MyClaimAppHerokuPage } from './app.po';

describe('my-claim-app-heroku App', function() {
  let page: MyClaimAppHerokuPage;

  beforeEach(() => {
    page = new MyClaimAppHerokuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
