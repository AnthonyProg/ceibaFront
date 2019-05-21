import { AppPage } from './app.po';
import { browser, logging, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Parqueadero Ceiba');
  });

  it('Debe retornar los vehículos parqueados', () => {
    browser.get('http://localhost:4200/parked');

    browser.isElementPresent(by.id('parked'));

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
