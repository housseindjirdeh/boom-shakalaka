import { BoomShakalakaPage } from './app.po';

describe('boom-shakalaka App', function() {
  let page: BoomShakalakaPage;

  beforeEach(() => {
    page = new BoomShakalakaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
