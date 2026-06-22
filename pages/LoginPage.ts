import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    // The page object owns navigation to the login screen so test files can
    // describe the workflow at a higher level.
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    // Grouping the login actions here keeps selectors out of the specs and
    // makes the authentication step reusable across multiple tests.
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }
}
