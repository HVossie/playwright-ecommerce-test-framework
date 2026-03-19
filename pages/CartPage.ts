import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  backpackItem() {
    return this.page.locator('.inventory_item_name', { hasText: 'Sauce Labs Backpack' });
  }

  async removeBackpack() {
    await this.page.click('#remove-sauce-labs-backpack');
  }

  async verifyBackpackInCart() {
    await expect(this.backpackItem()).toBeVisible();
  }

  async verifyCartIsEmpty() {
    await expect(this.backpackItem()).not.toBeVisible();
  }
}