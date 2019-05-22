import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';
describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Parqueadero Ceiba');
  });

  it('Debe guardar el registro de un nuevo vehiculo parqueado', () => {
    browser.get('http://localhost:4200/registration');
    element(by.id('plate')).sendKeys('BBBBBB');
    element(by.id('type')).click();
    element(by.id('type')).sendKeys('MOTO');
    element(by.id('register')).submit();
    browser.sleep(1000);
  });  

  it('Debe retornar los vehículos parqueados', () => {
    browser.get('http://localhost:4200/parked');
    expect(element(by.id('parked')).all(by.css('tr')).isPresent());
  });

  it('Debe Dar salida al Vehiculo registrado', () => {
    browser.sleep(1000);
    browser.get('http://localhost:4200/registration')
    browser.sleep(1000);
    browser.get('http://localhost:4200/parked');
    element(by.id('checkout')).click();
    expect(element(by.id('parked')).all(by.css('tr')).count()).toEqual(0);     
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
