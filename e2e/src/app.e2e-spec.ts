import { AppPage } from './app.po';

describe('AirVisual Frontend', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a sensible page', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('Configure');
  });
});
