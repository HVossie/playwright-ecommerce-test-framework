import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async addBackpackToCart() {
    // This framework focuses on one stable product path so the cart tests stay
    // easy to read and maintain.
    await this.page.click('#add-to-cart-sauce-labs-backpack');
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }

  cartBadge() {
    // Returning a locator lets tests make their own assertions when needed.
    return this.page.locator('.shopping_cart_badge');
  }

  async verifyOnProductsPage() {
    // URL checks are a quick way to confirm login succeeded before continuing
    // with product actions.
    await expect(this.page).toHaveURL(/inventory/);
  }
}
