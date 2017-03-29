import { FestivitiesCoreUiPage } from './app.po';

describe('festivities-core-ui App', function() {
  let page: FestivitiesCoreUiPage;

  beforeEach(() => {
    page = new FestivitiesCoreUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
