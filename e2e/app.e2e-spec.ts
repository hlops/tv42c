import { Tv42cPage } from './app.po';

describe('tv42c App', () => {
  let page: Tv42cPage;

  beforeEach(() => {
    page = new Tv42cPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
