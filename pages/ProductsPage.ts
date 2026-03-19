import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async addBackpackToCart() {
    await this.page.click('#add-to-cart-sauce-labs-backpack');
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }

  cartBadge() {
    return this.page.locator('.shopping_cart_badge');
  }

  async verifyOnProductsPage() {
    await expect(this.page).toHaveURL(/inventory/);
  }
}