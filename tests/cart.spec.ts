import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('user can add an item to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.verifyOnProductsPage();
  await productsPage.addBackpackToCart();

  await productsPage.openCart();
  await cartPage.verifyBackpackInCart();
});

test('user can remove an item from cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.addBackpackToCart();
  await productsPage.openCart();

  await cartPage.verifyBackpackInCart();
  await cartPage.removeBackpack();
  await cartPage.verifyCartIsEmpty();
});