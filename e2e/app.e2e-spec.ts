import { JamarSoftTIPage } from './app.po';

describe('jamar-soft-ti App', () => {
  let page: JamarSoftTIPage;

  beforeEach(() => {
    page = new JamarSoftTIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
