import { WalletPage } from './app.po';

describe('wallet App', () => {
  let page: WalletPage;

  beforeEach(() => {
    page = new WalletPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
