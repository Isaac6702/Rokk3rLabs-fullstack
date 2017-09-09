import { browser, by, element } from 'protractor';

export class ClientWebappPage {
  navigateTo() {
    return browser.get('/');
  }
}
