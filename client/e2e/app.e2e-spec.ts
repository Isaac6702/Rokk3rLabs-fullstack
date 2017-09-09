import { ClientWebappPage } from './app.po';

describe('client App', () => {
  let page: ClientWebappPage;

  beforeEach(() => {
    page = new ClientWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
