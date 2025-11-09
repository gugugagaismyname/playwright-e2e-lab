// tests/screenshots/local.spec.js
import { test, expect } from '@playwright/test';

// Тест 1 — порівняння всієї сторінки
test('Перевірка змін сторінки за скриншотом', async ({ page }) => {
  await page.goto('http://localhost:3000');
  // Зберігаємо скриншот сторінки для порівняння
  expect(await page.screenshot()).toMatchSnapshot('screenshots/local-page/index-page.png');
});

// Тест 2 — порівняння окремого елемента (h1)
test('Порівняння скриншота елемента', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const element = await page.locator('h1');
  expect(await element.screenshot()).toMatchSnapshot('screenshots/local-page/index-page-element-h1.png');
});
