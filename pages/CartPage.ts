import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  backpackItem() {
    // Reusing the same locator in multiple assertions keeps cart checks
    // consistent and reduces selector duplication.
    return this.page.locator('.inventory_item_name', { hasText: 'Sauce Labs Backpack' });
  }

  async removeBackpack() {
    await this.page.click('#remove-sauce-labs-backpack');
  }

  async verifyBackpackInCart() {
    // Encapsulating assertions in the page object keeps the spec focused on
    // the business flow instead of the page details.
    await expect(this.backpackItem()).toBeVisible();
  }

  async verifyCartIsEmpty() {
    // After removal, the item should no longer be visible in the cart.
    await expect(this.backpackItem()).not.toBeVisible();
  }
}
