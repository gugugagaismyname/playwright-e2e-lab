// tests/about/about.test.js
import { test, expect } from '@playwright/test';

test('Перевірка заголовка About сторінки', async ({ page }) => {
  // Відкриваємо сторінку
  await page.goto('http://localhost:3000/about.html');

  // Перевіряємо, що заголовок H1 містить текст "Про нас"
  await expect(page.locator('h1')).toHaveText(/Про нас/);
});

test('Перевірка тега <title> About сторінки', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  await expect(page).toHaveTitle(/Про нас/);
});
