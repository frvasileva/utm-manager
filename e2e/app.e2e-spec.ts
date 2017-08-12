import { UtmAppPage } from './app.po';

describe('utm-app App', () => {
  let page: UtmAppPage;

  beforeEach(() => {
    page = new UtmAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
