import { TutoAppPage } from './app.po';

describe('tuto-app App', function() {
  let page: TutoAppPage;

  beforeEach(() => {
    page = new TutoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
